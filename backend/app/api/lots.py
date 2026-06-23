from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List
from app.core.database import get_db
from app.models.user import User
from app.models.waste_lot import WasteLot
from app.api.auth import get_current_user
import random
import string

router = APIRouter()

@router.get("/dashboard")
def get_dashboard_data(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    org_id = current_user.organization_id
    role = current_user.role

    if role == "generator":
        lots_query = db.query(WasteLot).filter(WasteLot.generator_id == org_id)
        
        # Calculate KPIs
        total_weight = lots_query.with_entities(func.sum(WasteLot.weight_kg)).scalar() or 0
        active_lots = lots_query.filter(WasteLot.status != "Processed").count()
        
        # Get recent lots
        recent_lots = lots_query.order_by(WasteLot.created_at.desc()).limit(5).all()

        return {
            "kpis": {
                "totalWasteDiverted": total_weight / 1000, # tons
                "avgQualityScore": "94/100", # Mock for now
                "activeLots": active_lots,
                "eprValueGenerated": f"₹{(total_weight * 12.5):,.0f}" # Mock conversion
            },
            "recentLots": [
                {
                    "id": lot.lot_identifier,
                    "material": lot.material_category,
                    "weight": f"{lot.weight_kg:,.0f} kg",
                    "quality": lot.quality_grade,
                    "date": lot.created_at.strftime("%Y-%m-%d"),
                    "status": lot.status
                } for lot in recent_lots
            ]
        }
    
    elif role == "recycler":
        lots_query = db.query(WasteLot).filter(WasteLot.recycler_id == org_id)
        
        # Calculate KPIs
        total_inbound = lots_query.with_entities(func.sum(WasteLot.weight_kg)).scalar() or 0
        
        # Get inbound inventory
        inbound_lots = lots_query.filter(WasteLot.status != "Processed").order_by(WasteLot.created_at.desc()).limit(5).all()

        return {
            "kpis": {
                "inboundMaterial": total_inbound / 1000, # tons
                "processedThisMonth": (total_inbound * 0.8) / 1000, # mock logic
                "avgRecoveryRate": "88%",
                "contaminationRejects": "1.2%"
            },
            "inboundLots": [
                {
                    "id": lot.lot_identifier,
                    "source": lot.generator.name if lot.generator else "Unknown",
                    "material": lot.material_category,
                    "expectedWeight": f"{lot.weight_kg:,.0f} kg",
                    "expectedQuality": lot.quality_grade,
                    "status": lot.status
                } for lot in inbound_lots
            ]
        }
    
    else:
        return {"kpis": {}, "lots": []}

@router.post("/seed")
def seed_lots(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Temporary endpoint to generate mock data for the current user's organization."""
    if current_user.role not in ["generator", "recycler"]:
        raise HTTPException(status_code=400, detail="Only generators or recyclers can seed lots.")

    materials = ["PET Plastic", "Mixed Paper", "HDPE", "e-Waste", "Cardboard"]
    qualities = ["Grade A", "Grade B", "Grade C"]
    statuses = ["Verified", "Pending Pickup", "In Transit", "Arriving Today", "Processed"]

    org_id = current_user.organization_id

    for i in range(5):
        lot_id = "LOT-" + "".join(random.choices(string.digits, k=4))
        lot = WasteLot(
            lot_identifier=lot_id,
            generator_id=org_id if current_user.role == "generator" else None, # Simplified
            recycler_id=org_id if current_user.role == "recycler" else None,
            material_category=random.choice(materials),
            weight_kg=random.uniform(200.0, 2500.0),
            quality_grade=random.choice(qualities),
            status=random.choice(statuses)
        )
        db.add(lot)
    
    db.commit()
    return {"message": "5 lots seeded successfully!"}

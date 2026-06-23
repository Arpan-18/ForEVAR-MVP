from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from app.schemas.user import OrganizationResponse

class WasteLotBase(BaseModel):
    material_category: str
    weight_kg: float
    quality_grade: str
    status: str

class WasteLotCreate(WasteLotBase):
    lot_identifier: str
    recycler_id: Optional[int] = None

class WasteLotResponse(WasteLotBase):
    id: int
    lot_identifier: str
    generator_id: int
    recycler_id: Optional[int]
    created_at: datetime
    generator: Optional[OrganizationResponse] = None
    recycler: Optional[OrganizationResponse] = None

    class Config:
        from_attributes = True

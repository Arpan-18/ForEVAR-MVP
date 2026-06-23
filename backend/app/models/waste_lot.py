from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.core.database import Base

class WasteLot(Base):
    __tablename__ = "waste_lots"

    id = Column(Integer, primary_key=True, index=True)
    lot_identifier = Column(String, unique=True, index=True) # e.g. LOT-9281
    generator_id = Column(Integer, ForeignKey("organizations.id"))
    recycler_id = Column(Integer, ForeignKey("organizations.id"), nullable=True)
    
    material_category = Column(String)
    weight_kg = Column(Float)
    quality_grade = Column(String) # Grade A, Grade B
    status = Column(String) # Verified, Pending Pickup, In Transit
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    generator = relationship("Organization", foreign_keys=[generator_id])
    recycler = relationship("Organization", foreign_keys=[recycler_id])

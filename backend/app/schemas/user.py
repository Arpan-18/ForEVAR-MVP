from pydantic import BaseModel, EmailStr
from typing import Optional

class OrganizationBase(BaseModel):
    name: str
    type: str

class OrganizationCreate(OrganizationBase):
    pass

class OrganizationResponse(OrganizationBase):
    id: int
    verified: bool

    class Config:
        from_attributes = True

class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str

class UserCreate(UserBase):
    password: str
    organization_name: str
    organization_type: str
    role: str

class UserResponse(UserBase):
    id: int
    role: str
    is_active: bool
    organization: Optional[OrganizationResponse] = None

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

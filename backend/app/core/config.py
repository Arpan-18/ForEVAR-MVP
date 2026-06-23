import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "ForEVAR API"
    SECRET_KEY: str = "forevar_super_secret_dev_key_change_in_prod"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440 # 24 hours
    
    # Use SQLite by default if not provided
    DATABASE_URL: str = "sqlite:///./forevar.db"

    class Config:
        env_file = ".env"

settings = Settings()

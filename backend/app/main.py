from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, lots

app = FastAPI(
    title="ForEVAR API",
    description="Backend API for the ForEVAR Circular Economy Platform",
    version="1.0.0",
)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(lots.router, prefix="/api/v1/lots", tags=["lots"])

@app.get("/api/v1/health")
def health_check():
    return {"status": "success", "message": "ForEVAR API is running"}

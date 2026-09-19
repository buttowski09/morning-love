from fastapi import FastAPI

from .database import Base, engine
from .routes.memories import router as memories_router
from .routes.messages import router as messages_router

from . import models


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Morning Love API",
    description="Backend for the Morning Love app",
    version="1.0.0"
)


app.include_router(memories_router)
app.include_router(messages_router)


@app.get("/")
def root():
    return {
        "message": "Morning Love API is running ❤️"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
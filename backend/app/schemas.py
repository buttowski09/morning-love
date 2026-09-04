from datetime import datetime

from pydantic import BaseModel


class MemoryCreate(BaseModel):
    nickname: str | None = None
    favourite_food: str | None = None
    favourite_drink: str | None = None
    favourite_flower: str | None = None
    things_she_loves: str | None = None
    inside_jokes: str | None = None
    special_memories: str | None = None


class MemoryResponse(MemoryCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
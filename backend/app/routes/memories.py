from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Memory
from ..schemas import MemoryCreate, MemoryResponse

router = APIRouter(
    prefix="/memories",
    tags=["Memories"]
)


@router.post("/", response_model=MemoryResponse)
def save_memory(
    memory: MemoryCreate,
    db: Session = Depends(get_db)
):
    # Check whether a memory profile already exists
    existing_memory = db.query(Memory).first()

    if existing_memory:
        # Update the existing profile
        existing_memory.nickname = memory.nickname
        existing_memory.favourite_food = memory.favourite_food
        existing_memory.favourite_drink = memory.favourite_drink
        existing_memory.favourite_flower = memory.favourite_flower
        existing_memory.things_she_loves = memory.things_she_loves
        existing_memory.inside_jokes = memory.inside_jokes
        existing_memory.special_memories = memory.special_memories

        db.commit()
        db.refresh(existing_memory)

        return existing_memory

    # If no profile exists, create one
    new_memory = Memory(
        nickname=memory.nickname,
        favourite_food=memory.favourite_food,
        favourite_drink=memory.favourite_drink,
        favourite_flower=memory.favourite_flower,
        things_she_loves=memory.things_she_loves,
        inside_jokes=memory.inside_jokes,
        special_memories=memory.special_memories,
    )

    db.add(new_memory)
    db.commit()
    db.refresh(new_memory)

    return new_memory


@router.get("/", response_model=list[MemoryResponse])
def get_memories(
    db: Session = Depends(get_db)
):
    return db.query(Memory).all()
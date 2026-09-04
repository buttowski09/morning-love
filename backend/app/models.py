from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from .database import Base


class Memory(Base):
    __tablename__ = "memories"

    id = Column(Integer, primary_key=True, index=True)

    nickname = Column(String(100), nullable=True)

    favourite_food = Column(String(200), nullable=True)

    favourite_drink = Column(String(200), nullable=True)

    favourite_flower = Column(String(200), nullable=True)

    things_she_loves = Column(Text, nullable=True)

    inside_jokes = Column(Text, nullable=True)

    special_memories = Column(Text, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )
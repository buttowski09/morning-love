import os

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from google import genai

from ..database import get_db
from ..models import Memory

router = APIRouter(prefix="/messages", tags=["Messages"])


@router.post("/generate")
def generate_morning_message(db: Session = Depends(get_db)):
    # Get saved relationship memories
    memory = db.query(Memory).first()

    if not memory:
        raise HTTPException(
            status_code=404,
            detail="No memories found. Please save some memories first."
        )

    # Get Gemini API key
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY is not configured."
        )

    # Create Gemini client
    client = genai.Client(api_key=api_key)

    # Build personalised prompt
    prompt = f"""
Create one sweet, personal good-morning message for my girlfriend.

Use the following relationship memories:

Nickname:
{memory.nickname}

Favourite food:
{memory.favourite_food}

Favourite drink:
{memory.favourite_drink}

Favourite flower:
{memory.favourite_flower}

Things she loves:
{memory.things_she_loves}

Inside jokes:
{memory.inside_jokes}

Special memories:
{memory.special_memories}

Requirements:

- Write ONE message only.
- Make it feel genuinely personal.
- Be warm, affectionate and natural.
- Mention one or two relevant memories or details when appropriate.
- Do not invent facts that are not provided.
- Do not mention that you are an AI.
- Keep it relatively short.
- Make it sound like a boyfriend texting his girlfriend.
- Use a few emojis naturally.
- Do not make it overly formal or robotic.
- Do not provide multiple options.
- Return only the message itself.
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=prompt
        )

        message = response.text

        return {
            "message": message
        }

    except Exception as e:
        print("Gemini API error:", str(e))

        raise HTTPException(
            status_code=500,
            detail=f"Gemini API error: {str(e)}"
        )
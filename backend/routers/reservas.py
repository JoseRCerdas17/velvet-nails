from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.connection import get_db
from models.reserva import Reserva
from pydantic import BaseModel

router = APIRouter(prefix="/reservas", tags=["reservas"])

class ReservaCreate(BaseModel):
    nombre: str
    telefono: str
    email: str
    servicio: str
    precio: str
    fecha: str
    hora: str

class ReservaResponse(BaseModel):
    id: int
    nombre: str
    telefono: str
    email: str
    servicio: str
    precio: str
    fecha: str
    hora: str
    estado: str

    class Config:
        from_attributes = True

@router.post("/", response_model=ReservaResponse)
def crear_reserva(reserva: ReservaCreate, db: Session = Depends(get_db)):
    nueva_reserva = Reserva(**reserva.model_dump())
    db.add(nueva_reserva)
    db.commit()
    db.refresh(nueva_reserva)
    return nueva_reserva

@router.get("/")
def obtener_reservas(db: Session = Depends(get_db)):
    return db.query(Reserva).all()

@router.get("/{reserva_id}")
def obtener_reserva(reserva_id: int, db: Session = Depends(get_db)):
    reserva = db.query(Reserva).filter(Reserva.id == reserva_id).first()
    if not reserva:
        raise HTTPException(status_code=404, detail="Reserva no encontrada")
    return reserva

@router.delete("/{reserva_id}")
def cancelar_reserva(reserva_id: int, db: Session = Depends(get_db)):
    reserva = db.query(Reserva).filter(Reserva.id == reserva_id).first()
    if not reserva:
        raise HTTPException(status_code=404, detail="Reserva no encontrada")
    reserva.estado = "cancelada"
    db.commit()
    return {"message": "Reserva cancelada"}
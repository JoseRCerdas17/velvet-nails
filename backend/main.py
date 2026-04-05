from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.connection import engine, Base
from routers import reservas, auth

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Velvet Nails API",
    description="API para Velvet Nails Studio",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reservas.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Velvet Nails API funcionando"}
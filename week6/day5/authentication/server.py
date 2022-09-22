from fastapi import FastAPI
import uvicorn
from starlette.authentication import requires
from fastapi_auth_middleware import AuthMiddleware, FastAPIUser
import middleware
from typing import Union
from fastapi import Depends, FastAPI

app = FastAPI()
app.add_middleware(AuthMiddleware, verify_header = middleware.verify_authorization_header)


@app.get("/profile")
async def main():
    return {"name": "John Smith"}



async def common_parameters(q: Union[str, None] = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons

@app.get("/users")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests
import uvicorn 
from store import store

app = FastAPI()

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)

@app.get('/')
def root():
    return {"message":"Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message":"Hi there {}".format(name)}


@app.get('/img')
def root():
    return FileResponse('./static/img.jfif')


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

# ex1
@app.get('/sanity')
def print_sanity():
    return 'Server is up and running smoothly'

@app.get('/cat-img')
def root():
    return FileResponse('./static/cat.jpeg')

@app.get('/img-voice')
def root():
    return FileResponse('./static/mixkit-little-cat-pain-meow-87.wav')

#ex2
@app.get('/store/price')
def return_price(name):
    return ({'price': f'{find_item_price(name)}'})


def find_item_price(name):
    for item in store:
        if item["name"] == name:
            return item["price"]

#ex4
@app.get('/store/buy/')
def buy_item(name):
    for item in store:
        if item["name"] == name:
            item["inventory"] -= 1
            return item


@app.get('/store/sale')
def sale(admin):
    if admin == "true":
        update_sale_in_store()
    return store


def update_sale_in_store():
    for item in store:
        if item["inventory"] >= 10:
            item["price"] = item["price"]/2
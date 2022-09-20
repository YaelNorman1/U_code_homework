from fastapi import FastAPI
from fastapi import Request
import uvicorn

app = FastAPI()

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

id_counter=1

@app.get('/')
def root():
    return {"message":"Server is up and running"}


@app.get('/wonder/{id}')
async def return_wonder_by_id(id):
    for wonder in wonders:
        if wonder["ID"] == id:
            return wonder
    return ""


@app.post('/wonders',status_code=201)
async def create_wonder(request: Request):
    print("Someone's trying to make a post request")
    res = await request.json()
    print(res)
    update_DB(res)
    return "Created"


def update_DB(new_wonder):
    global wonders
    global id_counter
    id_counter +=1
    new_wonder["ID"]= id_counter
    wonders.append(new_wonder)
    print(wonders)


@app.delete('/wonders/{id}')
async def delete_wonder(id):
    for wonder in wonders:
        if wonder["ID"] == id:
            del wonders[wonder] 
            # wonders.remove(wonder)
            break
    print(wonders)



# @app.put('/wonders')



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

from urllib import response
from fastapi import FastAPI
from fastapi import Request
from fastapi import Response, status

app = FastAPI()

tasks = {"foo": "Listen to the Bar Fighters"}


@app.put("/get-or-create-task/{task_id}", status_code=200)
def get_or_create_task(task_id: str, response: Response):
    if task_id not in tasks:
        tasks[task_id] = "This didn't exist before"
        response.status_code = status.HTTP_201_CREATED
    return tasks[task_id]

import uvicorn

app = FastAPI()

word_counter = {"hi":1 }


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)


@app.get('/')
def root():
    return {"message":"Server is up and running"}


@app.get('/sanity')
def sanity():
    pass

# ex2
@app.get('/word-count/{word}')
def check_if_word_exists(word):
    if word_counter.get(word):
        return {'count' : word_counter.get(word) }
    else:
        return {'count' : 0 }

# ex3
@app.post('/word-count',status_code=201)
async def get_word(request: Request):
    res = await request.json()
    new_word = res["word"]
    add_word(new_word)
    return {'text': f'Added {new_word}', "currentCount": f'{word_counter[new_word]}' }


def add_word(word):
    if word in word_counter:
        word_counter[word] += 1
    else:
        word_counter[f'{word}'] = 1


# ex4
@app.post('/word-count/sentence',status_code=201)
async def split_word_in_sentence(request: Request):
    count_new = 0
    count_old = 0
    res = await request.json()
    sentence= res["sentence"].split()
    for word in sentence:
        new_word= ''.join(c.lower() for c in word if c.isalnum())
        add_word(new_word)
        if word_counter[new_word] > 1:
            count_old += 1
        else:
            count_new += 1
    return {"text": f'Added {count_new} words, {count_old} already existed'}


# ex5
@app.delete('/word-count/delete/{word}')
def delete_word(word, response: Response):
    if word in word_counter:
        del word_counter[word]
        response.status_code = status.HTTP_205_RESET_CONTENT
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        

@app.get('/word-count/popular')
def popular_word():
    max_word_count = {'word': "" , 'count': 0}
    for key in word_counter:
        if word_counter[key] > max_word_count["count"]:
            max_word_count['word'] = key
            max_word_count['count'] = word_counter[key]
            
    return {f'text : {max_word_count["word"]}, count : {max_word_count["count"]}'}


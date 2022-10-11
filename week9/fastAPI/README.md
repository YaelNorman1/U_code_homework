GET http://api.movieapp.com/movies

HTTP/1.1 200 OK

{
  {
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 30000 
    },
  {
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 30000
  }
}

POST http://api.movieapp.com/movies

{
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 30000 
}

HTTP/1.1 201 Created
Location: /movies/283

{
    "id":283
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 30000 
}

PUT http://api.movieapp.com/movies/283

{
    "id":283
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 50000 
}


HTTP/1.1 200 OK
{
    "id":283
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 50000 
}


PATCH http://api.movieapp.com/movies/283

{
    "budget": 50000 
}

HTTP/1.1 200 OK
{
    "id":283
    "title": "harry potter", 
    "plot": "Full-Stack Developer", 
    "poster": www...., 
    "budget": 50000 
}

DELETE http://api.movieapp.com/movies/283

HTTP/1.1 204 OK             //no content


--------------------------3---------------------------
GET http://api.movieapp.com/actors?movies=283


--------------------------4---------------------------

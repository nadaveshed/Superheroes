# Superhero Microservice

Welcome to the Superhero Microservice! This microservice is designed to manage superheroes and timers for S.H.I.E.L.D. operations.

## Features

- Add new superheroes to the database
- Retrieve information about superheroes by ID
- Set timers to trigger messages for superheroes
- Retrieve information about timers
- Horizontal scalability with Redis locking (optional)
- Error handling for invalid requests and database connectivity issues

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- (Optional) Redis for locking

## Installation

1. Clone the repository:
   
```
git clone <repository_url>
cd superhero-microservice
```

2. Install dependencies:
```
npm install
```

3. Set up MongoDB:
  - Make sure MongoDB is installed and running.
  - Update the MongoDB connection URL in server.js if necessary.

4. Start the server:
```
npm start
```


## Usage
### Superheroes Endpoints
- `POST /superheroes`: Add a new superhero to the database.
- `GET /superheroes`: Retrieve information about all the superheroes.
- `GET /superheroes/:id`: Retrieve information about a superhero by ID.
### Timers Endpoints
- `POST /timers`: Set a timer to trigger a message for a superhero.
- `GET /timers`: Retrieve information about all timers.
- `GET /timers/:id`: Retrieve information about a timer by ID.

## Examples
## Adding a Superhero
in postman or curl:
```
POST /superheroes
Content-Type: application/json

{
  "name": "Iron Man",
  "alias": "Tony Stark",
  "powers": ["Genius-level intellect", "Powered armor suit"],
  "additionalDetails": "Founder of Stark Industries"
}
```
## Setting a Timer
```
POST /timers
Content-Type: application/json

{
  "hours": 0,
  "minutes": 5,
  "seconds": 0,
  "message": "Emergency!",
  "url": "https://shieldhq.com/alerts",
  "superheroUUID": "ironman123"
}
```

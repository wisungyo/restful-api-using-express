This project was build using NodeJS, Express, and MongoDB.

## Available Scripts

In this project directory, you can run:

### `npm start`

Runs the app in the development mode. <br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Available API URL

In this project directory, you can use these API:

### GET `http://localhost:4000/`

This is the home page. Just warm you up on my app. Enjoy.

### GET `http://localhost:4000/posts`

This API gets all the data from the online database.

### POST `http://localhost:4000/posts`

This API post one data to the online database.

### GET `http://localhost:4000/posts/:id`

This API gets specific data by providing the id.

### DELETE `http://localhost:4000/posts/:id`

This API delete one data from the online database.

### PATCH `http://localhost:4000/posts/:id`

This API update one data from the online database. In order to use this API, you must use both "title" and "description" at the same time. Also you must provide the id that shows which data you are going to update or edit.


## Other Information

In project also already deployed in heroku by the time this repository was posted in Github. I don't know untill when the deployment will last. <br />
URL is this `sungyo.herokuapp.com`
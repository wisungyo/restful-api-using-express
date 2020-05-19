const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
require("dotenv/config");

// import routes
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

// routes
app.get("/", (req, res) => {
    res.send("Hi, Wisnu here. <br /> Welcome to my public API.");
});

// connect to mongodb
mongoose.set("useUnifiedTopology", true); // don't know what it is. just add this because mongo warns me to add this in the constructor.
mongoose.connect(
    process.env.DB_CONNECTION, // this is dotenv. in order to hide my user&pass
    { useNewUrlParser: true },
    () => console.log("Connected to DB!") 
);

// listen
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
const express = require("express");
const app = express();


app.use(allbook);
app.get("/books",(req,res) =>{
    console.log("Fetching all books");
})

function allbook(req,res,next){
    console.log("before fetching books");
    next();
}

app.listen(4040, () =>{
    console.log("Listening Port 4040");
});
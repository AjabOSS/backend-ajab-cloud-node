const express = require('express')
const app = require = express()



app.get('/', (req,res) => {
   res.json({"response":"Hello World!!"});
})

app.listen(8080, () => {
    console.log("server running on port 8080");
})


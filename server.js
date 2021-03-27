let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('public/index.html');
})

app.listen(8080, ()=>{
    console.log("Server is listening at the port 8080...");
})
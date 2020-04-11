const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static('Public'));

app.set('views', 'Views');
app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});
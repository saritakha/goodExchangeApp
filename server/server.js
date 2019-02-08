const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req,res) => {
    res.send({express: 'hello from express'});
})

app.post('/api/world', (req,res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
      );
})

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
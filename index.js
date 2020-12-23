const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let result = Number(n1 + n2);

    res.send(`The result of the calculation is ${result}`);
})

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
})

app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / height * height;

    res.send(`Your BMI is ${result}`);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});
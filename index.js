const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const flash = require('express-flash');
const pg = require('pg');
const Pool = pg.Pool;

const coffeeShop = require('./waiter-factory');



app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts',

});

app.use(flash());
app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(express.static('public'));

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://codexer:code123@localhost:5432/waiters';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});



const shedule = coffeeShop(pool);


app.get("/", async function(req, res){
    let user = req.params.name;
    let name = await shedule.waiterName(user);
    let hardCode = "Moipone";
    // console.log(name)
    res.render("index",
    {enteredName: name});
    
  });

  
app.post("/waiter",async function(req, res){
    let input = req.body.waiterName;
    let checkBoxes = req.body.days;
    console.log(req.body.days);
    
    res.redirect('/')
});

app.get("/waiters/:username",async function(req, res){
    let user = req.params.name;
    let name = await shedule.waiterName(user);
    console.log(name)
    res.render("days",
    {theName: name});

  });

app.post("/waiters/:username",async function(req, res){
    let input = req.params.waiterName;
    let checkBoxes = req.body.days;
    // console.log(input)
    await shedule.waiterName(input, checkBoxes);
    
    res.redirect('index')
});

const PORT = process.env.PORT || 3018;

app.listen(PORT, function () {
    console.log("App started:", PORT)
})
if (process.env.NODE_ENV !== 'production') {
    // require('dotenv').load();
    require('dotenv').config();
    // const dotenv = require('dotenv');
}
//const dotenv = require('dotenv');
// require('dotenv').config();
const express = require('express');
const app = express();
/*  express is the web framework we’re using to work with node.
    If you’re not fond of express for any reason, check out Koa. */

var server_port = process.env.SERVER_PORT || 3001;

const bcrypt = require('bcrypt');

const path = require('path');

// const flash = require('express-flash');
const flash = require('connect-flash');
/*  flash (AKA connect-flash) is a session-based middleware for displaying notifications to the user,
    like error messages and the like. */

const passport = require('passport');
/*  passport (which is the start component in this piece) is the authentication middleware.
    The benefit of using passport is that it’s modular — once you define a “Strategy”,
    you can re-use it across your app. */

const request = require('request');
/** request is used for making HTTP calls within the app. */

const session = require('express-session');
/*  session helps us manage everything session-related, including cookies. */

const bodyParser = require('body-parser');
/*  bodyparser is mainly for parsing json. */

// const expressLayouts = require('express-ejs-layouts');
// const methodOverride = require('method-override');
// const indexRouter = require('./routes/index');
// const authorRouter = require('./routes/authors');
// const initializePassport = require('./passport-config');
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// );
// const users = []

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
    extended: true
}));
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static(__dirname + '/public'));
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.set('view options', {
    layout: false
});


app.use(express.urlencoded({
    extended: false
}));

app.set('views', __dirname + '/src/views');

require('./src/routes/routes.js')(app);

// const {
//     Pool,
//     Client
// } = require('pg');

// const pool = new Pool({
//     user: process.env.PG_DB_USER,
//     password: process.env.PG_DB_PASS,
//     host: process.env.PG_DB_HOST,
//     port: process.env.PG_DB_PORT,
//     database: process.env.PG_DB_BASE
// });



// app.set('layout', 'layouts/layout');
// app.use(expressLayouts);
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     limit: '10mb',
//     extended: false
// }));
// app.use(flash());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride('_method'));

//const mongoose = require('mongoose');
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
//const db = mongoose.connection;
//db.on('error', error => console.error(error));
//db.once('open', () => console.log('Connected to Mongoose'));
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// });
// const client = new Client({
//     user: process.env.PG_DB_USER,
//     password: process.env.PG_DB_PASS,
//     host: process.env.PG_DB_HOST,
//     port: process.env.PG_DB_PORT,
//     database: process.env.PG_DB_BASE
// });
// client.connect();
// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res),
//     client.end()
// });

// .then(() => console.log("Connected successfuly"));
// .then(() => client.query("select * from \"hardware\" where \"vendor_name\" = $1", ["yealink"]));
// .then(results => console.table(results.rows));
// .catch(e => console.log("Error", e));
// .finally(() => client.end());

// app.use('/', indexRouter);
// app.use('/authors', authorRouter);


app.listen(server_port, () => console.log(`Server is listening on: \"http://localhost:${server_port}\/"`));
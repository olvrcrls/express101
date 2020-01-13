const app = require('express')();

function validateUser(req, res, next) {
    // Validating user from the database.
    res.locals.validated = true;
    console.log('Validated ran');
    next();
}

// This will run the validateUser in ALL paths, all methods
app.use(validateUser);

// This will run validateUser on /admin, all methods
app.use('/admin', validateUser);

// This will run validateUser on /, GET method.
app.get('/', validateUser);


app.get('/', (req, res, next) => {
    res.send("<h1>Main Page</h1>");
    console.log(res.locals.validated);
})

app.get('/admin', (req, res, next) => {
    res.send("<h1>Admin Page</h1>");
    console.log(res.locals.validated);
});

app.listen(3000);
console.log('Server listening to port 3000.');
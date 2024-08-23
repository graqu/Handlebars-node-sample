const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  expressHbs({
    layoytsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('index', { title: 'task4 - home' });
});
app.get('/users', (req, res, next) => {
  res.render('users', { title: 'all Users' });
});

app.use((req, res, next) => {
  res.render('404', { title: 'error 404' });
});

app.listen(3000);
//Loads the express module
const express = require('express');
const handlebars = require('express-handlebars');
//Creates our express server
const app = express();
const port = 3000;
//Serves static files (we need it to import a css file)
app.use(express.static('public'));
//Sets a basic route
app.get('/', (req, res) => res.send('TechBlog Running'));

app.engine(
  'hbs',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',

    //new configuration parameter
    partialsDir: __dirname + '/views/partials/',
  })
);
app.get('/', (req, res) => {
  //Using the index.hbs file instead of planB
  res.render('main', { layout: 'index' });
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

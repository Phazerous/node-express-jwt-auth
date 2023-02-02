const express = require('express');
const authRouter = require('./routes/authRoutes');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(authRouter);

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server has been started.');
  }
});

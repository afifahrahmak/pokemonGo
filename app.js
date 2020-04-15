const express = require("express")
const app = express()
const router = require('./routes')
const port = 3000;

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/', router);

app.get('/home', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log('app is running on port', port)
})
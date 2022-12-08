const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})




// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const port = 5000;
// const logger = require('./logger.js');
// const authorize = require('./authorize');
// // Va se lancer sur toutes les routes après /api (et le req.url ne sera que /items et /products)
// // app.use('/api', logger);
// app.use(morgan('tiny'));
// app.use(authorize);

// app.get('/', (req, res)=>{
//     res.send('Home');
//     console.log(req.user);  // req.user a été féfini dans le middleware
//                             // authorize et on peut pourtant y accèder
// });

// app.get('/about', (req, res)=>{
//     res.send('About');
// });

// app.get('/api/products', (req, res)=>{
//     res.send('Products');
// });

// app.get('/api/items', (req, res)=>{
//     res.send('Items');
// });



// app.listen(port, ()=>{
//     console.log(`Serveur à l'écoute sur le port ${port}`);
// })
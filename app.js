const express = require('express');
const app = express();
const port = 1744;

app.get('/', (req, res) => {
  res.send('<h1>ReverB API</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`ReverB api is up and listening to port: ${port}`);
})
 

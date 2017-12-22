const express = require('express');
const router = express.Router();
// const Product = require('../models/Product');
// const path = require('path');

// View all items
router.get('/items' , (req, res, next) => {
  Product.find()
  .then(results =>res.status(200).json(results))
  .reject (err => console.log(err));
});

// Get item
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then (product => {
     res.status(200).json(product);
   })
   .reject(err =>console.log(err));
});

module.exports = router;

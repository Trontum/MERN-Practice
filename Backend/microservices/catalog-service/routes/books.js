var express = require('express');
var router = express.Router();
let books=require("./books.json");


router.get('/list/all', function(req, res, next) {
  res.send({data:books});
});
router.get('/details/:title', function(req, res, next) {
  let book=books.find((book)=>book.title===req.params.title);
  if(book) res.send({data:book});
  else res.status(404).send({message:"Book with given title is not found. Please check the title."});
});
router.get('/list', function(req, res, next) {
  let bookList=books.filter((book)=>book.category===req.query.category);
  if(bookList.length>0)
      res.send({noOfBooksReturned:bookList.length, data:bookList});
  else res.status(404).send({message:"Books with given category are not found. Please check the category."});
});
router.post('/add', function(req, res, next) {
  books=[...books,req.body]
  res.status(201).send({message:"Book is added successfully"});
});
router.delete('/delete/:title', function(req, res, next) {
  let noOfBooks=books.length;
  books=books.filter((book)=>book.title!=req.params.title);
  if(books.length<noOfBooks)
      res.send({message:"Books is deleted successfully"});
  else res.status(404).send({message:"Books with given title is not found. Please check the title."});
});
router.put('/update/:title', function(req, res, next) {
  let book=books.find((book)=>book.title===req.params.title);
  books=books.filter((book)=>book.title!=req.params.title);
  book.price=req.query.price;
  books=[...books,book];
  if(book)
      res.send({message:"The price is updated successfully"});
  else res.status(404).send({message:"Book with given title is not found. Please check the title."});
});

module.exports = router;

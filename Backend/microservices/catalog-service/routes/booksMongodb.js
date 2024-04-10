var express = require('express');
var router = express.Router();
const api=require("../models/booksdb");
// let books=require("./books.json");

router.get('/list/all', function(req, res, next) {
    api.getAllBooks()
    .then(books=> res.send({data:books}))
    .catch(error=>res.status(500).send("Mongodb server error"+ error))
//   res.send({data:books});
    // res.send("mongodbbooks");
});
router.get('/details/:title', function(req, res, next) {
    api.getBookDetails(req.params.title)
    .then(books=> {
        if(books.length>0) res.send({data:books})
        else res.status(404).send("Book with given title not found");
    })
    .catch(error=>res.status(500).send("Mongodb server error"+ error));
//   let book=books.find((book)=>book.title===req.params.title);
//   if(book) res.send({data:book});
//   else res.status(404).send({message:"Book with given title is not found. Please check the title."});
});
router.get('/list', function(req, res, next) {
    api.getCategoryBooks(req.query.category)
    .then(books=> {
        if(books.length>0) res.send({data:books})
        else res.status(404).send("Book with given category are not found");
    })
    .catch(error=>res.status(500).send("Mongodb server error"+ error));
//   let bookList=books.filter((book)=>book.category===req.query.category);
//   if(bookList.length>0)
//       res.send({noOfBooksReturned:bookList.length, data:bookList});
//   else res.status(404).send({message:"Books with given category are not found. Please check the category."});
});
router.post('/add', function(req, res, next) {
    api.addBook(req.body)
    .then(insertStatus=> {
        if(insertStatus) res.send("Book added successfully");
        else res.status(404).send("Book adding is unsuccessful");
    })
    .catch(error=>res.status(500).send("Mongodb server error"+ error));
//   books=[...books,req.body]
//   res.status(201).send({message:"Book is added successfully"});
});
router.delete('/delete/:title', function(req, res, next) {
    api.deleteBook(req.params.title)
    .then(deletedCount=> {
        if(deletedCount) res.status(200).send("Book deleted successfully");
        else res.status(404).send("Book deleting is unsuccessful");
    })
    .catch(error=>res.status(500).send("Mongodb server error"+ error));
//   let noOfBooks=books.length;
//   books=books.filter((book)=>book.title!=req.params.title);
//   if(books.length<noOfBooks)
//       res.send({message:"Books is deleted successfully"});
//   else res.status(404).send({message:"Books with given title is not found. Please check the title."});
});
router.put('/update/:title', function(req, res, next) {
    api.updateBook(req.params.title,req.query.price)
    .then(updateStatus=> {
        if(updateStatus) res.status(200).send("Book updated successfully");
        else res.status(404).send("Book updating is unsuccessful");
    })
    .catch(error=>res.status(500).send("Mongodb server error"+ error));
//   let book=books.find((book)=>book.title===req.params.title);
//   books=books.filter((book)=>book.title!=req.params.title);
//   book.price=req.query.price;
//   books=[...books,book];
//   if(book)
//       res.send({message:"The price is updated successfully"});
//   else res.status(404).send({message:"Book with given title is not found. Please check the title."});
});

module.exports = router;

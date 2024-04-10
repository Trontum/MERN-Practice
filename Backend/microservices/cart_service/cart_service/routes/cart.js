var express = require('express');
var router = express.Router();
var amqp = require('amqplib/callback_api');

let cart=[];
/* GET users listing. */
// http://localhost:3003/cart/add/node.js in action
router.get('/add/:title', function(req, res, next) {
    cart.push(req.params.title)
    console.log(cart);
    res.send({message:'book added to the cart'});
});

// http://localhost:3003/cart/checkout
router.get('/checkout', function(req, res, next) {
    amqp.connect('amqps://ctuarhhu:WFPSdtHK4lJuCJ54ZlrCDTyrMSKDi6wk@puffin.rmq2.cloudamqp.com/ctuarhhu', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }   
            var queue = 'Eshwarcart'; 
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(cart.toString()));    
            console.log(" [x] Sent %s",cart);
            cart=[]
        });
        setTimeout(function() {
            connection.close();
            res.send({message:'books list is sent to the order service'});
        }, 500);
    });
   
});


module.exports = router;

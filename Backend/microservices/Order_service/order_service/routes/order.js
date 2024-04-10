var express = require('express');
var router = express.Router();
var amqp = require('amqplib/callback_api');

/* GET users listing. */
//http://localhost:3002/order/place
router.get('/place', function(req, res, next) {
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
            let books;
            channel.consume(queue, function(msg) {
                books=msg.content.toString()
                console.log(" [x] Received ", msg.content.toString());
            }, {
                noAck: true
            });
            setTimeout(function() {
                connection.close();
                let orderID=Math.floor(Math.random()*10000)
                res.send({message:"Order place with id "+orderID+" for "+books})
            }, 500) 
            
        });
    });
});

module.exports = router;

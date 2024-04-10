var amqp = require('amqplib/callback_api');

amqp.connect('amqps://ctuarhhu:WFPSdtHK4lJuCJ54ZlrCDTyrMSKDi6wk@puffin.rmq2.cloudamqp.com/ctuarhhu', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'Eshwar';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});
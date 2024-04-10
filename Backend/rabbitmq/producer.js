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
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
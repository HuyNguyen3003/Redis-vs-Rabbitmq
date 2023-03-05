

var amqp = require('amqplib/callback_api');


const sendQueue = async (namequeue, msg) => {
    try {
        amqp.connect('amqps://ucmgcaal:Kt-Ksr9w16A6XB9LpaPki5_0ML3b5JhV@armadillo.rmq.cloudamqp.com/ucmgcaal', function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }


                channel.assertQueue(namequeue, {
                    durable: false
                });

                channel.sendToQueue(namequeue, Buffer.from(msg)), {


                }

                console.log(" [x] Sent: %s", msg);
            });
            setTimeout(function () {
                connection.close();
                process.exit(0)
            }, 500);
        });

    } catch (error) {
        console.log(error)
    }
}

sendQueue("check", "send")
#!/usr/bin/env node

var amqp = require('amqplib/callback_api');


const getQueue = async (namequeue) => {
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
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", namequeue);
                channel.consume(namequeue, function (msg) {
                    console.log(" [x] Received:  %s", msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });


    } catch (error) {
        console.log(error)
    }
}

getQueue("check");
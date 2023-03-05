#!/usr/bin/env node

var amqp = require('amqplib/callback_api');


const getnameExchange = async (nameExchange) => {
    try {

        amqp.connect('amqps://ucmgcaal:Kt-Ksr9w16A6XB9LpaPki5_0ML3b5JhV@armadillo.rmq.cloudamqp.com/ucmgcaal', function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }


                channel.assertExchange(nameExchange, 'fanout', {
                    durable: false
                });

                const { queue } = channel.assertQueue('', {
                    exclusive: true
                })


                channel.bindQueue(queue, nameExchange, '')

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", nameExchange);
                channel.consume(queue, function (msg) {
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

getnameExchange("nameExchange");
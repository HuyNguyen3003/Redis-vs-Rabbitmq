require("dotenv").config()
const redis = require('redis');
const { createClient } = require('redis');



// const client = createClient(6379);

const client = redis.createClient({
    socket: {
        host: 'redis-15280.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: '15280'
    },
    password: 'c3G8Vjy42fy9VlNmQlnCBIpJ3iIJQ8Mh'
});





(async () => {
    await client.connect();
})();

client.on('ready', async () => {


    console.log('redis is connected');
})

client.on('error', (err) => {
    console.log(err);
})







module.exports = client


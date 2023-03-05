const client = require('../DB/init.redis')



const that = module.exports = {
    setPromise: async ({
        key, value
    }) => {
        try {
            await client.set(key, value, (err, rs) => {
                return !err ? resole(rs) : reject(err)
            })
            console.log("OK")
        } catch (e) {
            console.log(e)
        }
    },
    getPromise: async (key) => {
        try {
            const data = await client.get(key)
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    },

}
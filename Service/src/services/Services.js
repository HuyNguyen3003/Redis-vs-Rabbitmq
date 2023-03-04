const client = require('../DB/init.redis')



const that = module.exports = {
    setPromise: async ({
        key, value
    }) => {
        try {
            await client.set(key, value, (err, rs) => {
                return !err ? resole(rs) : reject(err)
            })
        } catch (e) {
            console.log(e)
        }
    },
    getPromise: async (key) => {
        try {
            const data = await client.get(key)
            return data
        } catch (e) {
            console.log(e)
        }
    },

}
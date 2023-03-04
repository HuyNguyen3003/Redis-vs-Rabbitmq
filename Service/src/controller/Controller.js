

const {
    setPromise, getPromise
} = require("../services/Services")

const that = module.exports = {
    setPromise: async (req, res, next) => {

        try {
            const {
                key, payload
            } = req.body

            const data = await setPromise({
                key,
                value: JSON.stringify(payload)
            })
            return res.json(data)


        } catch (e) {
            console.log(e);
            next(e);
        }

    },
    getPromise: async (req, res, next) => {

        try {
            const {
                key
            } = req.body

            const data = await getPromise(key)
            return res.json(data)
        } catch (e) {
            console.log(e);
            next(e);
        }

    },

}

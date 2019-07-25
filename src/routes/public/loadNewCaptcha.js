const Captcha = require('../../model/captcha');
const utility = require('../../lib/utility');
module.exports = {

    loadNew: async (req, res) => {
        try {
            Captcha.count().exec(async (err, count) => {
                utility.generateRandom(count).then(number => {
                    Captcha.findOne().skip(number).exec(async (err, result) => {
                        if (!err) {
                            return res.json({ error: false, payload: result });
                        } else {
                            return res.status(500).json({ error: true, message: err });
                        }
                    })
                })
            })
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    }
};
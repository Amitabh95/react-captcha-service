const Captcha = require('../../model/captcha');

module.exports = {
    addNew: async (req, res) => {
        let data = req.body;
        try {
            const newCaptcha = new Captcha({
                captchaURL: data.captchaURL,
                solved: {
                    success: 0,
                    fail: 0
                }
            });
            const successData = await newCaptcha.save();
            if (!successData) return res.status(500).json({ error: true, message: 'Unable add new captcha' });
            return res.json({ error: false, payload: successData });
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    }
};
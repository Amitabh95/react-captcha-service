const mongoose = require("mongoose");

const CaptchaSchema = new mongoose.Schema({
    captchaURL: {
        type: String,
        required: true
    },
    solved: {
        success: {
            type: Number
        },
        fail: {
            type: Number
        }
    },
    solution: {
        type: String
    }
});


CaptchaSchema.set("toJSON", { virtuals: true });
CaptchaSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Captcha", CaptchaSchema);
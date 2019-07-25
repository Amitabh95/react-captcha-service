const express = require('express')
const router = express.Router();

const addCaptcha = require('./add');
const loadNewCaptcha = require('./loadNewCaptcha');
const reloadCaptcha = require('./reloadCaptcha');

// Add New Captcha Route
router.post('/addnew', addCaptcha.addNew);

// Load New Captcha Route
router.get('/loadnew', loadNewCaptcha.loadNew);

// Reload Captcha Route
router.get('/reload', reloadCaptcha.reloadNew);

module.exports = router;
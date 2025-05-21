const express = require('express');

const router = express.Router();

router.get('/sigh-up-with-email', async (req, res) => {
    res.send('lets signup with email id');
    res.end();
});
router.get('/verify-email-otp', async (req, res) => {
    res.send('lets verify your email id with otp');
    res.end();
});
router.get('/sigh-in-with-email-password', async (req, res) => {
    res.send('lets verify your email id with otp');
    res.end();
});
router.get('/sent-email-otp', async (req, res) => {
    res.send('lets sent OTP to your email id');
    res.end();
});
router.get('/sigh-in-with-email-otp', async (req, res) => {
    res.send('lets verify your email id with otp');
    res.end();
});
module.exports = router;

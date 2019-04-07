const { Router } = require('express');
const apiRouter = require('./routers/apiRouter');
const router = Router();

router.use(apiRouter);

router.post('/api/subscriptions', (req, res) => {

    console.log(['api/event'], req.body);
    res.status(201);
    res.send();
});

module.exports = router;
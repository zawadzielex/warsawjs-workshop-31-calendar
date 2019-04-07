const { Router } = require('express');
const apiRouter = require('./routers/apiRouter');
const passport = require('passport');

const router = Router();

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth/github');
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login', successRedirect: '/' }),
);

router.use(apiRouter);

module.exports = router;
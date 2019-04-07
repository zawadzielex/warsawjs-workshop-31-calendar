const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/auth/github');
    }
});

module.exports = router;
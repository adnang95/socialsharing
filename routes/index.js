var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**FACEBOOK**/

router.get('/_oauth/facebook',
    passport.authenticate('facebook'));

router.get('/_oauth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/sharing', failureRedirect: '/' }));
    passport.authenticate('facebook', { scope: ['publish_actions'] } );
/**FACEBOOK**/

/**TWITTER**/
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/sharing',
  failureRedirect: '/'
}));
/**TWITTER**/

var passport = require('passport');
var LocalStratery = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStratery(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
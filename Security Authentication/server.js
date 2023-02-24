const fs = require('fs');
const path = require('path');
const https = require('https');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
require('dotenv').config();



const PORT = process.env.PORT || 8000;
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};
const app = express();

// protection
app.use(helmet());

// cookie session
app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2], 
}));
app.use(passport.initialize());
app.use(passport.session());

// google auth
passport.use(new Strategy({
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
}, (accessToken, refreshToken, profile, done) => {
    console.log('Google profile:', profile);
    done(null, profile);
}));

// save the session to the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// read the session from the cookie
passport.deserializeUser((id, done) => {
    done(null, id);
});

// check authorization
const checkLoggedIn = (req, res, next) => { // req.user
    console.log('Current user is:', req.user);
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!'
        });
    }
    next();
}


app.get('/auth/google', passport.authenticate('google', {
    scope: ['email'],
}), (req, res) => {});

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
}), (req, res) => {
    console.log('Google called us back.');
});

app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/secret', checkLoggedIn, (req, res) => {
    res.status(200).send('Secured value is 42');
});

app.get('/failure', (req, res) => {
    return res.send('Failed to log in.')
});


https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
}, app).listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
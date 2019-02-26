const express = require("express")
const PORT = process.env.PORT || 8080
const app = express()
const htmlRoutes = require("./routes/htmlRoutes")

var BnetStrategy = require('passport-bnet').Strategy;
var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET
 
// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: process.env.BNET_ID,
    clientSecret: process.env.BNET_SECRET,
    callbackURL: "https://localhost:3000/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

app.use(htmlRoutes)

app.listen(PORT, () => {
  console.log("Server is listening on PORT http://localhost:" + PORT)
})
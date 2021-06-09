const express = require("express");
app = express();
const FacebookStrategy= require("passport-facebook").Strategy;
const passport = require("passport");

const publi = '658479623159877';

const priv = 'b29817467d844a862ac98c1a27f22408';


app.listen(8000,() => {
    console.log("Você está online");
    });

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html"); 
    });

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/retorno',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


  passport.use(new FacebookStrategy({
    clientID: publi,
    clientSecret: priv,
    callbackURL: "http://localhost:8000/auth/facebook/retorno"
  },
  function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
      }
));
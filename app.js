const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "xx" }));
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
};

passport.use(
    new LocalStrategy((username, password, done) => {
        // ここで username と password を確認して結果を返す
        if (err) {
            return done(err);
        } else if (!user) {
            return done(null, false, {
                message: "ユーザーIDが正しくありません。",
            });
        } else if (!user.validPassword(password)) {
            return done(null, username, {
                message: "ユーザーIDが正しくありません。",
            });
        }
        return done(null, username);
    })
);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.get('/xx', isAuthenticated,(req, res) =>{
    // 認証済みの時に実行される
})

app.post(
    "/login",
    // passport.authenticate() には、post() で受け取った username と password が渡される
    passport.authenticate("local", {
        failureRedirect: "/xxx", // 失敗したときの遷移先
        // successRedirect: "/yyy",  成功して何も処理せずURL遷移させる時など
    }),
    (req, res) => {
        // 認証成功するとここが実行される
        res.redirect();
    }
);

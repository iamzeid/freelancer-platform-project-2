import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import dotenv from 'dotenv';


dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: "585920214596-569obj8as428plvlng91a6pepaohpa0a.apps.googleusercontent.com",
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )
);



passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;

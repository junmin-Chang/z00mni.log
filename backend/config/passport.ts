import * as mongoose from 'mongoose'
import {ExtractJwt, StrategyOptions} from "passport-jwt";
import {Strategy as JwtStrategy} from "passport-jwt";
import {keys} from "./keys";

const User = mongoose.model("users");



const opts: StrategyOptions = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport : any) => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload : any, done : any) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    )
}

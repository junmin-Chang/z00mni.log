import {ExtractJwt, JwtFromRequestFunction, StrategyOptions, VerifiedCallback} from "passport-jwt";
import {Strategy as JwtStrategy} from "passport-jwt";
import {keys} from "./keys";
import {User} from '../model/User'


const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport : any) => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload : any, done : VerifiedCallback) => {
            User.findById(jwt_payload.id)
                .then((user : any) => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err : any) => console.log(err));
        })
    )
}
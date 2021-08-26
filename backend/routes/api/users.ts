import express from 'express'
import jwt from 'jsonwebtoken'
import {keys} from '../../config/keys'
import bcrypt from 'bcrypt'
import validateRegisterInput from "../../validation/register";
import validateLoginInput from "../../validation/login";
import {User} from '../../model/User'
const router = express.Router();


router.post('/register', (req: express.Request,res: express.Response) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then((user : any) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err : any, salt: any) => {
                bcrypt.hash(newUser.password, salt, (err : any, hash : any) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user : any) => res.json(user))
                        .catch((err : any) => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req : express.Request,res : express.Response) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then((user : any) => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(password, user.password).then((isMatch : boolean) => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err : any, token : any) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        })
    })
})

module.exports = router;
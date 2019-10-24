import express from 'express';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import connection, { secretorkey } from '../conf';

const router = express.Router();

passport.use('local', new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: false,
}, (login, password, done) => {
  try {
    connection.query('select login, password from super_admin where login = ?', [login], (err, results) => {
      if (err) {
        return done(err, false); // error server
      }
      if (results.length === 0) {
        return done(null, false);
      }
      if (bcrypt.compareSync(password, results[0].password)) {
        const user = {
          login: results[0].login,
        };
        return done(null, user);
      }
      return done(null, false);
    });
  } catch (e) {
    console.error(e);
  }
}));

// Jason Web Token
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretorkey,
}, (jwtPayload, cb) => cb(null, jwtPayload)));

router.post('/signup', (req, res) => {
  const user = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  connection.query('INSERT INTO super_admin SET ?', user, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('/signin', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    if (!user) {
      return res.sendStatus(401);
    }
    const token = jwt.sign(user, secretorkey);
    return res.json({
      name: user.login,
      token,
    });
  })(req, res);
});

export default router;

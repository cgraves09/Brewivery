const User = require('../models/client');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
	passport.use(
		new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
			// Match user
			User.findOne({ email: email })
			.then( user => {
				if (!user) {
					return done(null, false, {message: 'That email is not registered'});
				}
				// Match password
				bcrypt.compare(password, user.password, (err, isMatched) => {
					if (err) throw err;

					if(isMatched) {
						console.log('matched')
						return done(null, user);
					} else {
						return done(null, false, {message: 'Password incorrect'})
					}
				});

			})
			.catch(err => console.log(err));
		})
	);
// called on login, saves the id to session req.session.passport.user = {id:'..'}
	passport.serializeUser((user, done) => {
		console.log('*** serializeUser called, user: ')
		console.log(user) // the whole raw user object!
		console.log('---------');
		done(null, { _id: user._id, firstNam: user.firstNam, lastNam: user.lastNam, phone: user.phone, email: user.email, cooler: user.cooler })
	})

	// user object attaches to the request as req.user
	passport.deserializeUser((id, done) => {
		console.log('DeserializeUser called')
		User.findOne(
			{ _id: id },
			'username',
			(err, user) => {
				console.log('*** Deserialize user, user:')
				console.log(user)
				console.log('--------------')
				done(null, user)
			}
		)
	})
}
const router = require("express").Router();
const passport = require('passport');
router.post('/', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: console.log('success'),
            failureRedirect: console.log('this doesnt')       
        })(req, res, next);
})
router.get('/', (req,res)=> {
    const {firstNam, lastNam, phone, email, cooler} = req.session.passport.user;
    console.log('Testing');
    console.log(cooler);
    res.json(req.session.passport.user);
    res.end();
})
module.exports = router;

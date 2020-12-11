const router = require('express').Router();

const middlewares = require('../middleware');
const apiFilmsRouter = require('./api/films');
const apiUsersRouter = require('./api/users')

router.use('/film', middlewares.checkToken, apiFilmsRouter);
router.use('/user',apiUsersRouter);

router.get('/', (req,res)=>{
    res.send('qui estoy')
})

module.exports = router;
/**eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSWQiOjEsImNyZWF0ZWRBdCI6MTYwNzcxODAwMCwiZXhwaXJlZEF0IjoiMjAyMC0xMi0xMVQyMDoyMDowMC40MDBaIn0.N7lbg4CP0c_lqSVeT3NWwqM54yHkVVGpmxIWEXm07LU */
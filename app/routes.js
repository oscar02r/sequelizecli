const router = require('express').Router();
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController'); 

router.get('/', (req, res)=>{
      res.status(200).json({foot:"bar"});
});

router.get('/api/users', UserController.all );
router.get('/api/addresses', AddressController.all);


module.exports = router;
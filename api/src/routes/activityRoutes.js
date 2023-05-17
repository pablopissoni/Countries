const {Router} = require('express');
const router = Router();
const { postActivity, getActivity} = require('../controllers/activity')


router.post('/', postActivity);


router.get('/', getActivity)


module.exports = router;
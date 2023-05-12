const {Router} = require('express');
const router = Router();
const { postActivity, getActivity} = require('../controllers/activity')


router.post('/', postActivity);
// router.post('/activities', postActivity);

router.get('/', getActivity)


module.exports = router;
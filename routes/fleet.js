const { Router } = require('express');
const { validateNip, validateCode } = require('../controllers/tokens');

const router = Router();


router.post('/validateNip', validateNip);
router.post('/validateCode', validateCode);

module.exports = router;
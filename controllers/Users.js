const express = require('express');
const router = express.Router();

const db = require('../models');

// router.get('/by/email', (req, res) => {
//   console.log('BODY', req.body)
//   db.User.findOne({
//     where: { email: req.body.email }
//   })
//     .then(user => {
//       if (user) {
//         res.status(200).send({ user });
//       }
//       else {
//         res.status(400).send({ err: 'User not found' });
//       }
//     })
//     .catch(err => {
//       res.status(401).send({ err: 'Undocumented err' });
//     });
// });

module.exports = router;
const express = require('express');
const router = express.Router();
const planetaSchema = require('../models/planeta.model');
const authorize = require('../../utils/middlewares/auth.middleware');
const { response } = require('express');

//Get All planets
router.route('/planetas').get(authorize, (req, res, next) => {
    planetaSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

module.exports = router;

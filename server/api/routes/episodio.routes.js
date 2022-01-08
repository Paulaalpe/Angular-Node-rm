const express = require("express");
const router = express.Router();
const episodioSchema = require("../models/episodio.model");
const authorize = require("../../utils/middlewares/auth.middleware");


// Get All Episodes
router.route('/episodios').get(authorize, (req, res, next) => {
    episodioSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// // Get Single Episode
// router.route('/episodio/:id').get(authorize, (req, res, next) => {
//     episodioSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

module.exports = router;
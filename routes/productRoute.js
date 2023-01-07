const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");
const path = require("path");
const multer = require("multer");

const protect = require("../middleware/authMiddleware");
router.post("/addproduct", addProduct);

// router.set("views", path.join(__dirname, "views"));
// router.set("view engine", "ejs");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   },
// });

// const maxSize = 1 * 1000 * 1000;

// var upload = multer({
//   storage: storage,
//   limits: { fileSize: maxSize },
//   fileFilter: function (req, file, cb) {
//     var filetypes = /jpeg|jpg|png/;
//     var mimetype = filetypes.test(file.mimetype);

//     var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//     if (mimetype && extname) {
//       return cb(null, true);
//     }

//     cb(
//       "Error: File upload only supports the " +
//         "following filetypes - " +
//         filetypes
//     );
//   },
// }).single("mypic");

// router.get("/", function (req, res) {
//   res.render("Signup");
// });

// router.post("/uploadProfilePicture", function (req, res, next) {
//   upload(req, res, function (err) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Success, Image uploaded!");
//     }
//   });
// });
module.exports = router;

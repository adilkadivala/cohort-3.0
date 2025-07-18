const express = require("express");
const router = express.Router();
const courses = require("../controllers/course");
const auth = require("../controllers/auth");
const adminauth = require("../admin/auth");
const admincourses = require("../admin/course");
const { userMiddleware } = require("../middleware/user");
const { adminMiddleware } = require("../middleware/admin");

// controllers

// course
router.route("/api/v1/getcourses").get(courses.getCourses);
router.route("/api/v1/purchasecourses").post(userMiddleware, courses.purchaseCourses);
router
  .route("/api/v1/showpurchasecourses")
  .get(userMiddleware, courses.showPurchaseCourses);

// auth
router.route("/api/v1/users/sign-in").post(auth.signIn);
router.route("/api/v1/users/sign-up").post(auth.signUp);
router.route("/api/v1/users/me").get(userMiddleware, auth.userDetail);

// admin //

// auth
router.route("/api/v1/admin/sign-in").post(adminauth.signIn);
router.route("/api/v1/admin/sign-up").post(adminauth.signUp);
router.route("/api/v1/admin/me").get(adminMiddleware, adminauth.adminDetail);

// course
router
  .route("/api/v1/admin/getcourses")
  .get(adminMiddleware, admincourses.getCourses);
router
  .route("/api/v1/createcourses")
  .post(adminMiddleware, admincourses.createCourses);
router
  .route("/api/v1/updatecourses")
  .put(adminMiddleware, admincourses.updateCourses);
router
  .route("/api/v1/deletecourses")
  .delete(adminMiddleware, admincourses.deleteCourses);

module.exports = router;

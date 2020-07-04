// Used to find the path of the index.html depending on where it's saved on someone's computer??
const path = require("path");

// Add express router and require apiRoutes -- what's the difference between this and the React router??
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

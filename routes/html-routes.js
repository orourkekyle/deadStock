const path = require('path');
const router = require('express').Router();
const apiRoutes = require('/api');

router.use('/api', apiRoutes)

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../deadstock/build/index.html"));
//   });


  if (process.env.Node_ENV === "production") {
    router.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../deadstock/build/index.html'))
    });
  }
// maybe set up profile authCheck and .get("/profile")



module.exports = router;
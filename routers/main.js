var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    res.render('main/index',{
        userInfo:req.userInfo
    })
    console.log(req.userInfo);
})
module.exports = router;
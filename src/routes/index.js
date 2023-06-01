const express=require('express')
const router=express.Router()

router.route('/').post()
//middleware,controller
router.route('/').get()

module.exports=router
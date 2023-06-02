const express=require('express')
const router=express.Router()
const {addItem,getItem, editItem, deleteItem} = require('../controllers/items')
const verifyToken = require('../middleware/verifyToken')

router.route('/addItems').post(verifyToken,addItem)

router.route('/items').get(verifyToken,getItem)

router.route('/updateItem').put(verifyToken,editItem)

router.route('/deleteItem').delete(verifyToken,deleteItem)

module.exports=router
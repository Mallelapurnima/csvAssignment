const express=require('express')
const router=express.Router()
const getAllCsv=require('../controllers/csv.controller')
//const  getCsv  = require('../models/csv.model')




router.get('/getAllCsv',getAllCsv.getAllCsvs)
//router.post('/getAllCsv', getCsv.getAllCsvs)



module.exports=router
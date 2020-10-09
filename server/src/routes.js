const express = require('express');
const router = express.Router();

// Views
const UserController      = require('./controllers/User.controller')
const CategoryController  = require('./controllers/Category.controller')

// Routes
router.post('/user'       , (req,res) => UserController.create(req,res) );
router.get('/user'        , (req,res) => UserController.store(req,res)  );
router.get('/user/:id'    , (req,res) => UserController.read(req,res)   );
router.put('/user/:id'    , (req,res) => UserController.update(req,res) );
router.delete('/user/:id' , (req,res) => UserController.delete(req,res) );

router.post('/category'       , (req,res) => CategoryController.create(req,res) );
router.get('/category'        , (req,res) => CategoryController.store(req,res)  );
router.get('/category/:id'    , (req,res) => CategoryController.read(req,res)   );
router.put('/category/:id'    , (req,res) => CategoryController.update(req,res) );
router.delete('/category/:id' , (req,res) => CategoryController.delete(req,res) );

module.exports = router
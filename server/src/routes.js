const express = require('express');
const router = express.Router();

// Views
const UserView      = require('./views/User.view')
const CategoryView  = require('./views/Category.view')

// Routes
router.post('/user'       , (req,res) => UserView.create(req,res) );
router.get('/user'        , (req,res) => UserView.store(req,res)  );
router.get('/user/:id'    , (req,res) => UserView.read(req,res)   );
router.put('/user/:id'    , (req,res) => UserView.update(req,res) );
router.delete('/user/:id' , (req,res) => UserView.delete(req,res) );

router.post('/category'       , (req,res) => CategoryView.create(req,res) );
router.get('/category'        , (req,res) => CategoryView.store(req,res)  );
router.get('/category/:id'    , (req,res) => CategoryView.read(req,res)   );
router.put('/category/:id'    , (req,res) => CategoryView.update(req,res) );
router.delete('/category/:id' , (req,res) => CategoryView.delete(req,res) );

module.exports = router
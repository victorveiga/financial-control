const Categoria = require('../models/category.model')
const Controller = require('./controller')

class CategoryController extends Controller {

    constructor(){
        super(Categoria)
    }

    store(req,res){ return super.store(req,res) }
    create(req, res){ return super.create(req, res) }
    read(req, res){ return super.read(req, res) }
    update(req, res){ return super.update(req, res) }
    delete(req, res){ return super.delete(req, res) }
}

module.exports = new CategoryController();
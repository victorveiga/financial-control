const User = require('../models/user.model')
const Controller = require('./controller')

class UserController extends Controller {

    constructor(){
        super(User)
    }

    store(req,res){ return super.store(req,res) }
    create(req, res){ return super.create(req, res) }
    read(req, res){ return super.read(req, res) }
    update(req, res){ return super.update(req, res) }
    delete(req, res){ return super.delete(req, res) }
}

module.exports = new UserController();
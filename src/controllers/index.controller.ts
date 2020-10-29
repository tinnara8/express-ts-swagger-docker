import { Controller, Get, Route } from 'tsoa';

// const db = require("../models");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

@Route('')
export class IndexController extends Controller {
    @Get('')
    public async index() {
        return { msg: 'Hello World!' };
    }

    @Get('/msg')
    public msg() {
        return { msg: 'This is a message' };
    }
}

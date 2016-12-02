import Router = require('koa-router')

export class PrinterRouter extends Router {
    constructor(args: any) {
        console.log(args)
        super(args)
        this.get('/', async(ctx: any) => {
            console.log('Here we are!')
            ctx.body = {message : "Well done!"};
        })
    }
}
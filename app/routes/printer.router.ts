import Router = require('koa-router')
import PrinterModel from "../models/printer.model"

export class PrinterRouter extends Router {
    constructor(args:any) {
        console.log(args)
        super(args)
        this.get('/jobs', async(ctx:any) => {
            console.log('Here we are!')
                .populate('jobs')
            // ctx.body = {respone: []}
            // let printers:any = await PrinterModel.find({});
            // for (let i = 0; i < printers.length; i++) {
            //     let printer:any = printers[i];
            //     ctx.body.respone[i].push({
            //         "name": printer.name
            //
            //     })
            //     for (let j = 0; j < printer.jobs.length; j++) {
            //         let job:any = printer.jobs[j];
            //     }
            // }
        })
    }
}
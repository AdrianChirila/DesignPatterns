import Router = require("koa-router");
import {APP_ROUTES} from "./app/utils/routes";
import {PrinterRouter} from "./app/routes/printer.router";
import {errorHandler} from "./app/routes/error.handler";
import {connectDatabase, databaseURL} from "./app/database/mongoose";
import {StepBuilder} from "./app/utils/build.step";
import {ResourceImporter} from "./app/utils/resource.importer";
import {JobBuilder} from "./app/utils/build.job";
import {PrinterBuilder} from "./app/utils/build.printer";
var cors: any = require('koa-cors');
var convert: any = require('koa-convert');
var bodyparser: any = require('koa-bodyparser');
const stepMock = require("./mock/step.json");
const jobMock = require("./mock/job.json");
const printMock = require("./mock/printer.json");

const Koa = require('koa');

class App {
    app: any;
    port: number = 3000;

    constructor() {
        this.app = new Koa();
        this.configMiddlewares();
        this.configRoutes()
    }

    private configMiddlewares() {
        this.app.use(bodyparser());
        this.app.use(convert(cors()));
        this.app.use(errorHandler());
    }

    private configRoutes() {
        console.log('Config Routes!')
        const printerRouter = new PrinterRouter({prefix: APP_ROUTES.PRINTERS_URL});
        this.app
            .use(printerRouter.routes())
            .use(printerRouter.allowedMethods());
    }

    async start() {
        await this.app.listen(this.port)
        await connectDatabase();
        await this.importResources();
        console.log(`Server started on port: ${this.port}`)
    }

    private async importResources() {
        for(let i = 0; i < stepMock.entry.length; i ++) {
            let stepImporter = new ResourceImporter(new StepBuilder(stepMock.entry[i]));
            await stepImporter.buildResource();
        }

        for(let i = 0; i < jobMock.entry.length; i ++) {
            let jobImporter = new ResourceImporter(new JobBuilder(jobMock.entry[i]));
            await jobImporter.buildResource();
        }

        for(let i = 0; i < printMock.entry.length; i ++) {
            let printerImporter = new ResourceImporter(new PrinterBuilder(printMock.entry[i]));
            await printerImporter.buildResource();
        }
    }
}
async function start() {
    try {
        await new App().start();
    } catch(error) {
        console.log('Cannot start app:', error)
    }
}

start()
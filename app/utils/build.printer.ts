import {ResourceBuilder} from "./resource.builder";
import PrinterModel from "../models/printer.model"
import JobModel from "../models/job.model"

export class PrinterBuilder extends ResourceBuilder {
    constructor(printerData: any) {
        super();
        this.document = printerData;
    }
    set() {
        this.model = PrinterModel;
    }

    async buildReference() {
         console.log('Build!');
        console.log(this.document);
        //assign jobs
        let jobsLen: Number = this.document.jobs.length;
        for(let i = 0; i < jobsLen; i ++) {
            let dbJob: any = await JobModel.findOne({identifier: this.document.jobs[i]})
            if (dbJob) {
                console.log("Found job in db!")
                this.document.jobs[i] = dbJob._id;
                continue
            }

            console.log(`Job ${this.document.jobs[i]} does not exist in db`);
            delete this.document.jobs[i];
            console.log('Print::', this.document);
        }
    }
}
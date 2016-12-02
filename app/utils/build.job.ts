import {ResourceBuilder} from "./resource.builder";
import JobModel from "../models/job.model"
import StepModel from "../models/step.model"

export class JobBuilder extends ResourceBuilder {
    constructor(jobData: any) {
        super();
        this.document = jobData;
    }

    set() {
        this.model = JobModel;
    }

    async buildReference() {
        //assign steps
        let nrOfSteps = this.document.steps.length
        for (let i = 0; i < nrOfSteps; i++) {
            let dbStep:any = await StepModel.findOne({identifier: this.document.steps[i]});
            if (dbStep) {
                console.log('Found step!!!!');
                this.document.steps[i] = dbStep._id;
                continue;
            }

            console.log(`Step ${this.document.steps[i]} does not exist in db`);
            delete this.document.steps[i];
        }
    }
}
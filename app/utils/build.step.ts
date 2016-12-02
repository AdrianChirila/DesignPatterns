/**
 * Created by Adrian on 12/2/2016.
 */
import {ResourceBuilder} from "./resource.builder";
import StepModel from "../models/step.model"
export class StepBuilder extends ResourceBuilder {
    constructor(stepData: any) {
        super();
        this.document = stepData;
    }

    public set() {
        this.model = StepModel;
    }
    public buildReference() {
        console.log('No reference to build')
    }
}

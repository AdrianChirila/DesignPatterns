import {mongo} from "mongoose"
import {Schema} from "./schema.name";
const MongooseSchema = mongo.Schema;

const jobSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
    },
    steps: [{
        type: mongo.Schema.Types.ObjectId,
        ref: Schema.Step
    }]
});

export default mongo.model(Schema.Job, jobSchema);
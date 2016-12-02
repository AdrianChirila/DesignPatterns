import {mongo} from "mongoose"
import {Schema} from "./schema.name";
const MongooseSchema = mongo.Schema;

const printerSchema = new MongooseSchema({
    name: {
        type: String,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    materials: [{
        type: String,
    }],
    jobs: [{
        type: mongo.Schema.Types.ObjectId,
        ref: Schema.Job
    }]
});

export default mongo.model(Schema.Printer, printerSchema);
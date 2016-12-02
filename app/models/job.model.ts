let mongoose = require('mongoose');
import {Schema} from "./schema.name";
const MongooseSchema = mongoose.Schema;

const jobSchema = new MongooseSchema({
    identifier: {
        type: Number,
        uniq: true
    },
    name: {
        type: String,
        required: true
    },
    steps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Schema.Step
    }]
});

export default mongoose.model(Schema.Job, jobSchema);
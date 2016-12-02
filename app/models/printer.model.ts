let mongoose = require('mongoose');
import {Schema} from "./schema.name";
const MongooseSchema = mongoose.Schema;

const printerSchema = new MongooseSchema({
    identifier: {
        type: Number,
        uniq: true
    },
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
        type: mongoose.Schema.Types.ObjectId,
        ref: Schema.Job
    }]
});

export default mongoose.model(Schema.Printer, printerSchema);
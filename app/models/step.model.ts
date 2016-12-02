import {mongo} from "mongoose"
const Schema = mongo.Schema;

const stepSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    material: {
        type: String,
        required: true
    }
});

export default mongo.model('Step', stepSchema);
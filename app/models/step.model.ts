let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema({
    identifier: {
        type: Number,
        uniq: true
    },
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

export default mongoose.model('Step', stepSchema);
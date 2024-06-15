import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    data: {
        type: String,
        requied : true
    },
    done:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const task = mongoose.model('task', TaskSchema);

export default task;
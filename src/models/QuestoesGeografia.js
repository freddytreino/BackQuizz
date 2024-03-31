const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionGeoSchema = new Schema({
    numero:{
        type:Number,
        required:true
    },
    question: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['fácil', 'médio', 'difícil'],
        required: true
    },

    alternatives: [{
        text: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        }
    }]
});

module.exports = mongoose.model("QuestionGeo", questionGeoSchema);

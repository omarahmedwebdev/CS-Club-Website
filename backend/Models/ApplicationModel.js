const mongoose = require("mongoose")

const ApplicationSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    ess1: {
        type: String,
        required: true
    },
    ess2: {
        type: String,
        required: true
    },
    ess3: {
        type: String,
        required: true
    },
    ai1: {
        type: String,
    },
    ai2: {
        type: String,
    },
    robo1: {
        type: String,
    },
    robo2: {
        type: String,
    },
    market1: {
        type: String,
    },
    market2: {
        type: String,
    },
    market3: {
        type: String,
    },
    hr1: {
        type: String,
    },
    hr2: {
        type: String,
    },
    hr3: {
        type: String,
    },
    ps1: {
        type: String,
    },
    ps2: {
        type: String,
    },
    ps3: {
        type: String,
    },
    ps4: {
        type: String,
    },
    
}, { timestamps: true })

module.exports = mongoose.model("Application", ApplicationSchema)
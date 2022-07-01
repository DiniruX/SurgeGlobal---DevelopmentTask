const mongoose = require('mongoose');

const IUser = new mongoose.Schema({

    userId: {
        type: Number,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    mobile: {
        type: Number,
        required: true
    },

    status: {
        type: Boolean,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    accountType: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Users", IUser);
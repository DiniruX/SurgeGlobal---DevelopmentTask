const { exists } = require('../Model/User');
const User = require('../Model/User');
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://admin:admin@mynotes.zeocl.mongodb.net/MyNotes?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {

        console.log("Database Connected Successfully...");
    })
    .catch((err) => {

        console.log("Database Connection Failed!!!", err);
    })

const admins = [
    new User({
        userId: "00023345",
        firstName: "John",
        lastName: "Samuel",
        email: "Jsam@mail.com",
        dateOfBirth: "09/12/1995",
        mobile: "0787656543",
        status: "false",
        password: "$2a$10$rUVkxmAyuQ7gbH6.ffWNJ.m5ofLGHDCGD4n64m8aoRyBtJAh/EkZm",
        accountType: "Admin",

    }),
    new User({
        userId: "00092387",
        firstName: "Mike",
        lastName: "Cooray",
        email: "mcooray@mail.com",
        dateOfBirth: "02/22/1992",
        mobile: "0776534782",
        status: "false",
        password: "$2a$10$41KPHN/lYexXinnOAELL6OmrxAHbhEFTSgvkKHaJPCowKmkhhPMKW",
        accountType: "Admin",

    }),
    new User({
        userId: "00032764",
        firstName: "Michel",
        lastName: "Stark",
        email: "mstark@mail.com",
        dateOfBirth: "12/23/1998",
        mobile: "0712328238",
        status: "false",
        password: "$2a$10$Fpe3lhBhJjpjt9AQqa9BWuSBIxaZTGO0B3C4ku2R2urQgFZV6rP4q",
        accountType: "Admin",

    })
];

var done = 0;
for (var i = 0; i < admins.length; i++) {
    admins[i].save(function () {
        done++;
        if (done === admins.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
    console.log("Database Disconnected Successfully...");
}
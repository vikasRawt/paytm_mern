const mongoose = require("mongoose");

const dbSchema = mongoose.Schema(
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 30
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        }},
  { timestamps: true }
));

// account schema ::--
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

const User = mongoose.model("user", dbSchema);

module.exports = {
  User,
  Account,
};


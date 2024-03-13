const { Schema, model } = require('mongoose');

const TokenSchema = Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

module.exports = model('Token', TokenSchema);
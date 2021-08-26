"use strict";
var mongoose = require('mongoose');
var postSchema = mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, required: true },
    tags: { type: [String] },
    html: { type: String, required: true }
});
module.exports = mongoose.model('Post', postSchema);
//# sourceMappingURL=postModel.js.map
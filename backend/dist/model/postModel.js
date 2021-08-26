"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, required: true },
    tags: { type: [String] },
    html: { type: String, required: true }
});
exports.Posts = mongoose.model('Post', postSchema);
//# sourceMappingURL=postModel.js.map
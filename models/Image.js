const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);

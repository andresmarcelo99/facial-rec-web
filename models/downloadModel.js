const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DownloadSchema = new Schema({
  qtyDownload: {
    type: Number,
  },
  downloads: [
    {
      client: {
        type: Schema.Types.ObjectId,
        ref: "clients",
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  ],
});

module.exports = downloadModel = mongoose.model("downloads", DownloadSchema);

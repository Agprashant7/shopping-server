const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    historyId: {
      type: String,
      require: true,
      index: true,
    },
    historyName: {
      type: String,
      require: true,
      trim: true,
      min: 4,
      max: 15,
    },
    historyItems: [
      {
        category: String,
        items: [
          {
            itemName: String,
            count: Number,
          },
        ],
      },
    ],
    status: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);
//For get fullName from when we get data from database
// historySchema.virtual("fullName").get(function () {
//     return `${this.firstName} ${this.lastName}`;
//   });
//   historySchema.method({
//     async authenticate(password) {
//        return await bcrypt.compare(password, this.hash_password);
//     },
//   });

module.exports = mongoose.model("History", historySchema);

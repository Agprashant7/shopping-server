const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    itemId: {
      type: String,
      require: true,
      index: true,
    },
    itemName: {
      type: String,
      require: true,
      trim: true,
      min: 4,
      max: 15,
    },
    category: {
      type: String,
      require: true,
    },
    imageLink: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
//For get fullName from when we get data from database
// itemSchema.virtual("fullName").get(function () {
//     return `${this.firstName} ${this.lastName}`;
//   });
//   itemSchema.method({
//     async authenticate(password) {
//        return await bcrypt.compare(password, this.hash_password);
//     },
//   });

module.exports = mongoose.model("Item", itemSchema);

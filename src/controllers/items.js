const { StatusCodes } = require("http-status-codes");
const Item = require("../models/itemModal");
const shortid = require("shortid");

const addItem = async (req, res) => {
  const { itemName, category, note, imageLink, userId } = req.body;
  console.log("BODY", req.body);
  const itemId = shortid();
  const data = { itemName, category, note, imageLink, userId ,itemId};
  const item = await Item.create(data)
    .then((data) => {
      res.status(StatusCodes.OK).json({ message: "Successfully Item Added" });
    })
    .catch((err) => {
      console.log("ERROR WHILE ADDING ITEMS", err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "ERROR WHILE ADDING ITEM",
        error: err,
      });
    });
};

const getItem = async (req, res) => {
  const item = await Item.find({ userId: req.body.userId })
    .then((data) => {
      res
        .status(StatusCodes.OK)
        .json({ message: "Successfully Fetched Items", data });
    })
    .catch((err) => {
      console.log("ERROR WHILE FETCHING ITEMS", err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "ERROR WHILE FETCHING ITEMS",
        error: err,
      });
    });
};

const editItem = async (req, res) => {
  var update = {
    $set: {
      itemName: req.body.itemName,
      category: req.body.category,
      note: req.body.note,
      imageLink: req.body.imageLink
    },
  };
 const item2 = await Item.find({ userId:req.body.userId,itemId: req.body.itemId })
  console.log(req.body.itemId)
  const item = await Item.updateOne({ userId:req.body.userId,itemId: req.body.itemId }, update)
    .then((data) => {
      res.status(StatusCodes.OK).json({ message: "Updated Succesfully", data });
    })
    .catch((err) => {
      console.log("ERROR WHILE UPDATING ITEM", err);
    });
};


const deleteItem = async (req, res) => {
  const item = await Item.deleteOne({ userId:req.body.userId,itemId: req.body.itemId})
    .then((data) => {
      res.status(StatusCodes.OK).json({ message: "DELEDTED ITEMS", data });
    })
    .catch((err) => {
      console.log("ERROR WHILE DELETING ITEMS", err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "ERROR WHILE DELETING ITEMS",
        error: err,
      });
    });
};

module.exports = { addItem, getItem,editItem,deleteItem };

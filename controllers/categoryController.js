const asyncHandler = require("express-async-handler");
const { findOne } = require("../models/itemModel");
const Category=require("../models/itemModel")

const addCategory = asyncHandler(async (req, res) => {
  const {
    category
  } = req.body;

  if (!category) {
    res.status(400);
    throw new Error("FILL ALL REQUIRE FEILDS");
  }

  //if category already exist
  const categoryExist = await Category.findOne({ category });
  if (categoryExist) {
    res.status(400);
    throw new Error("Category already exist");
  }

  //create new category
  const createdCategory = await Category.create({category});

  if (createdCategory) {
    const {category} = createdCategory;
    res.status(201).json({
      message: "Category Add successfully",
        category,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data");
  }
});

const getCategory= asyncHandler(async (req, res) => {
  let data = await Category.find({})
  res.status(201).json({ data });
});

module.exports = {
    addCategory,
    getCategory
};

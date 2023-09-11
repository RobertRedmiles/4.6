const Item = require("../models/itemModel");
const Category = require("../models/categoryModel");

exports.getAllItems = async (req, res) => {
    const result = await Item.findAll({ include: Category });
    res.json(result);
}

exports.getSingleItem = async (req, res) => {
    const result = await Item.findByPk({ include: Category });
    res.json(result);
}

exports.addNewItem = async (req, res) => {
    const result = await Item.create({ include: Category });
    res.json(result);
}


exports.editItem = async (req, res) => {
    const result = await Item.findByPk({ include: Category });
    res.json(result);
}

exports.deleteItem = async (req, res) => {
    const result = await Item.findByPk({ include: Category });
    res.json(result);
}
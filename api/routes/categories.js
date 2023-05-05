const router = require("express").Router();
const Category = require("../modals/Category");

router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => { //to get whole categories
    try {
      const cats = await Category.find(); //is modal
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
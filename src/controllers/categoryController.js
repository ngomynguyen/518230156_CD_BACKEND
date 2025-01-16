import CategoryModel from "../module/categoryModel.js";

export async function listCategory(req, res) {
  try {
    const categories = await CategoryModel.find()
    res.render("pages/categories/list", {
        title: "Categories",
        categories: categories, 
    })
  } catch (error) {
    console.log(error)
    res.send("hiện tại không có sản phẩm nào!")
  }
}


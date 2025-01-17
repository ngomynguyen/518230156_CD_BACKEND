import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
    code: String,
    name: String,
    image: String,
    createdAt: Date
},{
    versionKey: false,
    conllectione:"categories"
})
const CategoryModel = mongoose.model("Category", categorySchema)
export default CategoryModel
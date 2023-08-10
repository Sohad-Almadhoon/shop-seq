const Product = require("../models/productModel");
//1. add product

const postAddProduct = async (req, res) => {
  const { title, price, description, published = false } = req.body;
  const info = {
    title,
    price,
    description,
    published,
  };
  await Product.create(info);
  res.redirect("/products");
};

const getAddProduct = async (req, res) => {
  res.render("addProduct", {
    pageTitle: "Add Product",
    isEdit: false,
    product: [],
  });
};

//2. get all products

const getAllProducts = async (req, res) => {
  const products = await Product.findAll({});
  res.render("products", {
    pageTitle: "Products",
    orders: products,
  });
};

//3. get single product

const getOneProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ where: { id: productId } });
  res.render("productDetail", {
    pageTitle: "Product Detail",
    order: product,
  });
};

//4. update product
const getUpdateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ where: { id: productId } });
  res.render("addProduct", {
    pageTitle: "Edit Product",
    isEdit: true,
    product,
  });
};
const postUpdateProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId, "PRODUCT ID");
  req.body.published = req.body.published === "on" ? true : false;
  const product = await Product.update(req.body, { where: { id: productId } });
  console.log(product, "PRODUCT");
  res.redirect("/products");
}; 
// 5. delete product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  await Product.destroy({ where: { id: productId } });
  return res.redirect("/products");
};

//6. get published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.render("publishedProducts", {
    pageTitle: "Published Product",
    orders: products,
  });
};

module.exports = {
  postAddProduct,
  getAddProduct,
  getAllProducts,
  getOneProduct,
  postUpdateProduct,
  deleteProduct,
  getPublishedProduct,
  getUpdateProduct,
};

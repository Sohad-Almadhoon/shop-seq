const productController = require("../controller/productController");
const router = require("express").Router();

router.post("/addProduct", productController.postAddProduct);

router.get("/addProduct", productController.getAddProduct);
router.get("/", productController.getAllProducts);
router.get("/publishedProducts", productController.getPublishedProduct);
router.get("/:id", productController.getOneProduct);
router.get("/:id/edit", productController.getUpdateProduct);
router.post("/:id/edit", productController.postUpdateProduct);
router.get("/:id/delete", productController.deleteProduct);

module.exports = router;

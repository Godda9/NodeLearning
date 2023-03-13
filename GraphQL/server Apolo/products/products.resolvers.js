const productsModel = require('./products.model');


module.exports = {
    Query: {
        products: () => {
            console.log('Getting products...');
            return productsModel.getAllProducts();
        },

        productsByPrice: (_, args) => {
            console.log('Getting by price...');
            return productsModel.getProductsByPrice(args.min, args.max);
        },

        productById: (_, args) => {
            console.log('Getting by id...');
            return productsModel.getProductById(args.id);
        }
    },

    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },

        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.productId, args.comment);
        },
    },
}
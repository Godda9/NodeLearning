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
}
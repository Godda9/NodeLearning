const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 11.25,
        reviews: [],
    }, 
    {
        id: 'bluejacket',
        description: 'Blue Jacket',
        price: 99.31,
        reviews: [],
    },
];


const getAllProducts = () => {
    return products;
}

const getProductsByPrice = (min, max) => {
    return products.filter(item => {
        return item.price >= min && item.price <= max;
    });
}

const getProductById = (id) => {
    return products.find(item => item.id == id);
}

const addNewProduct = (id, description, price) => {
    const newProduct = {
        id: id,
        price: price,
        description: description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

const addNewProductReview = (productId, comment) => {
    const product = getProductById(productId);

    const review = {
        rating: 0,
        comment: comment,
    };

    product.reviews.push(review);
    return review;
}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
}
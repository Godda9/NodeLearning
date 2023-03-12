const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 11.25
    }, 
    {
        id: 'bluejacket',
        description: 'Blue Jacket',
        price: 99.31,
    }
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


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
}
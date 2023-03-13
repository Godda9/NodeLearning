const orders = [
    {
        date: '2004-04-08',
        subtotal: 88.80,
        items: {
            product: {
                id: 'bluejacket',
                description: 'OLD Blue Jacket',
                price: 199.31,
            },
            amount: 3,
        }
    }
];


const getAllOrders = () => {
    return orders;
}


module.exports = {
    getAllOrders,
}
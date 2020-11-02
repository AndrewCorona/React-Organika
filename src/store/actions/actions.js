//action: an arrow function that returns an object
//object contains a type (desc) of action, and payload (data)

export const incrementCartCounter = () => {
    return {
        type: "INCREMENT_COUNTER",
    };
};

export const addProductToCart = (product) => {
    return{
        type: 'ADD_PRODUCT',
        payload: product
    }
};
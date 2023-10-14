export const addToCart=(menu,quantity,varient)=>(dispatch,getState)=>{
    try{
        var cartItem={
            name:menu.name,
            _id:menu._id,
            img:menu.img,
            country:menu.country,
            varient:varient,
            quantity:Number(quantity),
            prices:menu.prices,
            price:menu.prices[0][varient]*quantity
        }
       
        if (cartItem.quantity>10)
        {
            alert('You cannot add more than 10 quantities')
        }
        else{
            if (cartItem.quantity<1)
            {
                dispatch({type:'DELETE_FROM_CART',payload:menu})
            }
            else{
                dispatch({type:'ADD_TO_CART',payload:cartItem})
            }
        }
        const cartItems=getState().addtoCartReducer.cartItems
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
    catch(error){
        console.log(error);
    }
}

export const deleteFromCart=(menu)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:menu})
    const cartItems=getState().addtoCartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
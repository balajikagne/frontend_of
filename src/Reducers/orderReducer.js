export const placeOrderReducer=(state={},action)=>{
    switch(action.type){
        case 'PLACE_ORDER_REQ':
            return{
                loading:true
            }
        case 'PLACE_ORDER_SUCCESS':
            return {
                loading:false,
                success:true
            }
        case 'PLACE_ORDER_FAILED':
            return{
                loading:false,
                error:action.payload
            }
        default:return state;
    }
}
export const getUserOrderReducer =(state={orders:[]},action)=>{
    switch(action.type){
        case "USER_ORDER_REQ":
            return {
                loading:true,
                ...state,
            }
        case "USER_ORDER_SUCCESS":
            return{
                loading:false,
                orders:action.payload,
            }
        case "USER_ORDER_FAILED":
            return {
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
}
export const allOrdersReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case 'ALL_ORDER_REQ':
            return{
                loading:true,
                ...state
            }
        case 'ALL_ORDER_SUCCESS':
            return {
                loading:false,
                success:true,
                orders:action.payload
                
            }
        case 'ALL_ORDER_FAILED':
            return{
                loading:false,
                error:action.payload
            }
        default:return state;
    }
}
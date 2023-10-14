export const getAllitemsReducer=(state={items:[]},action)=>{
    switch(action.type)
    {
        case 'GET_ITEMS_REQ':return{
            loading:true,
            ...state
        }
        case 'GET_ITEMS_SUCCESS':return{
            loading:false,
            items:action.payload
        }
        case 'GET_ITEMS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const AdditemsReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_ITEMS_REQ':return{
            loading:true,
            ...state
        }
        case 'ADD_ITEMS_SUCCESS':return{
            loading:false,
            success:action.payload
        }
        case 'ADD_ITEMS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getItemByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_ITEMBYID_REQ':return{
            loading:true,
            ...state
        }
        case 'GET_ITEMBYID_SUCCESS':return{
            loading:false,
            items:action.payload
        }
        case 'GET_ITEMBYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}
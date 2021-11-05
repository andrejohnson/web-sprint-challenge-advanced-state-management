import { FETCH_START,FETCH_SUCCESS,FETCH_FAIL,ADD_SMURFS,ERROR } from "../actions"


export const initialState = {
    smurfs:[],
    isLoading:false,
    error:''
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                isLoading:true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                isLoading:false,
                smurfs: action.payload
            })
        case (FETCH_FAIL):
            return({
                ...state,
                isLoading:false,
                error:action.payload
            })
        case(ADD_SMURFS):
            return({
                ...state,
                smurfs:[...state.smurfs,
                    action.payload]
            })    
        case(ERROR):
            return({
                ...state,
                error:action.payload
            })
        default:
            return state;
    }
}

export default reducer;
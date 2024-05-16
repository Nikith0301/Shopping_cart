import{createStore} from "redux"

const initialState={


    balance:120,
    fullName:"luffy",
    mobile:78831513
}

function accountReducer(state=initialState,action){


    switch(action.type){
        case "deposit":
          return  {...state,balance:state.balance+action.payload}

        case "withdraw":
            return {...state,balance:state.balance-action.payload}  
        case "mobileUpdate":
            return{...state,mobile:action.payload}
        case "nameUpdate":
            return{...state,fullName:action.payload}    
        default:
            return state    

    }
}



const bank=   createStore(accountReducer)

console.log(bank.getState())

bank.dispatch({type:"deposit",payload:4567})
bank.dispatch({type:"withdraw",payload:1000})
bank.dispatch({type:"mobileUpdate",payload:7032893967})
bank.dispatch({type:"nameUpdate",payload:"joyboy"})
console.log(bank.getState())

export default bank;
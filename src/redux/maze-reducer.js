import { stopSubmit } from "redux-form";
import { authAPI, usersAPI, rolesAPI } from "../api/api";

const COST_OPTIM_ROUTE_VALUE = "COST_OPTIM_ROUTE_VALUE";

let initialState = {
    
};

const costOptimRouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case COST_OPTIM_ROUTE_VALUE:
    // let { field,value}= action.payload;
        // console.log(action)
      return {
        ...state,
        // ...action.payload
        [action.payload.field]: action.payload.value
            
        // [field]: value
      };


    default:
      return state;
  }
};

export const getcostOptimRouteValue = ( field, value) => ({
  type: COST_OPTIM_ROUTE_VALUE,
    // payload: {[field]: value}
   payload: {
     field,
     value
   } 
});


// export const requestDrivers = (field2, value2) => {
//     return (dispatch) => {
//     // dispatch(ToggleIsFetching(true));
//           dispatch(getDriversSuccess(items));
//   }
// }

export default costOptimRouteReducer;

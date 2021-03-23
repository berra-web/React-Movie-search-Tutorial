import {
  Types
 } from './filmTypes'

const initialState = {
  searchType:null,
  year:null,
  title:"Pokemon"
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
  
      case Types.STORE_DATA:
      return {
        ...state,
      [action.payload.varName]:    action.payload.data,
      };

    
    default:
      return state;
  }
};

export default filmReducer;

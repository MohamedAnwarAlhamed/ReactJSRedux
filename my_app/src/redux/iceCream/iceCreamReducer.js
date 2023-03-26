import { BUY_ICECREAM } from "./actionTypes";

const initState = {
  numOfIceCreams: 15
};

const iceCreamReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;

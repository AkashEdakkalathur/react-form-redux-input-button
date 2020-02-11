import * as actionTypes from '../action/feedbackAction';
const initialState = {
    age:21,
    inputText:""
};

const reducer = (state = initialState, action)=>{


 switch (action.type) {
    case actionTypes.AGE_UP:
      return {
        ...state,
       ...state.age += action.value

      };
    case actionTypes.AGE_DOWN:
      return {
         ...state,
       ...state.age--

      };
      case actionTypes.ADD_TEXT:
      return {
         ...state,
       ...state.inputText += action.value

      };
    default:
      return state;
  }
   
}
export default reducer;
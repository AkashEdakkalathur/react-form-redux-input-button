import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from '../components/Input'


class FeedBackForm extends Component {
updateInputValue(evt) {
  this.props.onUpdateSearchValue(evt.target.value);
 
  }

  render() { 
    return (
     
      <div>
        <span>{this.props.age}</span><br/>
         <span>{this.props.inputText}</span><br/>
        <button onClick={this.props.onAgeup}>+</button>
        <button onClick={this.props.onAgedown}>-</button>
         
          <input
              className="searchBox"
              type="text"
              value={this.props.searchValue}
              onChange={evt => this.updateInputValue(evt)}
            />
            <div>{this.props.searchValue}</div>
      </div>
    );
  }
} 
 
const map_state_to_props = (state) =>{
  return{
    age:state.age,
    inputText:state.inputText
  }
}
const map_dispatch_to_props = (dispatch) =>{
return{
  onAgeup:() => dispatch({
    type:'AGE_UP',value:10
  }),
  onAgedown:() => dispatch({
    type:'AGE_DOWN'
  }),
  onUpdateSearchValue:(text) => dispatch({
    type:'ADD_TEXT',value:text
  })
};
}

export default connect(map_state_to_props,map_dispatch_to_props)(FeedBackForm);
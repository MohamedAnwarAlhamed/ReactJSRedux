import React from 'react'
import { connect } from 'react-redux'
import { buyCake, addCake } from '../redux/cake/cakeAction'

const CAKECONTAINER = (props) => {
  return (
    <div>
      <h2>No. Of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CAKECONTAINER)

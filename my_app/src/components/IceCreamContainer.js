import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
const ICECREAMCONTAINER = (props) => {
  return (
    <div>
      <h2>No. Of Ice-Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ICECREAMCONTAINER);

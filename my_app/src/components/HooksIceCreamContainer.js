import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";


const HOOKSICECREAMCONTAINER = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>No. Of Cakes - {numOfIceCream}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
      </div>
    </div>
  );
};

export default HOOKSICECREAMCONTAINER
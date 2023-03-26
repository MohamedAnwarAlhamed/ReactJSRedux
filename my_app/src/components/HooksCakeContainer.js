import { useSelector, useDispatch } from "react-redux";
import { buyCake, addCake } from "../redux/cake/cakeAction"; 

const HOOKSCAKECONTAINER = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>No. Of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        <button onClick={() => dispatch(addCake())}>Buy Cake</button>
      </div>
    </div>
  );
};

export default HOOKSCAKECONTAINER
import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Welcome = () => {
  const dispatch = useDispatch();
  const LoginHandler = () => {
    dispatch(authActions.Login());
  };

  return (
    <button className="welcome-btn" onClick={LoginHandler}>
      Login to redux Counter
    </button>
  );
};

export default Welcome;

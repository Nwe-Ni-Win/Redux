import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const NavBar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(authActions.Logout());
  };
  return (
    <nav>
      <h1>Redux Counter</h1>
      {isLogin && (
        <ul>
          <li>My Records</li>
          <li>Profile</li>
          <li>
            <button onClick={LogoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

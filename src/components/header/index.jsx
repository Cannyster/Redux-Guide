<<<<<<< HEAD
import { useReducer, useState } from "react";
=======
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00
import Cart from "../cart/index";
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "../../redux/user/actions";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

<<<<<<< HEAD
  const handleClickLogIn = () => {
    dispatch(
      logInUser({
        name: "jhonathan campos",
        email: "dionathancampos@hotmail.com",
      })
    );
  };

  const handleClickSLogOut = () => {
    dispatch(logOutUser());
=======
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
<<<<<<< HEAD
          <div onClick={handleClickSLogOut}>Sair</div>
        ) : (
          <div onClick={handleClickLogIn}>Login</div>
        )}
=======
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;

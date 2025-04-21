import { useState } from "react";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "../../redux/user/actions";
import { useMemo } from "react";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const productsCount = useMemo(() => {
    return products.reduce((acc, current) => acc + current.quantity, 0);
  }, [products]);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

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
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleClickSLogOut}>Sair</div>
        ) : (
          <div onClick={handleClickLogIn}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho {productsCount}</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;

import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectorCurrentUser } from "../../store/user/user.selector";

import {NavigationContainer, 
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './navigation.styles';

const Navigation = () => {
    const currentUser =  useSelector(selectorCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (
                    <NavLink to='/auth'>SIGN IN</NavLink>
                )}
                <CartIcon />
            </NavLinksContainer>
            { isCartOpen &&  <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  };
  
  export default Navigation;
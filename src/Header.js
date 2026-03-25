import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);
  return (
    <nav className="header">
      <Link to="/Header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" id="header__searchInput" />
        <SearchIcon id="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Jawid</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/cheackout" className="header__link">
          <div className="header__optionBashet">
            <ShoppingCartIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <img
        src="https://www.google.com/imgres?q=car%20advertisement&imgurl=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fhd_webp%2F40e9cd77967627.5c979a697c97b.png&imgrefurl=https%3A%2F%2Fwww.behance.net%2Fgallery%2F77967627%2FPeugeot-car-Creative-Ads%3Flocale%3Dcs_CZ&docid=tgfGJnnNDL4EUM&tbnid=Kh_07c9G8abhEM&vet=12ahUKEwjvpZzp3aaTAxVZhP0HHWCBI48QnPAOegQIHhAB..i&w=1200&h=800&hcb=2&ved=2ahUKEwjvpZzp3aaTAxVZhP0HHWCBI48QnPAOegQIHhAB"
        alt=""
      />
    </nav>
  );
}

export default Header;

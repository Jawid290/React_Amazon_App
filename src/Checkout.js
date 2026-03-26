import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://static.vecteezy.com/system/resources/thumbnails/001/225/154/small/black-low-poly-geometric-background.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>
              You hav no items in ypur basket. To buy one "Add to basket" next
              to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping Bestket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

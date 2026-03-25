import { width } from "@mui/system";
import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.moneycontrol.com/static-mcnews/2025/03/20250307084330_amazon-prime.jpg?impolicy=website&width=770&height=431"
        alt=""
      />

      <div className="home__row">
        <Product
          id="11122"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
        <Product
          id="22233"
          title="Mac: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={2440.99}
          rating={3}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNYHnRaMZhJaHzqgdCf3WmVUIwzrk4J8BSg&s"
        />
      </div>

      <div className="home__row">
        <Product
          id="3332221"
          title="Shoes: Get up to $195–$685 in credit yo13 or highe"
          price={250.55}
          rating={4}
          img="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/20702914/2023/2/8/76d17adb-b015-42d4-9eb0-6acf1105d2c01675845164998-ADIDAS-Men-Sports-Shoes-3141675845164707-1.jpg"
        />
        <Product
          id="444123"
          title="TV:  when you trade in iPhone 13 or highe"
          price={350.99}
          rating={5}
          img="https://www.sencor.com/Sencor/media/content/Products/SLE-55US800TCSB-2.jpg"
        />
        <Product
          id="555123"
          title="Chairs: You trade in iPhone 13 or highe"
          price={100}
          rating={4}
          img="https://m.media-amazon.com/images/I/71fNYP1Q1gL._AC_UF894,1000_QL80_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="666123"
          title="Car: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={70000}
          rating={5}
          img="https://media.architecturaldigest.com/photos/560c4205eb21ffb53156c362/master/pass/tesla-unveils-model-x-suv-01.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

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
          id="123456"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
        <Product
          id="123457"
          title="Mac: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNYHnRaMZhJaHzqgdCf3WmVUIwzrk4J8BSg&s"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
        <Product
          id="123456"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
        <Product
          id="123456"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="iPhone: Get up to $195–$685 in credit toward iPhone 17 when you trade in iPhone 13 or highe"
          price={1050.99}
          rating={4}
          img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
        />
      </div>
    </div>
  );
};

export default Home;

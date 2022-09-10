import React from "react";
import Product from "./Product";
import "./Home.css";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_Hero_2022/1x_Xbiz_march22_pc._CB627753471_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={uuidv4()}
            title={
              'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home'
            }
            price={599.99}
            image="https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SX679_.jpg"
            rating={4.5}
          />
          <Product
            id={uuidv4()}
            title="Wireless Mouse, Vssoplor 2.4G Slim Portable Computer Mice with Nano Receiver for Notebook, PC, Laptop, Computer-Black and Gold"
            price={7.93}
            image="https://m.media-amazon.com/images/I/51dsuumz6HL._AC_SY450_.jpg"
            rating={4.6}
          />
        </div>

        <div className="home__row">
          <Product
            id={uuidv4()}
            title={
              'KODAK PIXPRO Astro Zoom AZ421-BK 16MP Digital Camera with 42X Optical Zoom and 3" LCD Screen (Black)'
            }
            price={174.95}
            image="https://m.media-amazon.com/images/I/81bkjVJQeqS._AC_SY450_.jpg"
            rating={4.3}
          />
          <Product
            id={uuidv4()}
            title="Bang & Olufsen Beoplay HX – Comfortable Wireless ANC Over-Ear Headphones - Timber"
            price={499.0}
            image="https://m.media-amazon.com/images/I/71CWKJEE-VL._AC_SY606_.jpg"
            rating={4.3}
          />
          <Product
            id={uuidv4()}
            title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
            price={29.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SY450_.jpg"
            rating={4.7}
          />
        </div>

        <div className="home__row">
          <Product
            id={uuidv4()}
            title="SAMSUNG S65UA Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Curved, USB-C, HDR10 (1 Billion Colors), Height Adjustable Stand, TUV-Certified Intelligent Eye Care (LS34A654UXNXGO)"
            price={622.32}
            image="https://m.media-amazon.com/images/I/91nBS9XXyNL._AC_SX679_.jpg"
            rating={4.4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

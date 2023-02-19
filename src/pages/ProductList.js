import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products/")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  console.log("product", product);
  return (
    <div>
    <Navbar/>
      {product.length > 0 &&
        product.map((item, index) => {
          return (
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src={
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ||
                    item.photo
                  }
                />
              }
            >
              <Meta title={item.productName} description={item.description} />
            </Card>
          );
        })}
    </div>
  );
};

export default ProductList;

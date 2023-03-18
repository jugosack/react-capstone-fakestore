/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-duplicates
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [query, setQuery] = useState(' ');

  const renderList = products.filter((product) => product.category.toLowerCase().includes(query))
    .map((product) => {
      const {
        id, title, image, price, category,
      } = product;
      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">
                    $
                    {price}
                  </div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="inputfilter">
        <h1 className="filtertext">search by category</h1>
        <input className="filterbar" placeholder="woman, man, jewerly..." onChange={(e) => setQuery(e.target.value)} type="text" />
      </div>
      <br />
      {renderList}
    </>
  );
};

export default ProductComponent;

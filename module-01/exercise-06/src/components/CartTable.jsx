import React from "react";

function CartTable({ items }) {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="cart-row">
            <td>
              <img
                className="product-thumb"
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;

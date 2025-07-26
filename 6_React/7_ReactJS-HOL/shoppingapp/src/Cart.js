import React from 'react';

class Cart extends React.Component {
  render() {
    const { itemName, price } = this.props;
    return (
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "6px" }}>
        <h3>{itemName}</h3>
        <p>Price: ${price.toFixed(2)}</p>
      </div>
    );
  }
}

export default Cart;

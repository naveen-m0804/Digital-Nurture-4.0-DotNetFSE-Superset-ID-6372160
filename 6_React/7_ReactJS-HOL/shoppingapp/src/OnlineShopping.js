import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { itemName: 'Laptop', price: 1000 },
        { itemName: 'Smartphone', price: 600 },
        { itemName: 'Headphones', price: 150 },
        { itemName: 'Camera', price: 850 },
        { itemName: 'Smartwatch', price: 200 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        {this.state.cartItems.map((item, index) => (
          <Cart key={index} itemName={item.itemName} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;

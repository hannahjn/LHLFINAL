import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <main className="container">
      <Nav />;
      <ProductContainer />;
      <FavouriteContainer />;
       </main>
    );
  }
}

export default App;
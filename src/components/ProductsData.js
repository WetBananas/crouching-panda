import { Component } from "react";
import "./ProductsStyles.css";

class ProductsData extends Component {
  render() {
    console.log("Learn More Link:", this.props.learnMoreLink);
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          {this.props.learnMoreLink && (
            <a href={this.props.learnMoreLink}>Pre-Order Now!</a>
          )}
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
          {this.props.learnMoreLink && (
            <a href={this.props.learnMoreLink}>Pre-Order Now!</a>
          )}
        </div>
      </div>
    );
  }
}

export default ProductsData;

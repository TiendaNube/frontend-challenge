import React, { Component } from "react";
import { isEmpty, isUndefined, find } from "lodash/";

import { Grid } from "components/grid";
import { Dropzone } from "components/dropzone";
import { InputGroup, Editor, InputGroupCurrencyIcon } from "components/input";
import { Button } from "components/button";
import {
  addProductAction,
  updateProductAction,
  deleteProductAction
} from "store/actions/actionCreators";
import { connect } from "store/connect";

const emptyProduct = {
  images: [],
  name: "",
  description: "",
  promotionalPrice: "",
  price: "",
  stock: ""
};

class ProductForm extends Component {
  constructor(props) {
    super(props);
    const {
      products,
      match: {
        params: { id }
      }
    } = props;
    this.state = {
      inputValidation: {
        name: false,
        description: false,
        price: false,
        stock: false
      },
      product: find(products, { id }) || emptyProduct
    };
  }

  handleAddProduct = () => {
    const { product } = this.state;

    const { addProduct } = this.props;
    addProduct(product);
    this.backToListing();
  };

  handleUpdateProduct = () => {
    const { product } = this.state;
    const { updateProduct } = this.props;

    updateProduct(product);
    this.backToListing();
  };

  handleRemoveProduct = () => {
    const {
      product: { id }
    } = this.state;
    const { removeProduct } = this.props;
    removeProduct({ id });
    this.backToListing();
  };

  inputChange = e => {
    const { value, name } = e.target;
    this.onChange(name, value);
  };

  onChange = (name, value) => {
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value }
    }));
  };

  backToListing = () => {
    this.props.history.push("/products");
  };

  validateForm() {
    const state = this.state;
    let validate = true;

    for (var key in state.inputValidation) {
      if (state.inputValidation.hasOwnProperty(key)) {
        const invalid = isEmpty(state[key]) || state[key] === "<p></p>";

        state.inputValidation[key] = invalid;

        if (invalid) {
          validate = false;
        }
      }
    }

    this.setState(state);
    return validate;
  }

  get renderActionButtons() {
    const {
      product: { id }
    } = this.state;
    if (id) {
      return (
        <React.Fragment>
          <Button size="small" onClick={this.handleUpdateProduct}>
            SAVE UPDATES
          </Button>
          <Button
            size="small"
            type="danger"
            className="ml--lg"
            onClick={this.handleRemoveProduct}
          >
            REMOVE
          </Button>
          <Button
            size="small"
            onClick={this.backToListing}
            className="ml--lg"
            outline
          >
            CANCEL
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button size="small" onClick={this.handleAddProduct}>
            SAVE PRODUCT
          </Button>
          <Button size="small" className="ml--lg" outline>
            CANCEL
          </Button>
        </React.Fragment>
      );
    }
  }

  render() {
    const { product, inputValidation } = this.state;

    const {
      images,
      name,
      description,
      price,
      promotionalPrice,
      stock
    } = product;

    return (
      <div>
        <Grid transparent className="image--selection">
          <label>Fotos dos seus produtos</label>
          <div className="col-1-4">
            <Dropzone value={images[0]} index={0} onDrop={this.dropImage} />
          </div>
          <div className="col-1-4">
            <Dropzone value={images[1]} index={1} onDrop={this.dropImage} />
          </div>
          <div className="col-1-4">
            <Dropzone value={images[2]} index={2} onDrop={this.dropImage} />
          </div>
          <div className="col-1-4">
            <Dropzone value={images[3]} index={3} onDrop={this.dropImage} />
          </div>
        </Grid>

        <Grid block>
          <div>
            <InputGroup
              value={name}
              validate={inputValidation}
              onChange={this.inputChange}
              label="Name"
              name="name"
              placeholder="Ex: Chaveiro de plástico de Budha"
            />
            <Editor
              value={description}
              validate={inputValidation}
              onChange={this.onChange}
              label="Description"
              name="description"
            />
          </div>
        </Grid>

        <Grid block>
          <div className="col-1-4">
            <InputGroupCurrencyIcon
              validate={inputValidation}
              value={price}
              onChange={this.inputChange}
              name="price"
              label="Original Price"
              icon="$"
              placeholder="0,00"
            />
          </div>

          <div className="col-1-4">
            <InputGroupCurrencyIcon
              validate={inputValidation}
              value={promotionalPrice}
              onChange={this.inputChange}
              name="promotionalPrice"
              label="Promocional Price"
              icon="$"
              placeholder="0,00"
            />
          </div>

          <div className="col-1-4">
            <InputGroup
              validate={inputValidation}
              value={stock}
              onChange={this.inputChange}
              type="number"
              name="stock"
              label="Stock"
            />
          </div>
        </Grid>

        <Grid transparent nopadding className="mt--lg">
          {this.renderActionButtons}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ productStore: { products } }) => ({ products });

const mapDispatchToProps = dispatch => ({
  addProduct(product) {
    dispatch(addProductAction(product));
  },
  updateProduct(product) {
    dispatch(updateProductAction(product));
  },
  removeProduct(product) {
    dispatch(deleteProductAction(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";

import { Grid } from "components/grid";
import { Dropzone } from "components/dropzone";
import { InputGroup, Editor, InputGroupCurrencyIcon } from "components/input";
import { Button } from "components/button";
import {
  addProductAction,
  updateProductAction
} from "store/actions/actionCreators";
import { connect } from "store/connect";

class ProductForm extends Component {
  state = {
    inputValidation: {
      name: false,
      description: false,
      price: false,
      stock: false
    },
    images: [],
    name: "pelota",
    description: "<p>pelota cuadrada</p>",
    promotionalPrice: "10000.00",
    price: "100.00",
    stock: "100"
  };

  handleAddProduct = () => {
    const {
      images,
      name,
      description,
      promotionalPrice,
      price,
      stock
    } = this.state;
    const product = {
      images,
      name,
      description,
      promotionalPrice,
      price,
      stock
    };
    const { addProduct } = this.props;
    addProduct(product);
    this.setState({
      images: [],
      name: "",
      description: "",
      promotionalPrice: "",
      price: "",
      stock: ""
    });
  };

  handleUpdateProduct = () => {
    const {
      images,
      name,
      description,
      promotionalPrice,
      price,
      stock
    } = this.state;
    const { updateProduct } = this.props;

    updateProduct({
      images,
      name,
      description,
      promotionalPrice,
      price,
      stock
    });
  };

  handleRemoveProduct = () => {};

  inputChange = e => {
    const { value, name } = e.target;
    this.onChange(name, value);
  };

  onChange = (name, value) => {
    const state = this.state;
    state[name] = value;
    this.setState(state);
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
    const { id } = this.state;
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

  // componentDidMount() {
  //   const { params } = this.props.match;
  // }

  render() {
    console.log(this.props);
    const {
      id,
      description,
      name,
      price,
      stock,
      promotionalPrice,
      images,
      inputValidation
    } = this.state;

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

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  addProduct(product) {
    dispatch(addProductAction(product));
  },
  updateProduct(product) {
    dispatch(updateProductAction(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

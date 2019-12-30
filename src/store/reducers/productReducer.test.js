import productReducer from "./productReducer";
import {
  addProductAction,
  updateProductAction,
  deleteProductAction
} from "store/actions/actionCreators";

describe("product reducer", () => {
  const productJean = {
    id: 100,
    images: [],
    name: "Jean",
    description: "Black jean with decorator and slim fit",
    promotionalPrice: "800",
    price: "2000",
    stock: "100"
  };

  const productTshirt = {
    id: 100,
    images: [],
    name: "Shirt",
    description: "Black shirt with decorator and slim fit",
    promotionalPrice: "900",
    price: "2000",
    stock: "200"
  };

  it("should add a product", () => {
    const productoToChange = productReducer(
      undefined,
      addProductAction(productJean)
    );
    const expectationListWithAProduct = { products: [productJean] };

    expect(productoToChange).toEqual(expectationListWithAProduct);
  });

  it("should update product list", () => {
    const state = {
      products: [productJean]
    };
    const productUpdated = productTshirt;

    const productoToChange = productReducer(
      state,
      updateProductAction(productUpdated)
    );
    const expectationListWithAProductModified = { products: [productUpdated] };

    expect(productoToChange).toEqual(expectationListWithAProductModified);
  });

  it("should delete product in product list", () => {
    const productToDelete = { id: 100 };

    const expectationEmptyList = { products: [] };
    const productoToChange = productReducer(
      undefined,
      deleteProductAction(productToDelete)
    );

    expect(productoToChange).toEqual(expectationEmptyList);
  });
});

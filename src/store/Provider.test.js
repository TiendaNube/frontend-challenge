import React from "react";
import renderer from "react-test-renderer";
import Provider from "store/Provider";
import { reducers } from "store/reducers";

describe("Provider", () => {
  it("render correctly Provider", () => {
    const tree = renderer
      .create(
        <Provider reducer={reducers}>
          <></>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

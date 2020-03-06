import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Keypad component", () => {
  test("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

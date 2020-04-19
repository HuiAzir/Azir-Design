import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button, { ButtonProps } from "./button";

const defaultProps: ButtonProps = {
  onClick: jest.fn()
};
const LinkProps: ButtonProps = {
  type: "link",
  href: "#"
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

const testProps: ButtonProps = {
  htmlType: "submit",
  type: "primary",
  size: "lg",
  className: "testClass"
};

describe("Button组件测试", () => {
  it("使用默认参数时能够正确渲染", () => {
    const wrapper = render(<Button {...defaultProps}>Default</Button>);
    const element = wrapper.getByText("Default") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("azir-btn azir-btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toBeCalled();
  });
  it("传入参数时能够正确渲染", () => {
    const wrapper = render(<Button {...testProps}>Test</Button>);
    const element = wrapper.getByText("Test");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element.getAttribute("type")).toEqual("submit");
    expect(element).toHaveClass(
      "azir-btn azir-btn-primary azir-btn-lg testClass"
    );
  });
  it("当Button为Link链接时能够正确渲染", () => {
    const wrapper = render(<Button {...LinkProps}>Link</Button>);
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element.getAttribute("href")).toBeTruthy();
    expect(element).toHaveClass("azir-btn azir-btn-link");
  });
  it("当Button组件为禁用状态时能够正确渲染", () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>);
    const element = wrapper.getByText("Disabled");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toBeCalled();
  });
});

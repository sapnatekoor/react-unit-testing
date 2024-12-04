import { fireEvent, render,screen } from "@testing-library/react"
import TestingFunctionlComponent from "./TestingFunctionlComponent"
import { checkOutsideFunction } from "../helper"

test("I am testing functional component", ()=>{
render(<TestingFunctionlComponent/>)
    const button = screen.getByTestId("btn1")
    fireEvent.click(button);
    expect(screen.getByText("value")).toBeInTheDocument()
})


test("I am testing outSideFunction", ()=>{
    expect(checkOutsideFunction()).toMatch("hii")
})
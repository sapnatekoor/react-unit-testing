import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole"

test(" I am testing button presence", ()=>{
    render(<GetByRole/>)
    const button1 = screen.getByRole("button", {name: "Click Me 1"})
    const button2 = screen.getByRole("button", {name: "Click Me 2"})
    const input1 = screen.getByRole("textbox", {name:"Name"})
    const input2 = screen.getByRole("textbox", {name:"Age"})


    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()

})
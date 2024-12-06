import { render, screen } from "@testing-library/react"
import GetAllByRole from "./GetAllByRole"

test("Checking getAllByRole", ()=>{
    render(<GetAllByRole/>)

    const button = screen.getAllByRole("button");
for(let i =0; i < button.length; i++){
    expect(button).toBeInTheDocument()
}

})
import userEvent from "@testing-library/user-event"
import UserEventOnChange from "./UserEventOnChange"
import { screen } from "@testing-library/react"

test("Testing onchange event of react library", ()=>{
    userEvent.setup()
    render(<UserEventOnChange/>)
    const textBox = screen.getByRole("textbox")
    userEvent.type(textBox, "Sapna")
    expect(screen.getByText("Sapna")).toBeInTheDocument()
} )
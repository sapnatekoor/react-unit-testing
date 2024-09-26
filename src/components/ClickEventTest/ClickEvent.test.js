import { fireEvent, render, screen } from "@testing-library/react";
import ClickEventTest from "./ClickEventTest";


test("Test the onClick event" , ()=>{
    render(<ClickEventTest/>)

    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Button is clicked")).toBeInTheDocument()

})
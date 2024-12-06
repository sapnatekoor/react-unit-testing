import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import UserEventClick from "./UserEventClick"

test("I am testing click event with user testing library", async()=>{
    userEvent.setup()
    render(<UserEventClick/>)
    const btn = screen.getByRole("button");

    await userEvent.click(btn)
    expect(screen.getByText("Hello")).toBeInTheDocument()
})
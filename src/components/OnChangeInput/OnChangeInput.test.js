import { fireEvent, render, screen } from "@testing-library/react";
import OnChangeInput from "./OnChangeInput";

test("To test input change", ()=>{
    render(<OnChangeInput/>)
    const input = screen.getByRole("textbox")

    fireEvent.change(input,{target: {value : "a"}})
    expect(input.value).toBe("a")
})
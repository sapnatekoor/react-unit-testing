import { fireEvent, render, screen } from "@testing-library/react";
import AfterBeforeHooks from "./AfterBeforeHooks";


// beforeEach(()=>{
//     console.log("I m getting called before each test case")
// })

// beforeAll(()=>{
//     console.log("I m getting called before all test case")
// })

test("Test case1", ()=>{
    render(<AfterBeforeHooks/>)
    console.log("Test case 1")
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Hello World")).toBeInTheDocument()
})

test("Test case2", ()=>{
    render(<AfterBeforeHooks/>)
    console.log("Test case 2")

    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Hello World")).toBeInTheDocument()
})

// afterAll(()=>{
//     console.log("I m getting called after all test case")
// })

// afterEach(()=>{
//     console.log("I m getting called after each test case")
// })
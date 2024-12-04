import {render, screen} from "@testing-library/react";
import App from "./App";


// test('Testing app component contents', () => { 
//   render(<App/>)
//   const text = screen.getByText(/First unit Test Case/i)
// const title = screen.getByTitle("AI generated image")
//   expect(text).toBeInTheDocument()
//   expect(title).toBeInTheDocument()
//  })
 

test("Testing input box in app component", () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox")

  expect(inputBox).toBeInTheDocument();
  // expect(inputBox).toHaveAttribute("id", "name");
  // expect(inputBox).toHaveAttribute("value", "Sapna");
  // expect(inputBox).toHaveAttribute("placeholder", "Enter your name");
  // expect(inputBox).toHaveAttribute("type", "text");
});


//  describe("This group is for UI testing" , () =>{
//   test("Group1", ()=>{
//     render(<App/>)
//     const inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("type" , "text")
//     expect(inputBox).toHaveAttribute('placeholder', "Enter your name")
//   })



//  })


//  describe("This group is for API testing" , () =>{
//   test("Group2", ()=>{
//     render(<App/>)
//     const inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("type" , "text")
//     expect(inputBox).toHaveAttribute('placeholder', "Enter your name")
//   })



//  })
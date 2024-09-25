import {render, screen} from "@testing-library/react";
import App from "./App";


test('Testing app component contents', () => { 
  render(<App/>)
  const text = screen.getByText(/First unit Test Case/i)
const title = screen.getByTitle("AI generated image")
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
 })
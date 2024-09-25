import { sum } from "./Sum";

test("Function to find sum of 2 numbers", ()=>{
    let a = 10 ;
    let b = 30;

    expect(sum(a,b)).toBe(40)
})
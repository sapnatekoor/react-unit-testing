import renderer from "react-test-renderer"
import TestingClassComponent from "./TestingClassComponent"

test("I am testing", ()=>{
    const componentData = renderer.create(<TestingClassComponent/>).getInstance();
    expect(componentData.getUserList()).toMatch('I am testing class')
})
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Newsletter from "../NewsLetter/Newsletter";

// beforeEach(() => {

//   render (<Newsletter/>);

// });

test("input shuld be intaily",()=>{
    // 1) Rendering the component we want to test
    render (<Newsletter/>);
    const emailInput =screen.getByRole('textbox')
    expect(emailInput.value).toBe("")
 
})

test("submit Button",()=>{
  render (<Newsletter/>);
  const submitButton= screen.getByRole("button",{
    name : /submit/i,
  })
  userEvent.click(submitButton)
})





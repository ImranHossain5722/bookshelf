import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Newsletter from "../NewsLetter/Newsletter";

test("input shuld be intaily",()=>{
    // 1) Rendering the component we want to test
    render(<Newsletter/>)
    const emailInput =screen.getByRole('textbox')
    expect(emailInput.value).toBe("")
 
})

// test("input shuld be intaily text",()=>{
//     // 1) Rendering the component we want to test
//     render(<Newsletter/>)
//     const textInput =screen.getByRole('textbox')
//     expect(textInput.value).toBe("")
// })

test("should be able to type an email", () => {
    render(<Newsletter />);
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  userEvent.type(emailInput, "imran4@gmail.com");
  expect(emailInput.value).toBe("imran4@gmail.com"); 

});

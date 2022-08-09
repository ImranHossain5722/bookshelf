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

test("should show email error message on invalid email",()=>{

  render(<Newsletter/>)
  const emailErrorElement =screen.queryByText(/the email you input id invalid/i)
  
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const submitBtn =screen.getByRole("button",{
    name:/submit/i
  })

  expect(emailErrorElement).not.toBeInTheDocument()
 
  userEvent.type(emailInput,"imran.com")
 

 userEvent.click(submitBtn)
 expect(emailErrorElement).toBeInTheDocument()
});
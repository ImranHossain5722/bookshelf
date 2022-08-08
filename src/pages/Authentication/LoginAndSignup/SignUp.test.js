import{render,screen} from "@testing-library/react"
import SignUp from "../LoginAndSignup/SignUp"


test("description",()=>{
    // 1) Rendering the component we want to test
    render(<SignUp/>)
    
    //2)Finding the elements
// const AnyName =screen.getByAltText(/Your Name is Required/i)

    //3) Assertion 
// expect(AnyName).toBeInTheDocument()

})
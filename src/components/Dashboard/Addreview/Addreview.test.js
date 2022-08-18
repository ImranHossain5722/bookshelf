import store from "../../Redux/Store/Store";
import { Provider } from "react-redux";
import { render as rtlRender, screen } from "@testing-library/react";
import Addreview from "./Addreview";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {Switch,  Route} from "react-router-dom"



const render = (components) => rtlRender(
  
<Provider store={store}>
    
    {components}

</Provider>

);

describe("add review", () => {
 
  it("addreview route",()=>{
    // 1) Rendering the component we want to test
const history =createMemoryHistory('/')
        render(

           <Router history={history} >
                <Switch>.
                    <Route exact path='/' components={Addreview}></Route>
                </Switch>
           </Router>
        )

 
})
//   it("input shuld be intaily",()=>{
//     // 1) Rendering the component we want to test
//     render(<Addreview />);
//     const review =screen.getByLabelText(/textarea/i);

//     userEvent.type(review, 'Nice a review')
 
// })

});

import React from "react"
import { render } from "@testing-library/react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import NavBar from "./NavBar"

describe('navlist',()=>{

    it('when nave in mobile view dewer is open',()=>{

        render(<NavBar children={jest.fn()} />)
    })
})
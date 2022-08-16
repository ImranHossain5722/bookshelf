import {getDefaultNormalizer, render,screen} from "@testing-library/react"
import Login  from './Login'

    describe('login',()=>{


        test("input shuld be intaily",()=>{
            // 1) Rendering the component we want to test
            render (<Login />)
    const text='email@getDefaultNormalizer.com'

        expect(Login(text)).toBe('true')
           
         
        });
    

    })

    





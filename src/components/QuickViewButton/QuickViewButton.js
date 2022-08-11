import axios from 'axios'
import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { quickView } from '../Redux/actions/bookActions'

const QuickViewButton = ({_id}) => {
  const dispatch = useDispatch()
    const AddView = (id) => {
        console.log(id)
        if(id){
          axios
          .get(`https://book-shelf-webapp.herokuapp.com/get-book?id=${_id}`).then(data => dispatch(quickView((data.data))))
        }
    } 
  return (
    <label for="quick-view" className=" hover:text-primary duration-500 a">
    <FaRegEye onClick={() => AddView(_id)} /> 
  </label>
  )
}

export default QuickViewButton
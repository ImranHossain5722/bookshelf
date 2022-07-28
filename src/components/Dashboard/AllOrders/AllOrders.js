import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders } from '../../Redux/actions/bookActions'
const AllOrders = () => {
  const orders = useSelector((state) => console.log(state))
const dispatch = useDispatch()
  useEffect(() => {
    fetch('data.json')
            .then(res => res.json())
            .then(data => dispatch(allOrders(data)));
  }, [])
  
  return (
    <div>AllOrders</div>
  )
}

export default AllOrders
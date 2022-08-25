import React from 'react'

const OrderHistoryCard = ({ order }) => {

  return (
    <tr>

      <td><div className="w-16 rounded">
      </div></td>
      <td>{ }</td>
      <td>${ }</td>
      <td>{ }</td>
      <td><label htmlFor="manage_items" className="btn  btn-xs btn-primary modal-button"  >Remove</label></td>


    </tr>
  )
}

export default OrderHistoryCard
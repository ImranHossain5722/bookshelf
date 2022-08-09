import React from 'react'

const OrderHistoryCard = ({order}) => {
    const {_id,img,name,price,avaliable_quantity} = book
  return (
    <tr>
    <th>{index+1}</th>
    <td><div className="w-16 rounded">
<img src={img}alt="Tailwind-CSS-Avatar-component" />
</div></td>
<td>{name}</td>
<td>${name}</td>
<td>{name}</td>
    <td><label htmlFor="manage_items" className="btn  btn-xs btn-primary modal-button"  >Remove</label></td>


  </tr>
  )
}

export default OrderHistoryCard
import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

const OrderView = () => {
    const orderItem = useSelector((state) => state.orderView.orderView)
    // console.log(orderItem);
    if (!orderItem) {
        return <Loading />
    }
    //   console.log(orderItem)
    return (
        <>
            <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">Transiction Id</th>

                                <th className="w-full text-center">
                                    order details
                                </th>

                            </tr>
                        </thead>
                        <tbody className="w-full">

                            <tr >

                                <td className="border-[#e1e2e6]">

                                    <div className="avatar">
                                        <div className="w rounded text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                            {orderItem?._id}

                                        </div>


                                    </div>
                                </td>


                                <table className="table w-full ">
                                    <tbody>
                                        {orderItem.ordered_items?.map(book => <tr className='w-full'>
                                            <td>
                                                <div class="avatar">
                                                    <div class="w-16 rounded">
                                                        <img src={book.book_id?.book_cover_photo_url} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                                {book.book_id?.book_title}
                                            </td>
                                            <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                                ${book.book_id?.book_price}

                                            </td>
                                            <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                                {book.qnt}

                                            </td>
                                            <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                                ${book.book_id?.book_price * book.qnt}

                                            </td>
                                            {/* <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                                {orderItem?.createdAt?.slice(0, 10)}

                                            </td> */}



                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </tr>

                        </tbody>


                    </table>
                    <div className="w-full border-t flex justify-between">
                        <p className="text-[#00124E] font-semibold">Subtotal</p>
                        <p className="text-[#00124E] font-semibold pr-20">${orderItem.ordered_price_amount}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OrderView
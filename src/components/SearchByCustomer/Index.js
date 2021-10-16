import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { customerListPagination, fetchAllCustomers } from '../../store/Customer/customerAction'
import Sidebar from '../Layouts/Sidebar'
import Pagination from '../Pagination/Pagination'

export default function Index() {
    const [search, setSearch] = useState("")
    console.log(search)
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customer.customer)
    console.log("fff",customer);
    useEffect(() => {
        dispatch(fetchAllCustomers(search))
    }, [search])
    const handlePagination = (e) => {
        const pageNumber = Number(e.target.getAttribute("page_number"));
        dispatch(customerListPagination(pageNumber));
      };
      const handleSearchCustomer = (e) => {
        setSearch(e.target.value);
      };
    return (
        <div className="flex">
            <div className="w-2/12">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-8">
                <div className="flex items-center justify-end">
                    <div className="relative">
                        <input className="border border-black px-8 py-1 outline-none" type="text"
                            onChange={(e) => handleSearchCustomer(e)}
                        />
                        <FaSearch className="absolute top-2 left-2"/>
                    </div>
                </div>
                <div className="mt-5 border border-gray-400 rounded-md p-5">
                        <table className="common__table">
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer?.data?.map((customer,index)=>(
                                <tr key={index}>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        <Link to={`/customer-profile/${customer.id}`}>
                                            <button className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900">Details</button>
                                        </Link>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                            totalPage={customer?.last_page}
                            pageNumber={customer?.current_page}
                            pageLinks={customer?.links}
                            handlePagination={handlePagination}
                        />
                    </div>
            </div>
        </div>
    )
}

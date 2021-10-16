import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCustomerProfile } from '../../store/Customer/customerAction'
import Sidebar from '../Layouts/Sidebar'
import ListOfVehicle from './ListOfVehicle'
import ServiceHistory from './ServiceHistory'

export default function CustomerProfile() {
    const customerId = useParams();
    const id = customerId.id
    console.log("customer id",id);
    const dispatch = useDispatch();
    const customerInfo = useSelector(state => state.customer.customerProfile);
    console.log("customer info", customerInfo);
    useEffect(() => {
        dispatch(fetchCustomerProfile(id));
    }, [id])
    return (
        <div className="flex">
            <div className="w-2/12">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-8">
                <p><span className="font-semibold mr-3">Name:</span> {customerInfo?.customerInfo?.name}</p>
                <p><span className="font-semibold mr-3">Phone:</span>  {customerInfo?.customerInfo?.phone}</p>
                <p><span className="font-semibold mr-3">Address:</span> {customerInfo?.customerInfo?.address}</p>

                <ListOfVehicle carlist={customerInfo?.carlist}/>
                <ServiceHistory invoice={customerInfo?.invoiceList}/>
            </div>
        </div>
    )
}

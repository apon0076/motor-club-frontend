import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllInvoiceList } from '../../store/Invoice/invoiceAction';
import Sidebar from '../Layouts/Sidebar'
import InvoiceList from './InvoiceList';

export default function Index() {
    const dispatch = useDispatch()
    const invoiceList = useSelector(state => state.invoice.invoiceList)
    
    useEffect(() => {
        dispatch(fetchAllInvoiceList())
    }, [])
    return (
        <div className="flex">
            <div className="w-2/12 sidebarSection">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-10 bodySection">
                <InvoiceList invoiceList={invoiceList}/>
            </div>
        </div>
    )
}

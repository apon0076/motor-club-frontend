import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInvoiceList } from "../../store/Invoice/invoiceAction";
import InvoiceList from "./InvoiceList";

export default function Index() {
  const dispatch = useDispatch();
  const invoiceList = useSelector((state) => state.invoice.invoiceList);

  useEffect(() => {
    dispatch(fetchAllInvoiceList());
  }, []);
  return <InvoiceList invoiceList={invoiceList} />;
}

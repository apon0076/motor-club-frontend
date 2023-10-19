import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInvoiceList } from "../../store/Invoice/invoiceAction";
import InvoiceList from "./InvoiceList";
import { useLocation } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const location = useLocation();
  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);
  // Accessing specific query parameters
  const search = getQueryParams.get("search");
  const page = getQueryParams.get("page");

  const { invoiceList, isLoading } = useSelector((state) => state.invoice);

  useEffect(() => {
    dispatch(fetchAllInvoiceList(search, page));
  }, [search, page]);
  return <InvoiceList invoiceList={invoiceList.data} isLoading={isLoading} />;
}

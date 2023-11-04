import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInvoiceList } from "../../store/Invoice/invoiceAction";
import InvoiceList from "./InvoiceList";
import { useLocation, useHistory } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // Push Query Params
  useEffect(() => {
    history.push(`/invoice?search=&page=1`);
  }, []);

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const search = getQueryParams.get("search");
  const page = getQueryParams.get("page");

  // Get Value from Reducer
  const { invoiceList, isLoading } = useSelector((state) => state.invoice);

  // API Call for Invoice List
  useEffect(() => {
    dispatch(
      fetchAllInvoiceList(
        search !== null ? search : "",
        page !== null ? page : ""
      )
    );
  }, [search, page]);
  return <InvoiceList invoiceList={invoiceList.data} isLoading={isLoading} />;
}

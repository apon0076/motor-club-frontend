import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import InventoryFilters from "./InventoryFilters";
import { Modal } from "react-responsive-modal";
import Pagination from "../Pagination/Pagination";
import InventoryListTable from "./InventoryListTable";
import AddProduct from "./AddProduct";
import CreateCategory from "./CreateCategory";
import DeleteModal from "./DeleteModal";

const InventoryList = () => {
  const [filter, setFilter] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productModalTypeOpen, setProductModalTypeOpen] = useState(0);

  //Add Product Modal Open & Close Functions
  const onOpenProductModal = () => setProductModalOpen(true);
  const onCloseProductModal = () => setProductModalOpen(false);

  //Add Category Modal Open & Close Functions
  const onOpenCategoryModal = () => setCategoryModalOpen(true);
  const onCloseCategoryModal = () => setCategoryModalOpen(false);

  //Delete Modal Open & Close Functions
  const onOpenDeleteModal = () => setDeleteModalOpen(true);
  const onCloseDeleteModal = () => setDeleteModalOpen(false);

  return (
    <div className="inventory-container">
      <div className="pl-6 pr-6 pt-6 fixed bg-white inventory-header w-10/12">
        <div className="flex items-center justify-between bg-gray-100 shadow-md py-2 px-2">
          <div>
            <button
              className="rounded flex items-center text-white font-semibold px-2 py-1 mr-2 bg-green-800 transition-all ease-in-out hover:bg-green-900 cursor-pointer inventory-filter-btn"
              onClick={() => setFilter(!filter)}
            >
              <FaFilter className="mr-2" /> Filters
            </button>
          </div>
          <div>
            <button
              onClick={onOpenCategoryModal}
              className="rounded text-white font-semibold px-2 py-1 mr-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer"
            >
              + Category
            </button>
            <button
              onClick={onOpenProductModal}
              className="rounded text-white font-semibold px-2 py-1 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer"
            >
              + Product
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 inventory-section bg-white w-full">
        <div className="flex justify-between">
          <div className={`w-3/12 h-2 ${filter ? null : `inventory-sidebar`}`}>
            <div
              className={`fixed w-1/5  h-full bg-gray-100 shadow-lg inventory-sidebar-fixed-container ${
                filter ? `w-8/12` : null
              }`}
            >
              {filter ? (
                <div className="relative mb-7">
                  <button
                    className="absolute top-2 right-2 border border-red-700 rounded-full bg-red-700 text-white p-2 cursor-pointer flex items-center justify-center z-50"
                    onClick={() => setFilter(false)}
                  >
                    <ImCross />
                  </button>
                </div>
              ) : null}
              <div className="p-2 ">
                <InventoryFilters />
              </div>
            </div>
          </div>
          <div className="w-9/12 p-3  inventory-body">
            <div className="mt-5 border border-gray-400 rounded-md px-2 overflow-x-auto">
              <InventoryListTable
                setProductModalTypeOpen={setProductModalTypeOpen}
                productModalTypeOpen={productModalTypeOpen}
                onOpenProductModal={onOpenProductModal}
                onOpenDeleteModal={onOpenDeleteModal}
              />
              <Pagination
              // totalPage={invoiceList?.last_page}
              // pageNumber={invoiceList?.current_page}
              // pageLinks={invoiceList?.links}
              // handlePagination={handlePagination}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal open={productModalOpen} onClose={onCloseProductModal} center>
        <AddProduct onCloseProductModal={onCloseProductModal} />
      </Modal>
      <Modal open={categoryModalOpen} onClose={onCloseCategoryModal} center>
        <CreateCategory onCloseCategoryModal={onCloseCategoryModal} />
      </Modal>
      <Modal open={deleteModalOpen} onClose={onCloseDeleteModal} center>
        <DeleteModal onCloseDeleteModal={onCloseDeleteModal} />
      </Modal>
    </div>
  );
};

export default InventoryList;

import { XIcon } from "@heroicons/react/outline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setAddRecordPopup } from "../slice";

const initialValues = {
  dateTime: "",
  description: "",
  fbaFees: "",
  fulfilment: "",
  giftWrapCredits: "",
  giftwrapCreditsTax: "",
  marketplace: "",
  marketplaceWithheldTax: "",
  orderCity: "",
  orderId: "",
  orderPostal: "",
  orderState: "",
  other: "",
  otherTransactionFees: "",
  postageCredits: "",
  productSales: "",
  productSalesTax: "",
  promotionalRebates: "",
  promotionalRebatesTax: "",
  quantity: "",
  sellingFees: "",
  settlementId: "",
  shippingCreditsTax: "",
  sku: "",
  taxCollectionModel: "",
  total: "",
  type: "",
};

const validationSchema = Yup.object().shape({
  dateTime: Yup.string().required("Date/Time is required"),
  description: Yup.string(),
  // fbaFees: Yup.number().required("FBA Fees is required"),
  fbaFees: Yup.number(),
  // fulfilment: Yup.string().required("Fulfilment is required"),
  fulfilment: Yup.string(),
  // giftWrapCredits: Yup.number().required("Gift Wrap Credits is required"),
  giftWrapCredits: Yup.number(),
  // giftwrapCreditsTax: Yup.number().required(
  //   "Gift Wrap Credits Tax is required"
  // ),
  giftwrapCreditsTax: Yup.number(),
  // marketplace: Yup.string().required("Marketplace is required"),
  marketplace: Yup.string(),
  // marketplaceWithheldTax: Yup.number().required(
  //   "Marketplace Withheld Tax is required"
  // ),
  marketplaceWithheldTax: Yup.number(),
  // orderCity: Yup.string().required("Order City is required"),
  orderCity: Yup.string(),
  // orderId: Yup.string().required("Order ID is required"),
  orderId: Yup.string(),
  // orderPostal: Yup.string().required("Order Postal is required"),
  orderPostal: Yup.string(),
  // orderState: Yup.string().required("Order State is required"),
  orderState: Yup.string(),
  // other: Yup.number().required("Other is required"),
  other: Yup.number(),
  // otherTransactionFees: Yup.number().required(
  //   "Other Transaction Fees is required"
  // ),
  otherTransactionFees: Yup.number(),
  // postageCredits: Yup.number().required("Postage Credits is required"),
  postageCredits: Yup.number(),
  // productSales: Yup.number().required("Product Sales is required"),
  productSales: Yup.number(),
  // productSalesTax: Yup.number().required("Product Sales Tax is required"),
  productSalesTax: Yup.number(),
  // promotionalRebates: Yup.number().required("Promotional Rebates is required"),
  promotionalRebates: Yup.number(),
  // promotionalRebatesTax: Yup.number().required(
  //   "Promotional Rebates Tax is required"
  // ),
  promotionalRebatesTax: Yup.number(),
  // quantity: Yup.number().required("Quantity is required"),
  quantity: Yup.number(),
  // sellingFees: Yup.number().required("Selling Fees is required"),
  sellingFees: Yup.number(),
  // settlementId: Yup.string().required("Settlement ID is required"),
  settlementId: Yup.string(),
  // shippingCreditsTax: Yup.number().required("Shipping Credits Tax is required"),
  shippingCreditsTax: Yup.number(),
  sku: Yup.string(),
  taxCollectionModel: Yup.string(),
  // total: Yup.number().required("Total is required"),
  total: Yup.number(),
  // type: Yup.string().required("Type is required"),
  type: Yup.string(),
});

const FormikForm = ({ setCancelForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <motion.section
      onClick={() => dispatch(setAddRecordPopup())}
      className={`lightBox fixed w-full h-screen top-0 left-0 lightBox_bg z-50`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "105%" }}
    >
      <motion.div
        className={` addUser bg-white absolute top-0 right-0 h-screen w-full sm:w-98 normal-case`}
        initial={{ x: "35rem" }}
        animate={{ x: 0 }}
      >
        <h2 className="h-4.5 px-7 bg-gray-100 flex justify-between items-center text-2xl text-gray-600 font-medium">
          Add Record
          <XIcon
            className="w-6 h-6 text-gray-500 cursor-pointer"
            // onClick={setShowPopup((prev) => console.log("testing"))}
          />
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="text-2xl inputContainer py-6 px-7 w-full overflow-y-scroll myScroll">
            <div>
              {/* <label htmlFor="dateTime">Date/Time</label>
              <Field type="text" id="dateTime" name="dateTime" /> */}
              <label htmlFor="dateTime" className="text-gray-500 font-normal">
                Date/Time
              </label>
              <Field
                type="text"
                id="dateTime"
                name="dateTime"
                className="w-full input__style mt-2 normal-case"
              />
              <ErrorMessage
                className="error__style"
                name="dateTime"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="description"
              >
                Description
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="description"
                name="description"
              />
              <ErrorMessage
                className="error__style"
                name="description"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="fbaFees">
                FBA Fees
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="fbaFees"
                name="fbaFees"
              />
              <ErrorMessage
                className="error__style"
                name="fbaFees"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="fulfilment">
                Fulfilment
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="fulfilment"
                name="fulfilment"
              />
              <ErrorMessage
                className="error__style"
                name="fulfilment"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="giftWrapCredits"
              >
                Gift Wrap Credits
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="giftWrapCredits"
                name="giftWrapCredits"
              />
              <ErrorMessage
                className="error__style"
                name="giftWrapCredits"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="giftwrapCreditsTax"
              >
                Gift Wrap Credits Tax
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="giftwrapCreditsTax"
                name="giftwrapCreditsTax"
              />
              <ErrorMessage
                className="error__style"
                name="giftwrapCreditsTax"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="marketplace"
              >
                Marketplace
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="marketplace"
                name="marketplace"
              />
              <ErrorMessage
                className="error__style"
                name="marketplace"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="marketplaceWithheldTax"
              >
                Marketplace Withheld Tax
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="marketplaceWithheldTax"
                name="marketplaceWithheldTax"
              />
              <ErrorMessage
                className="error__style"
                name="marketplaceWithheldTax"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="orderCity">
                Order City
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="orderCity"
                name="orderCity"
              />
              <ErrorMessage
                className="error__style"
                name="orderCity"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="orderId">
                Order ID
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="orderId"
                name="orderId"
              />
              <ErrorMessage
                className="error__style"
                name="orderId"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="orderPostal"
              >
                Order Postal
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="orderPostal"
                name="orderPostal"
              />
              <ErrorMessage
                className="error__style"
                name="orderPostal"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="orderState">
                Order State
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="orderState"
                name="orderState"
              />
              <ErrorMessage
                className="error__style"
                name="orderState"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="other">
                Other
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="other"
                name="other"
              />
              <ErrorMessage
                className="error__style"
                name="other"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="otherTransactionFees"
              >
                Other Transaction Fees
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="otherTransactionFees"
                name="otherTransactionFees"
              />
              <ErrorMessage
                className="error__style"
                name="otherTransactionFees"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="postageCredits"
              >
                Postage Credits
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="postageCredits"
                name="postageCredits"
              />
              <ErrorMessage
                className="error__style"
                name="postageCredits"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="productSales"
              >
                Product Sales
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="productSales"
                name="productSales"
              />
              <ErrorMessage
                className="error__style"
                name="productSales"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="productSalesTax"
              >
                Product Sales Tax
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="productSalesTax"
                name="productSalesTax"
              />
              <ErrorMessage
                className="error__style"
                name="productSalesTax"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="promotionalRebates"
              >
                Promotional Rebates
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="promotionalRebates"
                name="promotionalRebates"
              />
              <ErrorMessage
                className="error__style"
                name="promotionalRebates"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="promotionalRebatesTax"
              >
                Promotional Rebates Tax
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="promotionalRebatesTax"
                name="promotionalRebatesTax"
              />
              <ErrorMessage
                className="error__style"
                name="promotionalRebatesTax"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="quantity">
                Quantity
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="quantity"
                name="quantity"
              />
              <ErrorMessage
                className="error__style"
                name="quantity"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="sellingFees"
              >
                Selling Fees
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="sellingFees"
                name="sellingFees"
              />
              <ErrorMessage
                className="error__style"
                name="sellingFees"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="settlementId"
              >
                Settlement ID
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="settlementId"
                name="settlementId"
              />
              <ErrorMessage
                className="error__style"
                name="settlementId"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="shippingCreditsTax"
              >
                Shipping Credits Tax
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="shippingCreditsTax"
                name="shippingCreditsTax"
              />
              <ErrorMessage
                className="error__style"
                name="shippingCreditsTax"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="sku">
                SKU
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="sku"
                name="sku"
              />
              <ErrorMessage
                className="error__style"
                name="sku"
                component="div"
              />
            </div>

            <div>
              <label
                className="text-gray-500 font-normal"
                htmlFor="taxCollectionModel"
              >
                Tax Collection Model
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="taxCollectionModel"
                name="taxCollectionModel"
              />
              <ErrorMessage
                className="error__style"
                name="taxCollectionModel"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="total">
                Total
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="total"
                name="total"
              />
              <ErrorMessage
                className="error__style"
                name="total"
                component="div"
              />
            </div>

            <div>
              <label className="text-gray-500 font-normal" htmlFor="type">
                Type
              </label>
              <Field
                className="w-full input__style mt-2 normal-case"
                type="text"
                id="type"
                name="type"
              />
              <ErrorMessage
                className="error__style"
                name="type"
                component="div"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                value="Submit"
                className="rounded-lg text-2xl px-8 py-3 bg-blue-600 text-white capitalize hover:shadow-sm hover:shadow-blue-400 mr-5 cursor-pointer"
              >
                Submit
              </button>
              {/* <button
                type="button"
                className="rounded-lg text-2xl px-8 py-3 border border-solid border-gray-400 text-gray-500 capitalize font-medium"
                onClick={() => dispatch(setAddRecordPopup())}
              >
                Cancel
              </button> */}
            </div>
          </Form>
        </Formik>
      </motion.div>
    </motion.section>
  );
};

export default FormikForm;

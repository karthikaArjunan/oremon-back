const express = require("express");
const { requireSignin, adminMiddleWare } = require("../../common-middleware");
const { getAddress } = require("../../controller/address");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controller/admin/order.admin");
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleWare, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  adminMiddleWare,
  getCustomerOrders
);
module.exports = router;

import express from "express";

import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js";

import { addPaymentGateway,paytmResponse } from "../controller/payment-controller.js";

const router = express.Router();
// We hv this function as express.router through which we can do routing.
// Connect this routing folder with index.js

router.post('/signup', userSignup); // userSignup is callback function only(POST API).
router.post('/login', userLogin); // userLogin is callback function only(POST API).

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback',paytmResponse);

export default router;
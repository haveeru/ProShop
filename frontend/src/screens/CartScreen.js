import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
// dealing with react state bring these in
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

// history is used to redirect and location is url link from ? (?qty=1)
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  // split search from = sign at [0] = ?qty and [1] = 1
  // Number function is used to convert string to number
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

const CartScreen = () => {
  return <div>Cart</div>;
};

export default CartScreen;

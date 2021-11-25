import { useContext, useState, useEffect } from 'react';
import Card from './Card';
import BillDetail from './BillDetail';
import CartContext from '../food_ordering/components/Cart/CartController/CartContext';
import classes from './Bill.module.css';
import dropdown from './dropdown';
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(0)} VND`;

  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartContext.items.map((item) => (
        <BillDetail
          key = {item.id}
          name = {item.name}
          amount = {item.amount}
          price = {item.price}
        />
      ))}
    </ul>
  );


  return (
      <Card>
        {cartItems}
        <div className={classes.total}>
            <span>Thành tiền</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <a href='/ordering'> <button className={classes['button--alt']} onClick={props.onClose}>Quay lại menu</button> </a>
            <button className={classes['button--alt']}>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant='success' style={{marginLeft: "0px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} >
                    <span>
                        Chọn phương thức thanh toán
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <LinkContainer to='/home' >
                        <Dropdown.Item eventKey="1">
                            <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Tiền mặt</span>
                        </Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/home' >
                        <Dropdown.Item eventKey="2" >
                            <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Ví điện tử Momo</span>
                        </Dropdown.Item>
                    </LinkContainer>
                </Dropdown.Menu>
            </Dropdown>  
            </button>      
          </div>
      </Card>
  );

};

export default Cart;
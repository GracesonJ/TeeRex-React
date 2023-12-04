import React, { useState } from 'react'
import CartItems from '../Components/CartItems'
import { Button } from 'react-bootstrap'



function Cart() {
  // console.log(cart);
  
  return (
    <>
      <section className="h-100 gradient-custom mt-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body shadow">
                  <CartItems/>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 mb-4 px-0 pb-1">
                    Products
                    <span>₹</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span><strong>₹</strong></span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center mt-4">
                    <Button type="button" variant="outline-secondary" className="btn btn-lg btn-block">
                      Go to checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { addcontext } from './ContextShare';
import { deleteAProduct } from '../Service/allApi';



function CartItems({products}) {
    const {addthings, setaddthings} = useContext(addcontext)
    console.log(addthings);
    const [cartItems, setCartItems] = useState(products);

  return (
    <>
     {
     addthings.length>0?
         <div className="row">
            {
            addthings?addthings?.map((products)=>(
                <>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={products.imageurl}
                        className="w-100" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{products.name}</strong></p>
                      <p>Color: {products.color}</p>
                      <p>Price : {products.price}</p>
                      <div className="col-lg-4 col-md-6 mt-5 mb-lg-0 ms-2">
                        <Button
                        className='btn' variant="outline-secondary"> <i class="fa-solid fa-trash"></i> {' '} Remove </Button>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center">
                      <label className="form-label mt-2 mb-5 ps-3" for="form1">Quantity</label>
                      <div className="d-flex mb-4 d-flex justify-content-around" style={{ maxWidth: "300px" }}>
                        <div className="col-lg-4 col-md-6 mb-lg-0 me-3 px-5">
                          <Button className='btn' variant="outline-secondary"> <i class="fa-solid fa-minus"></i></Button>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <Button disabled className='btn' variant="outline-secondary"> 1 </Button>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <Button className='btn' variant="outline-secondary"> <i class="fa-solid fa-plus"></i></Button>
                        </div>
                      </div>
                      <div className="mt-5 m-5">
                        <p className="text-start text-md-center">
                          <strong> Total : ₹{products.price}</strong>
                        </p>
                      </div>
                    </div></>
                    )):"Your Cart Is Empty"
            }
                  </div>    : <h2 className='text-danger text-center mt-5'>Cart Empty</h2>
                  }

    </>
  )
}

export default CartItems


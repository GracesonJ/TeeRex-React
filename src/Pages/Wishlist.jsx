import React, { useContext } from 'react'
import ContextShare, { addcontext } from '../Components/ContextShare'


function Wishlist() {
    const {addwish,setaddwish}=useContext(addcontext)
    const {addthings,setaddthings}=useContext(addcontext)

    const handleCart =(e,it)=>{
        
        e.preventDefault()
    // setaddthings(e)
    // setcartproducts(cartproducts.push(it))
    // arr.push(it)
    // console.log(arr)
    setaddthings(addthings.concat(it))
    // console.log(arr);
    }
    const onAddToCart =(e,it)=>{
        e.preventDefault()
    setaddthings(addthings.concat(it))
    }   
  return (
    <>
        <section className="py-5 mt-5">
            <div className="container px-4 px-lg-5 mt-5">
            {addwish.length>0?
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
            addwish?addwish?.map((products)=>(
                    <div className="col mb-5">
                        <div className="card h-100 shadow">
                            <div className="">
                                <div className="d-flex justify-content-center mt-3">
                                    <img style={{width:"200px", height:"200px"}} className="card-img-top img-fluid" src={products.imageurl} alt="product image" />
                                </div>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{products.name}</h5>
                                    ${products.price} <br />
                                    color: {products.color}
                                </div>
                            </div>
                            </div>
                            <div className="card-footer pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                <div
                                onClick={e=>onAddToCart(e,products)} 
                                className="text-center justify-content-end"><a className="btn btn-outline-dark mt-auto" href="#"><i class="fa-solid fa-cart-shopping" style={{color: "#5b6371"}}></i> {' '}Add to cart</a></div>
                                <div className="text-center justify-content-end"><a className="btn btn-outline-dark mt-auto" href="#"> <i class="fa-solid fa-trash" style={{color: "#5b6371"}}></i> 
                                 {' '} Delete </a></div>
                            </div>
                        </div>
                    </div>
                    )):"Your Cart Is Empty"
            }
                </div>: <h2 className='text-danger text-center mt-5'>Your Wishlist is Empty</h2>}
            </div>
        </section>
    </>
  )
}

export default Wishlist
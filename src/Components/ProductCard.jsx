import React, { useContext, useEffect, useState } from 'react'
import { addcontext } from './ContextShare';
import { getAllProducts } from '../Service/allApi';


function ProductCard({Product}) {
    const {addthings,setaddthings}=useContext(addcontext)
    const {addwish,setaddwish}=useContext(addcontext)

    const [allproducts,setAllproducts]=useState([])
    const [cartproducts,setcartproducts]=useState([])
    var arr=[]

    // const isInCart = (()=>{
    //     cart.some(item => item.id === Product.id)
    // })
    // const isInWishlist = (()=>{
    //     wishlist.some(item => item.id === Product.id)
    // })

    const getallproducts = async()=>{
        const result=await getAllProducts()
        // console.log(result);
        setAllproducts(result.data)
        console.log(allproducts);
        console.log(result.data);
    }
    useEffect(()=>{
      getallproducts()
    },[])
    const onAddToCart =(e,it)=>{
        e.preventDefault()
    setaddthings(addthings.concat(it))
    }

    const onAddToWishlist =(e,it)=>{
        e.preventDefault()
    setaddwish(addwish.concat(it))
    }
    
  

  return (
    <>
         {
            allproducts?.length>0?allproducts.map((products)=>(

                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="col mb-5">
                            <div className="card h-100 shadow">
                            <div className="m-2 ">
                                <div className="d-flex justify-content-center">
                                    <img style={{width:"200px", height:"200px"}} className="card-img-top img-fluid" src={products.imageurl} alt="product image" />
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{products.name}</h5>
                                        Price: ₹ {products.price}
                                        <br />
                                        <h6 className='mt-2'>Color : {products.color}</h6> 
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer mb-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                {/* <div
                                onClick={e=>onAddToCart(e,Product)} disabled={isInCart}
                                className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"><i class="fa-solid fa-cart-shopping" style={{color: "#5b6371"}}></i> {' '}{isInCart ? 'In Cart' : 'Add to Cart'}</a></div>
                                <div 
                                onClick={e=>onAddToWishlist(e,Product)} disabled={isInWishlist}
                                className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"> <i class="fa-solid fa-heart" style={{color: "#5b6371"}}></i> {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</a>
                                </div> */}
                                <div
                                onClick={e=>onAddToCart(e,products)} 
                                className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"><i class="fa-solid fa-cart-shopping" style={{color: "#5b6371"}}></i> {' '}Add to Cart</a></div>
                                <div 
                                onClick={e=>onAddToWishlist(e,products)} 
                                className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"> <i class="fa-solid fa-heart" style={{color: "#5b6371"}}></i> Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           )): <p>Nothing to Display</p>
        }
            
            
    </>
  )
}

export default ProductCard
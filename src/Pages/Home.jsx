import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { getAllProducts } from '../Service/allApi';


function Home() {

  return (
    <>
      <div className="" style={{marginTop:'30px'}}>
        <section className="py-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        
            <ProductCard />
            
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
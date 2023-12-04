import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <>

  <footer
          className="text-center text-lg-start text-black bg-secondary pt-2" >

    <section className="mt-5">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-5">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">G-KART</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit illum natus aut! Nihil assumenda impedit, quidem ratione error sapiente unde temporibus dolorem, autem velit eveniet accusamus, labore maiores. Inventore.
            </p>
          </div>

          {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgrounColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white"></a>
            </p>
            <p>
              <a href="#!" className="text-white"></a>
            </p>
            <p>
              <a href="#!" className="text-white"></a>
            </p>
            <p>
              <a href="#!" className="text-white"> </a>
            </p>
          </div> */}

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white" onClick={()=>navigate('/cart')}>Cart</a>
            </p>
            <p>
              <a href="#!" className="text-white" onClick={()=>navigate('/wishlist')}>Wishlist</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> TeeRex Pvt.Ltd</p>
            <p><i className="fas fa-envelope mr-3"></i> teerex@teerex.com</p>
            <p><i className="fas fa-phone mr-3"></i> 9876543210</p>
          </div>
        </div>
      </div>
    </section>

    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-white" href=""> G-KART Graceson J </a>
    </div>
  </footer>

    </>
  )
}

export default Footer
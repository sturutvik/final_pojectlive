import React from 'react'
import ar from '../images/arrival-bg.png'

export default function Arrval() {
  return (
    <div>
        <section className="arrival_section">
  <div className="container">
    <div className="box">
      <div className="arrival_bg_box">
        <img src={ar} alt="" />
      </div>
      <div className="row">
        <div className="col-md-6 ml-auto">
          <div className="heading_container remove_line_bt">
            <h2>#NewArrivals</h2>
          </div>
          <p style={{ marginTop: 20, marginBottom: 30 }}>
            Vitae fugiat laboriosam officia perferendis provident aliquid
            voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
            Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex
            unde!
          </p>
          <a href="">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

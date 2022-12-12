import React from "react";
import './utility.css';
import img1 from './img/Air.png';


function Utility(){
    return(
        <form>
            <div>
                <h2>
                    UTiLITY
                </h2>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Head Light</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-emergency-kits">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Air Purifier</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-gps-device-and-mobile-holder">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img1} alt="Img1"/>
        <div class="info">
        <h1>Alloy Weels</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-chargers">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img1} alt="Img1"/>
        <div class="info">
        <h1>Battery</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-polisher">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Camera</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/tyre-inflators">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Floor Mat</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-vacuum-cleaner">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img1} alt="Img1"/>
        <div class="info">
        <h1>Repair Kit</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/jumper-cable">Buy Now</a>
        </div>
    </div>
  </div>
  
        </form>
    )
}

export default Utility;
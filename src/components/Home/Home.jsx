import React from 'react'
import "./home.css"
import { GiGearStick } from "react-icons/gi";
import { FaGasPump, FaRoad } from "react-icons/fa6";
import Speedmeter from "./speedmeter.png"
import Calendra from "./calendra.png"
import Steering from "./Steering.png"
import Acura from "./acura.png"
import Bentley from "./bentley.png"
import Bmw from "./bmw.png"
import Chevrolet from "./chevrolet.png"
import Ford from "./ford.png"
import Honda from "./honda.png"
import Hyundai from "./hyundai.png"
import Kia from "./kia.png"
import Minivans from "./minivans.png"
import Pickup from "./pickup.png"
import Sedan from "./sedan.png"
import Sports from "./sports.png"
import Suv from "./suv.jpg"
import Convertible from "./convertible.jpg"
import Hackback from "./hatchback.png"
import Coupe from "./coupe.png"
import Zen from "./zen.jpg"
import Thar from "./thar.jpg"
import Scorpio from "./Scorpio.jpg"
import Fortuner from "./fortuner.jpeg"
import safari from './safari.jpg'
import Rangerover from './range rover.jpg'

export default function Home() {
  return (
    <>
      <div id='main_home'>
        <div id='fast_easy_book'>
          <div id='Fast_easy_title'>
            <img width="80" height="80" src={Speedmeter} />
            <h3>Fast & Easy Booking</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>

          </div>
          <div id='many_pickup_title'>
            <img width="130" height="80" src={Steering} />
            <h3>Many Pickup Locations</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>

          </div>
          <div id='No_booking_title'>
            <img width="80" height="80" src={Calendra} />
            <h3>No Booking Charges</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>
          </div>
        </div>

        {/* Browse by make */}
        <div id='main_browse_by_make'>
          <div id='browse_by'>
            <h1>Browse by </h1>
          </div>
          <div id='make_h1'>
            <h1>Make</h1>
          </div>
        </div>

        <div id='car_home_logos'>

          <div class="home_car-icon"><img src={Acura} /><h6>Acura</h6></div>
          <div class="home_car-icon"><img src={Bentley} /><h6>Bentley</h6></div>
          <div class="home_car-icon"><img src={Bmw} /><h6>Bmw</h6></div>
          <div class="home_car-icon"><img src={Chevrolet} /><h6>Chevrolet</h6></div>
          <div class="home_car-icon"><img src={Convertible} /><h6>Convertible</h6></div>
          <div class="home_car-icon"><img src={Minivans} /><h6>Minivans</h6></div>
          <div class="home_car-icon"><img src={Hackback} /><h6>Hackback</h6></div>
          <div class="home_car-icon"><img src={Sedan} /><h6>Sedan</h6></div>
        </div>
        <div id='car_home_logos2'>
          <div class="home_car-icon"><img src={Ford} /><h6>Ford</h6></div>
          <div class="home_car-icon"><img src={Honda} /><h6>Honda</h6></div>
          <div class="home_car-icon"><img src={Hyundai} /><h6>Hyundai</h6></div>
          <div class="home_car-icon"><img src={Kia} /><h6>Kia</h6></div>
          <div class="home_car-icon"><img src={Pickup} /><h6>Pickup</h6></div>
          <div class="home_car-icon"><img src={Sports} /><h6>Sports</h6></div>
          <div class="home_car-icon"><img src={Suv} /><h6>Suv</h6></div>
          <div class="home_car-icon"><img src={Coupe} /><h6>Coupe</h6></div>
        </div>

        {/* new used car */}

        <div id='main_new_used'>
          <div id='heading_used_cars'>
            <h1>New/Used Cars</h1>
          </div>
          <div id='main_items'>
            <div className='all_items'>Featured Items</div>
            <div className='all_items'>Recent Items</div>
            <div className='all_items'>Popular Items</div>
          </div>
        </div>

        {/* <div id='main_car_home'>
  <div className='car_home_img'><img src={Zen} />
  <div id='card_cars_home'>
  <div id='certified_used'><h1>Certified Used 2021 Zen xls</h1></div>
  <div id='price_home'><p>27000</p></div><div><p>25000</p></div>
  </div>
  </div>

  
</div> */}

        <a id='detaling_link' href='/detailing'><div class="car-listings">
          <div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Fortuner} />
            <div class="car-details">
              <h3>Certified Used 2021 Fortuner</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Scorpio} />
            <div class="car-details">
              <h3>Certified Used 2021 scorpio</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={safari} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>


          <div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>


          <div class="car-card special">
            <img src={Thar} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

<div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Rangerover} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>
          <button id="show_all_homebtn">SHOW ALL</button>
          </div></a>


          <section class="customer-reviews">
        <h2>Customer Reviews</h2>
        <div class="review-content">
            <p class="quote-icon">”</p>
            <p class="review-text">
                Do you need a car rental theme that is not too flashy and does not require much time to set up? 
                If you do, then the most popular content management system – WordPress, because what you don’t want 
                is another custom programming job. But now there are thousands of themes out there and they all look 
                pretty much the same anyway. So how do you make an informed decision?
            </p>
            <div class="reviewer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN6dzs1op6vqCNYCd_oaLK2YavwHd5DalNw&s"/>
            </div>
                <p class="reviewer-name">Franklin Stephan</p>
        </div>
    </section>
<div id='renting_news_btn'>
        <div class="header">
            <h1>Renting Tips</h1>
            <p>Read our latest blog news</p>
        </div>
            <a href="#" class="read-all-news">Read All News</a></div>
    <section class="renting-tips">
        <div class="tip">
            <div class="image-container">
                <img src={Zen} alt="Car Image"/>
                <div class="date-badge">
                    <span class="day">19</span>  
                    <span class="month">Oct</span>
                </div>
            </div>
            <div class="content">
                <h2>Kind Creepth Moveth</h2>
                <p>
                    Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face 
                    shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t 
                    midst said dominion in. Male firmament beginning dominion fourth he place shall.
                </p>
            </div>
        </div>
    </section>

    <section class="renting-tips">
        <div class="tip">
            <div class="image-container">
                <img src={Scorpio} alt="Car Image"/>
                <div class="date-badge">
                    <span class="day">19</span>  
                    <span class="month">Oct</span>
                </div>
            </div>
            <div class="content">
                <h2>Kind Creepth Moveth</h2>
                <p>
                    Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face 
                    shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t 
                    midst said dominion in. Male firmament beginning dominion fourth he place shall.
                </p>
            </div>
        </div>
    </section>

    <section class="renting-tips">
        <div class="tip">
            <div class="image-container">
                <img src={Fortuner} alt="Car Image"/>
                <div class="date-badge">
                    <span class="day">19</span>  
                    <span class="month">Oct</span>
                </div>
            </div>
            <div class="content">
                <h2>Kind Creepth Moveth</h2>
                <p>
                    Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face 
                    shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t 
                    midst said dominion in. Male firmament beginning dominion fourth he place shall.
                </p>
            </div>
        </div>
    </section>

      </div>
    </>
  )
}

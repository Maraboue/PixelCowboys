// React and CSS.

import React, { useEffect, useState, useRef } from "react";
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Componenets.

import Mint from "./components/Mint";
import Navbar from "./components/navbar/navbar";
import { Carousel } from 'react-responsive-carousel';
import Rellax from 'rellax';
// Resources.

import pixelcowboy from '../src/assets/images/pixelCowboy1.png';
import discord from '../src/assets/images/discord.png';
import twitter from '../src/assets/images/twitter.png';
import medium from '../src/assets/images/medium.png';

import cowboy1 from '../src/assets/images/cowboy1.png';
import cowboy2 from '../src/assets/images/cowboy2.png';
import cowboy3 from '../src/assets/images/cowboy3.png';
import cowboy4 from '../src/assets/images/cowboy4.png';
import cowboy5 from '../src/assets/images/cowboy5.png';

// Remove later..

const showAlert = () => {

  if (window.confirm("Minting will be announced later on. In the mean time, join us at the saloon!🤠")) 
  {
    window.location.href='https://discord.gg/PfWgPDnq7F';
  };

}

class App extends React.Component {

  componentDidMount(){
		this.rellax = new Rellax('.rellax',
			
		);
	}


// <a  id="header_btn" href="/minting">  </a>  
  
// Insert route for mint later.
render (){
  return (

    <div className="App">
	
    <section class="section section-top">
    <Navbar/>
     <div class="content rellax" data-rellax-speed="4">
   
       <h1 id="header_title">Pixel Cowboy's 7.000 NFT Collection.</h1>
      
      
            <a href="/mint" id="header_btn" class="btn btn-primary">MINT NFTs</a>
       <div> 
     
</div>

     </div>
   </section>

   <section class="section section-stream">

     <div class="image-container">
     <img
       class="rellax"
       src={discord} 
       alt="Loading.."
       data-rellax-speed="-4" data-rellax-xs-speed="-3"
     />
       <img
       class="rellax"
       src={twitter} 
       alt="Loading.."
       data-rellax-speed="-2.5" data-rellax-xs-speed="-3"
     />
       <img
       class="rellax"
       src={medium} 
       alt="Loading.."
       data-rellax-speed="0.25" data-rellax-xs-speed="-3"
     />
     </div>		
   </section>
     
   <section class="section section-grid">

     
     
     <div class="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
       <i class="fas fa-video fa-3x secondary-text"></i>
       <h2>Discord<span class="secondary-text dot">.</span></h2>
       <p>
         Join our Discord server and hang out with other cowboys in the saloon!🤠
       </p>
       <a  href="https://discord.gg/PfWgPDnq7F" class="btn btn-primary">Join Discord</a>
     </div>
     <div class="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
       <i class="fas fa-users fa-3x secondary-text"></i>
       <h2>Twitter<span class="secondary-text dot">.</span></h2>
       <p>
         Follow us on Twitter to get fast updates and news about the Pixel Cowboys.🤠
       </p>
       <a  href="https://twitter.com/PixelCowboys" class="btn btn-primary">Follow Twitter</a>
     </div>
     <div class="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
       <i class="fas fa-book fa-3x secondary-text"></i>
       <h2>Medium<span class="secondary-text dot">.</span></h2>
       <p>
         Stay up to date by reading our blog over at Medium.🤠 
       </p>
       <a  href="https://dynamic-network.medium.com/" class="btn btn-primary">Read Medium</a>
     </div>
   </section>

 <div class="section-container">

 <div class="about-header">
   
<div class="content rellax" data-rellax-speed="1.5">
     <h1>About the Cowboys</h1>
     </div>
     </div>

   <section class="section section-stream2">
     <img id="pixelcowboy"
       class="play rellax"
       src={pixelcowboy} 
       alt="Loading.."
       data-rellax-speed="1" data-rellax-xs-speed="-5"
     />
  
  <div class="content rellax" data-rellax-speed="1.2">
    <div>
      <h2 class="secondary-text">Limited Collection</h2>
      <p id="about-p">
        Only 7000 Pixel Cowboys will ever be minted. Each cowboy will be unique and randomly 
        generated by code. 
      </p>
    </div>
    <div>
      <h2 class="secondary-text">Fair Minting</h2>
      <p id="about-p">
      The minting will be open to the public and we have decided on a fair minting price of (TBA).
        This is because the community is what's important, not the revenue from the minting. 
      </p>
    </div>
  <div>
      <h2 class="secondary-text">Community Driven</h2>
      <p id="about-p">
        The cowboys have each others back. We believe that the Pixel Cowboy 
        community knows whats best for the future of the cowboys.
      </p>
    </div>
  <div>
      <h2 class="secondary-text">Owner Rewards</h2>
      <p id="about-p">
        Pixel Cowboys will be doing giveaways for all cowboy holders with the opportunity to win exclusive rewards.
      </p>
    </div>
  </div>

</section>
</div>
  


<div class="section-container"> 

<div class="content rellax" data-rellax-speed="2.2">

  
  <div class="roadmap-header">

        <h1>Road Map</h1>

  </div>

</div>

<section class="section section-grid2">
    
<div class="content rellax" data-rellax-speed="-1">
    <div class="section-grid2-item">
     <h2>Build the Community </h2>
     <p>Reach 500 cowboys in Discord.✅</p> 
     <br/>
     <p>Reach 500 followers on Twitter.🚧</p> 
     <br/>
     <p>Fill 100 spots on the whitelist.🚧</p> 
    </div>
 </div>
<div class="content rellax" data-rellax-speed="-0.75">
    <div class="section-grid2-item">
     <h2>Launch Website</h2>
     <p>Get the website up and running.✅</p> 
     <br/>
     <p>Update road map, team and other components.🚧</p> 
     <br/>
     <p>Add minor changes to the site for a better user experience.🚧</p> 
    </div>
 </div>

 <div class="content rellax" data-rellax-speed="-0.5">

    <div class="section-grid2-item">

     <h2> Grow the Community</h2>

     <p>Reach 1000+ cowboys in Discord.✅</p> 
      <br/>
      <p>Reach 1000+ followers on Twitter.🚧</p> 
      <br/>
      <p>Fill round two of whitelist spots.</p> 
      <br/>
    </div>

 </div>


 <div class="content rellax" data-rellax-speed="-1">
  <div class="mobile-spacing">
    <div class="section-grid2-item">
   
     <h2>Start Giveaways</h2>

     <p>2021-11-08 ➡️ 2021-11-13
       Give away 10 WL spots!🚧</p> 
      <br/>
      <p>2021-11-14 Give away one free NFT!</p> 
      <br/>
      <p>More Details Coming Soon!</p> 
      <br/>

    </div>
</div>
 </div>



 <div class="content rellax" data-rellax-speed="-0.75">

    <div class="section-grid2-item">

     <h2>Finish the last Designs</h2>

     <p>Ask the community for new attributes.✅</p> 
     <br/>
     <p>Remove overflow pixels from every layer.✅</p> 
     <br/>
     <p>Iterate over each attribute one last time.🚧</p> 
    </div>

 </div>



 <div class="content rellax" data-rellax-speed="-0.5">

    <div class="section-grid2-item">

     <h2 id="pixel-launch">Launch of the Pixel Cowboys!</h2>
     <p>⭐    ⭐     ⭐</p>  
     <br/>
     <p> Minting will start on the <strong id="mint-date">25/11</strong></p>
     <br/>
     <p> For every 25 minted Pixel Cowboy, one random cowboy holder will get 
       a <strong id="mint-date">free</strong> Pixel Cowboy!</p> 
     <br/>
     <p>⭐    ⭐     ⭐</p>  

    </div>

 </div>

 
 <div class="content rellax" data-rellax-speed="-1">

    <div class="section-grid2-item">

     <h2 id="pixel-launch">25% Minted</h2>

     <p><strong id="mint-date">1 ETH</strong> Giveaway to 4 cowboy holders.</p>  
     <br/>
       
    </div>

 </div>

 <div class="content rellax" data-rellax-speed="-.75">

<div class="section-grid2-item">

 <h2 id="pixel-launch">50% Minted</h2>

 <p><strong id="mint-date">5 ETH</strong> Giveaway to 20 cowboy holders.</p>  
     <br/> 

</div>

</div>

<div class="content rellax" data-rellax-speed="-.5">

<div class="section-grid2-item">

 <h2 id="pixel-launch">100% Minted</h2>

 <p><strong id="mint-date">10 ETH</strong> Giveaway to 40 cowboy holders.</p>  
     <br/> 

</div>

</div>

</section>

</div>


<div class="carousel-section">
        <Carousel showArrows={true} emulateTouch={true} thumbWidth={80}  >
                <div>
                    <img id="carousel-img" src={cowboy1} />
                    <p id="legend">Space Commander Cowboy</p>
                </div>
                <div>
                    <img id="carousel-img"  src={cowboy2}  />
                    <p id="legend">Zombie Pirate Cowboy</p>
                </div>
                <div>
                    <img id="carousel-img"  src={cowboy5}  />
                    <p id="legend">Light Saber Cowboy</p>
                </div>
                <div>
                    <img id="carousel-img"  src={cowboy3}  />
                    <p id="legend">Red Eyed Cowboy</p>
                </div>
                <div>
                    <img id="carousel-img"  src={cowboy4}  />
                    <p id="legend">Indian Fighter Cowboy</p>
                </div>
            </Carousel>
</div>

<div class="section-container"> 


<section class="section section-team">
 </section>
 <section class="section section-team">
 </section>


 <div class="content rellax" data-rellax-speed="2">

 <div class="team-header">

   <h1>Sheriffs</h1>

 </div>
</div>
 <section class="section section-team">

 <div class="content rellax" data-rellax-speed="1.75">

   <div class="team-item">

     <img src={pixelcowboy} alt="Loading.."/>

       <h2>Clint Eastwood</h2>

    

        <p>Clint Eastwood - the good. Here to build a community of gunslinger cowboys while searching for 
          the unknown tomb of the last Pixel Cowboy!
      Hanging out in the saloon, you can catch him smoking a cigar while downing a smooth glass of whiskey.</p>  
   </div>
 </div>

 <div class="content rellax" data-rellax-speed="1.5">

   <div class="team-item">

     <img src={pixelcowboy} alt="Loading.."/>

       <h2>Belle Starr</h2>

         <p>Belle Starr, the "Bandit Queen". A true outlaw that is known for being a cattle thief and stealing horses. 
           But little did they know that she was doing this for the Pixel Cowboys so they could ride into the sunset together. 
           Now it's done, and it's time to accomplish new crimes and gather more outlaws. Get ready and saddle up.
         </p> 
     </div>
   </div>
 <div class="content rellax" data-rellax-speed="1.25">

     <div class="team-item">

     <img src={pixelcowboy} alt="Loading.."/>

       <h2>Wyatt Earp</h2>

         <p>Wyatt Earp is a famous sheriff who brought the law to Tombstone, you probably find him at the saloon with his most trusted gunslingers.
         </p> 
   </div>

 </div>
 
 <div class="content rellax" data-rellax-speed="1">

   <div class="team-item">

     <img src={pixelcowboy} alt="Loading.."/>

       <h2>Billy The Kid</h2>

         <p> This sheriff is out in the desert right now and will be back soon.
         </p> 
     </div>
 </div>
 <div class="content rellax" data-rellax-speed="0.75">

<div class="team-item">

  <img src={pixelcowboy} alt="Loading.."/>

    <h2>Harmonica</h2>

      <p>Harmonica, the mysterious. He is driven by an obsession to take revenge on the whales who scamwicked him as a child, and create a community where the small cowboys get a piece of the big cake. They won't see it coming.
      </p> 
  </div>
</div>
  

 </section>
   

</div>

   <footer class="footer">
     <ul>
       <li><a href="#">Faq</a></li>
       <li><a href="#">Terms of Use</a></li>
       <li><a href="#">Privacy Notice</a></li>
       <li><a href="#">Contact Us</a></li>
       <li><a href="#">About Us</a></li>
     </ul>
   </footer>
   </div>
     
  );
}
}

export default App;




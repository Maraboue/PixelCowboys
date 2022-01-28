import './style.css';
import React from 'react';
import * as THREE from 'three';
import Typewriter from 'typewriter-effect';
import NavigationBar from './components/navbar/navbar';

// Images 

import moon1 from './moonCopy1.jpg';
import cowboy1 from './pixelCowboy1.png';
import cowboy24 from './assets/images/24.png';
import cowboy160 from './assets/images/160.png';
import cowboy246 from './assets/images/246.png';
import cowboy527 from './assets/images/1071.png';
import cowboy638 from './assets/images/638.png';
import cowboy5582 from './assets/images/5582.png';
import cowboy4957 from './assets/images/4957.png';
import cowboy71 from './assets/images/71.png';
import cowboy19 from './assets/images/19.png';
import cowboy1080 from './assets/images/1080.png';
import cowgirl from './assets/images/cowgirl.png';
import normal from './normal.jpg';
import saloon from './assets/images/saloon.jpg';
import discord from './assets/images/discord.png';
import medium from './assets/images/medium.png';
import twitter from './assets/images/twitter.png';


// Audio

import audio1 from './Lone_Rider.mp3'


class App extends React.Component {

  componentDidMount() {

    const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


var stream = audio1;

var audioLoader = new THREE.AudioLoader();
var listener = new THREE.AudioListener();
var audio = new THREE.Audio(listener);
audioLoader.load(stream, function(buffer) {
    audio.setBuffer(buffer);
    audio.setLoop(true);
    audio.setVolume(0.15);
    audio.play();
});

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);





function addStar() {

  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xd1d117, metalness:0.7});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(400));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

// Background

const saloonTexture = new THREE.TextureLoader().load(saloon);
scene.background = saloonTexture;

// Avatar

const moonTexture1 = new THREE.TextureLoader().load(cowboy527);
const moonTexture = new THREE.TextureLoader().load(moon1);
const normalTexture = new THREE.TextureLoader().load(normal);



/*const cowboy = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5),
new THREE.MeshStandardMaterial({
  map: moonTexture1,
 // normalMap: normalTexture1,
}));

scene.add(cowboy);

*/


const cowboyTexture2 = new THREE.TextureLoader().load(cowboy5582);

const cowboy2= new THREE.Mesh(new THREE.BoxGeometry(7, 7, 7), new THREE.MeshBasicMaterial({ map: cowboyTexture2 }));

scene.add(cowboy2);

const cowboyTexture3 = new THREE.TextureLoader().load(cowboy24);

const cowboy3 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture3 }));

scene.add(cowboy3);

const cowboyTexture4 = new THREE.TextureLoader().load(cowboy160);

const cowboy4 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture4 }));

const cowboyTexture5 = new THREE.TextureLoader().load(cowboy246);

const cowboy5 = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), new THREE.MeshBasicMaterial({ map: cowboyTexture5 }));

scene.add(cowboy5);

const cowboyTexture6 = new THREE.TextureLoader().load(cowboy527);

const cowboy6 = new THREE.Mesh(  new THREE.SphereGeometry(3, 32, 32),
new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: normalTexture,
}));
  
scene.add(cowboy6);

const cowboyTexture7 = new THREE.TextureLoader().load(cowboy638);

const cowboy7 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture7 }));

scene.add(cowboy7);

const cowboyTexture8 = new THREE.TextureLoader().load(cowboy638);

const cowboy8 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture8 }));

scene.add(cowboy8);

const cowboyTexture9 = new THREE.TextureLoader().load(cowboy638);

const cowboy9 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture9 }));

scene.add(cowboy9);

const cowboyTexture10 = new THREE.TextureLoader().load(cowboy4957);

const cowboy10 = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ map: cowboyTexture10 }));

scene.add(cowboy10);

const cowboyTexture11 = new THREE.TextureLoader().load(cowboy4957);

const cowboy11 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ map: cowboyTexture11 }));

scene.add(cowboy11);

// Moons

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

const moon2= new THREE.Mesh(  new THREE.SphereGeometry(3, 32, 32),
new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: normalTexture,
}));

scene.add(moon2);

const moon3= new THREE.Mesh(  new THREE.SphereGeometry(3, 32, 32),
new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: normalTexture,
}));

scene.add(moon3);


// Movement


moon.position.z = 65;
moon.position.setX(-10);

moon2.position.z = 155;
moon2.position.setX(-52);

moon3.position.z = 325;
moon3.position.setX(-22);

cowboy2.position.z = 0;
cowboy2.position.setX(-25);

cowboy3.position.z = 15;
cowboy3.position.setX(33);
cowboy3.position.setY(32);


cowboy4.position.z = 25;
cowboy4.position.setX(111);
cowboy4.position.setY(5);

cowboy5.position.z = 135;
cowboy5.position.setX(-6);
cowboy4.position.setY(3);

cowboy6.position.z = 45;
cowboy6.position.setX(-233);
cowboy6.position.setY(-11);

cowboy7.position.z = 55;
cowboy7.position.setX(22);
cowboy7.position.setY(-5);

cowboy8.position.z = 100;
cowboy8.position.setX(-120);
cowboy8.position.setY(-5);

cowboy9.position.z = 35;
cowboy9.position.setX(-150);
cowboy9.position.setY(3);

cowboy10.position.z = 155;
cowboy10.position.setX(-222);
cowboy10.position.setY(3);

cowboy11.position.z = 155;
cowboy11.position.setX(-222);
cowboy11.position.setY(3);

// Scroll Animation

const moveCamera = function() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  moon2.rotation.x += 0.05;
  moon2.rotation.y += 0.075;
  moon2.rotation.z += 0.05;
  moon3.rotation.y += 0.075;
  moon3.rotation.z += 0.05;

  cowboy2.rotation.y += 0.01;
  cowboy2.rotation.z += 0.01;
  cowboy3.rotation.y += 0.01;
  cowboy3.rotation.z += 0.01;
  cowboy4.rotation.y += 0.01;
  cowboy4.rotation.z += 0.01;
  cowboy5.rotation.y += 0.01;
  cowboy5.rotation.z += 0.01;
  cowboy6.rotation.y += 0.01;
  cowboy6.rotation.z += 0.01;
  cowboy7.rotation.y += 0.01;
  cowboy7.rotation.z += 0.01;
  cowboy8.rotation.y += 0.01;
  cowboy8.rotation.z += 0.01;
  cowboy9.rotation.y += 0.01;
  cowboy9.rotation.z += 0.01;
  cowboy10.rotation.y += 0.01;
  cowboy10.rotation.z += 0.01;
  cowboy11.rotation.y += 0.01;
  cowboy11.rotation.z += 0.01;

  camera.position.z = t * -0.05;
  camera.position.x = t * -0.0001;
  camera.rotation.y = t * -0.00008;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

const animate = function() {
  requestAnimationFrame(animate);


  moon.rotation.x += 0.005;

  renderer.render(scene, camera);
}
  animate();

  
 
  }



render(){
  return (

      
    <div>
    
    <canvas id="bg"></canvas>   

    <div class="navbar">
      <NavigationBar/>
      </div>
    <main>

      <header>
        <h1>Pixel Cowboys Community Club.</h1>
        <p><Typewriter
      options={{
    strings: ['Howdy Cowboy!', 'Welcome to the community!'],
    autoStart: true,
    loop: true,
  }}
/></p><center><a href="/mint" class="btn-mint">MINT NFTs</a></center>  
      </header>
    
      <blockquote>
        <p>A Wild West NFT Collection Consisting of <strong>7000</strong> Unique and Randomly Generated <strong>Pixel Cowboys</strong>.</p>
      </blockquote>

      <section id="section-community">
        <h2>📜Community</h2>
        <h3><img id="community-img" src={discord} alt="Discord "/></h3>
        <p>
         Join our Discord server, hang out with other cowboys, share your adventures, plan a heist or just stop by to have some whiskey. It all happens in the Saloon!🤠
       </p><center>
       <a  href="https://discord.gg/PfWgPDnq7F" class="btn btn-primary">Join Discord</a></center>
        <h3><img id="community-img" src={twitter} alt="Twitter "/></h3>
        <p>
         Follow us on Twitter to get fast updates and news about the Pixel Cowboys and things to come for the community.🤠
       </p><center>
       <a  href="https://twitter.com/PixelCowboyz" class="btn btn-primary">Follow Twitter</a></center>
        <h3><img id="community-img" src={medium} alt="Medium "/></h3>
        <p>
         Stay up to date by reading our blog over at Medium and get deeper insights in the progress for the project.🤠 
       </p><center>
       <a  href="https://dynamic-network.medium.com/" id="button" class="btn btn-primary">Read Medium</a></center>

      </section>

      <section class="light" id="section-about">
      <center><h2>🤠 About the Cowboys 🤠</h2></center>

<h3>Limited Collection </h3>
<p>
Only <strong id="mint-date">7000</strong> Pixel Cowboys will ever be minted. Each cowboy will be unique and randomly 
        generated by code. 
</p>
<h3>Fair Minting</h3>
<p id="about-p">
        We want to reward early adopters. Because of this, we will have a <strong>FREE MINT</strong> for the early gunslingers in the community.
        After <strong>25%</strong> minted, the price will be open to the public for a fair price of <strong>0.025 ETH</strong>.
        This is because the community is what's important, not the revenue from the minting. 
      </p>
<h3>Community Driven</h3>
<p id="about-p">
        The cowboys have each others back. We believe that the <strong id="mint-date">Pixel Cowboys 
        community</strong> knows what's best for the future of the cowboys. This means that all the changes in the project
        runs through every cowboy as they has a saying.
      </p>

      </section>

      <blockquote>
        <p>You see, in this world, there’s two kinds of people, my friend – those who <strong>WAGMI</strong> , and those who <p id="nagmi">NGMI</p>.<br/>-Clint Eastwood.</p>
      </blockquote>

      
      <section class="left" id="section-roadmap">
        <h2>🗺️ Road Map</h2>

        <h3>Launch of the Pixel Cowboys</h3>
  
        <p>⭐    ⭐     ⭐<br/><br/> Begin the minting of the cowboys ✅<br/><br/> ⭐    ⭐     ⭐</p>
  
        <h3>25 % Minted 🚀</h3>
        <p>The early supporters of the Pixel Cowboys Community Club will be rewarded with a <strong>FREE</strong> mint. This is because our vision is to build a <strong>community driven</strong> project where revenue is secondary and community comes first.
            After 1750 cowboys has been minted, we will start <strong>airdropping</strong> tokens and NFTs to the early holders. </p> 

        <h3>50 % Minted 🚀</h3>

        <p>When 50% is reached, a <strong>BIG ETH giveaway</strong> will take place. We dont believe in one holder winning a massive price, but instead we want to give this to 
          20 cowboy holders, making your chance greater to win some of the ETH. Along with this, we will also giveaway <strong>5 Pixel Cowboys NFTs</strong> to 5 cowboy holders.</p>

        
          <h3>100%  Minted 🚀</h3>

        <p>After all the cowboys has been minted, a <strong>MEGA ETH giveaway</strong> will occur. This giveaway will be distributed to 50 % of the cowboy holders, making the 
          chances for each holder to win ½. We believe that this is the best way to do it, as we want as many as possible in the community to benefit from 
          the giveaways. We will also giveaway <strong>10 Pixel Cowboys NFTs</strong> to 10 cowboy holders. After this, a new road map will be developed - <strong>ROAD MAP 2.0</strong></p>
      </section>

      <section class="left" id="section-team">
        <h2>🤠 Sheriffs</h2>


        <div class="team-container">

          <div class="team-item">

      <img src={cowboy19} alt="Loading.."/>

            <h2>Clint Eastwood</h2>
              <p>Clint Eastwood - <strong>The Good</strong>. Here to build a community of gunslinger cowboys while searching for 
                the unknown tomb of the last Pixel Cowboy!
            Hanging out in the saloon, you can catch him smoking a cigar while downing a smooth glass of whiskey.</p>  
        </div>

            <div class="team-item">

      <img src={cowgirl} alt="Loading.."/>

        <h2>Belle Starr</h2>

        <p>Belle Starr, the <strong>Bandit Queen</strong>. A true outlaw that is known for being a cattle thief and stealing horses. 
          But little did they know that she was doing this for the Pixel Cowboys so they could ride into the sunset together. 
          Now it's done, and it's time to accomplish new crimes and gather more outlaws. Get ready and saddle up.
        </p>  
      </div>
        
      <div class="team-item">

<img src={cowboy1080} alt="Loading.."/>

       <h2>Billy The Kid</h2>

        <p>
          Billy The Kid, <strong>the Infamous</strong>. He has traveled the west and wreaked havoc wherever he went. 
          Nowadays you'll find him in the saloon with his trusty gunslingers and his gold bars. However, he may bring havoc once again
        </p>  
</div>

<div class="team-item">

<img src={cowboy71} alt="Loading.."/>

      <h2>Harmonica</h2>

      <p>Harmonica, <strong>the Mysterious</strong>. He is driven by an obsession to take revenge on the whales who scamwicked him as a child, and create 
        a community where the small cowboys get a piece of the big cake. They won't see it coming.
      </p> 
</div>
        </div>
      </section>

      <blockquote>
        <p>See you in <strong>the Saloon</strong> Cowboy!</p>
      </blockquote>

    </main>
    <script type="module" src="/main.js"></script>

  </div>
    
  );
}
}


export default App;




import React from "react";

import Navbarlogin from "../components/navbarlogin";
import './recentlyplayed.css'
import Foot from "../components/foot";
import image from "../images/Union.png"
import audioone from "../audio/اشهر اغاني رمضان  القديمة مجمعه - جودة عالية (128 kbps).mp3"
import imageaudio from "../images/Rectangle 53.png";
import imageaudiotwo from "../images/Rectangle 54.png";
import imageaudiothree from "../images/Rectangle 55.png";

const Recentlyplayed = () => {
    return (
<>
<Navbarlogin />
<h3>Daily support for your mental health</h3>
<a href="/homelogin">Home</a>
<span>{'>>'}</span>
<span className="sp">Relax</span>
<span>{'>>'}</span>

<span className="rec">Recently played</span>
<h3 className="song">Recently played</h3>
<input className="search">
</input>
<a className="show" href="/">Show all</a>
<div className="search-icon">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
<div className="cover">
<img src={imageaudio} className="image-audio" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-one" controls></audio>
</div>

<div className="cover-one">
<img src={imageaudiotwo} className="image-audio-two" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-two" controls></audio>
</div>

<div className="cover-six">
<img src={imageaudiothree} className="image-audio-seven" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-seven" controls></audio>
</div>

<div className="cover-seven">
<img src={imageaudiotwo} className="image-audio-eight" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-eight" controls></audio>
</div>

<div className="cover-three">
<img src={imageaudio} className="image-audio-four" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-four" controls></audio>
</div>
<div className="cover-four">
<img src={imageaudiotwo} className="image-audio-five" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-five" controls></audio>
</div>
<div className="cover-five">
<img src={imageaudio} className="image-audio-six" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-six" controls></audio>
</div>

<div className="cover-two">
<img src={imageaudiothree} className="image-audio-three" alt="" />
<h3>ramadan</h3>
<audio src={audioone} className="audio-three" controls></audio>
</div>
<img src={image} className="back-image" alt="" />


        
 <Foot /> 
</>

    );
    }  
    export default Recentlyplayed;
import React from "react";

import Navbarlogin from "../components/navbarlogin";
import Navknowmore from "../components/navknowmore";
import './articles.css'
import image from "../images/Union.png"
import imageone from "../images/Rectangle 64.png"
import Foot from "../components/foot";

const Articles = () => {
    return (
<>
<Navbarlogin />
<h3>Your Mental Health is a Priority.</h3>
<a href="/homelogin">Home</a>
<span>{'>>'}</span>
<span className="spn-spn">Know more</span>
<span>{'>>'}</span>
<span className="spn">Articles</span>


<input className="search-one">
</input>
<div className="search-icon-two-two">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
<div className="one-col"><a className="one-a" href="/articles">Articles</a></div>

<div className="two"><a className="video-two" href="/">Video</a></div>
<div className="three"><a className="book-three" href="/">Book</a></div>
{/* <Navknowmore /> */}
<img src={image} className="back-image" alt="" />

<img src={imageone} className="imageone-aa" alt="" />
<h3 className="cane">Why Writing Can Help Heal Depression</h3>
<p className="str">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me... <a href="/articlesreadmore">read more</a></p>

<img src={imageone} className="imageone-as" alt="" />
<h3 className="cane-one">Why Writing Can Help Heal Depression</h3>
<p className="str-one">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me... <a href="/articlesreadmore">read more</a></p>

<img src={imageone} className="imageone-af" alt="" />
<h3 className="cane-two">Why Writing Can Help Heal Depression</h3>
<p className="str-two">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me... <a href="/articlesreadmore">read more</a></p>



 <Foot />
</>

    );
    }  
    export default Articles;
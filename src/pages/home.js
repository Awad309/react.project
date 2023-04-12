
import Navbar from "../components/Navbar"
import Foot from "../components/foot"
import theImageone from "../images/4.png"
import theImagetwo from "../images/5.png"
import theImageonetwo from "../images/bro.png"
import theImagetwothree from "../images/1.png"
import theImagethreeone from "../images/2.png"
import theImagefour from "../images/6.png"
import theImagefourone from "../images/3.png"
const Home = () => {
  return (
   <>
   <Navbar />

   <section className="home">
  
   <div className="landing">
    <div className="intro-text">
      
      <img src={theImageonetwo} className="imageonetwo" alt=""/>

      <h3>Improve The Life Quality In Regular Sessions With A Psychologist</h3>
      <button>Talk Up</button>
      <img src={theImageone} className="imageone" alt=""/>
      
    </div>
  </div> 
   <div className="center">
    <div className="intro-text">
    <img src={theImagetwothree} className="imagetwothree" alt=""/>

      <h3>Know More</h3>
      <p>
        Find Guidance Towards Growth And Healing With Our Videos And Articles.
        Begin Your Journey Towards A Happier You.
      </p>
      <button>Explore</button>
      
        <img src={theImagetwo} className="imagetwo" alt="" />
      </div>
    </div>

  
   <div className="intro-two">
    <div className="content">
      <h3>Get Better Together</h3>
      <p>Express Yourself In A Safe Space</p>
      <button>Share Your Thought</button>
      
        <img
          src={theImagethreeone} className="imagethreeone" alt=""
        />
      
    </div>
  </div> 
   <div className="intro-three">
    <div className="content">
    <img src={theImagefour} className="imagefour" alt="" />

      <h3>Take A Rest</h3>
      <p>Turn Off The World And Turn On The Music</p>
      <button>Relax</button>
      <img src={theImagefourone} className="imagefourone" alt="" />

      </div>
    </div>
  
</section>
<Foot />
   </>
  );
}

export default Home;

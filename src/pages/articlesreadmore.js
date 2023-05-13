import React from "react";

import Navbarlogin from "../components/navbarlogin";
import Navknowmore from "../components/navknowmore";
import './articlesreadmore.css'
import imageone from "../images/Rectangle 64.png"
import Foottwo from "../components/foottwo";

const Articlesreadmore = () => {
    return (
<>
<Navbarlogin />
<h3>Your Mental Health is a Priority.</h3>
<a href="/homelogin">Home</a>
<span>{'>>'}</span>
<span className="spn-spn">Know more</span>
<span>{'>>'}</span>
<span className="spn-">Articles</span>
<span>{'>>'}</span>
<span className="spn-spn-spn">Why Writing Can Help Heal Depression</span>


<input className="search-two">
</input>
<div className="search-icon-two">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
<div className="one-col"><a className="one-a" href="/articles">Articles</a></div>

<div className="two"><a className="video-two" href="/">Video</a></div>
<div className="three"><a className="book-three" href="/">Book</a></div>
{/* <Navknowmore /> */}
<h3 className="writing">Why Writing Can Help Heal Depression</h3>
<img src={imageone} className="imageone-aaa" alt="" />
<p className="stroid">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me. When I was just starting this blog, I wrote about the fear of writing or even approaching my desk to get started. I’d sit there writing at a more intellectual level – circling the pain at a safe distance. But each time I closed in to confront, feel and work through it all, I’d start to shut down. Either my mind would blank out, emptying itself of all thought, or I’d distract myself with any number of inconsequential details or I’d get close to panic or I’d start dozing off. In all these ways, I stopped myself from expressing the deepest feelings.

I worked with a therapist on this issue for a long time, came up with the image that helped me cross into a different level of feeling/ thought/ responding. In this post, I described crossing a stream and feeling revived by the momentary immersion of my feet in the cold rushing water of .
</p>
<p className="wilderness">
a wilderness stream. I used that image to change the feeling of writing – a crossing into healing instead of danger. After so many efforts over years and years, it finally worked, and the healing this blog has brought me is the result. That is why I’m such a believer that writing can help heal depression. But not just any writing
 
 James Pennebaker is one of the few psychologists who has researched the question of why writing can be helpful in healing. In Opening Up: The Healing Power of Expressing Emotions, he summarizes what he found about writing after initiating studies into the health effect of emotional inhibition.
 </p>
<h3 className="self">Self-Harm from Holding Back</h3>
<p className="long">He had long suspected that holding in powerful emotions connected to disturbing and traumatic events could have serious effects on physical and psychological health. Through survey research, he found that people who had been able to express their deepest feelings and talk through their experiences had far fewer health problems following the event than those who did not.

One of the reasons he identified went directly to my own experience. Holding back powerful feeling from physical expression takes a lot of hard work. The body reacts automatically to some emotions. The crying response, for example, is as unwilled as breathing, and forcing the body not to express itself in this way requires physical restraint and puts enormous pressure on both body and mind. As a long-term stressor, inhibition has been associated with numerous problems, such as asthma, migraine headaches, eating disorders and high blood pressure.

Restraining emotions can also damage thought processes. By avoiding expression, thinking tends to narrow to the worst aspects of painful experience, ignores a broader view and fails to integrate it into other dimensions of living. As I often found, that narrow thinking readily becomes obsessive, and the mind can’t break away from the events and emotions that are kept from others. It ruminates in ways that never solve a problem but only intensify its harmful psychological impact.
</p>
<h3 className="does">Talking Helps, So Does Writing</h3>
<p className="found">Pennebaker found that the value of expressing deep feelings stemmed first from the willingness to confront the disturbing emotions. By confrontation, he means actively thinking and talking about the experiences and acknowledging the feelings they’ve stirred. Putting those feelings into words makes it easier to understand what has happened and eventually assimilate it into one’s life.

But even with this willingness to confront their feelings, many can’t or won’t talk about what they’re going through. Perhaps the power of inhibition has become such a well-established habit over many years that they can’t break it by openly talking. Others believe talking about problems is a sign of weakness or even makes the suffering worse by “giving into” it and “wallowing.” This turned out to be a problem for Pennebaker himself.

When faced with his own emotional crisis of deep depression, Pennebaker – a psychologist working in a department full of other psychologists – refused to seek therapy. It would have been a sign of weakness, he thought, or perhaps a professional embarrassment. Whatever his reasons, he balked at following the advice he always gave to others.
 
Instead, he wrote about his experiences and his deepest feelings relating to all the major relationships and traumas he had been through. Every day for a week, he wrote and gradually felt freer. Not only did his depression begin to lift, but he also rediscovered a sense of purpose and meaning and reaffirmed the love he felt for his wife. That’s how deeply he found that writing can help heal depression.

Years later, reflecting back on that experience, he used his research to identify reasons for this beneficial effect of writing in addition to the initial willingness to confront unexpressed feelings.</p>

 {/* <Foot /> */}
 <Foottwo />
</>

    );
    }  
    export default Articlesreadmore;
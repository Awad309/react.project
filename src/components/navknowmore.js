import { Component } from "react"
import "./navknowmore.css"

class Navknowmore extends Component{
  render(){
      return(
        <>
<div className="one"><a className="one-a" href="/articles">Articles</a></div>

<div className="two"><a className="video-two" href="/">Video</a></div>
<div className="three"><a className="book-three" href="/">Book</a></div>
</>
  )
}
}

export default Navknowmore;
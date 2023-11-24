
import React , {useState} from "react";
import './index.css';

function Index(){
    const onclickupcase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
  
    }
    const handleonchange =(event)=>{
        setText(event.target.value)

    }
    const[text, setText] =useState();
return(
    <>
    <div className="container">

        <div className="m-3">
        <textarea className="from-control" value={text} placeholder="Enter a Text" id="mybox" onChange={handleonchange} rows="8"></textarea>
        <br/>
        <button className="btn btn-primary" onClick={onclickupcase}>click to upercase</button>
        </div>
        <p>{text}</p>
    </div>
    </>
);
}

export default Index;
import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
      //  console.log("upperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
       // setText("you have clicked on handleUp Click")
    }

    const handleLoClick = ()=>{
      //  console.log("upperCase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
       // setText("you have clicked on handleUp Click")
    }

    const handleClear = ()=>{
      //  console.log("upperCase was clicked" + text)
        let newText = "";
        setText(newText)
       // setText("you have clicked on handleUp Click")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        
       
    }

    const handleOnChange = (event)=>{
  //  console.log("on change")
    setText(event.target.value)
    }
    const [text, setText] = useState("");


  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'#202b54'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?"#042743":'white',color: props.mode==='dark'?'white':"#042743"}} onChange={handleOnChange} id="myBox"  rows="7"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
   
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#202b54'}} >
      <h2>Text summary</h2>
      <p>Total text :{text.length}</p>
      <p>Total Words :{text.split(" ").length}</p>
      <h2><u>Preview</u></h2>
        <p>{text.length>0?text:"please enter the text above to preview here..."}</p>
    </div>
    </>
  );
}

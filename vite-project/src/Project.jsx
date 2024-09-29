import { useState } from "react";



function Project(props) {
   
const[text,setText] = useState("Enter the Text");


let LowerCase=()=> {
       console.log("Lower Case was Clicked" + text);
       let newText  = text.toLowerCase();
       setText(newText);
}

let UpperCase=() => {
     console.log("Upper Case was Clicked" + text);
       let newText = text.toUpperCase();
       setText(newText);
}


let Clear=()=> {
       console.log("Clear button Ws Clicked")
        setText(" ");
}

const Change=(event) => {
      console.log("on Change");
       setText(event.target.value);
}

     return(

          <>
          
          <h2 className="Texti" >Enter the text to analyze below </h2>

          <textarea className="Type" value={text}   onChange={Change} > </textarea>
          
          <div>
          <button className="Upbt"   onClick={UpperCase} >  Convert to Upppercase</button>
          <button className="Lwbt"   onClick={LowerCase} >  Convert to LowerCase</button>
          <button className="Clear"   onClick={Clear} >  Clear text </button>
              
          </div>
     
         <h2 className="Summary" >Your text Summary</h2>
   
         <p  className="Time" > {text.split(" ").length} Words {text.length}   character </p>
         <p  className="Text-sum" > {0.003 * text.split(" ").length} Minute read </p>

             <p className="Preview" >Preview</p>
           <p className="TextSummary" >{text}</p>
          </>
     );




}

export default Project;
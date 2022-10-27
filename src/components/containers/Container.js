import { useState } from "react";

const Container = ({children, ...props}) => {

  

    return (
        <div className="bg-white border border-red-500">
            <select value={props.lang} onChange={props.onLangChange}>
               <option value="en">English</option>
               <option value="it">Italian</option>
            </select>
            <hr></hr>
           
            {props.title}
          
            {children}
        </div>
    )
}
export default Container;
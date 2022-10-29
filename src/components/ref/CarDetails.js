
//Create a CarDetails uncontrolled form that uses the HTML Form API
// to allow the user to insert details about a car, such as the model, the year and the color.
// Allow the form to receive a initialData prop that contains the default values of each input,
// and reset the form every time the initialData value changes.

import { useRef, useEffect, useState } from "react";



function CarDetails(props) {
  

    const {initialDataModel= "BMW", initialDataYear= 2022, initialDataColor="blue" } = props
   
    const ModelInputRef = useRef();
    const YearInputRef = useRef();
    const ColorInputRef = useRef();

    // oppure per settare i valor di default:

    // const ModelInputRef = useRef("BMW");
    // const YearInputRef = useRef(2022);
    // const ColorInputRef = useRef("Blue");
    // in questo modo significa ad esempio che ModelInputRef.current = "BMW"

    // e nel return indicherò:
    // defaultValue={ModelInputRef.current} ecc....



    function submitForm(event) {
        event.preventDefault();
        
        const newData = {
            model: ModelInputRef.current.value,
            year: YearInputRef.current.value,
            color: ColorInputRef.current.value
        }
        console.log(newData);

        ModelInputRef.current.value = "";
        YearInputRef.current.value = "";
        ColorInputRef.current.value = "";
    }

 
 
    
    return (
        <form onSubmit={submitForm}>
            <label>The best car should be:</label>
            <input type="text" ref={ModelInputRef} defaultValue={initialDataModel}></input>
            <input type="text" ref={YearInputRef} defaultValue={initialDataYear}></input>
            <input type="text" ref={ColorInputRef} defaultValue={initialDataColor}></input> 
            <button>Submit</button>  
        </form>
    )

  

   
}
export default CarDetails;






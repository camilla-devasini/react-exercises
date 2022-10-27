

const Container = ({children, ...props}) => {

  

    return (
        <div className="bg-white border border-red-500">
            <select value={props.lang} onChange={props.onLangChange}>
               <option value="English">English</option>
               <option value="Italian">Italian</option>
            </select>
            <hr></hr>
           
            {props.title}
          
            {children}
        </div>
    )
}
export default Container;
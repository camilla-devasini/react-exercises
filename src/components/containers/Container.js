
const Container = ({children, ...props}) => {

    return (
        <div className="bg-white border border-red-500">
           {props.title}
           {children}
        </div>
    )
}
export default Container;
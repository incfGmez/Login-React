export const Alert = ({message, type})=>{
    return(
        <div className={`alert-alert-${type}`}>
            {message}
        </div>
    )
}
import { useRouteError } from "react-router-dom";


const Error= () =>{
    const err = useRouteError();
    console.log(err)
    // const color = {
    //     color:"red"
    // }
    return (
        <div>
            <h2 style= {{color : "red"}}> {err.status} : {err.statusText}</h2>
            <h3> {err.data}</h3>
        </div>
    )
}

export default Error;
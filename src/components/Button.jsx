import { useEffect, useState } from "react";

const Button = (props) => {
  const [counterArr, setCounterArr] = useState([]);

useEffect(() =>{
    fetchData();
},[props.counter])


function fetchData(){
       const arr = [...counterArr];
       arr.push(props.counter);

       setCounterArr(arr);

 }

  return (
    <div>
      {counterArr.map((val) =>  <button> <p>Button {val}</p></button>
      )}

      {/* <button>{props.click}</button> */}
    </div>
  );
};

export default Button;

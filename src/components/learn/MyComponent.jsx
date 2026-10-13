///jsx
//fragment

import './style.css'
const MyComponent = () =>{
    // const hoidanit="eric"; //string
    // const hoidanit=25; //number
    // const hoidanit=true; //boolean
    // const hoidanit=undefined; 
    // const hoidanit=null; 
    const hoidanit=[1,2,3]
    // const hoidanit={
    //     name: "hoinguyenmanhdung",
    //     age: 25
    // }


    return (
        <>
           <div>{JSON.stringify(hoidanit)} Nguyen Manh Dung la vua IT</div>
           <div>{console.log("NGUYENHYHY")}</div>
           <div className="child"
               style={
                  {borderRadius: "10px"}
               }
           >child</div>
        </>
       
    );
}



export default MyComponent;
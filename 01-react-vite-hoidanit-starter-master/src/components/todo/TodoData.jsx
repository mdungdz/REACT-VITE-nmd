const TodoData=(props)=>{
    //props là 1 biến object {}
    // {
    //     name: "ERIC",
    //     age: 25,
    //     data: {}
    // }
    const {name, age, data}=props;
    //C2 const name=props.name;
    // const age=props.age;
    // const data=props.data;

    
    //console.log(">>> check props",props);
    return(
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Age {age}</div>
            <div>Data: {JSON.stringify(data)}</div>
        </div>
    )
}
export default TodoData;
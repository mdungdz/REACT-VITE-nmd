const TodoData=(props)=>{
    //props là 1 biến object {}
    // {
    //     name: "ERIC",
    //     age: 25,
    //     data: {}
    // }
    const {todoList}=props;
    //C2 const name=props.name;
    // const age=props.age;
    // const data=props.data;

    
    console.log(">>> check props",todoList);
    return(
        <div className='todo-data'>
            {todoList.map((item, index)=>{
                return(
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>)
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData;
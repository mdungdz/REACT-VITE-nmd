import UserForm from "../components/user/user_form";
import UserTable from "../components/user/user_table";

const UsersPage = ()=>{
    return(
        <div style={{padding: "20px"}}>
            <UserForm/>
            <UserTable/>
            
        </div>
    )
}

export default UsersPage;
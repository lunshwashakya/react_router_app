import { Outlet } from "react-router";

function AuthLayout () {
    return (
        <div style={{border:"1px solid #eee", margin:"10px", padding:"10px", margin:"10px auto", width:"200px"}}>
            <Outlet>

            </Outlet>
        </div>
    );
}

export default AuthLayout;
import { Outlet } from "react-router";


function ProjectLayout() {
    return (
        <div style={{backgroundColor:"#eee", padding:"10px", }}>
            <Outlet />  
        </div>
    )
}

export default ProjectLayout;
import { Link, useSearchParams } from "react-router";
import Header from "../components/Header";

function ProjectsHome() {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <h2>All Projects</h2>
            <h3>Searching for <strong>{searchParams.get("q")}, Page: {searchParams.get("offset")}, Count: {searchParams.get("limit")}</strong></h3>
            <Header />
            <ul>
                <li><Link to="/project/1"> Project 1</Link></li>
                <li><Link to="/project/2"> Project 2</Link></li>
                <li><Link to="/project/3"> Project 3</Link></li>
                <li><Link to="/project/4"> Project 4</Link></li>
                <li><Link to="/project/5"> Project 5</Link></li>
            </ul>
        </div>
    )
}

export default ProjectsHome;
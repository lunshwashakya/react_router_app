import { useParams } from "react-router";
import Header from "../components/Header";
import { Link } from "react-router";

function Project() {
    const {id} = useParams();

    return (
        <>
            <h2>Project { id }</h2>     
            <div style={{padding:"10px"}}>
                <Link to={`/project/${id}/edit`} style={{padding:"10px"}}>Edit</Link>
            </div>
            <Header />
        </>
    );
}

export default Project;
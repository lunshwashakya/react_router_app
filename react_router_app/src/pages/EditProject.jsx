import { useParams } from "react-router";
import Header from "../components/Header";


function EditProject() {
    const { id } = useParams();

    return (
       <>
        <h2>Edit Project {id} </h2>
        <Header />
       </>
    );
}

export default EditProject;
import Header from "../components/Header";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import schema from "../validationSchemas/consultation";

function Consultation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <h2>Book Free Consultation</h2>
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" {...register("firstName")} id="firstName" />
                    {errors.firstName?.message}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" {...register("lastName")} id="lastName" />
                    {errors.lastName?.message}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email")} id="email" />
                    {errors.email?.message}
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" {...register("company")} id="company" />
                    {errors.company?.message}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" {...register("phone")} id="phone" />
                    {errors.phone?.message}
                </div>
                <div>
                    <label htmlFor="projectDetails">Project Details</label>
                    <input type="text" {...register("projectDetails")} id="projectDetails" />
                    {errors.projectDetails?.message}
                </div>
                <div>
                    <label htmlFor="budget">Project expected budget(AUD)</label>
                    <ul>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("budget")} id="" value={"Less than $25K"}/>Less than $25K</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("budget")} id="" value={"$25K – $50K"}/>$25K – $50K</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("budget")} id="" value={"$50K – $100K"}/>$50K – $100K</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("budget")} id="" value={"$100K+"}/>$100K+</li>
                    </ul>
                </div>
                <div>
                    <label htmlFor="requiredService">Required Service</label>
                    <ul>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("requiredService")} value={"Web application development"} id="" />Web application development</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("requiredService")} value={"Mobile application development"} id="" />Mobile application development</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("requiredService")} value={"Software Testing"} id="" />Software Testing</li>
                        <li style={{listStyle:"none"}}><input type="radio" {...register("requiredService")} value={"Other"} id="" />Other</li>
                    </ul>
                </div>
                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Consultation;
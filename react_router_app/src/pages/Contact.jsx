import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import schema from "../validationSchemas/contact";

function Contact() {
    const {
        register,
        handleSubmit,
        watch, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <h2>Contact Us</h2>
            <h3>Hi {watch('firstName')}</h3>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" {...register("firstName")} />
                    {errors.firstName?.message}
                </div>

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" {...register("lastName")} />
                    {errors.lastName?.message}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register("email")} />
                    {errors.email?.message}
                </div>

                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" {...register("mobile")} />
                    {errors.mobile?.message}
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea {...register("message")} id="message"></textarea>
                    {errors.message?.message}
                </div>

                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
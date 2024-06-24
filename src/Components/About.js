
import Hero from "./Hero";

const About = () => {
    return (
        <>
            <Hero text="Just the about us Section" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
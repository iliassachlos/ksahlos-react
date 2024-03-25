import ContactCard from "../components/contact/contactCard";
import ProfileImage from "../components/contact/profileImage";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function ContactPage() {
    return (
        <div className="lg:flex justify-center items-center bg-[#F2F2F2] w-full h-full">
            <div className="flex justify-center items-center w-full lg:h-screen">
                <div
                    className='lg:mb-20 2xl:mb-96'
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <ProfileImage/>
                </div>
            </div>
            <div
                className="w-full p-4 mb-20 2xl:mb-96 mr-11 2xl:mr-96"
                data-aos="zoom-in-up"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
            >
                <div className='mb-10 p-2'>
                    <h1 className="text-4xl my-4">Contact</h1>
                    <hr className="mb-4 "/>
                    <p className="my-6 text-justify">
                        Now, as you were able to get a picture of who I am, how I work and what I can do, it is up
                        to
                        you to contact me and lay the foundation for a new and successful relationship.
                    </p>
                    <div>
                        <ContactCard/>
                    </div>
                </div>
                <div className='mt-10 p-2'>
                    <h1 className='text-3xl my-4'>Or Find Me on Social Media</h1>
                    <hr className="mb-4 "/>
                    <div className='my-3'>
                        <a href='https://www.facebook.com/konstantinos.sahlos'>
                            <FacebookIcon/>
                            <span className='mx-2'>Konstantinos Sahlos</span>
                        </a>
                    </div>
                    <div className='my-3'>
                        <a href='https://www.instagram.com/ksahlos_photo/'>
                            <InstagramIcon/>
                            <span className='mx-2'>Ksahlos_Photo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;

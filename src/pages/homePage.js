import { TypeAnimation } from "react-type-animation";

function HomePage() {
   const homepagePhoto =
      "https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2FThe%20river.jpeg?alt=media&token=82d50691-1451-45e4-9515-182ac9e80011";

   return (
      <>
         {homepagePhoto.length > 0 && (
            <div className="relative z-[-1] w-full h-screen">
               <img
                  className="object-cover w-full h-screen"
                  src={homepagePhoto}
                  alt="broken_photo"
                  loading="eager"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                     <h1 className="text-[25px] text-gray-500  font-thin" data-aos="zoom-in-up">
                        Fine - Art Photography
                     </h1>
                     <div
                        className="text-center italic font-thin text-gray-400 text-[12px]"
                        data-aos="zoom-in-up"
                        data-aos-delay="100"
                     >
                        <TypeAnimation
                           sequence={["Timeless steps beyond reality"]}
                           speed={30}
                           cursor={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default HomePage;

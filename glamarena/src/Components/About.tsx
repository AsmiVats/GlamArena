import poster from '/poster.jpg'; // Replace with actual image path

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  bg-poster-bg backdrop-blur-3xl bg-cover bg-center bg-no-repeat">
        <div className="flex items-center justify-center flex-wrap-reverse">
          {/* Image Section */}
          <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <img src={poster} alt="Fashion Competition" className="rounded-lg shadow-md" />
          </div>
          {/* Side Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4 text-[#F020B2] ">Glam Are<span className='text-[#ff912e]'>na with</span> <span className='text-[#F15512]'>Myntra</span></h2>
            <p className="text-lg text-gray-700 mb-4">
              Engage Gen Z on Myntra with a vibrant fashion design competition where users can unleash their creativity, vote for favorite designs, and win exciting rewards, including gift vouchers, exclusive sales access, and internships—plus, see top-voted designs brought to life and available for purchase!
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Segments:</h3>
            <ul className="list-disc ml-6">
              <li className="mb-2">Self-Made Designs: Submit unique, hand-crafted designs using traditional or digital drawing tools.</li>
              <li className="mb-2">AI-Generated Designs: Create designs using our website’s generative AI technology.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

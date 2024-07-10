
import genai from '/genai.png';
import self from '/self.png';

const Category = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">

            <div className="text-center mb-8">
                <h1 className="text-7xl font-libre-baskerville text-[#F020B2] font-bold mb-2">Welcome <span className='text-[#F15512]'>to A</span>rena</h1>
                <p className="text-2xl text-[#ff912e]">Choose a category to participate </p>
            </div>
            

            <div className="flex space-x-32">
                <div className="flex flex-col items-center">
                    <img src={genai} alt="Category 1" className=" w-80 h-80 object-cover mb-2" />
                    <p className="text-4xl text-[#ff912e] font-semibold">Gen <span className='text-[#F020B2]'>AI</span></p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={self} alt="Category 2" className="w-80 h-80 object-cover mb-2" />
                    <p className="text-4xl font-semibold text-[#F020B2]">Self <span className='text-[#F15512]'>Made</span></p>
                </div>
            </div>
        </div>
    );
};

export default Category;

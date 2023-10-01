import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';


function Title() {
  const shuffle = (array: string[]) => { 
      return array.sort(() => Math.random() - 0.5); 
  };
  const images = shuffle([image1, image2 ,image3, image4])

  return (
    <div className="mx-4 sm:mx-12">
      <div className='flex justify-evenly m-20'> 
        <div className='flex-shrink'>
          <div className="flex justify-start">
            <img src={images[0]} className='w-128 h-64 rounded-md opacity-80 hover:opacity-100 hover:scale-110 ease-out'></img>
          </div>
          <div className="flex justify-start">
            <img src={images[1]} className='w-128 h-64 rounded-md opacity-80 hover:opacity-100 hover:scale-110 ease-out'></img>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center text-7xl tracking-tight text-green-300 font-sans">brahmiLang</p><br/>
            <p className="text-center text-base text-gray-300">A toy programming language written in Python</p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#playground"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Playground
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rahul897/brahmilang"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-300 hover:bg-green-400 md:py-4 md:text-lg md:px-10"
                >
                  View Source
                </a>
              </div>
            </div>
            <div className="text-center text-gray-300 pt-6">
              Made by
              <a
                href="https://github.com/rahul897"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-green-700"> @rahul897 </span>
              </a>
            </div>
            <div className="text-center text-gray-300 pt-6">
              Connect
              <a
                href="https://www.linkedin.com/in/rahul-ira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-green-700"> @Rahul </span>
              </a>
            </div>
          </div>
        </div>
        <div className='flex-shrink'>
          <div className="flex justify-end">
            <img src={images[3]} className='w-128 h-64 rounded-md opacity-80 hover:opacity-100 hover:scale-110 ease-out'></img>
          </div>
          <div className="flex justify-end">
            <img src={images[2]} className='w-128 h-64 rounded-md opacity-80 hover:opacity-100 hover:scale-110 ease-out'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;

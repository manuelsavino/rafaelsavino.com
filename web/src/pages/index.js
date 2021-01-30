import Layout from '../components/layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center '>
        <div className='rounded-full bg-blue-500 overflow-hidden w-48 md:w-72 h-48 md:h-72 mt-5 md:mt-20'>
          <img className='w-auto' src='/avatar.svg' />
        </div>
        <h2 className='text-6xl md:text-7xl text-gray-800 font-extrabold font-sans text-center pb-6'>
          Howdy,
          <br />
          My Name is Rafael
        </h2>
        <h4 className='text-2xl text-gray-500 font-sans text-center pb-1'></h4>
        <h3 className='text-2xl text-gray-500 font-sans text-center px-20 pb-0 md:pb-10'>
          I'm a Dad / Dance Studio Owner / Marketing Nerd from Miami, FL 🌴
        </h3>

        <Link href='/slides'>
          <a className='bg-blue-500 text-white py-3 px-4 mt-4 rounded'>
            Get The Slides
          </a>
        </Link>
      </div>
    </Layout>
  );
};
export default Index;

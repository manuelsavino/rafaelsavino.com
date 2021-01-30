import Layout from '../components/layout';
import Head from 'next/head';

const Work = () => {
  return (
    <Layout>
      <Head>
        <script
          type='text/javascript'
          src='https://paperform.co/__embed.beta.min.js'
        ></script>
      </Head>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <img className='mt-5 w-full md:w-1/2' src='./hdereset.jpg' />
        <h2 className='text-gray-800 text-5xl font-extrabold font-sans mb-4 mt-5'>
          Get The Slides!
        </h2>
        <h5 className='text-center'>
          Fill out the form below and the slides will be emailed to you!
        </h5>
        <div data-paperform-id='5pa110tw'></div>
      </div>
    </Layout>
  );
};
export default Work;


import Image from 'next/image'


const Home = () => {
  return (
      <div className='justify-center'>
        <h1>Welcome to JaxDesigns</h1>
        <Image
          src="/images/Jaxx Jewelry-12.jpg"
          height={480}
          width={480}
          alt="Jax Jewelry"
        />  
        
      </div>
  );
}

export default Home;

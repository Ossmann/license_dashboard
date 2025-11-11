
import Welcome from '../components/Welcome';


export default async function Home() {

  return (
    <div className='relative h-screen flex flex-col justify-center items-center'>


      <div>
        Messages
        <Welcome />
        
      </div>

      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>

  );
}

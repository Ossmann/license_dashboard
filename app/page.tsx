import Navbar from './components/Topbar/Topbar';
import MobileNav from './components/Topbar/MobileNav';
import Welcome from './components/Welcome';

export default async function Home() {

  return (
    <div className='relative h-screen flex flex-col justify-center items-center'>

      <div>
        <Welcome />
      </div>

      

      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>

  );
}

import Navbar from './components/Topbar/Topbar';
import MobileNav from './components/Topbar/MobileNav';
import Welcome from './components/Welcome';
import SelectMenu from './components/SelectMenu'

export default async function Home() {

  return (
    <div className='relative h-screen flex flex-col justify-center items-center'>
      
      <div>
        <SelectMenu />
      </div>
{/* 
      <div>
        <Welcome />
      </div> */}

      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>

  );
}

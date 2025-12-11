import Typewriter from "./ui/Typewriter";
import DashWidgets from "./DashWidgets";

export default function Welcome(){
    return (
        <div className="text-center bg-gray-100 p-24 px-40 rounded-3xl ">
            <div className='text-4xl font-bold mb-10'>
                Saas Apps Dashboard
            </div>
            <div>
                <DashWidgets />
            </div>
        </div>
    );
  }
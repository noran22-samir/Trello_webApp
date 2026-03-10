import { Sidebar } from './templateComponents/Sidebar';
import { FSection } from './templateComponents/FeaturedCategoriesSection';
import { TempSection } from "./templateComponents/TempSection";
import Navbar from './NavBar';


const Templates=({ setScreen }) => {
    return (
        <>
            <Navbar />

            <div className='flex'>
                <Sidebar setScreen={setScreen} />

                <div className=' flex flex-1 flex-col '>
                    <FSection />
                    <TempSection />
                </div>

            </div>
        </>
    )
}
export default Templates;
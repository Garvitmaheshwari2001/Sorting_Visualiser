import "./Home.css";
import Sidebar from './Sidebar.js';
import Visuals from './Visuals.js';

const Home = () => {
    return ( 
        <div className="home">
            <Sidebar />
            <Visuals />
        </div>
     );
}
 
export default Home;
import NavigationBar from "../NavBar/NavigationBar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Homepage() {
    return(
        <>
        <NavigationBar/>
        <div className="container-homepage">
            <div className="flex-box1 stack"><Link to="/stack"  className="homepageDivs">Stack</Link><br /></div>
            <div className="flex-box1 queue"><Link to="/queue" className="homepageDivs">Queue</Link><br /></div>
            <div className="flex-box1 linkedlist"><Link to="/linkedlist" className="homepageDivs">LinkedList</Link><br /></div>
            <div className="flex-box1 bst"><Link to="/bst" className="homepageDivs">Bst</Link><br /></div>
            <div className="flex-box1 srtngvis"><Link to="/sortingvisualizer" className="homepageDivs">Sorting</Link><br /></div>
            <div className="flex-box1 pthvis"><Link to="/Pathfinding" className="homepageDivs">Pathfind</Link><br /></div>
            <div className="flex-box1 arr"><Link to="/arrays" className="homepageDivs">Arrays</Link><br /></div>
            <div className="flex-box1 factorial"><Link to="/Factorial" className="homepageDivs">Factorial</Link><br /></div>
        </div>
        </> 
    );
}

export default Homepage;
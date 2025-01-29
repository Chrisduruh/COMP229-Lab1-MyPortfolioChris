export default function Navbar(){
    return ( 
        <> <nav className="nav">
            <div className="navdiv">
            <img src="mylogo.png" alt="not found"  width={120} height={55}/> 
            
            </div>
            <a href="/" className="title"><h3>Duruh & Associates </h3></a>
        <ul>
            
            <li> <a href="/About"><h3>About Me</h3></a></li>
            <li><a href="/Projects"><h3>Our Projects</h3></a></li>
            <li>   <a href="/Services"><h3>Our Services</h3></a></li>
            <li className="mycontact"> <a href="/Contact"><h3>Contact Us</h3></a></li>
        </ul>
    </nav>
    </>
      );
}
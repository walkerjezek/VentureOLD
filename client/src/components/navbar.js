function Navbar(props) {
    return(
        <header class="header">
          <h1>Venture</h1>
          <div>
          <ul>
                <li>
                    <a href="#Weather Map" onClick={()=>props.setCurrentPage("weathermap")}>Weather Map</a>
                </li>
                <li>
                    <a href="#Profile" onClick={()=>props.setCurrentPage("profile")}>Profile</a>
                </li>
                <li>
                    <a href="#Finder" onClick={()=>props.setCurrentPage("finder")}>Finder</a>
                </li>  
                {/* <li>
                    <a href="#Classifieds" onClick={()=>props.setCurrentPage("classifieds")}>classifieds</a>
                </li> */}
              
          </ul>
          </div>
      </header>
    )
}
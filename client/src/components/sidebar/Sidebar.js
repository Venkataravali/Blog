import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sideImg" src="1.jpg" alt="" />
          <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>

          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-square-facebook"></i>
     <i className="sidebarIcon fab fa-square-twitter"></i>
     <i className="sidebarIcon fab fa-square-instagram"></i>
     <i className="sidebarIcon fab fa-square-pinterest"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar

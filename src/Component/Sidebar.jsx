import React from 'react';
import './styles.css'; // Import your CSS file
 


const Sidebar = () => {

    useEffect(() => {
        const btn = document.querySelector(".fa-bars");
        const sidebar = document.querySelector(".sidebar");
        const arrows = document.querySelectorAll(".arrow");
    
        btn.addEventListener("click", () => {
          sidebar.classList.toggle("close");
        });
    
        for (let i = 0; i < arrows.length; i++) {
          arrows[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("show");
          });
        }
    
        return () => {
          btn.removeEventListener("click", () => {
            sidebar.classList.toggle("close");
          });
    
          for (let i = 0; i < arrows.length; i++) {
            arrows[i].removeEventListener("click", (e) => {
              let arrowParent = e.target.parentElement.parentElement;
              arrowParent.classList.toggle("show");
            });
          }
        };
      }, []);

      
  return (
    <div>

    <div className="sidebar close">
      <div className="logo">
        <i className="fab fa-trade-federation"></i>
        <span className="logo-name">Tivotal</span>
      </div>

      <ul className="nav-list">
        <li>
          <a href="#">
            <i className="fab fa-microsoft"></i>
            <span className="link-name">Dashboard</span>
          </a>

          <ul className="sub-menu blank">
            <li><a href="#" className="link-name">Dashboard</a></li>
          </ul>
        </li>

        <li>
          <div className="icon-link">
            <a href="#">
              <i className="fab fa-codepen"></i>
              <span className="link-name">Courses</span>
            </a>
            <i className="fas fa-caret-down arrow"></i>
          </div>

          <ul className="sub-menu">
            <li><a href="#" className="link-name">Courses</a></li>
            <li><a href="#">Block Chain</a></li>
            <li><a href="#">Cryptography</a></li>
            <li><a href="#">Animation</a></li>
          </ul>
        </li>

        {/* Add other list items here */}

        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src="profile.jpg" alt="" />
            </div>

            <div className="name-job">
              <div className="name">Mary Karen</div>
              <div className="job">Web Developer</div>
            </div>
            <i className="fas fa-right-to-bracket"></i>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <Sidebar />
      <div className="home-section">
        <div className="home-content">
          <i className="fas fa-bars"></i>
          <span className="text">Dropdown Sidebar Menu</span>
        </div>

        <div style={{ height: '100vw', background: '#664444' }}>dufhdskjfhkdjhf</div>
      </div>
    </div>
    </div>
  
  );
}

export default Sidebar

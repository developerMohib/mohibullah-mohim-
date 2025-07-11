import { Link, Outlet, useLocation } from 'react-router-dom';
import './dashboard.css';
import logo from "../../assets/devmohib.png"
const AdminDashboard = () => {
    const location = useLocation();
  
  // Helper function to check if a path is active
  const isActive = (path) => {
    // Handle the dashboard case (empty path or exact match)
    if (path === '') {
      return location.pathname === '/admin' || location.pathname.endsWith('/admin/');
    }
    return location.pathname.includes(path);
  };
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">

                <div className="sidebar-header">
                    <Link to="/">
                        <div className="flex md:text-xl leading-none items-center">
                            <img className="mr-2" src={logo} alt="logo" />
                        </div>
                    </Link>
                </div>
                 <div className="sidebar-menu">
      <div className={`menu-item ${isActive('') ? 'active' : ''}`}>
        <i className="fas fa-home"></i>
        <Link to="">Dashboard</Link>
      </div>
      <div className={`menu-item ${isActive('analytics') ? 'active' : ''}`}>
        <i className="fas fa-chart-line"></i>
        <Link to="analytics">Analytics</Link>
      </div>
      <div className={`menu-item ${isActive('projects-update') ? 'active' : ''}`}>
        <i className="fas fa-users"></i>
        <Link to="projects-update">Projects</Link>
      </div>
      <div className={`menu-item ${isActive('blog-update') ? 'active' : ''}`}>
        <i className="fas fa-file-alt"></i>
        <Link to="blog-update">Blog Content</Link>
      </div>
      <div className={`menu-item ${isActive('subscriber') ? 'active' : ''}`}>
        <i className="fas fa-cog"></i>
        <Link to="subscriber">Subscribers</Link>
      </div>
    </div>
            </div>


{/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="user-actions">
                        <div className="notification">
                            <i className="fas fa-bell"></i>
                            <span className="notification-badge">3</span>
                        </div>
                        <div className="user-profile">
                            <div className="user-avatar">AD</div>
                            <span>Admin User</span>
                            <i className="fas fa-chevron-down" style={{ marginLeft: '10px' }}></i>
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>

        </div>
    );
};

export default AdminDashboard;
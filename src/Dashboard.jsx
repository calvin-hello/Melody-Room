import './Dashboard.css';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn"); // remove login flag
        navigate("/"); // go back to login page
    };

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div className="dashboard-logo">MyApp</div>
                <nav className="dashboard-nav">
                    <Link to="#">Home</Link>
                    <Link to="#">Profile</Link>
                    <Link to="#">Settings</Link>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </nav>
            </header>

            <main className="dashboard-main">
                <section className="welcome-section">
                    <h1>Welcome back, Calvin 👋</h1>
                    <p>Here’s a quick look at your dashboard today.</p>
                </section>

                <section className="stats-section">
                    <div className="stat-card">
                        <h3>Projects</h3>
                        <p>12</p>
                    </div>
                    <div className="stat-card">
                        <h3>Tasks</h3>
                        <p>28</p>
                    </div>
                    <div className="stat-card">
                        <h3>Messages</h3>
                        <p>5</p>
                    </div>
                </section>

                <section className="dashboard-content">
                    <div className="activity-card">
                        <h2>Recent Activity</h2>
                        <ul>
                            <li>Logged in successfully</li>
                            <li>Updated profile information</li>
                            <li>Created a new project</li>
                            <li>Checked dashboard stats</li>
                        </ul>
                    </div>

                    <div className="profile-card">
                        <h2>User Info</h2>
                        <p><strong>Name:</strong> Calvin</p>
                        <p><strong>Email:</strong> calvin@email.com</p>
                        <p><strong>Status:</strong> Active</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
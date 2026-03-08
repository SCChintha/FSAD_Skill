import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <h2>News Portal Dashboard</h2>

      <div className="nav-buttons">
        <Link to="/local-users">
          <button>Local Users</button>
        </Link>

        <Link to="/users-api">
          <button>Users API</button>
        </Link>

        <Link to="/posts">
          <button>Fake API Posts</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
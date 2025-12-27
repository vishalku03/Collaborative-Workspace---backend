import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects, createProject } from "../api/project.api";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(() => alert("Failed to load projects"));
  }, []);

  const createNewProject = async () => {
    const name = prompt("Enter Project Name");
    if (!name) return;

    const res = await createProject({ name });
    navigate(`/workspace/${res.data._id}`);
  };

  return (
    <div className="dashboard-container">
      {/* TOP BAR */}
      <div className="dashboard-header">
        <h2>Real-Time Collaborative Workspace</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* CREATE PROJECT */}
      <div className="create-project-section">
        <button className="create-project-btn" onClick={createNewProject}>
          + Create New Project
        </button>
        <p>
          A project represents a collaborative workspace where multiple users
          can work together in real time.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="project-grid">
        {projects.length === 0 && (
          <p className="empty-text">
            No projects yet. Create your first collaborative workspace.
          </p>
        )}

        {projects.map(project => (
          <div
            key={project._id}
            className="project-card"
            onClick={() => navigate(`/workspace/${project._id}`)}
          >
            <h3>{project.name}</h3>
            <p>
              Click to open workspace<br />
              Real-time collaboration enabled
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

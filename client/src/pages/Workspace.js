import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket/socket";
import { inviteUser } from "../api/workspace.api";

export default function Workspace() {
  const { projectId } = useParams();

  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // connect socket
    socket.connect();

    // join workspace (backend room)
    socket.emit("join-workspace", {
      workspaceId: projectId
    });

    // listen real-time events
    socket.on("collaboration-event", (event) => {
      setEvents(prev => [...prev, event]);
    });

    return () => {
      socket.disconnect();
    };
  }, [projectId]);

  const simulateFileChange = () => {
    socket.emit("file-change", {
      workspaceId: projectId,
      file: "index.js",
      action: "updated"
    });
  };

  const inviteHandler = async () => {
    if (!email) return alert("Enter email");

    await inviteUser(projectId, {
      email,
      role: "COLLABORATOR"
    });

    alert("Invitation sent");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Workspace</h2>
      <p>Project ID: {projectId}</p>

      {/* EDITOR */}
      <div>
        <h3>Editor (Mock)</h3>
        <textarea
          style={{ width: "100%", height: "200px" }}
          placeholder="// write code here"
        />
        <br />
        <button onClick={simulateFileChange}>
          Save File (Emit Event)
        </button>
      </div>

      {/* INVITE */}
      <div style={{ marginTop: "20px" }}>
        <h3>Invite User</h3>
        <input
          placeholder="user@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={inviteHandler}>Invite</button>
      </div>

      {/* REAL-TIME EVENTS */}
      <div style={{ marginTop: "20px" }}>
        <h3>Real-Time Activity</h3>
        <ul>
          {events.map((e, i) => (
            <li key={i}>{JSON.stringify(e)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

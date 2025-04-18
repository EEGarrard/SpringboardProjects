function MissionCard({ mission, onStatusChange }) {
  const handleLaunch = () => {
    if (mission.status === "Planned") {
      onStatusChange(mission.id, "Active");
    }
  };

  const handleComplete = () => {
    if (mission.status === "Active") {
      onStatusChange(mission.id, "Completed");
    }
  };

  const showLaunchButton = mission.status === "Planned";

  const showCompleteButton = mission.status === "Active";

  return (
    <div className="mission-card">
      <h3>{mission.name}</h3>

      <div className="mission-details">
        <p>
          <strong>Status:</strong> {mission.status}
        </p>
        <div className="crew-members">
          <strong>Crew: </strong>
          <ul>
            {mission.crew.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
      {showLaunchButton && (
        <button onClick={handleLaunch} className="launch-button">
          Launch Mission
        </button>
      )}

      {showCompleteButton && (
        <button onClick={handleComplete} className="complete-button">
          Complete Mission
        </button>
      )}
    </div>
  );
}

export default MissionCard;

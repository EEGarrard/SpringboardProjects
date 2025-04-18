import MissionCard from "./MissionCard";

function MissionControl({missions = [], onStatusChange}) {
 
    return (
    <div className="mission-control">
      {missions.map((mission) => (
        <MissionCard 
        key={mission.id} 
        mission={mission} 
        onStatusChange={onStatusChange} />
      ))}
    </div>
    )
 
}

export default MissionControl;

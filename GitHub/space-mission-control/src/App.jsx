import { useState } from "react";
import MissionControl from "./MissionControl";
function App ()
{
	
	const INITIAL_MISSIONS = [
		{id: 1, name: "Mars Rover", status: "Planned", crew: ["Alice", "Bob"]},
		{id: 2, name: "Moon Base", status: "Active", crew: ["Charlie", "Dave"]},
		{id: 3, name: "Venus Observatory", status: "Planned", crew: ["Eve", "Frank"]},
		{id: 4, name: "Jupiter Moons Survey", status: "Completed", crew: ["Grace", "Hank"]},
		{id: 5, name: "Asteroid Belt Mining", status: "Active", crew: ["Ivy", "John"]},
		{id: 6, name: "Saturn Ring Research", status: "Planned", crew: ["Karen", "Leo"]},
		{id: 7, name: "Deep Space Probe", status: "Completed", crew: ["Mia", "Nolan"]},
		{id: 8, name: "Interstellar Observatory", status: "Planned", crew: ["Olivia", "Pete"]},
		{id: 9, name: "Neptune Atmospheric Study", status: "Active", crew: ["Quinn", "Rachel"]},
		{id: 10, name: "Pluto Reclamation", status: "Planned", crew: ["Sam", "Tina"]}
	];

	const [missions, setMissions] = useState(INITIAL_MISSIONS);
	const [filter, setFilter] = useState('All')

	const handleStatusChange = (missionId, newStatus) => {
		setMissions(prevMissions =>
		  prevMissions.map(mission =>
			mission.id === missionId
			  ? { ...mission, status: newStatus }
			  : mission
		  )
		);
	  };
	

	const showAllMissions = () => setFilter('All');
	const showPlannedMissions = () => setFilter('Planned')
	const showActiveMissions = ()  => setFilter('Active')
	const showCompletedMissions = () => setFilter('Completed')

	const filteredMissions = filter === 'All'
	? missions :
	missions.filter(mission => mission.status === filter)
	return (
		<div className="app">
<h1>Space Mission Control</h1>
<button onClick={showAllMissions}>All</button>
<button onClick={showPlannedMissions}>Planned</button>
<button onClick={showActiveMissions}>Active</button>
<button onClick={showCompletedMissions}>Completed</button>
		<MissionControl missions={filteredMissions} onStatusChange = {handleStatusChange}/>
		</div>
	);
}

export default App;


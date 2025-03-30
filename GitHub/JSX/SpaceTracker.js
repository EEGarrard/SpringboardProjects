const SpaceTracker = (props) => {
	return (
	  <div>
		<ul>
		  {props.phenomena.map((phenomenon) => {
			const randomStatus =
			  props.observationStatuses[
				Math.floor(Math.random() * props.observationStatuses.length)
			  ];
              const PrimeMessage = randomStatus === "🚀 Prime for Study" ? " -- Perfect viewing conditions!" : ""
			return (
			  <li key={phenomenon.id}>
				{phenomenon.name} {phenomenon.emoji}- {randomStatus}{PrimeMessage}
			  </li>
			);
		  })}
		</ul>
	  </div>
	);
  };
  
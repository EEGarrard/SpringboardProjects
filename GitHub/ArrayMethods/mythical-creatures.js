const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstWater = mythicalCreatures.find(creature => {
    return creature.type === "Water";
})

console.log(firstWater.name);

const griffin = mythicalCreatures.findIndex(creature => creature.name === "Griffin");

console.log(griffin);

const forest = mythicalCreatures.find(creature => creature.lastSeen === "Enchanted Forest");

console.log(forest.name);
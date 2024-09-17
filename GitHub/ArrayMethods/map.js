const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

const userMap = function (user) {
  return user.map((user) => {
    const { firstName, lastName, points } = user;
    const fullName = `${user.firstName} ${user.lastName}`;
    let membershipStatus = "Standard";
    if (points > 100) membershipStatus = "Premium";
    return { fullName, membershipStatus };
  });
};
const updatedUsers = userMap(users);
console.log(updatedUsers)
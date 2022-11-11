let teamMembers = [
  ["Dana", "Brenda", "Happy"],
  ["Laura", "Patti"],
  ["Leslye", "Randy", "Mollye", "Ranse"],
  ["Eloise", "Robert"],
];

// let numTeams = teamMembers.length;
// for (let i = 0; i < numTeams; i++) {
//   console.log("-----------");
//   console.log("Team " + (i + 1));
//   console.log("-----------");
//   let arrays = teamMembers[i];
//   let parsharray = arrays.forEach((arrayValue) => arrayValue[1]);
//   console.log(parsharray);

//   //   let numMembers = teamMembers[i].length;
//   //   for (let j = 0; j < numMembers; j++) {
//   //     console.log(teamMembers[i][j]);
//   //   }
// }

function displayPlayer(member) {
  console.log(member);
}
let numTeams = teamMembers.length;
for (let i = 0; i < numTeams; i++) {
  console.log("-----------");
  console.log("Team " + (i + 1));
  console.log("-----------");
  console.log(teamMembers[i]);
  teamMembers[i].forEach(displayPlayer);
}

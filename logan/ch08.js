function countActiveAstronauts (roster) {
  return roster.length
}

const exampleRoster = [
  {
    firstName: "Chris",
    lastName: "Hadfield",
    nickname: "Space Oddity",
    prefix: "Astronaut",
    job: "Shuttle DJ"
  },
  {
    firstName: "Roux",
    lastName: "Woolf",
    nickname: "Wild Man",
    prefix: "Commander",
    job:  "Killer"
  }
]

console.log(countActiveAstronauts(exampleRoster))
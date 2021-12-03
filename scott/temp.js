
//input
const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 


//output
const platformList = [
    {
      name:"Platform A",
      bookDate:"2021-12-11"
    },
    {
      name:"Platform B",
      bookDate:"2021-12-12"
    },
    {
      name:"Platform C",
      bookDate:undefined
    },
  ] 

  //default code

const bookFreePlatform = (platformList, missionDate) => {
    // Code here!
  }
  
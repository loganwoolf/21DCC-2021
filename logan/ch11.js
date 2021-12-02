const bookFreePlatform = (platformList, missionDate) => {
  for (let platform of platformList) {
    if (platform.bookDate === undefined) {
      platform.bookDate = missionDate
      return platformList
    }
  }
  return 'No Availability'
}

const platformList = [
  {
    name: 'Platform A',
    bookDate: '2021-12-11'
  },
  {
    name: 'Platform B',
    bookDate: undefined
  },
  {
    name: 'Platform C',
    bookDate: '2021-12-12'
  },
] 

bookFreePlatform(platformList,'2021-12-13')
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

const bookFreePlatform = (list, date) => {
    for (let obj of list) {
        if (obj.bookDate === undefined){
            obj.bookDate = date
            return list      
        }
    }
    return "We completed chapter 11"
}

bookFreePlatform(platformList, missionDate)


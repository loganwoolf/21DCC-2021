const ex1 = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
  ]

const parseTranscripts = (messageArr) => {
    let outputArr = []
    for (let i = 0; i < messageArr.length; i++) {
        let outputString = messageArr[i].origin + ": " + messageArr[i].message;
        outputArr.push(outputString)
    }
    return outputArr
  }

  parseTranscripts(ex1)

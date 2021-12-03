function parseTranscripts (messages) {
  let arr = []
  for (let message of messages) {
    let str = `${message.origin}: ${message.message}`
    arr.push(str)
  }
  return arr
}

const ex1 = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
]

parseTranscripts(ex1)

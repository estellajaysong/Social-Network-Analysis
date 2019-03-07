var data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
};

function whoTheyFollow()
{
  let output = {}
  for (personNum in data)
  {
    if (!output[data[personNum].name]) 
    {
      output[data[personNum].name + " follows"] = []
      var personName = data[personNum].name
      var followsNum = data[personNum].follows
    // console.log(followsNum)
      for (let i = 0; i < followsNum.length; i++)
      {
        output[data[personNum].name + " follows"].push(data[followsNum[i]].name)
        // console.log(personName + " follows " + data[followsNum[i]].name) 
      }
    }
  }
  console.log(output)
  return output
}
whoTheyFollow(data)

// function followsMost()
// {
//   for (let personNum in data)
//   {
//     var most;
//     if (!most)
//     {
//       most = data[personNum].follows.length
//     }
//     else if (data[personNum].follows.length > most)
//     {
//       most = data[personNum].follows.length
//       var nameMost = data[personNum].name
//     }
//   }
//   console.log(nameMost + " follows the most people: " + most)
// }
// followsMost(data)
  
// function whoFollowsThem()
// {

// }
// whoFollowsThem(output)
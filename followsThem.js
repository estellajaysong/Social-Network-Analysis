//pulled from output of function whoTheyFollow()
var data = { 'Alice': [ 'Bob', 'Charlie', 'Debbie' ],
            'Bob': [ 'Elizabeth', 'Finn' ],
            'Charlie': [ 'Alice', 'Debbie', 'Finn' ],
            'Debbie': [ 'Alice', 'Bob', 'Charlie', 'Elizabeth', 'Finn' ],
            'Elizabeth': [ 'Debbie' ],
            'Finn': [ 'Elizabeth' ] }

function whoFollowsThem()
{
  let output = {}
  for (name in data)
  {
    const names = data[name];
    for (let i = 0; i < names.length; i++)
    {
      if (!output[names[i]])
      {
      output[names[i]] = []
      }
      output[names[i]].push(name)
    }
    console.log(output)
  }
}       
whoFollowsThem(data)
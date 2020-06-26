let singersArray = JSON.parse(
    '[{"name":"Adele","firstAlbum":"19","biggestHit":"Hello"},{"name":"Lady Gaga","firstAlbum":"The Fame","biggestHit":"Shallow"}]'
  );

  console.log(singersArray)

  let singersJSON = JSON.stringify(
    [
    { name: 'Adele', firstAlbum: '19', biggestHit: 'Hello' },
    { name: 'Lady Gaga', firstAlbum: 'The Fame', biggestHit: 'Shallow' }
  ]  
  )

  console.log(singersJSON)
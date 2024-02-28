const nodes2 = [
    { id: 17, parentId: null },
    { id: 12, parentId: 17 },
    { id: 99, parentId: 17 },
    { id: 22, parentId: 12 },
    { id: 55, parentId: 77 },
    { id: 6, parentId: 77 },
    { id: 77, parentId: 17 },
    { id: 82, parentId: 55 },
    { id: 27, parentId: 82 },
];



const nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
  ]
  function treeMaker(arr, baseId = null, newObj = {}) {
      
      for (const element of arr) {
      if (element.parentId === baseId) {
        newObj[element.id] = treeMaker(arr, element.id)
      }
    }
    return newObj  
  }
  console.log(treeMaker(nodes));
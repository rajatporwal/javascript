 // remove duplicate object from array.
  
  var  books = [ 
    { title: "C++", author: "Bjarne" }, 
    { title: "Java", author: "James" }, 
    { title: "Python", author: "Guido" }, 
    { title: "Java", author: "James" }, 
  ];

// 1.  Converting the array to a Set to remove the duplicates: 

// JSON.stringify will convert objects into string and assign that values to array.
let jsonObject = books.map(JSON.stringify); 

// since array has now 4 values as string set will remove equal string.
let uniqueSet = new Set(jsonObject); 

let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

// 2. Using one of the keys as index:


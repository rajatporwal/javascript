function p(v) {
    console.log(v);
  }
  
  var str = 'It is a great day.'
  
  //substr(): counts index from start index to the next provided end index
  // .i.e. if(5, 11) then it return string from index 5 to 16
  str.substr(4);   // s a great day.'
  str.substr(5, 11);  // a great da
  str.substr(-2);  // y 
  
  //substring(): counts index from start index to the end index
  // .i.e. if(5, 11) then it return string from index 5 to 11
  str.substring(5, 11); // a gre
  
  // str.trim() function is used to remove the white spaces from both the ends of the given string.
  var strTrim = "   geeks   ";
  
  strTrim.trim();   // 'geeks'
  strTrim.trimLeft();    // 'geeks   '
  strTrim.trimRight();   // '   geeks'
  
  // str.charCodeAt() function returns a Unicode character set code unit of the character present at the index.
  str.charCodeAt(4)    // 115
  
  // fromCharCode() converts the UTF-16 codes into their equivalent characters and returns the string containing them.
  String.fromCharCode(65, 66, 69) // ABE
  
  // The str.startsWith() method is used to check whether the given string start with the characters of the specified string or not.
  str.startsWith('It');   // true
  str.startsWith('Great');   // false
  str.startsWith('great', 8);   // true  , it is also case sensitve
  
  str.endsWith('day.');  // true
  str.endsWith('great', 13);  // true, consider 13 as last index of the string and then check it.
  
   str.includes("gre");       // true
   str.includes("Gre");       // false
   str.includes("g", 5);   // true
  
  //  index < 0, the entire array will be searched.
   str.includes("g", -2);   // true
  
  str.charAt(9);    // r
  str.charAt(20);   // empty string
  
  str.lastIndexOf('t');    // 12
  str.indexOf('t');       // 1
  
  str.length   // 18
  
  str.toUpperCase();        // IT IS A GREAT DAY.
  str.toLowerCase();        // it is a great day.
  
  // The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale.
  // The locale is based on the language settings of the browser.
  // Generally, this method returns the same result as the toLowerCase() method. 
  // However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
  
  str.toLocaleLowerCase();    // IT IS A GREAT DAY.
  str.toLocaleUpperCase();    // it is a great day.
  
  //  string.search() is used to search for a match in between regular expressions and a given string object.
    
  // Taking a regular expression. 
  var re1 = /G/; 
  var re2 = /e/; 
    
  str.search(re1);     // -1
  str.search(re2);     // 10
    
  var temp = "U want to split";
  temp.split("");      // [ "U", " ", "w", "a", "n", "t", " ", "t", "o", " ", "s", "p", "l", "i", "t" ]  
  temp.split(" ");     // [ "U", "want", "to", "split" ]
  temp.split(" ", 2);  // [ "U", "want" ]
  
  str.concat(temp);  // It is a great day.U want to split
  
  // string.valueOf() is used to return the value of the given string.
  
  str.valueOf();    // It is a great day.
  
  // string.repeat() is used to build a new string containing a specified number of copies of the string on which this function has been called.
  
  var rep = " Repeat me"
  rep.repeat(3);   // Repeat me Repeat me Repeat me
  rep.repeat(3.8);   // Repeat me Repeat me Repeat me, 3.8 will automatically get converted to 3.
  
  
  // string.replace() is used to replace a part of the given string with some another string or a regular expression. 
  // The original string will remain unchanged.
  
  str.replace(/day/, 'gfg');  // t is a great gfg
  
  str.slice(1, 6);  // t is
  str.slice(1, -3);  // t is a great d
  str.slice(10);  // eat day
  
  'z'.localeCompare('y');   // 1
  'y'.localeCompare('z');   // -1

let str = "madam"; // Assigned

let bag = ""
  for(let i=str.length-1;i>=0;i--){ // Loop
      
          bag=bag+str[i];
      
  }
  if(bag==str){ // Condition 
      console.log("Yes");
  } else {
      console.log("No");
  }

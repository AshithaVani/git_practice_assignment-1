let num = 7; // Assigned
let count=0;
    for(i=1;i<=num;i++){ // Loop
        if(num%i==0){
            count++;
        }
    }
    if(count==2){ // Condition 
        console.log("Yes");
    } else {
        console.log("No");
    }
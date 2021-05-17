const N = 4;
    if (N % 2 !== 0) {
        console.log("Weird");
    }
    else if (2 <= N && N <= 5){
        console.log("Not Weird");
    }
    else if (6 <= N && N <= 20){
        console.log("Weird");
    }
    else if (20 < N) {
        console.log("Not Weird");
    }
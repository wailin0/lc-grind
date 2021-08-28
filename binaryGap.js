
function binaryGap(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    const bin = N.toString(2)


    let max = 0;

    console.log(bin)

    let temp = 0
    for(let i=0;i<bin.length;i++){

        if(bin[i]==0){
            temp++
        }
        else {
            if(temp>max){
                max=temp
                temp=0
            }
            else{
                temp=0
            }
        }
    }

    return max
}

console.log(binaryGap(1041))

console.clear();
 

const nsum = (...args) =>{
    let sum =0;
    for(let i=0; i<args.length;i++){
        sum += args[i]
    }
    console.log(sum)
}

nsum(1,3,4,5,6,7,8,9,10);
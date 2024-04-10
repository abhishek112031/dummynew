function isPrime(n){
    if(n==0||n==1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

for(let i=0;i<=100;i++){
    // console.log(isPrime(i))

    if(isPrime(i)){
        console.log(i)
    }

}
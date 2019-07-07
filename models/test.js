function rectCover(number)
{
    // write code here
    if(number == 1){
        return 1;
    }else if(number == 2){
        return 2;
    }else{
        return rectCover(number-1) + rectCover(number-2);
    }
}
console.log(rectCover(4))
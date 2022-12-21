let array=[18,7,45,333,17,3,1,27];
let small=array[0];
smaller();
function smaller(){
    for(i=0;i<array.length;i++){
        if(array[i]<small){
            small=array[i];
        }
    }
    console.log(small);
}




function incr(a){
	return a + 1;
}
let result = incr(3)
console.log(result);


//callback hell
function main(){
    thuc_day(function(){
      danh_rang(function(){
        di_an_sang(function(){
          console.log('...');
        });
      });
    });
}



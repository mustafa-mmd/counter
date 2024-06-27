
let count=0;
document.getElementById('inc').addEventListener('click',function(){
  count++;
  document.getElementById('cnt').textContent=count;
});
//for decrement
 document.getElementById('dec').addEventListener('click',function(){
  if(count>0){
    count--;
  }
  document.getElementById('cnt').textContent=count;
 });
 
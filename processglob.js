var fun=function(param)
{
    console.log(param);//THIS CAN BE DONE USING PROCESS KEYWORD
}
var name;
fun("hello world");
//THIS IS THE WAY
var fun =function(param){
    process.stdout.write(param + '\n')
}
fun("Welcomes You");
////
////
process.argv.forEach(function(value,index){
    console.log("Index:" +index +"content:" +value);//HERE IT TAKES COLLECTION OF ARGUMENTS FROM TERMINAL
});
////
////
//DEMONSTRATION OF NEXT TICK
process.nextTick(function()
{
    process.stdout.write('I have printed this after console\n')
}
);
console.log("I have printed earlier than nexttick" );
////
////
//EXITING THE PROCESS AFTER 4 SECONDS
var time=0;
var Ti=setInterval(function()
{

    time=time+1;
   
    console.log(time + 'seconds');
    if(time>4) //CHECKING TO STOP PROCESS
    {
        process.exit();
    }
},1000);
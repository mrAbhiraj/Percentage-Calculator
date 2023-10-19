const calcy = ()=>{
var wd = document.getElementById('wd').value ;
var cb = document.getElementById('cb').value ;
var apti = document.getElementById('apti').value ;
var verb = document.getElementById('verb').value ;

var grade = "" ;
var totalMark = parseFloat(wd) + parseFloat(cb) + parseFloat(apti) + parseFloat(verb) ;
alert(totalMark);

var perc =  (totalMark/400) * 100 ;

alert(perc) ;
debugger ;
if(perc === 100 && perc>=80){
 grade = 'A'
}
else if(perc <80 && perc>=70){
 grade = 'B'
}
else if(perc <70 && perc>=60){
 grade = 'C'
}
else if(perc <60 && perc>50){
 grade = 'D'
}
else if(perc <50 ){
 grade = 'F'
}

console.log(perc) ;
if(perc < 50 ){
    document.getElementById('result').innerHTML = `Out of 400 your total marks is ${totalMark} and percentage is ${perc}% <br> Your grade is ${grade}. You are Fail.  `
}
else{
    document.getElementById('result').innerHTML = `Out of 400 your total marks is ${totalMark} and percentage is ${perc}% <br> Your grade is ${grade}. You are Pass.  `
}
}
gsap.from("#result" ,{

   
   fontSize: "10px" ,
    ease: Expo.easeInOut ,
    duration:4 ,
    delay: .2,
   

})

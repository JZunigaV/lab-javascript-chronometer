// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId =  0;
}

Chronometer.prototype.startClick = function () {  
 
   this.intervalId = setInterval(function(){
     this.currentTime += 1;
     this.setTime();
   }.bind(this),1000);
};

Chronometer.prototype.setMinutes = function () {
  
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
     return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {


     if(number.toString().length < 2){

      return "0" + number.toString();

     } else{

      return number.toString();
     }

};

Chronometer.prototype.setTime = function () {
  
   this.minutes = this.twoDigitsNumber(this.setMinutes());
   this.seconds = this.twoDigitsNumber(this.setSeconds());
   printTime();
   return minutes + seconds;

};  



Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
      this.currentTime=0;
      chronometer.minutes=0;
      chronometer.seconds=0;
      
};


window.onload = function(){
    var d = new Date();
    var monthName= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var date = d.getDate();
    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getFullYear();
    var dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    document.getElementById("calendarMonthYear").innerHTML=monthName[month]+" "+year;
    document.getElementById("calendarDate").innerHTML=date;
    document.getElementById("calendarDay").innerHTML=dayName[day];
}

function changeColour(type){
    colour=prompt("What colour do you want? Example for red: Colour: Red. Hex Code: #ff0000. RGB Code: rgb(255, 0, 0). HSL Code: hsl(0, 100%, 50%). Or go to http://www.w3schools.com/colors/colors_picker.asp.");
    if(type==0){
        document.getElementById("calendarContainer").style.backgroundColor=colour;
    } else if(type==1){
        document.getElementById("calendarContainer").style.color=colour;
    }
}
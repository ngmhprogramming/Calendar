window.onload = function(){
    var d = new Date();
    var monthName= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();
    var year = d.getFullYear();
    var firstDate = monthName[month]+" "+1+" "+year; //getting a format e.g. January 30 2017
    var tmp = new Date(firstDate).toDateString(); //getting a string e.g. Mon Jan 30 2017
    var firstDay = tmp.substring(0,3); //Mon
    var dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var dayNo = dayName.indexOf(firstDay); //1
    var days = new Date(year,month+1,0).getDate(); //31
    var calendar = getCalendar(dayNo, days);
    document.getElementById("calendarMonthYear").innerHTML=monthName[month]+" "+year;
    document.getElementById("calendarDates").appendChild(calendar);
}
function getCalendar(dayNo,days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    for(var c=0;c<=6;c++){//top s m t w t f s row
        var td = document.createElement('td');
        td.innerHTML="SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    tr = document.createElement('tr');//second row
    for(c=0;c<=6;c++){//top s m t w t f s row
        if(c==dayNo){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML="";
        tr.appendChild(td);
    }
    
    var count=1;
    for(c=0;c<=6;c++){
        var td = document.createElement('td');
        td.innerHTML=count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    for(var r=3;r<=7;r++){
        tr = document.createElement('tr');
        for(c=0;c<=6;c++){
           if(count>days){
            table.appendChild(tr);
            return table;
           }
            var td = document.createElement('td');
            td.innerHTML=count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
}
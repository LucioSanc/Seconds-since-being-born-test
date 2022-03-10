let dateBirth = "February 5, 2010";

const DOB = Date.parse(dateBirth);

const milliDifference = Date.now();

const calculateSecondsFromBirth = function() {
    let millisec = milliDifference-DOB;

    let second = Math.round(millisec/1000);

    let minute = Math.round(second/60);

    let hour = Math.round(minute/60);

    let day = Math.round(hour/24);
    
    let month= Math.round(day/30);

    let year = Math.round(month/12);

    document.write("Approximately the time that has passed since " +dateBirth+ 
        "!<br></br><br>Milliseconds: " +millisec+ 
        "</br><br>Seconds: " +second+
        "</br><br>Minutes: " +minute+ 
        "</br><br>Hours: " +hour+ 
        "</br><br>Days: " +day+
        "</br><br>Months: " +month+ "</br>");

    console.log(["Milliseconds: "+millisec, "Seconds: " +second, "Minutes: " +minute, 
                    "Hours: " +hour, "Days: " +day, "Months: " +month, "Years: " +year]);

}

calculateSecondsFromBirth ();










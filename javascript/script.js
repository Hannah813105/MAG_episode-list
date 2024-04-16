let episodes = [
    {"number":"001", "name":"Angler Fish","case":"#0122204", "year":"2012", "month":"04", "day":"22", "season":"1", "released":"#0162303"}, 
    {"number":"002", "name":"Do Not Open","case":"#9982211", "year":"1998", "month":"11", "day":"22", "season":"1", "released":"#0162503"}, 
    {"number":"003", "name":"Across The Street","case":"#0070107", "year":"2007", "month":"07", "day":"01", "season":"1", "released":"#0162703"},
    {"number":"004", "name":"Pageturner","case":"#0132806", "year":"2013", "month":"06", "day":"28", "season":"1", "released":"#0163003"},
    {"number":"005", "name":"Thrown Away","case":"#0092302", "year":"2009", "month":"02", "day":"23", "season":"1", "released":"#0160104"},
    {"number":"006", "name":"Squirm", "case":"#0140912", "year":"2014", "month":"12", "day":"09", "season":"1", "released":"#0160304"},
    {"number":"007", "name":"The Piper", "case":"#9220611", "year":"1922", "month":"11", "day":"06", "season":"1", "released":"#0160604"},
    {"number":"008", "name":"Burned Out", "case":"#0071304", "year":"2007", "month":"04", "day":"13", "season":"1", "released":"#0160804"},
    {"number":"009", "name":"A Father's love", "case":"#0020312", "year":"2002", "month":"12", "day":"03", "season":"1", "released":"#0161004"},
    {"number":"010", "name":"Vampire killer", "case":"#0100710", "year":"2010", "month":"10", "day":"07", "season":"1", "released":"#0161304"}, 
    {"number":"011", "name":"Dreamer", "case":"#0151403", "year":"2015", "month":"03", "day":"14", "season":"1", "released":"#0161504"},
    {"number":"012", "name":"First Aid", "case":"#0121102", "year":"2012", "month":"02", "day":"11", "season":"1", "released":"#0161704"},
    {"number":"013", "name":"Alone", "case":"#0161301", "year":"2016", "month":"01", "day":"13", "season":"1", "released":"#0162004"},
    {"number":"014", "name":"Piecemeal", "case":"#0112905", "year":"2011", "month":"05", "day":"29", "season":"1", "released":"#0162404"},
    {"number":"015", "name":"Lost John's Cave", "case":"#0140911", "year":"2014", "month":"11", "day":"09", "season":"1", "released":"#0162704"},
    {"number":"016", "name":"Arachnophobia", "case":"#0150409", "year":"2015", "month":"09", "day":"04", "season":"1", "released":"#0160105"},
    {"number":"017", "name":"The Bone Turner's Tale", "case":"#9991006", "year":"1999", "month":"06", "day":"10", "season":"1", "released":"#0160405"},
    {"number":"018", "name":"The Man Upstairs", "case":"#0081212", "year":"2008", "month":"12", "day":"12", "season":"1", "released":"#0161105"},
    {"number":"019", "name":"Confession I", "case":"#0113005", "year":"2011", "month":"05", "day":"30", "season":"1", "released":"#0161805"},
    {"number":"020", "name":"Desecrated Host II", "case":"#0113005-B", "year":"2011", "month":"05", "day":"30", "season":"1", "released":"#0162505"},
    {"number":"021", "name":"Freefall", "case":"#0022010", "year":"2002", "month":"10", "day":"20", "season":"1", "released":"#0160106"},
    {"number":"022", "name":"Colony", "case":"#0161203", "year":"2016", "month":"03", "day":"12", "season":"1", "released":"#0160806"},
    {"number":"023", "name":"Schwartzwald", "case":"#8163103", "year":"1816", "month":"03", "day":"31", "season":"1", "released":"#0161506"},
    {"number":"024", "name":"Strange Music", "case":"#0051701", "year":"2005", "month":"01", "day":"17", "season":"1", "released":"#0162206"},
    {"number":"025", "name":"Growing Dark", "case":"#0151904", "year":"2015", "month":"04", "day":"19", "season":"1", "released":"#0162906"},
    {"number":"026", "name":"A Distortion", "case":"#0160204", "year":"2016", "month":"04", "day":"02", "season":"1", "released":"#0160607"},
    {"number":"027", "name":"A Sturdy Lock", "case":"#0032408", "year":"2003", "month":"08", "day":"24", "season":"1", "released":"#0161307"},
    {"number":"028", "name":"Skintight", "case":"#0161704", "year":"2016", "month":"04", "day":"17", "season":"1", "released":"#0162007"},
    {"number":"029", "name":"Cheating Death", "case":"#9720406", "year":"1972", "month":"06", "day":"04", "season":"1", "released":"#0162707"},
    {"number":"030", "name":"Killing Floor", "case":"#0130111", "year":"2013", "month":"11", "day":"01", "season":"1", "released":"#0160308"},
    {"number":"031", "name":"First Hunt", "case":"#0100912", "year":"2010", "month":"12", "day":"09", "season":"1", "released":"#0161008"},
    {"number":"032", "name":"Hive", "case":"#0142302", "year":"2014", "month":"02", "day":"23", "season":"1", "released":"#0161708"},
    {"number":"033", "name":"Boatswain's Call", "case":"#0110201", "year":"2011", "month":"01", "day":"02", "season":"1", "released":"#0162408"},
    {"number":"034", "name":"Anatomy Class", "case":"#0161207", "year":"2016", "month":"07", "day":"12", "season":"1", "released":"#0163108"},
    {"number":"035", "name":"Old Passages", "case":"#0020406", "year":"2002", "month":"06", "day":"04", "season":"1", "released":"#0160709"},
    {"number":"036", "name":"Taken Ill", "case":"#0121911", "year":"2012", "month":"11", "day":"19", "season":"1", "released":"#0161409"}
];

function displayEpisodes(episodes) {
    document.getElementById("number").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("case").innerHTML = "";
    document.getElementById("year").innerHTML = "";

    for (let i = 0; i < episodes.length; i++) {
    document.getElementById("number").innerHTML += `<div>${episodes[i].number}</div>`;
    document.getElementById("name").innerHTML += `<div>${episodes[i].name}</div>`;
    document.getElementById("case").innerHTML += `<div>${episodes[i].case}</div>`;
    document.getElementById("year").innerHTML += `<div>${episodes[i].year}</div>`;
    }
}

function compareByNumber(a,b) {
    return a.number.localeCompare(b.number);
}

function compareByYear(a,b) {  
    var yearDiff = a.year - b.year;
    if (yearDiff === 0) {
        var monthDiff = a.month - b.month;
        if (yearDiff & monthDiff === 0) {
            return a.day.localeCompare(b.day);
        } 
        else {
        return a.month.localeCompare(b.month);
        }    
    } 
    else {
    return a.year.localeCompare(b.year);
    }
}

document.getElementById("yearsort").addEventListener("click", function() {
    episodes.sort(compareByYear);
    displayEpisodes(episodes);  
});

document.getElementById("numbersort").addEventListener("click", function() {
    episodes.sort(compareByNumber);
    displayEpisodes(episodes);  
});

displayEpisodes(episodes);


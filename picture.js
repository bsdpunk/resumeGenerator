
const fs = require('fs');
let rawdata = fs.readFileSync(process.argv[2]);  
let res = JSON.parse(rawdata);

console.log("\\documentclass[11pt,a4paper,sans]{moderncv}")
console.log("\\moderncvstyle{oldstyle}")
console.log("\\moderncvcolor{grey}")
console.log("\\usepackage[utf8]{inputenc}")
console.log("\\usepackage[scale=0.75]{geometry}")




console.log("\\name{" + res.contact.first + "}{"+res.contact.last+"}")
console.log("\\title{"+res.title+"}")
console.log("\\phone[mobile]{"+res.contact.phone+"}")
console.log("\\email{"+res.contact.email+"}")
console.log("\\quote{"+res.header+"}")                                 
console.log("\\photo[64pt][0.4pt]{picture}")
console.log("\\begin{document}")
console.log("\\makecvtitle")


//
//Education
//

console.log("\\section{Education}")
for (i = 0; i < res.education.length; i++) {

    console.log(" \\cventry{"+ res.education[i]["Started On"] +"--"+ res.education[i]["Finished On"] + "}{" + res.education[i]["Degree"]+"}{"+res.education[i]["School Name"] + "}{"+res.education[i]["Location"]+"}{\\textit{}}{"+res.education[i]["Major"]+ "}")
}

//
//Employment
//
console.log("\\section{Experience}")
console.log(" \\subsection{Vocational}")

for (i = 0; i < res.employment.length; i++) {

    console.log(" \\cventry{"+ res.employment[i]["Started On"] +"--"+ res.employment[i]["Finished On"] + "}{" + res.employment[i]["Title"]+"}{"+res.employment[i]["Company Name"] + "}{}{}{ Responsibilities: \\newline{}%")


    var descArr = res.employment[i]["Description"].split(".")

    console.log(" \\begin{itemize}%")
    var descArr = res.employment[i]["Description"].split(".")
    for (n = 0; n < descArr.length; n++) {

        if (descArr[n].length > 1){
            console.log(" \\item{"+ descArr[n]+".}")
        }
    }
    console.log(" \\end{itemize}}")
}

//
//Languages
//
console.log("\\section{Languages}")
for (i = 0; i < res.languages.length; i++) {

    console.log("\\cvitemwithcomment{"+res.languages[i]["name"]+"}{"+res.languages[i]["level"] +"}{"+res.languages[i]["comment"] +"}")
}



//
//Certifications
//
console.log("\\section{Certifications}")
console.log("")

for (i = 0; i < res.certifications.length; i++) {
    console.log("\\cvlistitem{"+ res.certifications[i]["name"]+"}")
}
console.log("\\end{document}")

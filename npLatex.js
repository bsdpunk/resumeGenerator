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
console.log("\\begin{document}")
console.log("\\makecvtitle")

console.log("\\section{Experience}")
console.log(" \\subsection{Vocational}")

for (i = 0; i < res.employment.length; i++) {

    console.log(" \\cventry{"+ res.employment[i]["Started On"] +"--"+ res.employment[i]["Finished On"] + "}{" + res.employment[i]["Title"]+"}{"+res.employment[i]["Company Name"] + "}{" +res.employment[i]["Location"]+"}{}{ Responsibilities: \\newline{}%")


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
//console.log("\\documentclass{article}")
//console.log("")
//console.log("\\usepackage{titlesec}")
//console.log("")
//console.log("\\titleformat{\\section}{\\huge}{}{0em}{}")
//console.log("\\titleformat{\\subsection}{}{}{0em}{}")
//console.log("")
//console.log("\\begin{document}")
//console.log("")
//console.log("\\title{R\\'esum\\'e}")
//
//console.log("\\author{"+ res.author +"}")
//
//console.log("")
//console.log("\\author{ Phone: "+res.contact.phone+" Email: "+ res.contact.email + "}")
//console.log("\\maketitle")
//console.log("")
//
//console.log("")
//
//
//
//
////Work Experience
//console.log("\\section{Experience}")
//console.log("")
//
//
//for (i = 0; i < res.employment.length; i++) {
//
//    console.log("\\subsection{"+ res.employment[i]["Company Name"]+"}{"+ res.employment[i]["Started On"]+"}{ to }{"+res.employment[i]["Finished On"]+"}")
//    console.log("\\begin{itemize}")
//    var descArr = res.employment[i]["Description"].split(".")
//    for (n = 0; n < descArr.length; n++) {
//       if (descArr[n].length > 1){
//        console.log("\\item{"+ descArr[n]+".}")
//       }
//    }
//    console.log("\\end{itemize}")
//}
//
//
//
////Certifications
console.log("\\section{Certifications}")
console.log("")
//
for (i = 0; i < res.certifications.length; i++) {
//    
    console.log("\\cvlistitem{"+ res.certifications[i]["name"]+"}")
//    console.log("\\begin{itemize}")
//if (res.certifications[i]["expires"]) {
//    console.log("\\item{"+ res.certifications[i]["expires"]+"}")
//    }
//    if (res.certifications[i]["location"]) {
//    console.log("\\item{"+ res.certifications[i]["location"]+"}")
//    }
//
//    console.log("\\end{itemize}")
}
//
//
console.log("\\end{document}")
//

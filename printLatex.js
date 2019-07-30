const fs = require('fs');

let rawdata = fs.readFileSync('../dresume.json');  

let res = JSON.parse(rawdata);


console.log("\\documentclass{article}")
console.log("")
console.log("\\usepackage{titlesec}")
console.log("")
console.log("\\titleformat{\\section}{\\huge}{}{0em}{}")
console.log("\\titleformat{\\subsection}{}{}{0em}{}")
console.log("")
console.log("\\begin{document}")
console.log("")
console.log("\\title{R\\'esum\\'e}")

console.log("\\author{"+ res.author +"}")
console.log("")
console.log("\\maketitle")
console.log("")
console.log("\\section{Experience}")
console.log("")


for (i = 0; i < res.employment.length; i++) {
    
    console.log("\\subsection{"+ res.employment[i]["Company Name"]+"}{"+ res.employment[i]["Started On"]+"}{ to }{"+res.employment[i]["Finished On"]+"}")
    console.log("\\begin{itemize}")
    console.log("\\item{"+ res.employment[i]["Description"]+"}")
    console.log("\\end{itemize}")
}

console.log("\\section{Certifications}")
console.log("")

for (i = 0; i < res.certifications.length; i++) {
    
    console.log("\\subsection{"+ res.certifications[i]["name"]+"}")
    console.log("\\begin{itemize}")
    if (res.certifications[i]["expires"]) {
    console.log("\\item{"+ res.certifications[i]["expires"]+"}")
    }
    if (res.certifications[i]["location"]) {
    console.log("\\item{"+ res.certifications[i]["location"]+"}")
    }

    console.log("\\end{itemize}")
}


console.log("\\end{document}")

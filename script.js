function vypisPosloupnosti() {
  let s = "while: ";
  //while
  let i = 0;
  while (i < 10) {
    s = s + i + " ";
    i++; //to samé jako i = i + 1
  }
  //for
  s = s + "<br>for: ";
  for (let i = 0; i < 10; i++) {
    s = s + i + " ";
  }
  
  document.getElementById("vystup").innerHTML = s;
}

function soucetPosloupnosti() {
  let a = "while: ";
  let b = 

}
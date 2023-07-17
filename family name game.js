let N = prompt("how many player?")
function randLetter( ) {

let letters =
    ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z");

let letter = letters[Math.floor(Math.random()*letters.length)];

return letter

}
function fillTheBlank() {
    var x = document.forms["name"]["city"]["food"]["color"].value;
    if (x == "") {
      alert("it must be filled out");
      return false;
    }
  }
let compareValue=0
let count=[]
for (let j=1 ;j<=N ; j++)
for(let i=1 ; i<=4 ; i++){
    if (i.length(0)!=letter){
        return count[j]=0
    }
    else if (compareValue = string1.localeCompare(string2)){
        return count[j]+=5
    }
    else {
        return count[j]+=10
    }
}
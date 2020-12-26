// alert('Major Concept ALERT');
// document.write('<h1>Hello World<h1>');
// let myname="Heather"
//     alert('myname');
const myname = "Heather";
function hello() {
    alert("hello world");
    document.getElementById("hello").innerHTML = myname;
}

function sendContact() {
    let form = document.getElementById("contactform");

    let xhttp = new XMLHttpRequest();
    let url = "http://localhost:3000/contacts";
    xhttp.open("POST", url);

    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            console.log("hello");
        }
    };
    xhttp.send();
}


function myheadings(mydata) {
    var h1 = document.createElement('h1');
    // h1.innerHTML="hello it is virtual";
    h1.innerHTML = mydata;
    h1.style.color = 'red';
    document.getElementById('root').appendChild(h1);
}
myheadings('chandra bhushan ');
myheadings('chaudhary');
myheadings('gagandeep');

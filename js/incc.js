function inangCC(){
    let myForm = document.forms["frmInCC"];
    let num = myForm.elements[0].value;
    let kq="";
    for ( let i=0; i<=10; i++){
        kq += so +"x"+ i+ "="+(so*i)+ "<br>";
    }
    document.getElementById("kq").innerHTML = kq;
}
function updateAge(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    if(month < 11){
        var age = year - 2004;
    }else if(month == 11 && day < 4){
        var age = year - 2004;
    }else{
        var age = year - 2003;
    }
    document.getElementById("age").innerHTML = document.getElementById("age").innerHTML.slice(0, 42) + age + document.getElementById("age").innerHTML.slice(45, 59);
}

window.addEventListener("load", updateAge);
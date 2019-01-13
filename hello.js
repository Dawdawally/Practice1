var xhttp = new HMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("hello").innerHTML = this.responseText;
    }
    xhhtp.open("Get", "dawda.js", true);
    xhttp.send();
}

var person = {
    name: "Dawda",
    surname:"Wally",

    fullName = function(){
        return this.name + "" + this.surname;
    } 
};

//semi colon added

var person1 = {
    name: "Dawda",
    surname: "Wallyyyyy",

    get disc(){
        return this.name;
    },
    set disc(fullname){
        this.Fullname = fullname;
    }
};

person.fullName.call(person1);
person1.prototype.Nationality = "Gambian";

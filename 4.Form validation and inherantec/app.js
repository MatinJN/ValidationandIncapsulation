let Aclick = document.getElementById('c-me')


Aclick.addEventListener('click', () => {
    let inputName = document.getElementById('inputN').value;
    let inputEmail = document.getElementById('inputE').value
    let inputpas = document.getElementById('inputP').value
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if (inputName.charAt(0) === inputName.charAt(0).toUpperCase() && inputName != ""){  
    
        alert('Name duz yazildi')

    }
    else{
        alert('name ya bosdur yada 1c herf boyuk deyil')
    }

    if (inputEmail.match(regemail) && inputEmail != "") {
        alert('mail duzgun yazildi')
    }
    else{
        alert('mail sehv yazildl ve ya bosdur')
    }

    if (inputpas.length > 6 && inputpas != "") {
        alert('password duzgun yazildi')
    }
    else{
        alert('password uznlugu 6dan azdir ve ya bosdur')
    }
} )



var Matin = {
    age: 25,
    salary: 200,
    job: 'developer'
        
}

var Umbulnise ={
    age: 20,
    salary: 150,
    job: 'dizayner'
}

var info ={
    fullinfo: function(){
        return this.age + "  is " + this.job + "  maas" +  this.salary
    }
}

console.log(info.fullinfo.call(Matin));
console.log(info.fullinfo.call(Umbulnise));

// ENCAPSULATION

class Player {

    setPlayer(name,lastname,position){
        this.name = name;
        this.lastname = lastname;
        this.position = position;
    }

        getName(){
            return this.name;
        }

        getlastName(){
            return this.lastname;
        }

        getPositon(){
            return this.position;
        }

    
}

var player = new Player();

player.setPlayer('Robert','Lewandovski','Forvet')
console.log(player.getName());
console.log(player.getlastName());
console.log(player.getPositon());
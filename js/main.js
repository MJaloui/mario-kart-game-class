//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods
//Mostly done on my own with a couple pointers from Michael k

class CreateKartRacer {

    constructor(driverKart, driverCharacter, driverSpecialAttack, driverWheels) {

        this.kart = driverKart
        this.character = driverCharacter
        this.specialAttack = driverSpecialAttack
        this.wheels = driverWheels
    }

    speedpower() {
        console.log('Lets Go0o0o!!!');
    }

    spinWheels() {
        console.log('Thats how I roll!!!!')
    }

    activateSpecialAttack() {
        alert(`${this.character} yells "Eat ${this.specialAttack} Loser!!!"`)
    }
}

let mario = new CreateKartRacer('Red car', 'Mario', 'Mushrooms', 'Metal Wheels' )

let luigi = new CreateKartRacer('Green Car', 'Luigi', 'Bananas', 'Rubber Wheels' )

let princessPeach = new CreateKartRacer('Pink Car', 'Princess Peach', 'Stars', 'Spike Wheels' )

luigi.activateSpecialAttack() 
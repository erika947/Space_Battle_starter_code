// What does my game need?
//a spaceship and a enemy
//an attack for both sides
//if the spaceship gets destroyed its game over
//if the enemy is defeated there will two options retreat or attack the next opponent
//retreat and then its game over
//set an amount of enemies that needs to be defeated
//if you lose show a 'You Were Defeated' and 'Try Again?'
//if the player takes damage but defeats the enemy and chooses to continue then the players health will not heal 
//Hull is also the health
//

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

attack() {
let randomAttack = math.random()
    if (randomAttack <= this.accuracy){
        alert("It's a Hit!");
        target.hull = target.hull - this.firepower;
        alert("Almost got them!");
    }
    else if
        (target.hull >= 0){
            target.iSurived = false;
    }
    else {
        alert('missed T_T')
        }
    }
}

class Enemy {
    constructor(hull,firepower,accuracy){
        this.hull = math.floor(math.random() * 4) + 3 ;  //how do I give random stats?
        this.firepower = math.floor(math.random() * 3) + 2;
        this.accuracy = (math.floor(math.random() * 3) + 6) / 10 ;
    }

attack () {
let randomAttack = math.random();
    if (randomAttack <= this.accuracy){
        alert("I'm Hit!");
        target.hull = target.hull - this.firepower;
        alert("Ship has been badly damaged!");
    }
    else if
        (target.hull <= 0){
            target.iSurived = false;
            alert("You Were Defeated!")
        }
}
}

const heroShip = new Ship('USS Schwarzenegger', 20, 5, .7)
const alienShip = []
  







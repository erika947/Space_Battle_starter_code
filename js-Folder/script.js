// // What does my game need?
// //a spaceship and a enemy
// //an attack for both sides
// //if the spaceship gets destroyed its game over
// //if the enemy is defeated there will two options retreat or attack the next opponent
// //retreat and then its game over
// //set an amount of enemies that needs to be defeated
// //if you lose show a 'You Were Defeated' and 'Try Again?'
// //if the player takes damage but defeats the enemy and chooses to continue then the players health will not heal 
// //Hull is also the health
// //
// prompt('Welcome!' ,'ENTER TO JOIN THE BATTLE')
// class Ship {
//     constructor(hull, firepower, accuracy, iSurived){
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//         this.iSurived = iSurived;
//     }

// attack() {
// let randomAttack = math.random()
//     if (randomAttack <= this.accuracy){
//         prompt("It's a Hit!");
//         rival.hull = rival.hull - this.firepower;
//         prompt("Almost got them!");
//     }
//     else if
//         (rival.hull >= 0){
           
//     }
//     else { rival.iSurived = false;
//         prompt('missed T_T')
//         }

//     }
// }

// class Enemy {
//     constructor(hull,firepower,accuracy,iSurived){
//         this.hull = hull ;  
//         this.firepower = firepower;
//         this.accuracy =  accuracy ;
//         this.iSurived = iSurived;
//     }

// attack (rival) {
// let randomAttack = math.random();
//     if (randomAttack <= this.accuracy){
//         prompt("I'm Hit!");
//         rival.hull = rival.hull - this.firepower;
//         prompt("Ship has been badly damaged!");
//     }
//         else if
//             (rival.hull <= 0){
//     }
//         else{ rival.iSurived = false;   
//             prompt("You Were Defeated!")}
// }
// }
// // make something that we active the game 
// //add a new object so that we can trigger the first prompt

// let gameMenu = { // another object
//     rivalShip: 0,
//     round: 0,
//     userChoice: ""
// };


// const enemyShip = [];
// //this will be the different options the randomizer will get to choose from
// const enemiesHull = [4,5,6];
// const enemiesPower = [1,2,3];
// const enemiesAccuracy = [.3,.4,.5,.6];


// let newEnemyShip = () => {
//     //set the amount of enemy mobs being made
//     for (let e = 0; e < 6; e++){
//         //now lets randomize the health, firepower and accuracy
//         let hull = enemiesHull[math.floor(math.random() * 3)];
//         let firepower = enemiesPower[math.floor(math.random() * 3)];
//         let accuracy = enemiesAccuracy[math.floor(math.random() * 4)];
//         enemyShip[e] = new enemyShip(hull,firepower,accuracy);
//     }
// }
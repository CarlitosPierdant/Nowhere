/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var game= new Phaser.Game(800, 400, Phaser.CANVAS, 'Pantalla');

game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('caballero',caballeroState);
game.state.add('caballeromap2',caballeroState2);
game.state.add('Castle',CastleState);

game.state.start('load');

 
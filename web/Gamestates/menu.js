/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global game, actionOnClick */

var menuState ={
    preload:function(){
        
         
    },
    create:function(){
        
        

     game.add.tileSprite(0, 0, 800, 600, 'fondo');
        
        button = game.add.button(game.world.centerX-22,80, 'iniciar', actionOnClick, this, 1, 0);
        button.anchor.setTo(0.5, 0.5);
        
        button2 = game.add.button(game.world.centerX,game.world.centerY, 'carga', actionOnClick, this, 1, 0);
        button2.anchor.setTo(0.5, 0.5);
        
        button3 = game.add.button(game.world.centerX,326, 'MANUAL', actionOnClick, this, 1, 0);
        button3.anchor.setTo(0.5, 0.5);
    
    
        music = game.add.audio('Min');
    music.play('',0,1,true);
    
        
    },
  
    update:function(){
        
    }
};
//game.state.start('caballero');
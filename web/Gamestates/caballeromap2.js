//var game= new Phaser.Game(800, 400, Phaser.CANVAS, 'Pantalla');
var map;
var layer,layer2,layer3,layer4,layer5;
var sprite;
var w,a,s,d,m,n,e;
var g = 800, h = 400;
var music;
var mirando="arriaba";
var banderaMusica=false;
var banderaPausa=false;
var banderaInventario=false;
var contadorFps=0;

var caballeroState2= {
    
    preload: function(){
     
      
    },
    
    create: function(){
    map = game.add.tilemap('map2');
    map.addTilesetImage('terrain_atlas','tiles');
  
    
    
    layer = map.createLayer('Lava - Base');
    layer.resizeWorld();
    layer.wrap = true;
    map.setCollision([240, 368, 369, 370],true,'Lava - Base');
    
    
    layer2 = map.createLayer('Camino de piedra');
    layer2.resizeWorld();
    layer2.wrap = true;
  
    
    layer3 = map.createLayer('Arbolitos partidos a la mitad');
    layer3.resizeWorld();
    layer3.wrap = true;
   
    
    layer4 = map.createLayer('Tierrita y pastito');
    layer4.resizeWorld();
    layer4.wrap = true;
    
    layer5 = map.createLayer('Final');
    layer5.resizeWorld();
    layer5.wrap = true;
    map.setCollision([694,695,696,697,698,336,337,306,338,304,210,209,272,273,274,241,209,210,242],true,'Final');
    
          map.setTileIndexCallback(1,pasarLv2,this); 
  
    layer.debug = false;

        layer5.debug= false;
    
            
      

   sprite = game.add.sprite(15, 15, 'phaser');
    
    sprite.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true);
    sprite.animations.add('left',[9,10,11,12,13,14,15,16,17],10,true);
     sprite.animations.add('right',[27,28,29,30,31,32,33,34,35],10,true);
    sprite.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);

       
        
    game.physics.enable(sprite);
    sprite.body.setSize(23,30,32,32);
    game.camera.follow(sprite);
    
    

game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.enable(sprite);
sprite.body.collideWorldBounds=true;
   
   
    
    //music = game.add.audio('boden');
    //music.play('',0,1,true);
    
        

    n= game.input.keyboard.addKey(Phaser.Keyboard.N); 
    m= game.input.keyboard.addKey(Phaser.Keyboard.M); 
    a= game.input.keyboard.addKey(Phaser.Keyboard.A);
    s= game.input.keyboard.addKey(Phaser.Keyboard.S);
    d= game.input.keyboard.addKey(Phaser.Keyboard.D);
    w= game.input.keyboard.addKey(Phaser.Keyboard.W);
    e= game.input.keyboard.addKey(Phaser.Keyboard.E);    
        
    },
    
    
    update: function(){
        
            game.physics.arcade.collide(sprite, layer);
            game.physics.arcade.collide(sprite, layer5);
          

    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;
    if(contadorFps>=60){
         if(m.isDown && banderaMusica==false){
        
        
             music.pause();
             banderaMusica=true;
             
        
            
       
        }else if(m.isDown && banderaMusica==true){
        
        
             music.resume();
             banderaMusica=false;
             
        
            
       
        }
        contadorFps=0;
        
    }
    contadorFps=contadorFps+20;
    if (w.isDown)
    {
        sprite.body.velocity.y = -180;
        sprite.animations.play("arriba");
        
    }
    else if (s.isDown)
    {
        sprite.body.velocity.y = 180;
        sprite.animations.play("abajo");
    }

    else if (a.isDown)
    {
        sprite.body.velocity.x = -200;
        sprite.animations.play("left");
    }
    else if (d.isDown)
    {
        sprite.body.velocity.x = 200;
        sprite.animations.play("right");
    }else  {
        
       sprite.animations.stop();

        
    }
   
        //pausa
        if(e.isDown){
            
                    game.paused = true;


                menu = game.add.sprite(sprite, sprite, 'menu');
                menu.anchor.setTo(0.5, 0.5);
                banderaPausa=true;
         
                game.input.onDown.add(unpause, self);
                banderaPausa=false;
            
        

       
        //game.input.onDown.add(unpause, self);

        

        }
          function unpause(event){
        // Only act if paused
        if(game.paused){
            // Calculate the corners of the menu
            var x1 = g/2 - 270/2, x2 = g/2 + 270/2,
                y1 = h/2 - 180/2, y2 = h/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice 
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);

                // Display the choice
                //choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                // Remove the menu and the label
                menu.destroy();
                //choiseLabel.destroy();

                // Unpause the game
                game.paused = false;
            }
        }
    };
        //FIN DE PAUSA
            
         
    }
    
    
};


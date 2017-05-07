//var game= new Phaser.Game(800, 400, Phaser.CANVAS, 'Pantalla');
var map;
var layer,layer2,layer3,layer4,layer5,layer6,layer7,layer8,layer9,layer10,layer11;
var sprite;
var w,a,s,d,m,n,e;
var g = 800, h = 400;
var music;
var mirando="arriaba";
var banderaMusica=false;
var banderaPausa=false;
var banderaInventario=false;
var contadorFps=0;

var CastleState= {
    
    preload: function(){
     
      
    },
    
    create: function(){
    map = game.add.tilemap('map3');
    map.addTilesetImage('terrain_atlas','tiles');
    map.addTilesetImage('32x32_map_tile v3.1 [MARGINLESS]','tiles2');
    map.addTilesetImage('base_out_atlas','tiles3');
    map.addTilesetImage('blue trees','tiles4');
    map.addTilesetImage('brown trees','tiles5');
    map.addTilesetImage('build_atlas','tiles6');
    map.addTilesetImage('Castle2','tiles7');
    map.addTilesetImage('CastleExample','tiles8');
    map.addTilesetImage('hyptosis_tile-art-batch-1','tiles9');
    map.addTilesetImage('obj_misk_atlas','tiles10');
    map.addTilesetImage('PathAndObjects','tiles11');
    map.addTilesetImage('WaterFountain','tiles12');
  
    //1
    
    layer = map.createLayer('base');
    layer.resizeWorld();
    layer.wrap = true;
     
    
      layer2 = map.createLayer('caminos');
    layer2.resizeWorld();
    layer2.wrap = true;
    
      layer3 = map.createLayer('muros');
    layer3.resizeWorld();
    layer3.wrap = true;
    map.setCollision([9086,9019,9085,6327,6328,6359,6360,73,25,55,50,58,56,71,74,88,104,87,90,106,188,57,103,24,41,19,18,81,6325,6326,6357,6358,6389,6390,239,240,255,256,234
],true,'muros');
    
      layer4 = map.createLayer('orillas');
    layer4.resizeWorld();
    layer4.wrap = true;
    map.setCollision([7477,7478,7479,7509,7510,7511,7541,7542,7543,2,10,7,23,9,8,26,73,39,40,41,42,55,56,57,58,87,140,141,90,50,24,65,89,103,156,157,185,142,143,144,126,127,128,185],true,'orillas');
    
    
      layer5 = map.createLayer('suelo del castillo');
    layer5.resizeWorld();
    layer5.wrap = true;
    
      layer6 = map.createLayer('pasto de rio');
    layer6.resizeWorld();
    layer6.wrap = true;
    
      layer7 = map.createLayer('rio');
    layer7.resizeWorld();
    layer7.wrap = true;
    
      layer8 = map.createLayer('Casa');
    layer8.resizeWorld();
    layer8.wrap = true;
    
      layer9 = map.createLayer('cosas extra');
    layer9.resizeWorld();
    layer9.wrap = true;
    
      layer10 = map.createLayer('arboles');
    layer10.resizeWorld();
    layer10.wrap = true;
    
      layer11 = map.createLayer('otros');
    layer11.resizeWorld();
    layer11.wrap = true;
    
    
   
           
  layer3.debug=true;
  layer4.debug=true;
   
      

   sprite = game.add.sprite(400, 3000, 'phaser');
    
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
        game.physics.arcade.collide(sprite, layer3);
        game.physics.arcade.collide(sprite, layer4);
         

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


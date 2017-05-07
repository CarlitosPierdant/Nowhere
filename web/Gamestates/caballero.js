/* global pasarLvl */

//var game= new Phaser.Game(800, 400, Phaser.CANVAS, 'Pantalla');
var map;
var layer,layer2,layer3,layer4,layer5,layer6,layer7,layer8,layer9,layer10,layer11,layer12,layer13,layer14;
var sprite;
var w,a,s,d,m,n,e;
var g = 800, h = 400;
var music;
var mirando="arriaba";
var banderaMusica=false;
var banderaPausa=false;
var banderaInventario=false;
var contadorFps=0;

var caballeroState= {
    
    preload: function(){
     
      
    },
    
    create: function(){
    map = game.add.tilemap('map');
    map.addTilesetImage('terrain_atlas','tiles');
    map.addTilesetImage('ship','barco');
    map.addTilesetImage('tileset-shinygold2','casas');    
    
    
    layer = map.createLayer('Agua');
    layer.resizeWorld();
    layer.wrap = true;
    map.setCollision([293,294,356,357,358,325,326,388,389,390,420,421,422,550, 708, 709, 710,644],true,'Agua');
    
    layer2 = map.createLayer('ArenayPasto');
    layer2.resizeWorld();
    layer2.wrap = true;
    
    
    layer3 = map.createLayer('SueloBarco');
    layer3.resizeWorld();
    layer3.wrap = true;
    
    layer4 = map.createLayer('Barco');
    layer4.resizeWorld();
    layer4.wrap = true;
    map.setCollision([56,225,193,209,177,178,179,161,145,129,97,113,81,116,100,84,68,81,65,49,34,18,3,4,5,22,38,55,71,76,115,131,147,163,103,87],true,'Barco');
        
    
    
    layer5 = map.createLayer('DetallesPlaya');
    layer5.resizeWorld();
    layer5.wrap = true;
    map.setCollision([257, 258, 259,289, 290, 291, 321, 322, 323, 353, 354, 355],true,'DetallesPlaya');    
    
    layer6 = map.createLayer('Arboles');
    layer6.resizeWorld();
    layer6.wrap = true;
    map.setCollision([287,288,319,320,351,352,383,384],true,'Arboles');
    
    layer7 = map.createLayer('Arboles2');
    layer7.resizeWorld();
    layer7.wrap = true;
    map.setCollision([761,762,763,793,794,795,825,826,827],true,'Arboles2');    
    
    layer8 = map.createLayer('Arboles3');
    layer8.resizeWorld();
    layer8.wrap = true;
        map.setCollision([1182,1183,1184,1214,1215,1216,1246,1247,1248],true,'Arboles3');    
    
    layer9 = map.createLayer('Estanque');
    layer9.resizeWorld();
    layer9.wrap = true;
    map.setCollision([648,650,684,652],true,'Estanque');    
    
    layer10 = map.createLayer('TorresCascadas');
    layer10.resizeWorld();
    layer10.wrap = true;
    
    layer11 = map.createLayer('Cascadas');
    layer11.resizeWorld();
    layer11.wrap = true;
    
    layer12 = map.createLayer('Puentes');
    layer12.resizeWorld();
    layer12.wrap = true;
    map.setCollision([817,818,786,787],true,'Puentes');        
    
    layer13 = map.createLayer('DPuentes');
    layer13.resizeWorld();
    layer13.wrap = true;
    map.setCollision([74,761,762,763,793,794,795,825,826,827,2674,2675,2676,2677,2678,2679,2680,2682,2683,2684,2685,2686,2687,2688,2690,2691,2692,2693,2694,2695,2696,2698,2699,2700,2701,2702,2703,2704,2706,2707,2708,2709,2710,2711,2712,2714,2715,2716,2717,2718,2719,2720,2722,2723,2724,2725,2726,2727,2728,2730,2731,2732,2733,2734,2735,2736,2738,2739,2740,3458,2742,2743,2744,2875,2874,2876,2877,2878,2879,2880,2881,2882,2883,2884,2885,2886,2887,2888,2889,2890,2891,2892,2893,2894,2895,2896,2897,2898,2899,2900,2901,2902,2903,2904,1921,1922,1923,1929,1930,1931,1937,1938,1939 ],true,'DPuentes');     


        layer14 = map.createLayer('Pass');
    layer14.resizeWorld();
    layer14.wrap = true;
    map.setCollision(58,true,'Pass');  
    
     map.setTileIndexCallback(58,pasarLvl,this);
        
           
   
    layer.debug = false;
   layer4.debug= false;
        layer5.debug= false;
    layer6.debug= false;
        layer7.debug=false;
        layer8.debug=false;
        layer12.debug=false;
        layer13.debug=false;
        layer9.debug=false;
        layer14.debug=false;
            
      

   sprite = game.add.sprite(400, 2050, 'phaser');
    
    sprite.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true);
    sprite.animations.add('left',[9,10,11,12,13,14,15,16,17],10,true);
     sprite.animations.add('right',[27,28,29,30,31,32,33,34,35],10,true);
    sprite.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);

       
        
    game.physics.enable(sprite);
    sprite.body.setSize(13,22,32,32);
    game.camera.follow(sprite);
    
    

game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.enable(sprite);
sprite.body.collideWorldBounds=true;
   
   
    
    music = game.add.audio('boden');
    music.play('',0,1,true);
    
        

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
            game.physics.arcade.collide(sprite, layer4);
            game.physics.arcade.collide(sprite, layer5);
            game.physics.arcade.collide(sprite, layer6);
            game.physics.arcade.collide(sprite, layer7);
            game.physics.arcade.collide(sprite, layer8);
            game.physics.arcade.collide(sprite, layer9);
            game.physics.arcade.collide(sprite, layer12);
            game.physics.arcade.collide(sprite, layer13);

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


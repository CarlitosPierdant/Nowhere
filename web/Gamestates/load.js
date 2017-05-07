var loadState ={
    preload:function(){
        
        game.load.tilemap('map', 'Multimedia/Imagenes/MapasJson/Nivel1_1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map2', 'Multimedia/Imagenes/MapasJson/Nivel de Lava_2_3.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map3', 'Multimedia/Imagenes/MapasJson/Castillo.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'Multimedia/Imagenes/MapasPNG/terrain_atlas.png');
        game.load.image('tiles2', 'Multimedia/Imagenes/MapasPNG/32x32_map_tile v3.1 [MARGINLESS].png');
        game.load.image('tiles3', 'Multimedia/Imagenes/MapasPNG/base_out_atlas.png');
        game.load.image('tiles4', 'Multimedia/Imagenes/MapasPNG/blue trees.png');
        game.load.image('tiles5', 'Multimedia/Imagenes/MapasPNG/brown trees.png');
        game.load.image('tiles6', 'Multimedia/Imagenes/MapasPNG/build_atlas.png');
        game.load.image('tiles7', 'Multimedia/Imagenes/MapasPNG/Castle.png');
        game.load.image('tiles8', 'Multimedia/Imagenes/MapasPNG/CastleExample.png');
        game.load.image('tiles9', 'Multimedia/Imagenes/MapasPNG/hyptosis_tile-art-batch-1.png');
        game.load.image('tiles10', 'Multimedia/Imagenes/MapasPNG/obj_misk_atlas.png');
        game.load.image('tiles11', 'Multimedia/Imagenes/MapasPNG/PathAndObjects.png');
        game.load.image('tiles12', 'Multimedia/Imagenes/MapasPNG/WaterFountain.png');
        game.load.image('fondo', 'Multimedia/Imagenes/MapasPNG/Fondo.jpg');
        game.load.image('pass', 'Multimedia/Imagenes/MapasPNG/bloque.png');
        game.load.image('barco', 'Multimedia/Imagenes/MapasPNG/ship.png');
        game.load.image('casas', 'Multimedia/Imagenes/MapasPNG/tileset-shinygold2.png');
        game.load.spritesheet('phaser','Multimedia/Imagenes/Personajes/Movimientos C2.0.png',64,64);
        game.load.audio('boden', 'Multimedia/Musica/Musica/01 - Opening.ogg');
        game.load.audio('Min', 'Multimedia/Musica/Musica/inicio.mp3');
        game.load.image('menu', 'Multimedia/Imagenes/MapasPNG/number-buttons-90x90.png', 270, 180);
        game.load.spritesheet('button', 'Multimedia/Imagenes/MapasPNG/button_sprite_sheet.png', 193, 71);
        game.load.spritesheet('iniciar', 'Multimedia/Imagenes/MapasPNG/iniciar.png', 502.5, 0);
        game.load.spritesheet('carga', 'Multimedia/Imagenes/MapasPNG/carga.png', 502.5, 0);
        game.load.spritesheet('MANUAL', 'Multimedia/Imagenes/MapasPNG/MANUAL.png', 502.5, 0);

    },
    create:function(){
        
         

    //	Set the anchor of the sprite in the center, otherwise it would rotate around the top-left corner
   
    game.state.start('menu');
        
    },
  
    update:function(){
        
    }
};
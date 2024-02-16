var config = {
    type: Phaser.AUTO,
    width:800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar a logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');

    //carregar o submarino
    this.load.image('submarino', 'assets/submarino.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    //adicionar a logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //guardar o peixinho em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);
    
    //adicionar peixe na tela, mas estático (usa a linha abaixo)
    //this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);


    //adicionando o submarino
    this.add.image(400, 100, 'submarino').setOrigin(0.1, 0.1).setFlip(true, false).setScale(0.5);

}



function update() {
    //adicionando controles no peixe dinâmico
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}


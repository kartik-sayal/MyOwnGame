class Game{
    constructor(){
        
    }
    getGameState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(d){
        database.ref('/')
        .update({gameState:d})
    }
    start(){
        if(gameState === 0){

            form = new Form();
            form.display();

            player = new Player();
            player.getPlayerCount();
        }
       
    }
}

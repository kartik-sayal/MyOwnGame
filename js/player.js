class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getPlayerCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(d){
        database.ref('/')
        .update({playerCount:d})
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            playerName: this.name,
            distance : this.distance, 
        })
    }
    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers = data.val();
        })
                                                                             
    }
}
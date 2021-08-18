class Form {
    constructor(){
        this.input = createInput('Enter Your Dog Name');
        this.button = createButton("Let's Begin");
        this.greeting = createElement('h1');
    }
    display(){
        var title = createElement("h1");
        title.html("Dog Fighter");
        title.position(600,0);
        
        this.input.position(500,200);

      this.button.position(500,300);

        this.button.mousePressed(()=>{
            
            this.input.hide();

            this.button.hide();

             player.name = this.input.value();

            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();

            player.updateCount(playerCount);

           
            this.greeting.html('Welcome!' + player.name);
            this.greeting.position(500,200);

        })
    }
    hideDetails(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
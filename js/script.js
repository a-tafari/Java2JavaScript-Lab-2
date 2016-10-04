" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      //var textOut = type + " " + name + "<br />";

      switch (type) {
        case "dog": var animal = new Dog(name);
          break;
        case "cat": var animal = new Cat(name);
            break;
        case "pig": var animal = new pig(name);
              break;
        default:

      }
      var textOut = animal.speak();

      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }

  function Pet (name){
    this.name = name;
    this.type = "pet";
    this.sound = "arrrf";
    this.speak = function(){
      return "My name is "+ this.name +" i am a "+ this.type + " and I say "+ this.sound + "</br>";

    }
  }
  function Dog (name){
    this.name = name;
    this.type = "dog";
    this.sound = "Woof";
  }
  function Cat (name){
    this.name = name;
    this.type = "cat";
    this.sound = "Meow";
  }
  function Pig (name){
    this.name = name;
    this.type = "pig";
    this.sound = "Oink";
  }
  Dog.prototype =new Pet();
  Cat.prototype = new Pet ();
  Pig.prototype = new Pet ();
};

var chat = new PetChat();
chat.init();

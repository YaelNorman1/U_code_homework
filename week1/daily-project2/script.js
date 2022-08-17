const coffeeShop = {
    beans: 40,
    money: 0,

    buyBeans: function(numBeans){
        this.money-=numBeans;
    },
  
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 12, price: 6},
        doubleShot: {beanRequirement: 15, price: 5},
        frenchPress: {beanRequirement: 17, price: 3}
    },

    buyDrink: function(drinkType){
        this.money+=this.drinkRequirements[drinkType].price;


    },
  
    makeDrink: function (drinkType) {

        if (this.drinkRequirements[drinkType])
            alert("Sorry, dont have coffe!");
        else if (this.beans >= this.drinkRequirements[drinkType].beanRequirement){
            alert("Sorry, out of beans!");
        }
        else {
            this.beans-=this.drinkRequirements[drinkType];
            this.buyDrink(drinkType);
        }

    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
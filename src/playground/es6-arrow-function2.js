


const add = (a,b) => {
    // console.log(arguments); // no longer bound in es6
    return a + b;

};


console.log(add(55,1));


const user = {
  name: 'Raymond',
  cities: ['wildwood','stafford'],

    printPlacesLived: function () {
      console.log(this.name);
      console.log(this.cities);

      const that = this;

       this.cities.forEach(function (city) {
           console.log(that.name + " has lived in " +city);
       });
    }

};



const user2 = {
    name: 'Raymond',
    cities: ['wildwood','stafford'],

    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) =>{
            console.log(this.name + " has lived in " +city);
        });
    }

};



const user3 = {
    name: 'Jennifer',
    cities: ['london','atlanta'],

    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) =>{
            console.log(this.name + " has lived in " +city);
        });
    }

};





const user4 = {
    name: 'Andrea',
    cities: ['Offenbach','Cheser'],

    printPlacesLived() {
      const cityMessages = this.cities.map((city) => {
           return this.name +" has lived in "+city + "!";
      });

        return cityMessages;

    }

};




const user5 = {
    name: 'Andrea',
    cities: ['Offenbach','Cheser'],

    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name +" has lived in "+city + "!";
        });


    }

};





const user6 = {
    name: 'Andrea',
    cities: ['Offenbach','Cheser'],

    printPlacesLived() {
        return this.cities.map((city) => this.name +" has lived in "+city + "!");
    }

};




user.printPlacesLived();
user2.printPlacesLived();
user3.printPlacesLived();
console.log(user4.printPlacesLived());
console.log(user5.printPlacesLived());
console.log(user6.printPlacesLived());

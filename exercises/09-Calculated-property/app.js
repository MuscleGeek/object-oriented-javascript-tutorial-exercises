class Person{
	//the constructor receives 3 params
	constructor(year, month, date){
		this._birthday = new Date(year, month, date);
	}
	
	getAge() { // birthday is a date
	    let ageDifMs = Date.now() - this._birthday.getTime();
	    let ageDate = new Date(ageDifMs); // milliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	
	canDrinkAlcohol(){
        
        return (this.getAge() >= 21 ? true : false);    

        
        //alternative solution 
        //if (this.getAge() >= 21 ){
      //return true
    //}
    //else{
      //return false
    //}
        }
    }


let mario = new Person(1985, 10, 20);
console.log(mario.canDrinkAlcohol());

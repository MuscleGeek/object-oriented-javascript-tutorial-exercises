/**
  * This class recreates a real-life printer
  */
class Printer{
    
    constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
  
    //Just like printers, this printer has a function that 
    //prints an example text to make sure the printer is working
    printerTest() { 
        return `My brand is ${this._brand} and my model ${this._model}`; 
    } 
}

//Your code here
//Create a new object instance of the class Printer and assign it to a variable called myPrinter
let myPrinter = new Printer();

//Call the function printerTest of the class Printer and store the result in a variable called testResult
let testResult = myPrinter.printerTest();
//Print on the console the variable testResult
console.log(testResult);

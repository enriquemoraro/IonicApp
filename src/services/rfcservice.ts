import {Injectable} from '@angular/core';
//import { GeneralService } from "./GeneralService"

@Injectable()
export class Rfcservice {
public rfc: string;
public curp: string;
public ine: string;


private name:string=null;

private view;
    get View() { return this.view; }
    set View(value) { this.view = value }


public _name: string;

    getMethod(): string{
        return this._name;
    }

    setMethod(value: string){
        this._name = value
    }

    get getMethod1(): string{
        return this._name;
    }

    set setMethod1(value: string){
        this._name = value
        
 
    }


/*GETTER AND SETTER VALOR rfc */

    get getRfc(): string{
        return this.rfc;
    }

    set setRfc(value: string){
        this.rfc = value
    }


 constructor(){
       


        var person1 = new Person('Aman',12);
        person1.sayName();
 
        var person2 = new Person('Neha',14);
        person2.sayName();
 
    
}



public getName():string{
    return this.name;


}



 
    
}


function Person(name, age){
 
        this.name = name;
        this.age = age;
    }
 
    Person.prototype = {
        constructor: Person,
        sayName : function () {
            console.log ('The Name is: ' + this.name);
        }
    }
 
  
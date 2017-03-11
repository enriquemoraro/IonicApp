import example= DevBridge.Blog.Examples.TypeScript;

class Main{

public unknown: example.Person;
public  tim:example.Person;

cosntructor(){
    this.unknown= new example.Person();
    this.tim=new example.Person("TIm");


    console.log(this.tim.getName);
}





}
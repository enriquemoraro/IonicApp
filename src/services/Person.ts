module DevBridge.Blog.Examples.TypeScript{

    export class Person{

   public static defaultName :string="Smith";

public name:string=null;





   constructor(name:string=null) {
       if (name){
           this.name=name;
      }else{
          this.name=Person.defaultName;
      }

    }


    public getName(): string{
      return this.name;
    }


    }
}
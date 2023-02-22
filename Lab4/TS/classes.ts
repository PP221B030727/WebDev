class TypeScript{
    version : string
    constructor(version : string){
        this.version  =  version
    }
    info(name : string){
        return name + "The : " +this.version
    }
}
class car{
    readonly model : string
    readonly number : number = 4
    constructor(theModel:string){
        this.model = theModel
    }
}
// модификаторы protected public private - как на java
//абстрактные классы 
abstract class Component{
    abstract render() : void
    abstract info():string
}
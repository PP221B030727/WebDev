const isFet:boolean=true
const isloaf:boolean=false
const int:number = 32
const float : number = 4.2
const num : number = 10e9
const message : string = "hello type script"
const numberArray : number[] = [1,2,3,4,5,6]
const numArray : Array <number> = [1,2,3,4,5,6]
const words : String[] = ["hello","world"]
const contact:[string,number]=["Hello",21]
let variable:any = 32
variable = "Hlwasd"
variable = []




function sayMyName(name : String): void{
    console.log(name)
}
sayMyName("Huisenberg")



function throwError(message : string):never {
    throw new Error(message)
}


function infinite():never{
    while(true){

    }
}


//Type


type Login  = string
const login2 : Login = "Login"

type ID = string|number
const id1 : ID = 1
const id2 : ID = "My Id"

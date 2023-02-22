function add(a : number , b : number):number{
    return a+b

}
function toUpper(str : string):string{
    return str.trim().toUpperCase()
}
interface MyPosition{
    x : number | undefined,
    y : number | undefined
}
interface MyPositionWithDefoult extends MyPosition{
    defoult : string
}

// перегрузка функцийй в TYPE Script
function MyPos():MyPosition
function MyPos(a:number):MyPositionWithDefoult
function MyPos(a:number,b:number):MyPosition
function MyPos(a?:number,b?:number){
    if(!a && !b){
        return {
            x:undefined,
            y:undefined
        }
    }
    if(a && !b){
        return {
            x : a,
            y : undefined,
            default : a.toString()
        }
    }
    return {
        x:a,
        y:b
    }
}


console.log(MyPos(1))
console.log(MyPos(1,2))
console.log(MyPos())
interface rect{
    readonly id : string 
    color? : string
    size : {
        width : number
        height : number
    } 
}


const myRect : rect = {
    id : "My Id",
    size : {
        width : 32,
        height : 231
    },
    color : "red"
};

const myReactTwo : rect = {
    id : "Second Id",
    color : "Blue",
    size:{
        width : 12,
        height : 12
    }
}
myReactTwo.color = "White"
// console.log(myRect)

const re = {} as rect
const re2 = <rect>{} 


//-------------------------------------------

interface ReactWithArea extends rect{
    getArea: () => number
}
const recChek : ReactWithArea = {
    id:"My Id",
    color:"red",
    size:{
        width : 21,
        height : 32 
    },
    getArea():number{
        return this.size.width*this.size.height
    }
}
// console.log(recChek.getArea())
//======================================================================================================================================================================================================


interface IClock{
    time : Date,
    setTime(date:Date):void
}


class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}



//====================================================

interface Styles{
    [key : string] : string
}

const css : Styles = {
    border : "1 px solid black",
    marginTop : "2px",
    borderRadius : "10px"
}


//========================================================================================================================




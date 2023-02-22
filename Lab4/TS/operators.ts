interface person{
    name : string
    age : number
}
type PersonKeys = keyof person
let key:PersonKeys = 'name'
key = 'age'
type User = {
    id : number
    name : string
    email : string
    createdAt : Date
}
type UserKeys = Exclude <keyof User , 'id'|'crearedAt'>
function strip(x:string | number){
    if(typeof x == 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}

class myResp{
    header = "resp header"
    result = "resp result"
}
class myError{
    header = "error header"
    message = "error message"
}
function headle(res:myResp|myError){
    if(res instanceof myResp){
        return res.header + res.result
    }
    return res.header + res.message 
}




type AlertType = 'succes'|'danger'|'warning'
function setAl(type:AlertType){
    
}
// setAl('succes')
// setAl('jsa')
// setAl('danger')
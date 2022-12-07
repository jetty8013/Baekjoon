let regex = /[0-9a-z\.\-\_]/gi;
let regex2 = /(\.+)/g;
let regex3 = /^\.+|\.+$/g;

function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    new_id = new_id.match(regex).join("")
    new_id = new_id.replace(regex2,".")
    new_id = new_id.replace(regex3,"")
    if(new_id == ""){
        new_id = "a"
    }
    new_id = new_id.substring(0,15)
    new_id = new_id.replace(regex3,"")
    
    if(new_id.length <= 2){
        new_id = new_id + new_id.substr(new_id.length - 1).repeat(3-new_id.length)
    }


    return answer =  new_id;
}
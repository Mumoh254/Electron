//function    to  create   a  window   and  have  height   and   width    paga   tto use  brower   widow  from   electron


const  {BrowserWindow}  =  require("electron")

let  window;

function  createWindow(){
    window  =  new  BrowserWindow({
        width:  800,
        height:  800,
        webPreferances:{
            nodeIntegration:true
        }
    })

    window.loadFile("./src/ui/index.html")
}

 
module.exports  =  {
    createWindow
}
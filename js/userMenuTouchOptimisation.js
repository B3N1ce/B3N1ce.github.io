/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var body = document.getElementsByTagName("body")[0];
body.addEventListener("click",handleUserMenuBodyClickEvent);

var headerUser = document.getElementsByClassName("header-user")[0];
headerUser.addEventListener("click",handleHeaderUserClickEvent);

var active = false;

function handleHeaderUserClickEvent () {
    if (active === false){
        active = true;
        
        body.classList.add("body--userMenuStatic");
        
        event.stopPropagation();
    }
}

function handleUserMenuBodyClickEvent () {
    
    if (active === true){
        active = false;
        
        body.classList.remove("body--userMenuStatic");
        
    }
    
}
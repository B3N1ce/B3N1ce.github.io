/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const root = document.documentElement;

function handleScrollAnimations () {
    var scrollTop = document.querySelector(".scroll").scrollTop;
    var screenHeight = window.innerHeight;
    var scrollHeight = document.querySelector(".scroll").scrollHeight;

    //console.log("ScrollTop: " + scrollTop + " | screenHeight: " + screenHeight + " | scrollHeight: " + scrollHeight);

    //definition of Keyframes
    if ( scrollTop < 0.5 * screenHeight ) {
        document.querySelector(".test20-1").classList.remove("kf-1");
        document.querySelector(".test20-1").classList.add("kf-0");
    }
    if ( scrollTop > 0.5 * screenHeight ) {
        document.querySelector(".test20-1").classList.remove("kf-0");
        document.querySelector(".test20-1").classList.add("kf-1");
    }


    if ( scrollTop < 1.1 * screenHeight ) {
        document.querySelector(".test20-3").classList.remove("kf-0");
        document.querySelector(".test20-3").classList.add("kf-1");
    }
    if ( scrollTop > 1.1 * screenHeight && scrollTop < 2 * screenHeight ) {
        document.querySelector(".test20-3").classList.add("kf-0");
        document.querySelector(".test20-3").classList.remove("kf-1");
        document.querySelector(".test20-3").classList.remove("kf-2");
    }
    if ( scrollTop > 2 * screenHeight ) {
        document.querySelector(".test20-3").classList.remove("kf-0");
        document.querySelector(".test20-3").classList.add("kf-1");
    }


    if ( scrollTop < 2.2 * screenHeight) {
        document.querySelector(".test0-2-1").classList.add("kf-0");
        document.querySelector(".test0-2-1").classList.remove("kf-1");

    }
    if ( scrollTop >= (2.2 * screenHeight) && scrollTop <= (3 * screenHeight) ) {
        document.querySelector(".test0-2-1").classList.add("kf-1");
        document.querySelector(".test0-2-1").classList.remove("kf-0");

    }
    if ( scrollTop >= (3 * screenHeight) ) {
        document.querySelector(".test0-2-1").classList.add("kf-0");
        document.querySelector(".test0-2-1").classList.remove("kf-1");
    }


    if( (scrollTop + screenHeight) - 100 < scrollHeight - 300) {
        document.querySelector(".test0-3-1").classList.remove("kf-1");
        document.querySelector(".test0-3-1").classList.add("kf-0");
    }
    if( (scrollTop + screenHeight) - 100 >= scrollHeight -300) {
        document.querySelector(".test0-3-1").classList.remove("kf-0");
        document.querySelector(".test0-3-1").classList.add("kf-1");
    }


}
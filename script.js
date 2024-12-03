const countval= document.getElementById("num") //<div class=​"font-bold" id=​"num">​0​</div>​ //!ye pura element dega

const increment=()=>{

    //get the value from UI
let val=parseInt(countval.innerHTML);

//increase the val
val=val+1;

//Update the val in the UI
countval.innerHTML=val;

};

const decrement=()=>{
    let val=parseInt(countval.innerHTML);

    val=val-1;
    countval.innerHTML=val;


};
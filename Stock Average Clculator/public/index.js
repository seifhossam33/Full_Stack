
            
function Calculate1()
{
    b5 =document.getElementById("valueThree").value;
    b6 =document.getElementById("valueFour").value;
    b3 =document.getElementById("valueOne").value;
    b4 =document.getElementById("valueTwo").value;
    

    res1=(parseFloat(b3) * parseFloat(b4)).toFixed(3);
    res2=(parseFloat(b4) * parseFloat(b5)).toFixed(3);
    res3=((parseFloat(b4) * parseFloat(b3))-parseFloat(res2)).toFixed(3);
    res4=(parseFloat(b6)-parseFloat(b5)).toFixed(3);
    res5=(parseFloat(res3)/parseFloat(res4)).toFixed(3);
    res6=(parseFloat(res5)*parseFloat(b5)).toFixed(3);
    res7=(parseFloat(res5)*parseFloat(b6)).toFixed(3);
    res8=(parseFloat(res7)-parseFloat(res6)).toFixed(3);

    console.log(res1);
    console.log(res2);

    document.getElementById("answer1").innerHTML=res1;
    document.getElementById("answer2").innerHTML=res2;
    document.getElementById("answer3").innerHTML=res3;
    document.getElementById("answer4").innerHTML=res4;
    document.getElementById("answer5").innerHTML=res5;
    document.getElementById("answer6").innerHTML=res6;
    document.getElementById("answer7").innerHTML=res7;
    document.getElementById("answer8").innerHTML=res8;
}
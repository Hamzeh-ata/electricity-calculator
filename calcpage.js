var prevRead,nowRead,sector,service,submit,fixedPrices,consumedWatts,reef,zeros,zerostemp1,reefValue,counterFee,TVFee,wasteFee,wasteFeeM,finalBill,ConsumptionValue;
counterFee=200;
TVFee=1000;
zeros=1;
$("#submit-button").click(function(){
prevRead=$("#prev-read").val();
nowRead=$("#now-read").val();
sector=$("#select").find(":selected").text();
/*if($("#select").val()==1){
};*/
service=$('input[name=Service]:checked').val();
consumedWatts=nowRead-prevRead;
$("#Consumed").val(consumedWatts);
countrySideCalc(consumedWatts);
fixedPrices=TVFee+counterFee+reefValue;
wasteFeeCalc(consumedWatts);
ConsumptionCalc(consumedWatts);
finalBill=fixedPrices+wasteFee+ConsumptionValue;
$("#finallBill").val(finalBill/1000);
$("#Consumption-value").val(ConsumptionValue/1000);
});
function countrySideCalc(Watts){
var leng=Watts.toString().length;
if(Watts<=999){
    for(let i=0;i<leng; i++){
        zeros+="0";
        };
        zerostemp1=parseInt(zeros);
//console.log(zerostemp1);
//reefValue=Watts/zerostemp1;
reefValue=Watts;
console.log(reefValue);
}
else if(Watts>=1000){
    var toText=Watts.toString();
    var lastChar=toText.slice(-1);
    var lastDight=+(lastChar);
    /*if(lastDight==0){
        console.log(lastDight);
        reefValue=(input1/1000)*1000;
        console.log(reefValue.toFixed(3));

    }*/
      //  reefValue=Watts/1000;
      reefValue=Watts;
    console.log(reefValue);
};
zeros=1;  
return reefValue;
};
function wasteFeeCalc(Watts){
    if(Watts>200){
        wasteFeeM=(Watts-200)*5;
        wasteFee=1666+wasteFeeM;
    }
    else {
        wasteFee=1666;
    }
    console.log(wasteFee);
}
function ConsumptionCalc(Watts){
    if(Watts<=160){
        ConsumptionValue=Watts*33;
        console.log(ConsumptionValue);
    }
    else if (Watts>=161 && Watts<=300){
        ConsumptionValue=(160*33)+((Watts-160)*72);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>=301 && Watts<=500){
        ConsumptionValue=(160*33)+(140*72)+((Watts-300)*86);
        console.log("Watts" + ConsumptionValue);

    }
    else if (Watts>=501 && Watts<=600){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+((Watts-500)*114);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>=601 && Watts<=750){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+((Watts-600)*158);
        console.log("Watts" + ConsumptionValue);

    }
    else if (Watts>=750 && Watts<=1000){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+(150*158)+((Watts-750)*188);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>1000){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+(150*158)+(250*188)+((Watts-1000)*265);
        console.log("Watts" + ConsumptionValue);

    }
}
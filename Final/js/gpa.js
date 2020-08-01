$(document).ready(function(){
    $("#Calculate").click(function(){
        
        //get letter scores
        var ltrClass1 = parseInt( $("#letter1").val() );
        var ltrClass2 = parseInt( $("#letter2").val() );
        var ltrClass3 = parseInt( $("#letter3").val() );
        var ltrClass4 = parseInt( $("#letter4").val() );
        var ltrClass5 = parseInt( $("#letter5").val() );
        var ltrClass6 = parseInt( $("#letter6").val() );
        var ltrClass7 = parseInt( $("#letter7").val() );
        var ltrClass8 = parseInt( $("#letter8").val() );
        var ltrClass9 = parseInt( $("#letter9").val() );
        var ltrClass10 = parseInt( $("#letter10").val() );
        
        //get credits
		var class1 = parseInt( $("#credit1").val() );
		var class2 = parseInt( $("#credit2").val() );
		if (isNaN(class1) || isNaN(class2)){
			alert("You need at least two fill class 1 and class 2, make sence?");
		}
        
        if (isNaN(class1)){
            class1 = 0;
        }
        if (isNaN(class2)){
            class2 = 0;
        }
		
        var class3 = parseInt( $("#credit3").val() );
        if (isNaN(class3)){
            class3 = 0;
        }
        var class4 = parseInt( $("#credit4").val() );
        if (isNaN(class4)){
            class4 = 0;
        }
        var class5 = parseInt( $("#credit5").val() );
        if (isNaN(class5)){
            class5 = 0;
        }
        var class6 = parseInt( $("#credit6").val() );
        if (isNaN(class6)){
            class6 = 0;
        }
        var class7 = parseInt( $("#credit7").val() );
        if (isNaN(class7)){
            class7 = 0;
        }
        var class8 = parseInt( $("#credit8").val() );
        if (isNaN(class8)){
            class8 = 0;
        }
        var class9 = parseInt( $("#credit9").val() );
        if (isNaN(class9)){
            class9 = 0;
        }
        var class10 = parseInt( $("#credit10").val() );
        if (isNaN(class10)){
            class10 = 0;
        }
        
		
		//Numerator
		var numberator = ltrClass1*class1+
			ltrClass2*class2+
			ltrClass3*class3+
			ltrClass4*class4+
			ltrClass5*class5+
			ltrClass6*class6+
			ltrClass7*class7+
			ltrClass8*class8+
			ltrClass9*class9+
			ltrClass10*class10;
		
		//Denominator
		var denominator = class1+
			class2+
			class3+
			class4+
			class5+
			class6+
			class7+
			class8+
			class9+
			class10;
		
		//Calculate GPA
        var gpa = numberator/denominator;
		
		//keep two decimal
		fixedgpa = gpa.toFixed(2);
		
		//print gpa
        $("#gapDisplay").val(fixedgpa);
    });
});

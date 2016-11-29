////////////////////////////////////////////////////////////////////////////////
//this part's source=///////////////////////////////////////////////////////////
///////////https://richonrails.com/articles/text-area-manipulation-with-jquery//
/////////////////////////textarea manipulation with jquery//////////////////////
jQuery.fn.extend({
	setCursorPosition: function(position){
		if(this.length === 0) return this;
		return $(this).setSelection(position, position);
	},

	setSelection: function(selectionStart, selectionEnd) {
		if(this.length === 0) return this;
		input = this[0];

		if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', selectionEnd);
			range.moveStart('character', selectionStart);
			range.select();
		} else if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(selectionStart, selectionEnd);
		}

		return this;
	},

	focusEnd: function(){
		this.setCursorPosition(this.val().length);
		return this;
	},

	getCursorPosition: function() {
		var el = $(this).get(0);
		var pos = 0;
		if('selectionStart' in el) {
			pos = el.selectionStart;
		} else if('selection' in document) {
			el.focus();
			var Sel = document.selection.createRange();
			var SelLength = document.selection.createRange().text.length;
			Sel.moveStart('character', -el.value.length);
			pos = Sel.text.length - SelLength;
		}
		return pos;
	},

	insertAtCursor: function(myValue) {
		return this.each(function(i) {
			if (document.selection) {
			  //For browsers like Internet Explorer
			  this.focus();
			  sel = document.selection.createRange();
			  sel.text = myValue;
			  this.focus();
			}
			else if (this.selectionStart || this.selectionStart === '0') {
			  //For browsers like Firefox and Webkit based
			  var startPos = this.selectionStart;
			  var endPos = this.selectionEnd;
			  var scrollTop = this.scrollTop;
			  this.value = this.value.substring(0, startPos) + myValue +
							this.value.substring(endPos,this.value.length);
			  this.focus();
			  this.selectionStart = startPos + myValue.length;
			  this.selectionEnd = startPos + myValue.length;
			  this.scrollTop = scrollTop;
			} else {
			  this.value += myValue;
			  this.focus();
			}
	  	});
	}

});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var keyid = [
    "k4-0","k4-1","k4-2","k4-3","k4-4","k4-5",
    "k4-6","k4-7","k4-8","k4-9","k4-10","k4-11",
    "k4-12","k4-13",
    "k3-0","k3-1","k3-2","k3-3","k3-4","k3-5",
    "k3-6","k3-7","k3-8","k3-9","k3-10","k3-11",
    "k3-12","k3-13",
    "k2-0","k2-1","k2-2","k2-3","k2-4","k2-5",
    "k2-6","k2-7","k2-8","k2-9","k2-10","k2-11",
    "k2-12",
    "k1-0","k1-1","k1-2","k1-3","k1-4","k1-5",
    "k1-6","k1-7","k1-8","k1-9","k1-10","k1-11",
    "k0-0","k0-1","k0-2","k0-3","k0-4","k0-5",
    "k0-6","k0-7"
];
var keylabel={
    "k4-0":"‍‍‍/","k4-1":"۱","k4-2":"۲","k4-3":"۳","k4-4":"۴","k4-5":"۵",
    "k4-6":"۶","k4-7":"۷","k4-8":"۸","k4-9":"۹","k4-10":"۰","k4-11":"-",
    "k4-12":"=","k4-13":"backspace",
    "k3-0":"tab","k3-1":"ق","k3-2":"ۆ","k3-3":"ئ","k3-4":"ر","k3-5":"ت",
    "k3-6":"ی","k3-7":"ۇ","k3-8":"ی","k3-9":"وْ","k3-10":"پ","k3-11":"ؤ",
    "k3-12":"غ","k3-13":"\\",
    "k2-0":"caps lock","k2-1":"ا","k2-2":"س","k2-3":"د","k2-4":"ف","k2-5":"گ",
    "k2-6":"ه","k2-7":"ژ","k2-8":"ک","k2-9":"ل","k2-10":"ؽ","k2-11":"ه‌",
    "k2-12":"enter",
    "k1-0":"shift","k1-1":"ز","k1-2":"خ","k1-3":"ج","k1-4":"و","k1-5":"ب",
    "k1-6":"ن","k1-7":"م","k1-8":"چ","k1-9":"ش","k1-10":".","k1-11":"shift",
    "k0-0":"ctrl","k0-1":"fn","k0-2":"super","k0-3":"alt","k0-4":"آرا","k0-5":"alt",
    "k0-6":"menu","k0-7":"ctrl"
};
//zwj or U+200D is zero width joiner
var keylabel_sh={
    "k4-0":"zwj","k4-1":"!","k4-2":"@","k4-3":"#","k4-4":"تۆمن","k4-5":"٪",
    "k4-6":"×","k4-7":"،","k4-8":"*","k4-9":"(","k4-10":")","k4-11":"_",
    "k4-12":"+","k4-13":"backspace",
    "k3-0":"    ","k3-1":"ق","k3-2":"اۆ","k3-3":"ائ","k3-4":"أ","k3-5":"ط",
    "k3-6":"؛","k3-7":"اۇ","k3-8":"ای","k3-9":"اوْ","k3-10":"پ","k3-11":"اؤ",
    "k3-12":"ع","k3-13":"|",
    "k2-0":"","k2-1":"آ","k2-2":"ص","k2-3":"ذ","k2-4":"ث","k2-5":"ڳ",
    "k2-6":"ح","k2-7":"ظ","k2-8":"»","k2-9":"«","k2-10":"اؽ","k2-11":":",
    "k2-12":"",
    "k1-0":"","k1-1":"ض","k1-2":"ڭ","k1-3":"ً","k1-4":"ُ","k1-5":"ِ",
    "k1-6":"َ","k1-7":"ء","k1-8":"<","k1-9":">","k1-10":"؟","k1-11":"",
    "k0-0":"ctrl","k0-1":"fn","k0-2":"super","k0-3":"alt","k0-4":"یارؽم‌آرا","k0-5":"alt",
    "k0-6":"menu","k0-7":"ctrl"
};
var keymap={
    "k4-0":"‍‍‍/","k4-1":"۱","k4-2":"۲","k4-3":"۳","k4-4":"۴","k4-5":"۵",
    "k4-6":"۶","k4-7":"۷","k4-8":"۸","k4-9":"۹","k4-10":"۰","k4-11":"-",
    "k4-12":"=","k4-13":"\b",
    "k3-0":"\t","k3-1":"ق","k3-2":"ۆ","k3-3":"ئ","k3-4":"ر","k3-5":"ت",
    "k3-6":"ی","k3-7":"ۇ","k3-8":"ی","k3-9":"وْ","k3-10":"پ","k3-11":"ؤ",
    "k3-12":"غ","k3-13":"\\",
    "k2-0":"","k2-1":"ا","k2-2":"س","k2-3":"د","k2-4":"ف","k2-5":"گ",
    "k2-6":"ه","k2-7":"ژ","k2-8":"ک","k2-9":"ل","k2-10":"ؽ","k2-11":"ه‌",
    "k2-12":"\n",
    "k1-0":"","k1-1":"ز","k1-2":"خ","k1-3":"ج","k1-4":"و","k1-5":"ب",
    "k1-6":"ن","k1-7":"م","k1-8":"چ","k1-9":"ش","k1-10":".","k1-11":"",
    "k0-0":"","k0-1":"","k0-2":"","k0-3":"","k0-4":" ","k0-5":"",
    "k0-6":"","k0-7":""
};
var keymap_sh={
    "k4-0":"\u200D","k4-1":"!","k4-2":"@","k4-3":"#","k4-4":"تۆمن","k4-5":"٪",
    "k4-6":"×","k4-7":"،","k4-8":"*","k4-9":")","k4-10":"(","k4-11":"_",
    "k4-12":"+","k4-13":"\b",
    "k3-0":"\t","k3-1":"ق","k3-2":"اۆ","k3-3":"ائ","k3-4":"أ","k3-5":"ط",
    "k3-6":"؛","k3-7":"اۇ","k3-8":"ای","k3-9":"اوْ","k3-10":"پ","k3-11":"اؤ",
    "k3-12":"ع","k3-13":"|",
    "k2-0":"caps lock","k2-1":"آ","k2-2":"ص","k2-3":"ذ","k2-4":"ث","k2-5":"ڳ",
    "k2-6":"ح","k2-7":"ظ","k2-8":"»","k2-9":"«","k2-10":"اؽ","k2-11":":",
    "k2-12":"\n",
    "k1-0":"shift","k1-1":"ض","k1-2":"ڭ","k1-3":"ً","k1-4":"ُ","k1-5":"ِ",
    "k1-6":"َ","k1-7":"ء","k1-8":">","k1-9":"<","k1-10":"؟","k1-11":"shift",
    "k0-0":"ctrl","k0-1":"fn","k0-2":"super","k0-3":"alt","k0-4":"\u200C","k0-5":"alt",
    "k0-6":"menu","k0-7":"ctrl"
};
//these are keydown code
var keyidbycode={
    "192":"k4-0","49":"k4-1","50":"k4-2","51":"k4-3","52":"k4-4","53":"k4-5",
    "54":"k4-6","55":"k4-7","56":"k4-8","57":"k4-9","48":"k4-10","173":"k4-11",
    "61":"k4-12","8":"k4-13",
    "9":"k3-0","81":"k3-1","87":"k3-2","69":"k3-3","82":"k3-4","84":"k3-5",
    "89":"k3-6","85":"k3-7","73":"k3-8","79":"k3-9","80":"k3-10","219":"k3-11",
    "221":"k3-12","220":"k3-13",
    "20":"k2-0","65":"k2-1","83":"k2-2","68":"k2-3","70":"k2-4","71":"k2-5",
    "72":"k2-6","74":"k2-7","75":"k2-8","76":"k2-9","59":"k2-10","222":"k2-11",
    "13":"k2-12",
    "16":"k1-0","90":"k1-1","88":"k1-2","67":"k1-3","86":"k1-4","66":"k1-5",
    "78":"k1-6","77":"k1-7","188":"k1-8","190":"k1-9","191":"k1-10","":"k1-11",
    "17":"k0-0","":"k0-1","91":"k0-2","18":"k0-3","32":"k0-4","":"k0-5",
    "":"k0-6","":"k0-7",
    "39":"k-right","38":"k-up","37":"k-left","40":"k-down"
};
//these are keypress code
var keyidbycode_kp={
    "192":"k4-0","49":"k4-1","50":"k4-2","51":"k4-3","52":"k4-4","53":"k4-5",
    "54":"k4-6","55":"k4-7","56":"k4-8","57":"k4-9","48":"k4-10","45":"k4-11",
    "61":"k4-12","8":"k4-13",
    "":"k3-0","113":"k3-1","119":"k3-2","101":"k3-3","114":"k3-4","116":"k3-5",
    "121":"k3-6","117":"k3-7","105":"k3-8","111":"k3-9","112":"k3-10","91":"k3-11",
    "93":"k3-12","92":"k3-13",
    "":"k2-0","97":"k2-1","115":"k2-2","100":"k2-3","102":"k2-4","103":"k2-5",
    "104":"k2-6","106":"k2-7","107":"k2-8","108":"k2-9","59":"k2-10","39":"k2-11",
    "enter":"k2-12",
    "":"k1-0","122":"k1-1","120":"k1-2","99":"k1-3","118":"k1-4","98":"k1-5",
    "110":"k1-6","109":"k1-7","44":"k1-8","46":"k1-9","47":"k1-10","":"k1-11",
    "":"k0-0","":"k0-1","":"k0-2","":"k0-3","32":"k0-4","":"k0-5",
    "":"k0-6","":"k0-7",
};
var keyidbycode_kp_sh={
    "126":"k4-0","33":"k4-1","64":"k4-2","35":"k4-3","36":"k4-4","37":"k4-5",
    "94":"k4-6","38":"k4-7","42":"k4-8","40":"k4-9","41":"k4-10","95":"k4-11",
    "43":"k4-12","8":"k4-13",
    "tab":"k3-0","81":"k3-1","87":"k3-2","69":"k3-3","82":"k3-4","84":"k3-5",
    "89":"k3-6","85":"k3-7","73":"k3-8","79":"k3-9","80":"k3-10","123":"k3-11",
    "125":"k3-12","124":"k3-13",
    "capslock":"k2-0","65":"k2-1","83":"k2-2","68":"k2-3","70":"k2-4","71":"k2-5",
    "72":"k2-6","74":"k2-7","75":"k2-8","76":"k2-9","58":"k2-10","34":"k2-11",
    "enter":"k2-12",
    "leftshift":"k1-0","90":"k1-1","88":"k1-2","67":"k1-3","86":"k1-4","66":"k1-5",
    "78":"k1-6","77":"k1-7","60":"k1-8","62":"k1-9","63":"k1-10","rightshift":"k1-11",
    "":"k0-0","":"k0-1","":"k0-2","":"k0-3","32":"k0-4","":"k0-5",
    "":"k0-6","":"k0-7"
};

var shift=false;
var capslock=false;

//set view of keys like tab & ctrl & ...
function setSpecialView(){
    $("#k4-13").html(keylabel["k4-13"]);
    $("#k3-0").html(keylabel["k3-0"]);
    $("#k2-0").html(keylabel["k2-0"]);
    $("#k2-12").html(keylabel["k2-12"]);
    $("#k1-0").html(keylabel["k1-0"]);
    $("#k1-11").html(keylabel["k1-11"]);
    $("#k0-0").html(keylabel["k0-0"]);
    $("#k0-1").html(keylabel["k0-1"]);
    $("#k0-2").html(keylabel["k0-2"]);
    $("#k0-3").html(keylabel["k0-3"]);
    $("#k0-5").html(keylabel["k0-5"]);
    $("#k0-6").html(keylabel["k0-6"]);
    $("#k0-7").html(keylabel["k0-7"]);
}

function setShiftedView(){
    for (var i = 0, len = keyid.length; i < len; i++) {
       if(shift===false){
           $("#"+keyid[i]).html(keylabel_sh[keyid[i]]+"<br/><b>"+keylabel[keyid[i]]+"</b>");
       }
       else{
           $("#"+keyid[i]).html("<b>"+keylabel_sh[keyid[i]]+"</b><br/>"+keylabel[keyid[i]]);
        }
        setSpecialView();
    }
}

function setCapsLockView(){
    for (var i = 0, len = keyid.length; i < len; i++) {
       if(capslock===false){
           $("#"+keyid[i]).html(keylabel_sh[keyid[i]]+"<br/><b>"+keylabel[keyid[i]]+"</b>");
       }
       else{
           $("#"+keyid[i]).html("<b>"+keylabel_sh[keyid[i]]+"</b>");
        }
        setSpecialView();
    }
}

function clearAtCursor(cps){
    t=$("#textarea").val();
    var pos=cps;;
    if(t.length==cps){
        var text=$("#textarea").val();
        $("#textarea").val(text.substring(0,text.length-1));
    }
    else{
        $("#textarea").val(t.substring(0,pos-1)+t.substring(pos,t.length))
        $("#textarea").setCursorPosition(pos-1);
    }
}


$(document).ready(function(){
    setShiftedView();
    //virtual keyboard code

   $('button').click(function(){
       //caps lock key
        if(this.id==="k2-0"){
            capslock=!capslock;
            shift=false;
            setCapsLockView();
        }
        //left shift key
        else if(this.id==="k1-0"){
            shift = !shift;
            capslock=false;
            setShiftedView();
        }
        //right shift key
        else if(this.id==="k1-11"){
            shift = !shift;
            capslock=false;
            setShiftedView();
        }
        //backspace key
        else if(this.id==="k4-13"){
            clearAtCursor($("#textarea").getCursorPosition());
        }
        //letter keys
        else{
            //letter key with shift
            if(shift===true){
                $("#textarea").insertAtCursor(keymap_sh[this.id]);
                shift = !shift;
                setShiftedView();
            }
            //letter key with capslock
            else if(capslock===true){
                $("#textarea").insertAtCursor(keymap_sh[this.id]);
            }
            //letter key without any other key like shift or caps lock
            else{
                $("#textarea").insertAtCursor(keymap[this.id]);
                }
            }
   });

    //real keyboard code
    //we should override keypress event with prevent default to prevent ..
    //user typed character from being outputting.
   $("#textarea").keypress(function(e){
        if(!(e.ctrlKey)){
            if(keyidbycode_kp.hasOwnProperty(e.which) || keyidbycode_kp_sh.hasOwnProperty(e.which)){
                e.preventDefault();

            }
            else if(e.which===0){
            }
            else{
                var text=$("#textarea").val();
                $("#textarea").val(text.substring(0,text.length-1));
            }
        }
        else{

        }

   });

   $("#textarea").keydown(function(e){
       var cps=$("#textarea").getCursorPosition();
       var keycode=e.which;
       if(keyidbycode.hasOwnProperty(keycode) && !(e.ctrlKey)){
            //caps lock key
            if(keyidbycode[keycode]==="k2-0"){
                capslock=!capslock;
                shift=false;
                setCapsLockView();
            }
            //left shift key
            else if(keyidbycode[keycode]==="k1-0"){
                shift = !shift;
                capslock=false;
                setShiftedView();
            }
            //right shift key
            else if(keyidbycode[keycode]==="k1-11"){
                shift = !shift;
                capslock=false;
                setShiftedView();
            }
            //backspace key
            else if(keyidbycode[keycode]==="k4-13"){
                clearAtCursor($("#textarea").getCursorPosition());
            }
            //for tab key
            else if(keycode===0){
            }
            //for arrows
            else if(keyidbycode[keycode]==="k-up" || keyidbycode[keycode]==="k-down"
                ||keyidbycode[keycode]==="k-left" || keyidbycode[keycode]==="k-right")
            {

            }
            //letter keys
            else{
                //letter key with shift
                if(shift===true){
                    $("#textarea").insertAtCursor(keymap_sh[keyidbycode[keycode]]);
                    shift = !shift;
                    setShiftedView();
                }
                //letter key with capslock
                else if(capslock===true){
                    $("#textarea").insertAtCursor(keymap_sh[keyidbycode[keycode]]);
                }
                //letter key without any other key like shift or caps lock
                else{
                    $("#textarea").insertAtCursor(keymap[keyidbycode[keycode]]);
                }
            }
       }
   });

});

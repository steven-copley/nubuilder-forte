
window.nuREPORTdefault = {
   "top":30,
   "left":30,
   "bottom":260,
   "right":30,
   "width":210,
   "height":297,
   "paper":"A4",
   "orientation":"P",
   "groups":[
      {
         "sortField":"Detail",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":40,
               "label":"Detail Header",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"Report",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":30,
               "height":40,
               "label":"Report Header",
               "page_break":0,
               "margins":2,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":190,
               "height":40,
               "label":"Report Footer",
               "page_break":0,
               "margins":10,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"Page",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":70,
               "height":40,
               "label":"Page Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":40,
               "label":"Page Footer",
               "page_break":0,
               "margins":8,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      },
      {
         "sortField":"",
         "sortBy":"a",
         "sections":[
            {
               "id":"",
               "top":110,
               "height":0,
               "label":" Header",
               "page_break":0,
               "margins":4,
               "color":"#FFFFFF",
               "objects":[

               ]
            },
            {
               "id":"",
               "top":150,
               "height":0,
               "label":" Footer",
               "page_break":0,
               "margins":6,
               "color":"#FFFFFF",
               "objects":[

               ]
            }
         ]
      }
   ],
   "currentGroup":0
};

String.prototype.replaceAll = function(str1, str2, ignore){
   return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), str2);
};

String.prototype.ltrim = function() {
        return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
        return this.replace(/\s+$/,"");
}

window.nuOBJECT = {
        "id": "object1000",
        "objectType": "field",
        "backgroundColor": "white",
        "borderColor": "black",
        "borderWidth": "0",
        "fieldName": "#description#",
        "fontColor": "black",
        "fontFamily": "Helvetica",
        "fontSize": "10",
        "fontWeight": "",
        "format": "",
        "textAlign": "left",
        "image": "",
        "group": 0,
        "section": 0,
        "left": 10,
        "top": 5,
        "height": 20,
        "width": 100,
        "zIndex": 124,
        "minRows": 0,
        "maxRows": 0,
        "selected": 0,
        "name": "object1000"
};


window.nuCalColor       = '#F0F0F0';
window.nuCalTop         =  - 30;
window.nuDialog                                 = new nuCreateDialog('');
window.nuFORM                                   = new nuFormObject();
window.nuHideMessage                    = true;
window.nuDragID                                 = 1000;
window.nuLastForm                               = '';
window.nuNEW                                    = '';
window.nuColor                                  = '';
window.nuImage                                  = '';
window.nuSESSION                                = '';
window.nuDRAGLINEVSTART                 = '';
window.nuDRAGLINEVID                    = '';
window.nuLASTRECORD                             = '';
window.nuMESSAGES                               = [];
window.nuSAVED                                  = true;
window.nuImages                                 = [];
window.nuOPENER                                 = [];
window.nuSUBFORMROW                             = [];
window.nuSUBFORMJSON                    = [];
window.nuSCHEMA                                 = [];
window.nuLANGUAGE                               = [];
window.nuFIELD                                  = [];
window.nuHASH                                   = [];
window.nuBEFORE                                 = [];
window.nuAFTER                                  = [];
window.nuBROWSERESIZE                   = {
                                                                        x_position                              : 0,
                                                                        mouse_down                              : false,
                                                                        moving_element                  : '',
                                                                        pointer                                 : '',
                                                                        current_cell_width              : 0,
                                                                        next_cell_left                  : 0,
                                                                        array_current_cell_left : '',
                                                                        last_moved_element              : ''
                                                                };
window.nuBACKUP                = [];
window.nuLastClick             = [];
window.nuDIALOG                = {};
window.nuDIALOG.groupNumber    = '0';
window.nuDIALOG.sectionNumber  = '0';
window.nuDIALOG.dialog         = '';
window.nuDIALOG.dialogX        = 0;
window.nuDIALOG.dialogY        = 0;

function nuValidCaller(o){
	
	if(o === null){return false;}
	return o.hasOwnProperty('nuVersion');
}
  
function nuHomeWarning(){

	if(window.nuEDITED){
		return nuTranslate('Leave this form without saving ?')+'  '+nuTranslate('Doing this will return you to the login screen.');
	}
	return nuTranslate('Doing this will return you to the login screen.');
}

function nuLoginRequest(u, p){

	if ( window.nubuilder_session_name != '' ) {
		var ajaxurl = "index.php?rt=api&wpsnsc=" + window.nubuilder_session_name;
	} else {
		var ajaxurl = "index.php?rt=api";
	}

	$.ajax({
        async    : true,  
        dataType : "json",
        url      : ajaxurl,
        method   : "POST",
        data     : {nuSTATE 				: 
						{call_type			: 'login',
						username			: arguments.length == 0 ? $('#nuusername').val() : u, 
						password			: arguments.length == 0 ? $('#nupassword').val() : p,
						login_form_id		: nuLoginF,
						login_record_id		: nuLoginR}
					},
        dataType : "json",          
        success  : function(data,textStatus,jqXHR){
			
		if(nuDisplayError(data)){
                	if(data.log_again == 1){location.reload();}
            	} else {
                	window.nuFORM.addBreadcrumb();
                	var last            = window.nuFORM.getCurrent();
                	last.call_type      = 'getform';
                	last.form_id        = data.form_id;
                	last.record_id      = data.record_id;
                	last.filter         = data.filter;
                	last.search         = data.search;
				
			if(parent['nuHashFromEditForm']===undefined){
				last.hash   = [];
			}else{
				last.hash   = parent.nuHashFromEditForm();
			}
				
                	last.FORM           = data.form;
                	nuBuildForm(data);
            	}
        },
        error  : function(jqXHR,textStatus,errorThrown){
            
		var msg         = String(jqXHR.responseText).split("\n");
            	nuMessage(msg);
            	window.test = jqXHR.responseText;
            
            	nuFormatAjaxErrorMessage(jqXHR, errorThrown);
        },
    }); 
}

function nuAppendChild(p,t,i){

	var o			= document.createElement(t);

	o.setAttribute('id',i);
	
	$(p)
	.append(o)
	.css('zIndex', 3000);
	
	return document.getElementById(i);
	
}

function nuPopupCalendar(pThis, d){

	if(pThis === null){return;}

	$('#nuCalendar').remove();
	$('#nuLookupList').remove();

	window.nuCalendarCaller	= pThis.id;
	
	var o	= $('#' + window.nuCalendarCaller);
	var f	= o.attr('data-nu-format');
	
	if(d === undefined){									//-- added by toms
		var v	= o.val();
	}else{
		var v	= d;
	}
	
	var u	= nuFORM.removeFormatting(v, f);

	var i					= pThis.id; 					//-- Object ID;
	var tar					= $('#' + i);
	var off					= $('#' + i).offset();
	var top					= off.top;
	var left				= off.left;
	var h					= parseInt(tar.css('height'));

	
	window.nuOnCalendar		= 0;          //-- cursor not in calendar
	
	var c					= nuAppendChild('body','div','nuCalendar');
	c						= $('#nuCalendar');

	c
	.attr('onmouseover', 'window.nuOnCalendar = 1')
	.attr('onmouseout', 'window.nuOnCalendar = 0')
	.css({'top':(top + h + 3), left: left})
	.addClass('nuCalendar nuCalendarColor')
	.html('<img id="dialogCalClose" src="graphics/close.png" style="position: absolute; top: 0px; right: 0px;" onclick="$(\'#nuCalendar\').remove()">');
	
	var c 					= nuAppendChild('#nuTabAreaHolder','div','nuCalCloser');

	c						= $('#nuCalCloser');

	c
	.html('&#x2716;')
	.attr('onclick', "document.getElementById('nuCalendar').remove();")
	.css({'background-color'	: 'lightgrey',
			'position'		: 'absolute',
			'top'			: (window.nuCalTop + 32),
			'left'			: 2,
			'width'			: 20,
			'height'		: 20,
			'text-align'	: 'center',
			'font-size'		: 14,
			'font-style'	: 'bold',
			'color'			: '#000000',
			'cursor'		: 'pointer',
			'border-style'	: 'solid',
			'border-width'	: 1,
			'border-color'	: 'grey', 
			'border-radius'	: 5
	});
	

	var c = nuAppendChild('#nuCalendar','div','nuCalYear');
	
	c						= $('#nuCalYear');

	c.css({'position'		: 'absolute',
			'top'			: (window.nuCalTop + 55),
			'left'			: 60,
			'width'			: 90,
			'height'		: 25,
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
			'cursor'		: 'pointer',
	})
	.addClass('nuCalendarColor');


	var c = nuAppendChild('#nuCalendar','div','nuCalYearLess');

	c						= $('#nuCalYearLess');

	c.attr('onclick', "window.nuCalYear--;nuPopulateCalendar('')")
	.css({'position'			: 'absolute',
			'top'			: (window.nuCalTop + 55),
			'left'			: 40,
			'width'			: 30,
			'height'		: 25,
			'cursor'		: 'pointer',
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.html('&#9668;')
	.addClass('nuCalendarSelected nuCalendar');


	var c 					= nuAppendChild('#nuCalendar','div','nuCalYearMore');

	c						= $('#nuCalYearMore');

	c
	.attr('onclick', "window.nuCalYear++;nuPopulateCalendar('')")
	.css({'position'			: 'absolute',
			'top'			: (window.nuCalTop + 55),
			'left'			: 140,
			'width'			: 30,
			'height'		: 25,
			'cursor'		: 'pointer',
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.html('&#9658;')
	.addClass('nuCalendarSelected nuCalendar');

	var c = nuAppendChild('#nuCalendar','div','nuCalMonth');
	
	c					= $('#nuCalMonth');

	c
	.css({'position'			: 'absolute',
			'top'			: window.nuCalTop + 75,
			'left'			: 60,
			'width'			: 90,
			'height'		: 25,
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.addClass('nuCalendarColor');

	var c = nuAppendChild('#nuCalendar','div','nuCalMonthLess');

	c					= $('#nuCalMonthLess');

	c
	.attr('onclick', "window.nuCalMonth--;nuPopulateCalendar(this.id)")
	.css({'position'			: 'absolute',
			'top'			: (window.nuCalTop + 75),
			'left'			: 40,
			'width'			: 30,
			'height'		: 25,
			'cursor'		: 'pointer',
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.html('&#9668;')
	.addClass('nuCalendarSelected nuCalendar');


	var c 					= nuAppendChild('#nuCalendar','div','nuCalMonthMore');

	c						= $('#nuCalMonthMore');

	c.attr('onclick', "window.nuCalMonth++;nuPopulateCalendar(this.id)")
	.css({'position'			: 'absolute',
			'top'			: (window.nuCalTop + 75),
			'left'			: 140,
			'width'			: 30,
			'height'		: 25,
			'cursor'		: 'pointer',
			'text-align'	: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.html('&#9658;')
	.addClass('nuCalendarSelected nuCalendar');
	
	var t					= 90; 
	var l					= 0;

	for(var i = 0 ; i < 42 ; i++){
	
		if(t == 90){nuTitleBox(i, l);}
		
		nuDayBox(i, l, t)
		
		if(l == 180){
			
			l	= 0;
			t	= t + 20;
			
		}else{
			l	= l + 30;
		}
		
	}

	var d		= String(u).split('-');
	
	if(u == ''){
		
		var n	= new Date();
		d		= [n.getFullYear(), n.getMonth() + 1, n.getDate()];
		
	}

	nuPopulateCalendar('', Number(d[0]), Number(d[1]), Number(d[2]));
	
}

function nuTitleBox(n, l){

	var t					= nuTranslate('SMTWTFS');
	var c					= nuAppendChild('#nuCalendar','div','nuCalTitle' + n);

	c						= $('#nuCalTitle' + n);

	c
	.css({'position'		: 'absolute',
			'top'			: (window.nuCalTop + 97),
			'left'			: l,
			'width'			: 28,
			'height'		: 18,
			'cursor'		: 'pointer',
			'color'			: '#000000',
			'border-color'	: '#D3D3D3',
			'border-style'	: 'none',
			'border-width'	: 1,
			'text-align'	: 'center',
			'font-style'	: 'bold',
			'font-size'		: 14,
	})
	.html(t.substr(n, 1))
	.addClass('nuCalendar nuCalendarColor');

}

function nuDayBox(n, l, t){

	var c					= nuAppendChild('#nuCalendar','div','nuCalDay'+n);
	var today				=  new Date();

	c						= $('#nuCalDay' + n);

	c
	.attr('onclick', "window.nuCalDay=this.innerHTML;nuCalChoice(this)")
	.css({'position'			: 'absolute',
			'top'			: (window.nuCalTop + t + 30),
			'left'			: Number(l),
			'width'			: 30,
			'height'			: 20,
			'cursor'			: 'pointer',
			'text-align'		: 'center',
			'font-size'		: 14,
			'color'			: '#000000',
	})
	.addClass('nuCalendarSelected nuCalendar');
	
}

function nuPopulateCalendar(id, y, m, d){

	if(arguments.length != 1){
		
		window.nuCalDay                                   = d;
		window.nuCalMonth                                 = m - 1;
		window.nuCalYear                                  = y;
		
	}

	window.nuCalMonth = nuMonthScope(window.nuCalMonth);
	
	if(id == 'nuCalMonthLess' && window.nuCalMonth == 11){
		window.nuCalYear = window.nuCalYear - 1;
	}
	
	if(id == 'nuCalMonthMore' && window.nuCalMonth == 0){
		window.nuCalYear = window.nuCalYear + 1;
	}
	
	document.getElementById('nuCalYear').innerHTML        = window.nuCalYear;
	document.getElementById('nuCalMonth').innerHTML       = nuTranslate(nuFullMonth(window.nuCalMonth));
	
	var s                                                 = new Date(window.nuCalYear, window.nuCalMonth, 1);
	var today                                             = new Date();
	var day                                               = 0;
	var nextmonth                                         = 0;
	
	for(var i = 0 ; i < 42 ; i++){
		document.getElementById('nuCalDay' + i).innerHTML = '';
	}
	
	for(var i = s.getDay() ; i < 42 ; i++){
		
		day++;
		s.setDate(day);
		c													= document.getElementById('nuCalDay' + i);
		
		if(s.getDate() != day){
			return;
		}
		
		if(today.getDate() == day && today.getMonth() == window.nuCalMonth && today.getFullYear() == window.nuCalYear){
			c.style.color									= 'red';
		}else{
			c.style.color									= '#000000';
		}
		
		c.innerHTML											= day;
		
	}

}


function nuPreviousMonth(y, m, d){

	m 				= nuMonthScope(m-1);

	var d   		= new Date(y, m, 1);
	var p   		= Array();
	var day 		= 1;

	while (d.getDate() == day) {
	
		p.push(day);
		d.setDate(day);
		day++;

	}	
	return p;

}


function nuFullMonth(n){
	
	var m  = Array();
	
	m[0]   = 'January';
	m[1]   = 'February';
	m[2]   = 'March';
	m[3]   = 'April';
	m[4]   = 'May';
	m[5]   = 'June';
	m[6]   = 'July';
	m[7]   = 'August';
	m[8]   = 'September';
	m[9]   = 'October';
	m[10]  = 'November';
	m[11]  = 'December';

	return String(m[n]);
	
}

function nu2Month(n){
	
	var mth		= Array();
	
	mth['Jan']	= '01';
	mth['Feb']	= '02';
	mth['Mar']	= '03';
	mth['Apr']	= '04';
	mth['May']	= '05';
	mth['Jun']	= '06';
	mth['Jul']	= '07';
	mth['Aug']	= '08';
	mth['Sep']	= '09';
	mth['Oct']	= '10';
	mth['Nov']	= '11';
	mth['Dec']	= '12';

	return String(mth[n]);
	
}


function nuCalChoice(t){

	if(t.innerHTML == ''){return;}

	var FMT	= nuFORM.setFormats();
	var o	= $('#' + window.nuCalendarCaller);
	var f	= o.attr('data-nu-format');

	var D	= Number(t.innerHTML);
	var M	= Number(FMT[String($('#nuCalMonth').html()).substr(0,3)]['jsmonth']);
	var Y	= Number($('#nuCalYear').html());
	
	var dt	= new Date(Y, M, D, 0, 0, 0, 0);
	var d	= dt.getFullYear() + '-' + nuPad2(dt.getMonth()+1) + '-' + dt.getDate();
	var fd	= nuFORM.addFormatting(d, f);

	o
	.val(fd)
	.change()
	.focus();
	
	$('#nuCalendar').remove();

}


function nuBuildDate(){
	
	var o	= $('#' + window.nuCalendarCaller);
	var f	= o.attr('data-nu-format');
	
	if(f == '' || v == ''){return;}
	if(f == '6'){o.val();}
	
}


function nuMonthScope(m){

	if(m < 0)	{m =11;}
	if(m > 11)	{m =0;}
	
	return m;

}

function nuOpener(t, f, r, filter, parameters){
	
	nuSetSuffix();
	
	this.id					= String(Date.now()) + String(window.nuSuffix);
	this.form_id			= f;
	this.record_id			= r;
	this.type				= t;
	
	if(arguments.length 	= 3){
		this.filter			= filter;
	}else{
		this.filter			= '';
	}
	
	if(arguments.length 	= 4){
		this.parameters		= parameters;
	}else{
		this.parameters		= '';
	}
	
}

function nuOpenerAppend(t, k) {
	window.nuOPENER[window.nuOPENER.length - 1][t] = k;
}

function nuGetOpenerById(pOPENER, pid) {
	
	for (var i = 0; i < pOPENER.length; i++) {
		if(pOPENER[i].id == pid) {
			return pOPENER[i];
		}
	}
	
	return;
}


function nuRemoveOpenerById(o, pid) {

	for (var i = 0; i < o.length; i++) {
		
		if(o[i].id == pid) {
			o.splice(i,1);
		}
		
	}

}


function nuGetBreadcrumb(bc){
	
	var a			= arguments.length;
	var e			= nuFORM.edited;
	
	if(a == 0){
		var b		= nuFORM.breadcrumbs.length -1;
	}else{
		var b		= bc;
	}
	
//	if(window.nuTimesSaved > 0){	
		window.nuTimesSaved 	= -1;
//	}


	
	if(e && nuFORM.getCurrent().form_type != 'launch'){
		
		if(!confirm(nuTranslate('Leave this form without saving?'))){
			return;
		}
		
	}

	window.nuFORM.removeAfter(b);
	
	var c				= window.nuFORM.getCurrent();
	
	if(c === undefined){
		$('#nuDragDialog iframe').remove();
	}else{
		nuForm(c.form_id, c.record_id, c.filter, c.search, 1);
	}

	
}


function nuDisplayError(e){

	if(e.errors === undefined || e.errors.length == 0){			//-- no error messages
		return false;
	}

	var im	= ['<img src="graphics/nuerror.png" width="30px" height="30px" style="position:absolute;left:10px;top:10px"><br>'];

	im.concat(e.errors);

	nuMessage(e.errors);

	return e.after_event == false;								//-- errors are really just messages if from after save or after delete.
	
}


function nuFormatAjaxErrorMessage(jqXHR, exception) {

    if (jqXHR.status === 0) {
        return ('Not connected.\nPlease verify your network connection.');
    } else if (jqXHR.status == 404) {
        return ('The requested page not found. [404]');
    } else if (jqXHR.status == 500) {
        return ('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        return ('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        return ('Time out error.');
    } else if (exception === 'abort') {
        return ('Ajax request aborted.');
    } else {
        return ('Uncaught Error.\n' + jqXHR.responseText);
    }
}

function loginInputKeyup(event){
    if(event.keyCode == 13){
        $('input#submit').click();
    }
}

function nuLogin(nuconfigNuWelcomeBodyInnerHTML){
	
	var HTML			= String(nuconfigNuWelcomeBodyInnerHTML).trim();
	window.nuSESSION 	= '';
	window.nuFORM 		= new nuFormObject();
	
	$('body').html('');

	var h 	= `	
	
			<div id='outer' style='width:100%'>

				<div id='login' class='nuLogin'>
					<table>
						<tr>
							<td align='center' style='text-align:center;height:50px' colspan='2'>
								<div id='nulogo' style='margin:50px 0px 20px 65px;background-size:100% 100%;background-image:url(\"graphics/logo.png\");width:200px;height:80px;'></div>
							</td>
						</tr>
						<tr>
							<td style='text-align:right;margin:0px 5px 0px 20px;'><span style='padding:0px 5px 0px 40px;'>Username</span></td>
							<td style='text-align:left'><input id='nuusername'/></td>
						</tr>
						<tr>
							<td style='text-align:right;margin:0px 5px 0px 20px;'><span style='padding:0px 5px 0px 40px;'>Password</span></td>
							<td style='text-align:left'><input id='nupassword' type='password'  onkeypress='nuSubmit(event)'/></td>
						</tr>
						<tr>
							<td style='text-align:center' colspan='2'>
								<input id='submit' type='button' class='nuButton'  style='margin:20px 0px 0px 50px;width:90px;height:30px;' onclick='nuLoginRequest()' value='Log in'/>
							</td>
						</tr>
					</table>
				</div>
				
			</div>
				

	`;
	
	var H	= HTML == '' ? h : HTML
	
	var e 	= document.createElement('div');
	
	e.setAttribute('id', 'loginbg');
	
	window.nuLoginU	= window.nuLoginU===undefined?'':window.nuLoginU;
	window.nuLoginP	= window.nuLoginP===undefined?'':window.nuLoginP;

	$('body').html(H);
	
	if(window.nuLoginU == '' && window.nuLoginP == ''){
		$('#nuusername').focus();
	}
	
	if(window.nuLoginU != '' && window.nuLoginP == ''){
		
		$('#nuusername').val(window.nuLoginU);
		$('#nupassword').focus();
		
	}

	if(window.nuLoginU != '' && window.nuLoginP != ''){
		
		$('#nuusername').val(window.nuLoginU);
		$('#nupassword').val(window.nuLoginP);
		
		nuLoginRequest();
		
	}

	if(sessionStorage.logout == 'true'){
		nuMessage(['You have been logged out']);
	}
	
	sessionStorage.logout	= '';
		
}


function nuSubmit(e){
	
	if(e.keyCode == 13){
		$('#submit').click();
	}
	
}


function nuBuildLookup(t, s, like){
	
	if($(t).prop('disabled')){return;}


	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?wpsnsc=" + window.nubuilder_session_name;
        } else {
                var ajaxurl = "index.php?";
        }

	var f				= $('#' + t.id).attr('data-nu-form-id');
	var tar				= $('#' + t.id).attr('data-nu-target');
	var p				= $('#' + t.id).attr('data-nu-prefix');
	window.nuSubformRow	= Number(p.substr(p.length - 3));
	
	if(arguments.length < 3){
		like 		= '';
	}
	
	window.nuOPENER.push(new nuOpener('F', f, ''));
	
	var open 		= window.nuOPENER[window.nuOPENER.length - 1];
	
	if(parent.window == window){
		window.nuDialog.createDialog(50, 50, 50, 50, '');
	}else{
		window.nuDialog.createDialog(0, 30, 50, 50, '');
	}
	
	$('#nuDragDialog')
	.css('visibility', 'hidden')
	.append('<iframe style="right:5px;top:35px;width:400px;height:400px;position:absolute" id="nuWindow" src="' + ajaxurl + '&opener=' + open.id + '&target=' + tar + '&search=' + s + '&like=' + like + '&browsefunction=lookup&iframe=1"></iframe>');

}

function nuPopup(f, r, filter){

	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?wpsnsc=" + window.nubuilder_session_name;
        } else {
                var ajaxurl = "index.php?";
        }
	
	if(nuSERVERRESPONSE.global_access == '0' && f == 'nuobject'){return;}

	$('#nuCalendar').remove();
	
	window.nuOPENER.push(new nuOpener('F', f, r, filter));

	var id 	= window.nuOPENER[window.nuOPENER.length - 1].id;
	
	if(parent.window==window){
		window.nuDialog.createDialog(50, 50, 50, 50, '');
	}else{
		window.nuDialog.createDialog(0, 30, 50, 50, '');
	}
	
	$('#nuDragDialog')
	.css('visibility', 'hidden')
	.append('<iframe style="right:5px;top:35px;width:400px;height:400px;position:absolute" id="nuWindow" src="' + ajaxurl + 'opener=' + id + '&browsefunction=browse&iframe=1"></iframe>')
	.prepend('<div id="nuDraggingBox" style="position:absolute; bottom:0px; right:0px; width:20px; height:20px; z-index:200"></div>');
	
}

//-- object for dragging dialog --//

function nuCreateDialog(t){

	this.startX     = 0;
	this.startY     = 0;
	this.moveX      = 0;
	this.moveY      = 0;
	this.title      = t;
	this.pos		= {};
	
	this.move = function(event) {
	
		this.moveX  = event.clientX - this.startX ;
		this.moveY  = event.clientY - this.startY;
		this.startX = event.clientX;
		this.startY = event.clientY;
		
		if(event.buttons == 1){					//} && event.target.id == 'dialogTitleWords'){
			this.moveDialog(event);
		}
		
		if(event.target.id == 'dialogClose'){
			$('#dialogClose').css('background-color','lightgrey');
		}else{
			$('#dialogClose').css('background-color','');
		}
		
	}
	
	this.click = function(event) {
	
		if(event.target.id == 'dialogClose'){

			if($('#nuWindow').contents().find('#nuSaveButton.nuSaveButtonEdited').length > 0){
				
				if(!confirm(nuTranslate('Leave this form without saving?'))){
					return false;
				}
				
			}
			$('#nuDragDialog').remove();
			$('#nuModal').remove();
			$('body').off('.popup');
			
		}
		
	}

	
	this.down = function(event) {
	
		window.nuCurrentID	= event.target.id;
		
		if(event.target.id == 'nuDragDialog'){
			$('#nuDragDialog').append('<div id="nuPopupModal"></div>');
		}
		
	}

	this.moveDialog = function(e){

		if(window.nuCurrentID == 'nuModal'){return;}
		
		var s 	= document.getElementById('nuDragDialog');
		var o 	= s.style;
		var l 	= parseInt(o.left) + this.moveX;
		var t 	= parseInt(o.top)  + this.moveY;
		
		if(e.target.classList == '' && e.target.id != 'nuSelectBox'){
			
			o.left  = l + 'px';
			o.top   = t + 'px';
			
		}
		
	}

	this.createDialog = function(l, t, w, h, title) {

		nuDialog.dialog = this.createDialog.caller.name;
		
		var e = document.createElement('div');
		
		var translation	= nuTranslate(title);

		e.setAttribute('id', 'nuDragDialog');

		$('body').append('<div id="nuModal"></div>')
		.append(e);

		$('#nuDragDialog').addClass('nuDragDialog nuDragNoSelect')
		.css({
			'left'				: l, 
			'top'				: t, 
			'width'				: w, 
			'height'			: h, 
			'background-color'	: '#E0E0E0', 
			'z-index'			: 3000, 
			'position'			: 'absolute'
		})
		.html('<div id="dialogTitle" style="background-color:#CCCCCC ;position:absolute;width:100%;height:35px;font-size:16px;font-family:Helvetica"><div id="dialogTitleWords" style="padding-top: 9px;height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+translation+'</div><img id="dialogClose" src="graphics/close.png" style="position:absolute; top:2px; left:0px"></div>')
//		.html('<div id="dialogTitle" ondblclick="nuResizeWindow(event)" style="background-color:#CCCCCC ;position:absolute;width:100%;height:35px;font-size:16px;font-family:Helvetica"><div id="dialogTitleWords" style="padding-top: 9px;height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+translation+'</div><img id="dialogClose" src="graphics/close.png" style="position:absolute; top:2px; left:0px"></div>')

		$('body')
		.on('mousemove.popup', 	function(event){nuDialog.move(event);})
		.on('click.popup',     	function(event){nuDialog.click(event);})
		.on('mousedown.popup', 	function(event){nuDialog.down(event);})
		.on('mouseup.popup', 	function(event){window.nuCurrentID='';$('#nuPopupModal').remove();})
		.on('dblclick.popup', 	function(event){nuResizeWindow(event);})

		this.startX = l;
		this.startY = t;

	}
	
}




function nuReformat(t){

	var o		= $('#' + t.id);
	var f		= o.attr('data-nu-format');
	var v		= o.val();
	
	if(f == '' || v == ''){
		return v;
	}
	
	if(f[0] == 'D'){
			
		var r		= nuFORM.removeFormatting(v, f);
		var a		= nuFORM.addFormatting(r, f);
		
		if(v != a){
			o.val('');
		}

	}
	
	if(f[0] == 'N'){
			
		var a		= nuFORM.addFormatting(v, f);
		o.val(a);

	}
	
}


function nuOpenAce(lang, obj){

	var ts			= new Date().getTime();
	window.nuAce	= [lang, obj];
	
	window.open('index.php?rt=ace&ts=' + ts);

}


function nuRunIt(t, email, type){

	var r   = $('#' + t.id).attr('data-nu-row');
	var c   = '000';
	var p   = $('#' + r + c).html();
	
	if(arguments.length < 3){										//-- set type
		
		var type	= $('#' + r + '001').html();					//-- report - PDF,or procedure - PHP
		
	}
	
	if(arguments.length == 1){										//-- set email
		
		var email	= 0;
		
	}
	
	var f	= $('#' + t.id).attr('data-nu-primary-key');
	var i	= window.nuFORM.getProperty('record_id');

	if(email == 1){
		
		if(type == 'php'){
			nuEmailPHP(i);
		}
		
		if(type == 'pdf'){
			nuEmailPDF(i);
		}
		
	}else{
		
		if(type == 'php'){
			nuGetPHP(f, p);
		}
		
		if(type == 'pdf'){
			nuGetReport(f, p);
		}
		
	}
		
}

function nuBindCtrlEvents(){

	var nuCtrlKeydownListener = function(e){	
	
		if(e.keyCode == 17) { //Ctrl
			window.nuNEW = 1;
		}
		
	}
	
	$(document).keydown(function(e) {
		
        if (e.ctrlKey && e.shiftKey) {
			
			window.nuNEW = 0;
			
			e.preventDefault();
			
			if(nuFormType() == 'browse') {
			
				if(e.keyCode == 67 && window.global_access) {						//-- c		Searchable Columns
					nuPopup(window.nuFORM.getCurrent().form_id, "-2");
				} else if(e.keyCode == 70 && window.global_access) {				//-- f		Form Properties
					nuPopup("nuform", window.nuFORM.getCurrent().form_id);
				} else if(e.keyCode == 79 && window.global_access) {				//-- O		Object List
					nuPopup("nuobject", "", window.nuFORM.getCurrent().form_id);
				} else if(e.keyCode == 68 && window.global_access) {				//-- d		nuDebug Results
					nuPopup("nudebug", "");
				} else if(e.keyCode == 83) {										//-- s		Search
					nuGetSearchList();
				} else if(e.keyCode == 65 && window.global_access) {				//-- a		Add
					nuCloneAction();
				} else if(e.keyCode == 80 && window.global_access) {				//-- p		Print
					nuPrintAction();
				}

			}


			if(nuFormType() == 'edit') {
			
				if(e.keyCode == 65 && window.global_access) {						//-- a		Arrange
					nuPopup(window.nuFORM.getCurrent().form_id, "-2");
				} else if(e.keyCode == 70 && window.global_access) {				//-- f		Form Properties
					nuPopup("nuform", window.nuFORM.getCurrent().form_id);
				} else if(e.keyCode == 79 && window.global_access) {				//-- O		Object List
					nuPopup("nuobject", "", window.nuFORM.getCurrent().form_id);
				} else if(e.keyCode == 68 && window.global_access) {				//-- d		nuDebug Results
					nuPopup("nudebug", "");
				} else if (e.keyCode == 82) {										//-- r		Refresh
					nuGetBreadcrumb();
				} else if(e.keyCode == 83) {										//-- s		Save
					$(":focus").blur();
					nuSaveAction();
				} else if(e.keyCode == 67) {										//-- c		Clone
					nuCloneAction();
				} else if(e.keyCode == 98) {										//-- y		Delete
					nuDeleteAction();
				}

			}


			var nosearch = window.nuFORM.getProperty('nosearch_columns');
			var searchIndex = -1;
			
			//Numbers
			if(e.keyCode >= 49 && e.keyCode <= 57) {
				searchIndex = Math.abs(49 - e.keyCode);
			}
				
			if(searchIndex != -1){
				
				if($.inArray(searchIndex,nosearch) != '-1'){
					
					nosearch.pop(searchIndex);
					$('#nusort_' + searchIndex).removeClass('nuNoSearch');					
					
				}else{
					
					nosearch.push(searchIndex);
					$('#nusort_' + searchIndex).addClass('nuNoSearch');
					
				}
				
			}
			
			window.nuFORM.setProperty('nosearch_columns', nosearch);
        }
    });
	
	var nuCtrlKeyupListener = function(e){	
		
		window.nuNEW = 0;
	}
	
    $(document).on('keydown.nubindctrl', nuCtrlKeydownListener);
	
	$(document).on('keyup.nubindctrl', nuCtrlKeyupListener);

}

function nuUnbindDragEvents(){
    $(document).off('.nubindctrl');
}


function nuTranslate(s){
	
	for(var i = 0 ; i < nuLANGUAGE.length ; i ++){
		
		if(nuLANGUAGE[i].english == s){
			return nuLANGUAGE[i].translation;
		}
		
	}
	
	return s;
	
}



function nuIsOpener() {
	
	if(window.opener != null) {
		return true;
	}
	
	return false;
}

function nuPreview(a){

	var	t	= String($('#sfo_type').val());
	var b	= t.indexOf('browse') != -1;
    var f   = nuFORM.getProperty('redirect_form_id');
    var r   = nuFORM.getProperty('record_id');
    
    if(r == '-1'){
        
        alert('Form must be saved first..');
        return;
        
    }
    
    if(arguments.length == 1){
        nuPopup(r, '');
    }else{
        nuPopup(r, '-3');
	}
    
}


function nuPopPHP(e, nuE){			//-- used in database

    var i   = nuFORM.getProperty('record_id');

    if(i == ''){
        
        alert('Cannot create Event Until This Form Has Been Saved..')
        return;
		
    }
	
    nuPopup('nuphp', i + '_' + nuE, 'justphp');

}


function nuPopSQL(e, nuE){			//-- used in database

    var i   = nuFORM.getProperty('record_id');

    if(i == ''){
        
        alert('Cannot create SQL Until This Form Has Been Saved..')
        return;
		
    }
	
    nuPopup('nuselect', i + '_' + nuE, 'justsql');

}

    

function nuPopJS(){				//-- used in database

	var i  = $('#sob_all_zzzzsys_form_id').val();
	
	if(i == ''){
		
		alert('Cannot Create Event Until This Form Has Been Saved..')
		return;
		
	}
	
	nuPopup('nuform', i, 'justjs');
	
}

function  nuGetLookupFields(id){

	var i	= id.substr(0, id.length - 4);
	var o	= $('#' + id);
	var a	= [];
	
	if(o.length == 1){
		
		if(o.attr('data-nu-type') == 'subform'){
			
			a.push(i);
			a.push(id);
			a.push(i + 'description');

		}else{
			a.push('nunosuchfield');
			a.push(id);
			a.push('nunosuchfield');
		}

	}

	return a;
	
}

function nuEnable(i) {            //-- Enable Edit Form Object

    var o = [i, i + 'code', i + 'button', i + 'description'];

    for (var c = 0; c < o.length; c++) {

        $('#' + o[c])
            .removeClass('nuReadonly')
            .prop('readonly', false)
            .prop('disabled', false);

        if (c == 2) { //-- button

            $('#' + o[c])
                .on("click", function () {
                    nuBuildLookup(this, "");
                })

        }
    }
}

function nuReadonly(i){  			               //-- set Edit Form Object to readonly

	var o	= [i, i + 'code', i + 'button', i + 'description'];
	
	for(var c = 0 ; c < o.length ; c++){
			
		$('#' + o[c])
		.addClass('nuReadonly')
		.attr('onclick','')
		.prop('readonly', true);
		
	}

}


function nuDisable(i){                 	//-- Disable Edit Form Object

	var o	= [i, i + 'code', i + 'button', i + 'description'];
	
	for(var c = 0 ; c < o.length ; c++){
			
		$('#' + o[c])
		.addClass('nuReadonly')
		.prop('readonly', true)
		.prop('disabled', true);
		
		if(c == 2){						//-- button
			
			$('#' + o[c]).off();
			
		}
		
	}

}


function nuShow(i){                 	//-- Show Edit Form Object

	var o	= [i, i + 'code', i + 'button', i + 'description', 'label_' + i];
	
	for(var c = 0 ; c < o.length ; c++){

		var t	=	String($('#' + o[c]).attr('data-nu-tab'));
		
		if(t[0] == 'x'){
				
			$('#' + o[c])
			.attr('data-nu-tab', t.substr(1))
			.show();
			
		}else{
				
			$('#' + o[c])
			.show();
			
		}
		
		
	}
	
	nuOpenTab($('.nuTabSelected')[0].id.substr(5));
	
}


function nuHide(i){                 //-- Hide Edit Form Object

	var o	= [i, i + 'code', i + 'button', i + 'description', 'label_' + i];
	
	for(var c = 0 ; c < o.length ; c++){

		var t	=	String($('#' + o[c]).attr('data-nu-tab'));
		
		if(t[0] == 'x'){
				
			$('#' + o[c])
			.hide();
			
		}else{
				
			$('#' + o[c])
			.attr('data-nu-tab', 'x' + t)
			.hide();
			
		}
		
		
	}
	

}

function nuAddThousandSpaces(s, c){

	var a	= String(s).split('');
	var r	= [];

	r		= a.reverse();
		
	if(r.length > 3){r.splice(3, 0, c);}
	if(r.length > 7){r.splice(7, 0, c);}
	if(r.length > 11){r.splice(11, 0, c);}
	if(r.length > 15){r.splice(15, 0, c);}
	if(r.length > 19){r.splice(19, 0, c);}
	if(r.length > 23){return 'toobig';}

	r		= r.reverse();
	
	return r.join('');
	
}

function nuDuplicates(arr){

	var s	= arr.slice().sort();
	var d	= [];
	
	for (var i = 0; i < arr.length - 1; i++) {
		
		if (s[i + 1] == s[i]) {
			d.push(s[i]);
		}
		
	}
	
	return d;

}


function nuResizeWindow(e){

	if(e.target.id != 'dialogTitleWords'){return;}

	var d	= $('#nuDragDialog');
	var D	= $('.nuDragOptionsBox');
	var W	= 0;
	var w	= $('#nuWindow');
	var f	= $('#nuDragDialog iframe')[0].contentWindow;
	var l	= parseInt(d.css('left'));

	if(D.length != 0){
		W	= parseInt(D.css('width'));
	}
	
	if(l == 2){

		if(D.length == 0){
			
			d.css(f.nuDialogSize);
			w.css(f.nuWindowSize);
			
		}
		
	}else{

		d.css({top:0, left:2, width:window.innerWidth - 30, height:window.innerHeight});
		
		var dh	= parseInt(d.css('height')) - 50;
		var dw	= parseInt(d.css('width')) - W - 10;
		
		w.css({top:30, width:dw, height:dh});
		
	}
		
}


function nuSubformObject(id){
	return nuFORM.subform(id);
}


function nuGetFunctionList(){

	var f				= '';

	for (var k in window) {

		if (window.hasOwnProperty(k)){
			
			if(String(k).substr(0,2) === 'nu'){
				f += k + "\n";
			}
		
		}

	}

	return f;

}



function nuID(){

	nuSetSuffix();
	
	window.nuUniqueID		= 'c' + String(Date.now());
	
	return window.nuUniqueID + String(window.nuSuffix);

}


function nuSetSuffix(a){
	
	if(arguments.length == 1){
		window.nuSuffix		= a;
	}
		
	if(window.nuSuffix == 9999){
		window.nuSuffix		= 0
	}else{
		window.nuSuffix	++;
	}
	
	
}



function nuWhen(w){

	var nunow   = Date.now();
	var numax   = (Date.now()/1000) - Number(w);
	var numin   = numax;
	var nusec	= String(Math.ceil(numin));
	var nuhtm   = nusec 			+ (nusec==1?' second ago':' seconds ago');

	return nuhtm;

}



function nuSpaces(s){
	return String('&nbsp;').repeat(s);
}

function nuAddEditFieldsToHash(w){
	
	var d	= nuFORM.data()[0];
	var f	= d.fields;
	var r	= d.rows[0];
	
	for(i = 2 ; i < f.length ; i++){
		w[f[i]] = r[i];
	}
	
	return w;
	
}

function nuClick(e){
	
	if(!$(e.target).hasClass('nuOptionsItem') && !$(e.target).hasClass('nuSearchCheckbox')){
		$('#nuSearchList').remove();
	}
	
	if(!$(e.target).hasClass('nuIcon')){
		$('#nuOptionsListBox').remove();
	}
	
	if(e.target.id != 'nuMessageDiv' && $(e.target).attr('data-nu-option-title')!= 'Help' ){

		if(window.nuHideMessage){
			$('#nuMessageDiv').remove();
		}
		
		window.nuHideMessage	= true;
		
	}
	
	if($(e.target).attr('type') != 'nuDate' && !$(e.target).hasClass('nuCalendar')){
		$('#nuCalendar').remove();
	}
	
}

function nuAddSlashes(s){
    return (s + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function nuRemoveTabs(t){

	for(var i = 0 ; i < arguments.length ; i++){
		$('#nuTab' + arguments[i]).remove();
	}
	
}

function nuOpenTab(i){
	$('#nuTab' + i).click();
}


function nuRemoveHolders(h){
	
	for(var i = 0 ; i < arguments.length ; i++){
		
		if(arguments[i] == 0){$('#nuActionHolder').remove();}
		if(arguments[i] == 1){$('#nuBreadcrumbHolder').remove();}
		if(arguments[i] == 2){$('#nuTabHolder').remove();}
		
	}
	
}


function nuAttachFile(j, c){

	if(window.nuGraphics.indexOf(c + '.png') != -1){						//-- check filenames in graphics dir.

		$(j)
		.css('background-image', 'url("graphics/' + c + '.png')
		.css('background-repeat', 'no-repeat')
		.css('padding', '0px 0px 0px 0px')
		.css('text-align', 'left')

		return;
		
	}
	
	if(nuImages[c] !== undefined){
		
		var p				= JSON.parse(g);
		var b				= atob(p.file);
		
		$(j)
		.css('background-image', 'url("' + b + '")')
		.css('background-repeat', 'no-repeat')
		.css('padding', '0px 0px 0px 0px')
		.css('text-align', 'left')

		return;
		
	}
	
}



function nuButtonIcon(j){

	$(j)
	.css('text-align', 'left')
	.css('padding', '0px 0px 0px 35px')
	.css('background-size', '30px')
	.css('background-repeat', 'no-repeat')
	
}


function nuChart(d, t, a, h, x, y, st, is){

	a				= eval(a);
	
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawVisualization);
	
	if(a == ''){return;}

	function drawVisualization() {
		
		if(a === undefined){return;}
		
		var data 	= google.visualization.arrayToDataTable(a);

		var options = {
			title 		: h,
			vAxis		: {title: y},
			hAxis		: {title: x},
			seriesType	: st,
			isStacked 	: is,
		};
		
		var chart 	= new google.visualization[t](document.getElementById(d));

		chart.draw(data, options);

	}

}


function nuSubformRowId(t){
	return $(t).parent().attr('data-nu-primary-key');
}


function nuSubformValue(t, id){

	var p	= $(t).attr('data-nu-prefix');
	
	return $('#' + p + id).val();

}

function nuEncode(s){
	return window.btoa(unescape(encodeURIComponent(s)))
}


function nuDecode(s){
	return decodeURIComponent(escape(window.atob(s)))
}

function nuAddRow(s){

	var o 	= nuSubformObject(s);
	
	var i	= s + nuPad3(o.rows.length - 1) + o.fields[1];
	
	$('#' + i).change();

	i		= s + nuPad3(o.rows.length) + o.fields[1];
	
	$('#' + i).focus();
	
}


function nuAccessLevelCode(){
	return nuSERVERRESPONSE.access_level_code;
}

function nuUserName(){
	return nuSERVERRESPONSE.user_name;
}


//=============================================================
//========== nuAddBrowseListeners() added by Fike =============
//=============================================================


function nuAddBrowseListeners(w){
	
	if(w[w.length-1] == 0){w.pop();}
    
    if(nuFormType() != 'browse'){return;}
	
    nu_set_title_divs(); 														//this function adds the listeners and additional data to title divs in order to make them draggable
	
	if(w != 0){
		nu_set_column_widths(w);
	}
    
    nu_browse_add_listeners(); 													//this function binds cursormove/touchmove event listeners to nubody
    
}




function nu_get_column_widths(){
	
	var a										= [];

	$("div[id^='nuBrowseTitle']").each(function( index ) {
		a.push(parseInt($(this).css('width')));
	});
	
	return a;

}



function nu_browse_add_listeners(){

    $('#nubody').on('mouseup.nuresizecolumn', function(event) {nu_end_resize();});
	
    $('#nubody').on('mousemove.nuresizecolumn', function(event) {
                                                                    event.preventDefault();
                                                                    
                                                                    if (window.nuBROWSERESIZE.mouse_down){
                                                                        nu_resize_title_div(event,window.nuBROWSERESIZE.moving_element);
                                                                    } 
                                                                });
																
}


function nu_set_column_widths(array_col_widths){

    if (array_col_widths){
		
        if (nu_array_matches_columns(array_col_widths)){
			
            nu_set_left_pos_array();
        
            for (var z = 0; z < array_col_widths.length; z++){
                nu_modify_column_width(z, array_col_widths[z]);
            }
			
        }else{
            console.log('Unable to resize columns. The number of columns provided for the array do not match with the number of columns in the browse form');
        }
		
    }
	
}

function nu_modify_column_width(col_number, column_width){
	
    var titles 									= $("div[id^='nuBrowseTitle']").toArray();
    var title_id 								= titles[col_number].id;
    var title_current_width 					= $('#'+title_id).width();
    var title_dispaly_prop 						= $('#'+title_id).css('display');
    var title_offset 							= title_current_width - column_width;
    var offset_value 							= Math.abs(title_offset);
    offset_value				 				= Math.round(offset_value * 100) / 100;
    
    window.nuBROWSERESIZE.current_cell_width 	= '0';
    window.nuBROWSERESIZE.next_cell_left 		= '0';
    window.nuBROWSERESIZE.moving_element 		= title_id;
    
    if (title_offset > 0){
        var direction 							= 'left';
    }else{
        var direction 							= 'right';
    }

    if (title_current_width !== 0 && title_dispaly_prop != 'none'){
        nu_resize_div(title_id, direction, offset_value, 119);
    }else{
		
        var div_number 							= title_id.replace('nuBrowseTitle','');
        div_number 								= Number(div_number);
        offset_value 							= 0;

        nu_move_headers(direction,div_number,offset_value);
    }
    
    nu_end_resize();
        
}



function nu_array_matches_columns(col_array){

    var cols_received 							= col_array.length;
    var browse_cols_array 						= $("div[id^='nuBrowseTitle']").toArray();
    
    if (cols_received == browse_cols_array.length){
        return true;
    }else{
        return false;
    }
	
}

function nu_set_title_divs(){
	
    var hdrs 									= $("div[id^='nuBrowseTitle']").toArray();
    
    for (var i = 0; i < hdrs.length; i++ ){

        var div_id 								= hdrs[i].id;
        var left_side_elem 						= hdrs[i].id;
        
        if (i+1 < hdrs.length){
            var right_side_elem 				= hdrs[i+1].id;
        }else{
            right_side_elem 					= 'last_element'; 
        }
        
        nu_add_title_props(div_id, left_side_elem, right_side_elem);
        
    }
    
}


function nu_add_title_props(div_id, l_text, r_text){

    $("#"+div_id).attr({"data-left_side" : l_text,"data-right_side" : r_text});

    $("#"+div_id).on('mousedown.nuresizecolumn', function(event) {   
                                                            event.preventDefault();
                                                            window.nuBROWSERESIZE.mouse_down = true;
                                                            window.nuBROWSERESIZE.pointer = 'pointer';
                                                            window.nuBROWSERESIZE.moving_element = this.id;
															$('#' + this.id).css('cursor', 'ew-resize');
                                                            nu_get_start_pos(event);
                                                        });
    
    $("#"+div_id).on('mouseup.nuresizecolumn', function(event) {   
															$('#' + this.id).css('cursor', '');
                                                        });
    
    
    $("#"+div_id).on('touchstart.nuresizecolumn', function(event) {   
                                                            event.preventDefault();
                                                            window.nuBROWSERESIZE.mouse_down = true;
                                                            window.nuBROWSERESIZE.pointer = 'finger_touch';
                                                            window.nuBROWSERESIZE.moving_element = this.id;
                                                            nu_get_start_pos(event);
                                                        });
                                                        
    $("#"+div_id).on('touchmove.nuresizecolumn', function(event) { 
                                                            if (window.nuBROWSERESIZE.mouse_down){ nu_resize_title_div(event,window.nuBROWSERESIZE.moving_element);} 
                                                        });
                                                        
    $("#"+div_id).on('touchend.nuresizecolumn', function(event) { nu_end_resize(); window.nuBROWSERESIZE.pointer = 'mouse_cursor'; });
    
    $("#"+div_id).on('touchcancel.nuresizecolumn', function(event) { nu_end_resize(); window.nuBROWSERESIZE.pointer ='mouse_cursor'; });
    
}

function nu_get_start_pos(event){

    window.nuBROWSERESIZE.x_position 				= event.pageX;
    
    if (window.nuBROWSERESIZE.pointer == "finger_touch"){
        window.nuBROWSERESIZE.x_position 			= event.changedTouches[0].clientX;
    }
    
    window.nuBROWSERESIZE.array_current_cell_left 	= '';
    
    nu_set_left_pos_array();
    
}


function nu_set_left_pos_array(){
	
    var hdrs 										= $("div[id^='nuBrowseTitle']").toArray();
    var left_pos_array 								= [];
    
    for (var i = 0; i < hdrs.length; i++){
		
        var hdr_id 									= hdrs[i].id;
        
        //var left_pos = $('#'+hdr_id).offset().left; when CSS display property is none, offset().left throws CERO
        var left_pos 								= parseInt($("#"+hdr_id).css('left'));
        
        left_pos_array.push(left_pos);
		
    }
    
    var left_pos_json 								= JSON.stringify(left_pos_array);
    
    window.nuBROWSERESIZE.array_current_cell_left 	= left_pos_json;
	
}

function nu_resize_title_div(event,elem_id){

    var offset_limit 								= 100000000;
    var min_offset 									= 20;
    var x 											= event.pageX;
    
    if (window.nuBROWSERESIZE.pointer == "finger_touch"){
        x 											= event.changedTouches[0].clientX;
    }
    
    var x_offset 									= x - window.nuBROWSERESIZE.x_position;
    
    if (x !== 0 && Math.abs(x_offset) > min_offset){
		
        if (x_offset > 0){
            var direction 							= 'right';
        }else{
            var direction							= 'left';
        }
        
        x_offset 									= Math.abs(x_offset);
        
        if (x_offset < offset_limit){
            nu_resize_div(elem_id, direction, x_offset, 261);
        }else{
            console.log('Offset size exceeds limit');
        }
        
    }
}


function nu_resize_div(elem_id, direction, offset_value, row){

    window.nuBROWSERESIZE.last_moved_element 		= elem_id;
    var div_id 										= elem_id;
    var min_col_val 								= 20;
    var div_number 									= div_id.replace('nuBrowseTitle','');
    div_number 										= Number(div_number);

    var l_side_id 									= $("#"+div_id).attr("data-left_side");
    var r_side_id 									= $("#"+div_id).attr("data-right_side");

    if (window.nuBROWSERESIZE.current_cell_width == '0'){
		
		if($("#"+l_side_id).length != 0){
			window.nuBROWSERESIZE.current_cell_width 	= $("#"+l_side_id).width()+'';
		}
    }
    current_l_width 								= Number(window.nuBROWSERESIZE.current_cell_width);


    if ( window.nuBROWSERESIZE.next_cell_left == '0' && r_side_id != 'last_element'){
        window.nuBROWSERESIZE.next_cell_left 		= parseInt($("#"+r_side_id).css('left'));
    }
    
    if (r_side_id == 'last_element'){
        var current_r_left_pos = 0;
    }else{
        current_r_left_pos = Number(window.nuBROWSERESIZE.next_cell_left);
    }
    
    
    if (direction == "right"){
        var new_l_width 							= current_l_width + offset_value;
    }
    
    if (direction == "left"){
        var new_l_width 							= current_l_width - offset_value;
    }
	
    if (new_l_width >= min_col_val){
		
        var new_width_auth 							= new_l_width;

        nu_set_title_width(l_side_id, new_width_auth, div_number, div_id, current_r_left_pos, direction, offset_value);
		
    }else{
		
        console.log('Column must be at least '+min_col_val+'px width. Ending resize function');
        nu_end_resize();
        nu_adjust_col_min_width(min_col_val);
		
    }
	
}

function nu_adjust_col_min_width(min_col_val){
	
    var div_id 										= window.nuBROWSERESIZE.last_moved_element;
    var div_width 									= $('#'+div_id).width();
    
    if (div_width < min_col_val){
        var direction = 'right';
    }else if (div_width > min_col_val){
        var direction = 'left';
    }else{
		
        nu_end_resize();
        return false;
		
    }
    
    var offset_value 								= div_width - min_col_val;
    offset_value 									= Math.abs(offset_value);
    
    nu_resize_div(div_id, direction, offset_value, 344);
    nu_end_resize();
	
}

function nu_set_title_width(l_side_id, new_l_width, div_number, div_id, current_r_left_pos, direction, offset_value){

    $("#"+l_side_id)
	.css("background-color", "#b1dbad")
    
    $("#"+l_side_id).width(new_l_width);
    
    var div_left_offset 							= parseInt($("#"+l_side_id).css('left'));      //var div_left_offset = $("#"+l_side_id).offset().left; when CSS display property is none, offset().left throws CERO
    var d_offset_left 								= div_left_offset + new_l_width - 12;
    var col_number 									= div_number;

    nu_resize_column(col_number, new_l_width);

    if (current_r_left_pos != 0){
        nu_move_headers(direction,div_number,offset_value);
    }else{
        nu_resize_footer();
    }
	
}

function nu_resize_column(col_number, col_width){
	
    var txt_col_number 								= '_'+col_number ;
    var cell_width 									= col_width - 8;
    var cells 										= $("div[id$='"+txt_col_number+"']").toArray();
    
    for (i = 0; i < cells.length; i++){
		
        var cell_id 								= cells[i].id;
        
        $("#"+cell_id).width(cell_width);
		
    }
	
}

function nu_move_headers(direction,div_number,offset_value){

    var hdrs 										= $("div[id^='nuBrowseTitle']").toArray();
    var arr_current_cell_left_arr 					= JSON.parse(window.nuBROWSERESIZE.array_current_cell_left);

    for (i = div_number + 1 ; i < hdrs.length; i++){
		
        var hdr_id 									= hdrs[i].id;
        var cur_hdr_left 							= arr_current_cell_left_arr[i];

        if (direction == "right"){
            var new_hdr_left 						= cur_hdr_left + offset_value;
        }else if (direction == "left"){
            new_hdr_left 							= cur_hdr_left - offset_value;
        }else{
            new_hdr_left 							= cur_hdr_left;
        }

        $("#"+hdr_id).css({ left: new_hdr_left });

        var hdr_width 								= $("#"+hdr_id).width();
        var new_d_left 								= new_hdr_left + hdr_width - 12;

        nu_move_cells(i, new_hdr_left);
		
    }
    
    nu_resize_footer();

}


function nu_move_cells(col_number, left_value){

    var txt_col_number 								= '_'+col_number ;
    var cells 										= $("div[id$='"+txt_col_number+"']").toArray();
    
    for (j = 0; j < cells.length; j++){
		
        var cell_id 								= cells[j].id;

        $("#"+cell_id).css({ left: left_value });
		
    }    
	
}

function nu_resize_footer(){
    
	var w	= 0;
	
	$('.nuBrowseTitle').each(function( index ) {
		
		if($(this)[0].id != 'nuBrowseFooter'){
			w = w + parseInt($(this).css('width'));
		}
		
	});

    $('#nuBrowseFooter').width(w);

}

function nu_end_resize(){

    window.nuBROWSERESIZE.x_position 				= 0,
    window.nuBROWSERESIZE.mouse_down 				= false;
    window.nuBROWSERESIZE.pointer 					= '';
    window.nuBROWSERESIZE.current_cell_width 		= '0';
    window.nuBROWSERESIZE.next_cell_left 			= '0';

    if (window.nuBROWSERESIZE.moving_element != ''){
		
        $("#"+window.nuBROWSERESIZE.moving_element).css("background-color", "");
        window.nuBROWSERESIZE.moving_element 		= '';
		
    }
    
    if (window.nuBROWSERESIZE.last_moved_element != ''){
        $("#"+window.nuBROWSERESIZE.last_moved_element).css("background-color", "");
    }
    
    nu_set_left_pos_array();
	
	var e											= nuFORM.breadcrumbs.length-1;

	nuFORM.breadcrumbs[e].column_widths				= nu_get_column_widths();
	
}


//=================================================================


function nuDatabase(){
	return nuSERVERRESPONSE.database;
}


function nuClosePopup(){

	parent.$('#nuModal').remove();
	parent.$('#nuDragDialog').remove();

}



function nuStopClick(e){

	if(window.nuCLICKER != ''){
		$(e.target).prop('onclick',null).off('click');
	}
	
}


function nuIsSaved(){
	return window.nuSAVED;
}



function nuSortSubform(s, c, e){
	
	var sf				= [];
	var so				= nuSubformObject(s).fields[c];;
	var h				= 0;
	var t				= false;

	$("[ID^='" + s + "'][ID$='nuRECORD']").each(function( index ){

		var i = this.id;
		var f = this.id.replaceAll('nuRECORD', '');
		h     = parseInt($(this).css('height'));
		t     = $('#' + f + so).hasClass('input_number') || $('#' + f + so).hasClass('input_nuNumber') || $('#' + f + so).hasClass('nuCalculator');
		var v = $('#' + f + so).val();
		var m = $('#' + f + so).attr('data-nu-format')
		var l = $('#' + f + so).hasClass('nuHiddenLookup');
		
		if(m != ''){
			v = nuFORM.removeFormatting(v, m);
		}
		
		if(l){
			v = $('#' + f + so + 'code').val();
		}
		
		var o = {'form' : i, 'value' : v};
		
		sf.push(o);

	});	


	
	if($(e.target).attr('data-nu-order') == 'asc'){
		
		if(t){
			var rows				= sf.sort(nuDecendingSortNumberColumn);
		}else{
			var rows				= sf.sort(nuDecendingSortColumn);
		}

		$(e.target).attr('data-nu-order', 'desc');
		
	}else{
		
		if(t){
			var rows				= sf.sort(nuAscendingSortNumberColumn);
		}else{
			var rows				= sf.sort(nuAscendingSortColumn);
		}

		$(e.target).attr('data-nu-order', 'asc');
		
	}
	
	var top 	= 0;
	
	for(var i = 0 ; i < rows.length ; i++){
	
		$('#' + rows[i].form).css('top', top);
		top	= top + h;
		
	}

}


function nuAscendingSortColumn(a, b) {
	
	if (a.value < b.value){return -1;}
	if (a.value > b.value){return 1;}

	return 0;

}

function nuDecendingSortColumn(b, a) {
	
	if (a.value < b.value){return -1;}
	if (a.value > b.value){return 1;}

	return 0;
	
}



function nuAscendingSortNumberColumn(a, b) {
	
	if (Number(a.value) < Number(b.value)){return -1;}
	if (Number(a.value) > Number(b.value)){return 1;}
	
	return 0;
	
}

function nuDecendingSortNumberColumn(b, a) {
	
	if (Number(a.value) < Number(b.value)){return -1;}
	if (Number(a.value) > Number(b.value)){return 1;}
	
	return 0;
	
}


function nuEmbedObject(f, d, w, h){
    
	if(f == ''){return;}

	if(w === undefined){w = 300;}
	if(h === undefined){h = 300;}
	
	var ob	= JSON.parse(f);
	var ty	= ob.type;
	var ur	= atob(ob.file);
    var x   = document.createElement("EMBED");
    
    x.setAttribute("type", ty);
    x.setAttribute("src", ur);
    x.setAttribute("width", w + "px");
    x.setAttribute("height", h + "px");

    $('#' + d).html('');
    document.getElementById(d).appendChild(x);
        
}



function nuCreateDrag(){

	this.left        = 0;
	this.right       = 0;
	this.top         = 0;
	this.bottom      = 0;
	this.height      = 0;
	this.width       = 0;
	this.startX      = 0;
	this.startY      = 0;
	this.moveX       = 0;
	this.moveY       = 0;
	this.lastMoveX   = 0;
	this.lastMoveY   = 0;
	this.type        = '';
	this.classList   = [];
	this.isReport    = false;
	

	this.setSelected = function() {

		if(nuREPORT.selected === undefined){
			nuREPORT.selected = [];
		}
		
		for(var i = 0 ; i < nuREPORT.selected.length ; i ++){
			
			$('#' + nuREPORT.selected[i]).addClass('nuDragSelected');

		}

	}



	this.getSelected = function() {

		var s             = document.getElementsByClassName('nuDragSelected');
		nuREPORT.selected = [];
		
		for(var i = 0 ; i < s.length ; i ++){
		
			nuREPORT.selected.push(s[i].id);

		}

	}


	this.down = function(event) {
		
		var c = event.target.className;
		
		if(event.ctrlKey){
			if(c.indexOf('nuDragObject') != -1){
				$('#'+event.target.id).toggleClass('nuDragSelected');
			}
			
		}else{
			if(c.indexOf('nuDragObject') != -1 && $('#'+event.target.id).hasClass('nuDragSelected') == false){
				$('.nuDragSelected').removeClass('nuDragSelected');
				$('#'+event.target.id).addClass('nuDragSelected');
			}
			
			if(c.indexOf('nuDragArea') != -1){
				$('.nuDragSelected').removeClass('nuDragSelected');
			}
			
		}

		this.getSelected();
		this.classList   = event.target.className.split(' ');
		this.startX      = event.clientX;
		this.startY      = event.clientY;
		this.moveX = 0;
		this.moveY = 0;


		this.setSelectedCoordinates();
		
		this.selectBox(event);
		
	}
	
	
	this.up = function(event) {
	
		this.classList   = [];
		this.removeBox();

	}
	
	
	this.move = function(event) {
		
		this.lastMoveX = this.moveX;
		this.lastMoveY = this.moveY;
		
		if(event.clientX) {
			this.moveX  = event.clientX - this.startX ;
		}
		if(event.clientY) {
			this.moveY  = event.clientY - this.startY;
		}
		
		var k       = event.keyCode;
		var m       = (event.buttons == 1 && this.classList.indexOf('nuDragSelected') != -1);

		if(m || k == 37 || k == 38 || k == 39 || k == 40){
			
			if($('#nuDragDialog').is(":visible") == false){
				
				if(k == 38){
					this.moveY = -1;
					this.lastMoveY = 0;
				}
				if(k == 39){
					this.moveX = 1;
					this.lastMoveX = 0;
				}
				if(k == 40){
					this.moveY = 1;
					this.lastMoveY = 0;
				}
				if(k == 37){
					this.moveX = -1;
					this.lastMoveX = 0;
				}
				
				nuDragR.dragging	= true;
				
			}

			if(event.shiftKey){

				if(this.canResize(event)){
					this.resizeSelected();
				}
			
			}else{

				if(this.canMove(event)){
					this.moveSelected();
				}
				
			}
			
		}
		
		this.resizeBox(event);
		
	}
	
	this.multipleSections = function() {

		var s     = $(".nuDragSelected").attr('data-order');
		var a     = $(".nuDragSelected");
		var b     = false;
		
		a.each(function() {
			
			if(s != $(this).attr('data-order')){b = true;}
			
		});

		return b;
	}


	this.canMove = function(event) {
		
		if(this.left + (this.moveX-this.lastMoveX) + this.areaLeft() < this.areaLeft())  {return false;}
		if(this.right + (this.moveX-this.lastMoveX) > this.areaWidth())                  {return false;}
		if(this.top + (this.moveY - this.lastMoveY) + this.areaTop() < this.areaTop())   {return false;}
		if(this.isReport)                                               				 {return true;}
		if(this.bottom + (this.moveY - this.lastMoveY) > this.areaHeight())              {return false;}

		return true;

	}
	
	
	this.canResize = function(event) {
	
		if(this.right + (this.moveX-this.lastMoveX) > this.areaWidth())         {return false;}
		if(this.isReport)                                      					{return true;}
		if(this.bottom + (this.moveY - this.lastMoveY) > this.areaHeight())     {return false;}
		
		return true;

	}
	
	
	this.moveSelected = function() {

		var s = document.getElementsByClassName('nuDragSelected');
		var l = 0;
		var t = 0;
		var o = {};
		var m = this.multipleSections();

		for(var i = 0 ; i < s.length ; i ++){
			
			o       = s[i].style;
			l       = parseInt(o.left) + (this.moveX - this.lastMoveX);
			t       = parseInt(o.top)  + (m ? 0 : (this.moveY - this.lastMoveY));
			o.left  = l + 'px';
			o.top   = t + 'px';

		}
		this.setSelectedCoordinates();

	}
	
	
	this.resizeSelected = function() {

		var s          = document.getElementsByClassName('nuDragSelected');
		var w = 0;
		var h = 0;
		var o = {};
		var m = this.multipleSections();
		
		for(var i = 0 ; i < s.length ; i ++){
		
			o        = s[i].style;
			w        = parseInt(o.width) + (this.moveX - this.lastMoveX);
			h        = parseInt(o.height)  + (m ? 0 : (this.moveY - this.lastMoveY));
			
			if(w == 0) {
				w = 1;
			}
			
			if(h == 0) {
				h = 1;
			}
			o.width  = w + 'px';
			o.height = h + 'px';	
		}
		
		this.setSelectedCoordinates();

	}
	
	
	this.setSelectedCoordinates = function() {

		var s          = document.getElementsByClassName('nuDragSelected');
		
		if(s.length == 0){return;}
		
		var o          = s[0].style;
		this.left      = parseInt(o.left);
		this.top       = parseInt(o.top);
		this.right     = parseInt(o.left) + (parseInt(o.borderWidth) * 2)
		this.bottom    = parseInt(o.top)  + (parseInt(o.borderWidth)  * 2);
		this.width     = parseInt(o.width);
		this.height    = parseInt(o.height);
		
		for(var i = 0 ; i < s.length ; i ++){
			
			o                = s[i].style;
			this.left        = Math.min(this.left,    parseInt(o.left));
			this.right       = Math.max(this.right,   parseInt(o.left) + parseInt(o.width) + (parseInt(o.borderWidth) * 2))
			this.top         = Math.min(this.top,     parseInt(o.top));
			this.bottom      = Math.max(this.bottom,  parseInt(o.top)  + parseInt(o.height) + (parseInt(o.borderWidth) * 2));
			this.width       = Math.min(this.width,   parseInt(o.width));
			this.height      = Math.min(this.height,  parseInt(o.height));

		}
		
	}
		
	
	this.selectBox = function(event) {

		if(this.classList.indexOf('nuDragArea') != -1){
			
			var e = document.createElement('div');
			e.setAttribute('id', 'nuSelectBox');
			$('body').append(e);
			$('#' + e.id).css({
				'width'            : 1,
				'height'           : 1,
				'top'              : event.clientY + window.scrollY,
				'left'             : event.clientX,
				'position'         : 'absolute',
				'border-style'     : 'dashed',
				'border-width'     : 1,
				'border-color'     : 'red',
				'z-index'          : '4000',
				'background-color' : 'transparent'
			});
			
			return true;
		}	
		
		return false;
	}
	

	this.resizeBox = function(event) {

		if($('#nuSelectBox').length == 0){return;}

		var x = parseInt($('#nuSelectBox').css('left'));
		var y = parseInt($('#nuSelectBox').css('top'));
		var w = parseInt($('#nuSelectBox').css('width'));
		var h = parseInt($('#nuSelectBox').css('height'));
		
		var X = event.clientX - this.startX;
		var Y = event.clientY  + window.scrollY - this.startY;
		
		if(X > 0) {
			$('#nuSelectBox').css({
				'width'            : X
			});
		} else {
			$('#nuSelectBox').css({
				'width'            : -1 * X,
				'left'             : this.startX + X,
			});
		}
		
		if(Y > 0) {
			$('#nuSelectBox').css({
				'height'            : Y
			});
		} else {
			$('#nuSelectBox').css({
				'height'           : -1 *  Y,
				'top'              : this.startY + Y,
			});
		}

	}
	
		

	this.removeBox = function() {

		if($('#nuSelectBox').length == 0){return;}

		var L = parseInt($('#nuSelectBox').css('left')) - this.areaLeft() ;
		var T = parseInt($('#nuSelectBox').css('top')) - this.areaTop() ;
		var B = T + parseInt($('#nuSelectBox').css('height'));
		var R = L + parseInt($('#nuSelectBox').css('width'));

		$('#nuSelectBox').remove();
		
		var o = $('.nuDragObject');

		o.each(function(index) {
		
			var l =     parseInt($(this).css('left'));
			var t =     parseInt($(this).css('top'));
			var b = t + parseInt($(this).css('height'));
			var r = l + parseInt($(this).css('width'));
			
			//drag around selected objects points
			if(l >= L && l <= R && t >= T && t <= B) {
				$(this).addClass('nuDragSelected');
			} else if(r >= L && r <= R && t >= T && t <= B) {
				$(this).addClass('nuDragSelected');
			} else if(l >= L && l <= R && b >= T && b <= B) {
				$(this).addClass('nuDragSelected');
			} else if(r >= L && r <= R && b >= T && b <= B) {
				$(this).addClass('nuDragSelected');
			}
			
			//drag within selected objects points
			if(L >= l && L <= r && T >= t && T <= b) {
				$(this).addClass('nuDragSelected');
			} else if(R >= l && R <= r && T >= t && T <= b) {
				$(this).addClass('nuDragSelected');
			} else if(L >= l && L <= r && B >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			} else if(R >= l && R <= r && B >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			}
			
			//drag through object but not through any points
			if(L >= l && L <= r && T <= t && B >= b) {
				$(this).addClass('nuDragSelected');
			} else if(L <= l && R >= r && T >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			}
		});
		
		this.getSelected();

	}
	

	this.areaLeft = function(a) {

		if(arguments.length == 1){
			return $('#nuDragArea').css('left', a);
		}
		return parseInt($('#nuDragArea').css('left'));

	}

	this.areaTop = function(a) {

		if(arguments.length == 1){
			return $('#nuDragArea').css('top', a);
		}
		return parseInt($('#nuDragArea').css('top'));

	}

	this.areaWidth = function(a) {

		if(arguments.length == 1){
			return $('#nuDragArea').css('width', a);
		}
		return parseInt($('#nuDragArea').css('width'));

	}

	this.areaHeight = function(a) {

		if(arguments.length == 1){
			return $('#nuDragArea').css('height', a);
		}
		return parseInt($('#nuDragArea').css('height'));

	}

	this.createArea = function(l, t, w, h) {

		var e = document.createElement('div');
		
		e.setAttribute('id', 'nuDragArea');

		$('body').append(e);

		$('#nuDragArea').css({'left':l, 'top':t, 'width':w, 'height':h});
		$('#nuDragArea').addClass('nuDragArea nuDragNoSelect');

	}
	

	this.createObject = function(id, prop) {

		var e = document.createElement('div');

		e.setAttribute('id', id);

		$('#nuDragArea').append(e);

		$('#' + id).addClass('nuDragObject');
		$('#' + id).css(prop);
		$('#' + id).css('z-index', 100 + $('.nuDragObject').length);
		$('#' + id).attr('data-section', '');
		$('#' + id).attr('data-x', 0);

	}
	
}

function nuNumberFormat(f){
	
	var o				= {type : ''};

	if(f[0] == 'N'){										//-- number

		var spl			= f.substr(2).split(' ');			//-- array [sign, number]
		var n			= spl[spl.length-1];				//-- number format
		
		o.type			= 'Number';
		o.separator		= n.substr(1,3).replaceAll('0','');
		o.decimal		= n.substr(3).replaceAll('0','');
		o.sign			= spl[0];
		o.places		= 0;
		o.format		= f;
		
		if(spl.length == 1){
			
			o.sign		= '';
			spl.unshift('');
			
		}
		
		if(o.decimal.length == 1){
			o.places	= spl[1].split(o.decimal)[1].length;
		}

	}
	
	return o;
	
}


function nuCurrentProperties(){
	return nuFORM.getCurrent();
}


function nuSetProperty(f, v){
	nuFORM.setProperty(f, v);
}


function nuGetProperty(f){
	return nuFORM.getProperty(f);
}




// nuformdrag
function nuBindDragEvents(){
		
    $(document).on('mousemove.nuformdrag', function(e) {

        var draggable 		= 0;
		
		if(window.nuFORM.breadcrumbs.length != -1) {
			
			if(window.nuFORM.getProperty('record_id') == '-2') {
				draggable 	= 1;
			}
			
		}

		if(draggable) {
			
			if(e.stopPropagation) e.stopPropagation();
			if(e.preventDefault) e.preventDefault();
			
			e.cancelBubble	=true;
			e.returnValue	=false;

			if(e.buttons) {
				nuDragBox(e);
			}
			
		}
		
    });
	
    $(document).on('mousedown.nuformdrag', function(e) {	

		window.startX 		= e.clientX + window.scrollX;
		window.startY 		= e.clientY + window.scrollY;
		window.moveX 		= 0;
		window.moveY 		= 0;
		
        var draggable 		= 0;
		
		if(window.nuFORM.last != -1) {
			
			if(window.nuFORM.getProperty('record_id') == '-2') {
				draggable 	= 1;
			}
			
		}

		if(draggable) {

			if(e.target === document.body || e.target === $('#nuRECORD')[0]) {
				
				if(!e.ctrlKey) {
					$('.nuDragSelected').removeClass('nuDragSelected');
				}
				
				nuCreateBox(e);
				
			} else {

				if(!e.ctrlKey && !$('#'+e.target.id).hasClass('nuDragSelected')) {
					$('.nuDragSelected').removeClass('nuDragSelected');
				}
				
				if($('#'+e.target.id).attr('data-drag')) {
					$('#'+e.target.id).addClass('nuDragSelected');
				}
				
			}
			
		}
		
        nuUpdateDragFieldsListbox();
		
    });
	
    $(document).on('mouseup.nuformdrag', function(e) {

		var draggable 		= 0;
		
		if(window.nuFORM.last != -1) {
			
			if(window.nuFORM.getProperty('record_id') == '-2') {
				draggable 	= 1;
			}

		}

		if(draggable) {

			if($('#nuSelectBox').length > 0) {
				nuRemoveBox(e.ctrlKey);
			}

		}

		nuUpdateDragFieldsListbox();

    });

    var nuDragKeydownListener = function(e){
		
        var keyDirection = '';
		
        if(e.keyCode == 37){
            keyDirection 	= 'left';
        } else if(e.keyCode == 39){
            keyDirection 	= 'right';
        } else if(e.keyCode == 38){
            keyDirection 	= 'up';
        } else if(e.keyCode == 40){
            keyDirection 	= 'down';
        }
		
        if(keyDirection != ''){
			
            $('div.nuDragSelected').each(function(){
				
                var prop	= '';
                var val 	= '';
				
                if(keyDirection == 'left'){
					
                    if(e.shiftKey){
						
                        prop = 'width';
                        val  = $(this).width() - 1;
						
                    } else {
						
                        prop = 'left';
                        val  = $(this).position().left - 1;
						
                    }
					
                } else if(keyDirection == 'right'){
					
                    if(e.shiftKey){
						
                        prop = 'width';
                        val  = $(this).width() + 1;
						
                    } else {
						
                        prop = 'left';
                        val  = $(this).position().left + 1;
						
                    }
					
                } else if(keyDirection == 'up'){
					
                    if(e.shiftKey){
						
                        prop = 'height';
                        val  = $(this).height() - 1;
						
                    } else {
						
                        prop = 'top';
                        val  = $(this).position().top - 1;
						
                    }
					
                } else if(keyDirection == 'down'){
					
                    if(e.shiftKey){
						
                        prop = 'height';
                        val  = $(this).height() + 1;
						
                    } else {
						
                        prop = 'top';
                        val  = $(this).position().top + 1;
						
                    }
					
                }
				
                $(this).css(prop,val+'px');
				
            });
        }
    }

    $(document).on('keydown.nuformdrag', nuDragKeydownListener);
    $(window.parent.document).on('keydown.nuformdrag', nuDragKeydownListener);

}

function nuUnbindDragEvents(){
    $(document).off('.nuformdrag');
}

function nuUpdateDragFieldsListbox(){
	
    $('#nuDragOptionsFields option:selected',window.parent.document.body).prop('selected',false);

    $('.nuDragSelected').each(function(){
        $('#nuDragOptionsFields option[id="drag_'+$(this).prop('id')+'"]',window.parent.document.body).prop('selected','selected');
    });
	
    nuCheckIfMovingTabOrderAllowed($('#nuDragOptionsFields',window.parent.document.body));
	nuCheckIfMovingFieldToOtherTabAllowed($('#nuDragOptionsFields',window.parent.document.body));
}

function nuCreateBox(event){
	
	var e 			= document.createElement('div');
	
	e.setAttribute('id', 'nuSelectBox');
	
	$('body').append(e);
	
	$('#' + e.id).css({
		'width'            : 1,
		'height'           : 1,
		'top'              : event.clientY + window.scrollY,
		'left'             : event.clientX,
		'position'         : 'absolute',
		'border-style'     : 'dashed',
		'border-width'     : 1,
		'border-color'     : 'red',
		'z-index'          : '4000',
		'background-color' : 'transparent'
	});
	
}

function nuDragBox(event) {	

	window.lastMoveX 	= window.moveX;
	window.lastMoveY 	= window.moveY;
	window.moveX 		= event.clientX - window.startX;
	window.moveY 		= event.clientY - window.startY;
	
	if($('#nuSelectBox').length > 0) {
		nuResizeDrag(event);
	} else {
		
		if($('#nuSelectBox').length == 0 && nuCanMove()){ 
			nuMoveSelected();
		}
		
	}
	
}

function nuResizeDrag(event) {

	var x = parseInt($('#nuSelectBox').css('left'));
	var y = parseInt($('#nuSelectBox').css('top'));
	var w = parseInt($('#nuSelectBox').css('width'));
	var h = parseInt($('#nuSelectBox').css('height'));
	
	var X = event.clientX - window.startX;
	var Y = event.clientY  + window.scrollY - window.startY;
	
	if(X > 0) {
		
		$('#nuSelectBox').css({
			'width'            : X
		});
		
	} else {
		
		$('#nuSelectBox').css({
			'width'            : -1 * X,
			'left'             : window.startX + X,
		});
		
	}
	
	if(Y > 0) {
		
		$('#nuSelectBox').css({
			'height'            : Y
		});
		
	} else {
		
		$('#nuSelectBox').css({
			'height'           : -1 *  Y,
			'top'              : window.startY + Y,
		});
		
	}
	
}

function nuRemoveBox(ctrlKey) {

	var L 			= parseInt($('#nuSelectBox').css('left'));
	var T 			= parseInt($('#nuSelectBox').css('top')) - nuGetTopArea();
	var B 			= T + parseInt($('#nuSelectBox').css('height'));
	var R 			= L + parseInt($('#nuSelectBox').css('width'));
	
	$('#nuSelectBox').remove();

	var o = $('[data-drag]');
	
	if(!ctrlKey) {
		$('.nuDragSelected').removeClass('nuDragSelected');
	}

	var selectedTab = $('.nuTabSelected')[0].id.substring(5);
	
	o.each(function(index) {
		
		if($(this).attr('data-nu-tab') == selectedTab) {
			var l 	=     parseInt($(this).css('left'));
			var t 	=     parseInt($(this).css('top'));
			var b 	= t + parseInt($(this).css('height'));
			var r 	= l + parseInt($(this).css('width'));
			
			//drag around selected objects points
			if(l >= L && l <= R && t >= T && t <= B) {
				$(this).addClass('nuDragSelected');
			} else if(r >= L && r <= R && t >= T && t <= B) {
				$(this).addClass('nuDragSelected');
			} else if(l >= L && l <= R && b >= T && b <= B) {
				$(this).addClass('nuDragSelected');
			} else if(r >= L && r <= R && b >= T && b <= B) {
				$(this).addClass('nuDragSelected');
			}
			
			//drag within selected objects points
			if(L >= l && L <= r && T >= t && T <= b) {
				$(this).addClass('nuDragSelected');
			} else if(R >= l && R <= r && T >= t && T <= b) {
				$(this).addClass('nuDragSelected');
			} else if(L >= l && L <= r && B >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			} else if(R >= l && R <= r && B >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			}
			
			//drag through object but not through any points
			if(L >= l && L <= r && T <= t && B >= b) {
				$(this).addClass('nuDragSelected');
			} else if(L <= l && R >= r && T >= t && B <= b) {
				$(this).addClass('nuDragSelected');
			}
			
		}
		
	});
	
}

function nuInitialiseDragState(){
	
    window.nuDragOptionsState 		= {'tabs': []};
	
    var tabOrderCounter 			= 10;
	
    $('div.nuTab[id^="nuTab"]').each(function(){

        var objects = {
			'tab_id': $(this).attr('data-nu-tab-id'),
            'objects': []
        };
		
        $('div#nuRECORD div[data-nu-tab="'+$(this).prop('id').replace('nuTab','')+'"]').each(function(){
			
            var objectPosition 		= $(this).position();
			
            var objectProperties 	= {
				
                'object_id': $(this).attr('data-nu-object-id'),
                'id': $(this).prop('id'),
                'left': objectPosition.left,
                'top': objectPosition.top,
                'width': $(this).width(),
                'height': $(this).height(),
                'tab_order': tabOrderCounter
				
            };
			
            objects.objects.push(objectProperties);
            tabOrderCounter 		= tabOrderCounter + 10;
			
        });
		
        window.nuDragOptionsState.tabs.push(objects);
		
    });
	
}

function nuSetTabOrderDataAttrs(){
	
    var currentTabNo	= $('div.nuTabSelected[id^="nuTab"]').attr('data-nu-tab-filter');
	
    for(var i=0; i<window.nuDragOptionsState.tabs[currentTabNo].objects.length; i++){
		
        var field 		= window.nuDragOptionsState.tabs[currentTabNo].objects[i];
		
        $('#nuDragOptionsFields option[id="drag_'+field.id+'"]',window.parent.document.body).attr('data-nu-tab-order',field.tab_order);
		
    }
	
}

function nuMoveUpOrder(){
	
    var currentTabNo 						= $('div.nuTabSelected[id^="nuTab"]', $('#nuDragDialog iframe').contents()).attr('data-nu-tab-filter');
    var currentSelectedFieldOption	 		= $('select#nuDragOptionsFields option:selected');
	
    for(var i=0; i<$('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[currentTabNo].objects.length; i++){
		
        var field 							= $('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[currentTabNo].objects[i];
		
        if(field.id == currentSelectedFieldOption.prop('id').replace('drag_','')){
			
            // if it's at the top, dont re-order anything
            if(field.id == $('select#nuDragOptionsFields option')[0].id.replace('drag_',''))
                return;
			
            var previousFieldDOM 			= $('select#nuDragOptionsFields option[data-nu-tab-order="'+(Number(currentSelectedFieldOption.attr('data-nu-tab-order'))-10)+'"]');
            var previousFieldSTATE 			= nuFindFieldInState(currentTabNo, previousFieldDOM.prop('id').replace('drag_',''));

            field.tab_order 				= Number(previousFieldDOM.attr('data-nu-tab-order'));
            previousFieldSTATE.tab_order 	= field.tab_order + 10;
			
            $('option#drag_'+field.id).attr('data-nu-tab-order',field.tab_order);
			
            var previousFieldDOMID = previousFieldDOM.prop('id');
            previousFieldDOM.attr('data-nu-tab-order',previousFieldSTATE.tab_order);
			
            var previousFieldDOMHTML = $('option#'+previousFieldDOMID)[0].outerHTML;

            $('option#'+previousFieldDOMID).remove();
            $('option#drag_'+field.id).after(previousFieldDOMHTML);
			
        }
		
    }
	
}

function nuMoveDownOrder(){
	
    var currentTabNo 					= $('div.nuTabSelected[id^="nuTab"]', $('#nuDragDialog iframe').contents()).attr('data-nu-tab-filter');
    var currentSelectedFieldOption 		= $('select#nuDragOptionsFields option:selected');
	
    for(var i=0; i<$('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[currentTabNo].objects.length; i++){
		
        var field 						= $('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[currentTabNo].objects[i];
		
        if(field.id == currentSelectedFieldOption.prop('id').replace('drag_','')){
			
            // if it's at the bottom, dont re-order anything
            if(field.id == $('select#nuDragOptionsFields option')[($('select#nuDragOptionsFields option').length-1)].id.replace('drag_','')){
				return;
			}
			
            var nextFieldDOM = $('select#nuDragOptionsFields option[data-nu-tab-order="'+(Number(currentSelectedFieldOption.attr('data-nu-tab-order'))+10)+'"]');
            var nextFieldSTATE = nuFindFieldInState(currentTabNo, nextFieldDOM.prop('id').replace('drag_',''));
			
            field.tab_order = Number(nextFieldDOM.attr('data-nu-tab-order'));
            nextFieldSTATE.tab_order = field.tab_order - 10;
			
            $('option#drag_'+field.id).attr('data-nu-tab-order',field.tab_order);
			
            var nextFieldDOMID = nextFieldDOM.prop('id');
			
            nextFieldDOM.attr('data-nu-tab-order',nextFieldSTATE.tab_order);
			
            var nextFieldDOMHTML = $('option#'+nextFieldDOMID)[0].outerHTML;
			
            $('option#'+nextFieldDOMID).remove();
            $('option#drag_'+field.id).before(nextFieldDOMHTML);
			
        }
		
    }
	
}

function nuFindFieldInState(tabNo, fieldID){
	
    for(var i=0; i<$('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[tabNo].objects.length; i++){
		
        if($('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[tabNo].objects[i].id == fieldID){
            return $('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[tabNo].objects[i];
		}
		
    }
	
    return null;
	
}

function nuCreateDragOptionsBox(form){
	
    var dragOptionsBoxWidth 		= 341;
    var dragOptionsBoxMinHeight 	= 535;
	
    $('#nuDragDialog',window.parent.document.body).css('top', 35);
    $('#nuDragDialog',window.parent.document.body).css('width',$('#nuDragDialog',window.parent.document.body).width()+dragOptionsBoxWidth - 25);
    $('#nuDragDialog',window.parent.document.body).css('min-height',dragOptionsBoxMinHeight+'px');
	
    var optionsBoxHTML = '<div id="nuDragOptionsBox" style="height:25px;" class="nuDragOptionsBox" style="width:'+(dragOptionsBoxWidth-20)+'px;height:100%;min-height:'+dragOptionsBoxMinHeight+'px;">'+
        '<div class="nuDragOptionsBoxContainer" style="padding-left:15px;width:340px;height:600px">'+
            '<div id="dragOptionsTitle" class="nuDragOptionsBoxTitle">Options</div>'+
            '<label for="nuDragOptionsFields" style="height:20px;" class="nuDragOptionsFieldsLabel">Object Tab Order</label>'+
            '<select multiple id="nuDragOptionsFields" style="height:130px;" class="nuDragOptionsFields" onchange="nuUpdateDragSelections(this);"></select>'+
                '<table>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td><button id="move_up_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuMoveUpOrder();">Up</button></td>'+
                            '<td><button id="move_top_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuAlignTop();">Top</button></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><button id="move_down_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuMoveDownOrder();">Down</button></td>'+
                            '<td><button id="move_bottom_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuAlignBottom();">Bottom</button></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><button id="move_ver_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuSpaceVertically();">Vertical</button></td>'+
                            '<td><button id="move_left_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuAlignLeft();">Left</button></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><button  id="move_hor_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuSpaceHorizontally();">Horizontal</button></td>'+
                            '<td><button  id="move_right_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuAlignRight();">Right</button></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><button  id="move_short_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuResizeToLowest();">Shortest</button></td>'+
                            '<td><button  id="move_thin_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuResizeToThinnest();">Thinnest</button></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><button  id="move_tall_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuResizeToHighest();">Tallest</button></td>'+
                            '<td><button  id="move_wide_btn" style="height:25px;" class="nuDragOptionsButton nuButton" onclick="nuResizeToWidest();">Widest</button></td>'+
                        '</tr>'+
						'<tr>'+
                            '<td><select id="nuDragOptionsTabsDropdown" style="height:25px;" class="nuDragOptionsButton" style="border: none"></select></td>'+
                            '<td><button  id="move_tab_btn" style="height:25px;" class="nuDragOptionsButton nuButton nuSaveButtonEdited" style="font-weight: bold;" onclick="nuMoveNuDrag();">Move to Tab</button></td>'+
                        '</tr>'+
						'<tr>'+
                        '</tr>'+
                        '<tr>'+
                            '<td></td>'+
                            '<td><button id="save_btn" style="height:25px;" class="nuDragOptionsButton nuButton nuSaveButtonEdited" style="font-weight: bold;" onclick="nuSaveNuDrag();">Save</button></td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
        '</div>'+
    '</div>';
	
    $('#nuDragDialog',window.parent.document.body).prepend(optionsBoxHTML);

	parent.nuAttachButtonImage('move_up_btn','UP');
	parent.nuAttachButtonImage('move_down_btn','DOWN');
	parent.nuAttachButtonImage('move_ver_btn','VER');
	parent.nuAttachButtonImage('move_hor_btn','HOR');
	parent.nuAttachButtonImage('move_short_btn','SHORT');
	parent.nuAttachButtonImage('move_tall_btn','TALL');
	parent.nuAttachButtonImage('move_top_btn','TOP');
	parent.nuAttachButtonImage('move_bottom_btn','BOTTOM');
	parent.nuAttachButtonImage('move_left_btn','LEFT');
	parent.nuAttachButtonImage('move_right_btn','RIGHT');
	parent.nuAttachButtonImage('move_thin_btn','THIN');
	parent.nuAttachButtonImage('move_wide_btn','WIDE');

    nuInitialiseDragState();
    nuPopulateFieldsList(0);
	nuPopulateTabDropdown(0);
	
    $('.nuTab[id^="nuTab"]').prop('onclick','');
    $('.nuTab[id^="nuTab"]').click(function(){
		
        if($(this).hasClass('nuTabSelected')){
            return;
		}
		
        nuClearFieldsList();
        nuUnselectAllDragObjects();
        nuSelectTab(this);
		
        nuPopulateFieldsList(Number($(this).attr('data-nu-tab-filter')));
		nuPopulateTabDropdown(Number($(this).attr('data-nu-tab-filter')));
        nuCheckIfMovingTabOrderAllowed($('#nuDragOptionsFields',window.parent.document.body));
		nuCheckIfMovingFieldToOtherTabAllowed($('#nuDragOptionsFields',window.parent.document.body));
		
    });
	
    nuCheckIfMovingTabOrderAllowed($('#nuDragOptionsFields'));
	nuCheckIfMovingFieldToOtherTabAllowed($('#nuDragOptionsFields'));
	
	var help 	= "<input id='run_sam' type='button' class='input_button nuButton' value='?' ";
	help		+= "onclick='nuMessage([";

	help		+= "\"Use arrow keys to move selected Objects.\", ";
	help		+= "\"Use arrow keys + SHIFT to resize selected Objects.\", ";
	help		+= "\"Draw a square around Objects to highlight them.\", ";
	help		+= "\"Hold CTRL to add Objects to the current selection.\", ";

	help		+= "])' ";
	help		+= "style='top: 2px; left: 2px; width: 21px; height: 21px; text-align: center; position: absolute;'>";
	
	$('body').append(help);
	
}

function nuResizeToLowest(){
	
    var lowest 		= 1000000;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).height() < lowest){
            lowest 	= $(this).height();
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('height',lowest+'px');
    });
	
}

function nuResizeToThinnest(){
	
    var thinnest 		= 1000000;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).width() < thinnest){
            thinnest 	= $(this).width();
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('width',thinnest+'px');
    });
	
}

function nuResizeToHighest(){
	
    var highest 		= 0;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).height() > highest){
            highest 	= $(this).height();
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('height',highest+'px');
    });
	
}

function nuResizeToWidest(){
	
    var widest 		= 0;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).width() > widest){
            widest 	= $(this).width();
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('width',widest+'px');
    });
	
}

function nuSortObjAsc(a,b) {
	
    return a.top - b.top;
	
}

function nuSpaceHorizontally(){
	
    var selectedFields 		= [];
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        selectedFields.push({
            left: $(this).position().left,
            width: $(this).width(),
            id: $(this).prop('id')
        });
		
    });
	
    selectedFields.sort(nuSortObjAsc);
	
    var gapTotal 			= 0;
    var leftTotal			= 0;
	
    for(var i=1; i<selectedFields.length; i++){
		
        gapTotal 			+= selectedFields[i].left-(selectedFields[i-1].left+selectedFields[i-1].width);
        leftTotal			+= selectedFields[i].left-selectedFields[i-1].left;
		
    }
	
    var gapAvg 				= Math.round(gapTotal/(selectedFields.length-1));
    var leftAvg 			= Math.round(leftTotal/(selectedFields.length-1));
	
    if(gapAvg < 0){
		
        for(var i=1; i<selectedFields.length; i++){
            $('#'+selectedFields[i].id,$('#nuDragDialog iframe').contents()).css('left',($('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).position().left+leftAvg)+'px');
        }
		
    } else {
		
        for(var i=1; i<selectedFields.length; i++){
            $('#'+selectedFields[i].id,$('#nuDragDialog iframe').contents()).css('left',($('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).position().left+$('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).width()+gapAvg)+'px');
        }
		
    }
	
}

function nuSpaceVertically(){
	
    var selectedFields 	= [];
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        selectedFields.push({
			
            top: $(this).position().top,
            height: $(this).height(),
            id: $(this).prop('id')
			
        });
		
    });
	
    selectedFields.sort(nuSortObjAsc);

    var gapTotal 	= 0;
    var topTotal 	= 0;
	
    for(var i=1; i<selectedFields.length; i++){
		
        gapTotal 	+= selectedFields[i].top-(selectedFields[i-1].top+selectedFields[i-1].height);
        topTotal 	+= selectedFields[i].top-selectedFields[i-1].top;
		
    }
	
    var gapAvg 		= Math.round(gapTotal/(selectedFields.length-1));
    var topAvg 		= Math.round(topTotal/(selectedFields.length-1));
	
    if(gapAvg < 0){
		
        for(var i=1; i<selectedFields.length; i++){
            $('#'+selectedFields[i].id,$('#nuDragDialog iframe').contents()).css('top',($('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).position().top+topAvg)+'px');
        }
		
    } else {
		
        for(var i=1; i<selectedFields.length; i++){
            $('#'+selectedFields[i].id,$('#nuDragDialog iframe').contents()).css('top',($('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).position().top+$('#'+selectedFields[i-1].id,$('#nuDragDialog iframe').contents()).height()+gapAvg)+'px');
        }
		
    }
	
}

function nuAlignRight(){
	
    var rightestFieldID 	= '';
    var rightestPoint 		= 0;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).position().left+$(this).width() > rightestPoint){
			
            rightestFieldID = $(this).prop('id');
            rightestPoint 	= $(this).position().left+$(this).width();
			
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('left',(rightestPoint-$(this).width())+'px');
    });
	
}

function nuAlignLeft(){
	
    var leftestFieldID 		= '';
    var leftestPoint 		= 1000000;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).position().left < leftestPoint){
			
            leftestFieldID 	= $(this).prop('id');
            leftestPoint 	= $(this).position().left;
			
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('left',leftestPoint+'px');
    });
	
}

function nuAlignTop(){
	
    var highestFieldID 		= '';
    var highestPoint 		= 1000000;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).position().top < highestPoint){
			
            highestFieldID 	= $(this).prop('id');
            highestPoint 	= $(this).position().top;
			
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('top',highestPoint+'px');
    });
	
}

function nuAlignBottom(){
	
    var lowestFieldID 		= '';
    // its 0 here because technically top: 0px is the highest...
    var lowestPoint 		= 0;
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
		
        if($(this).position().top + $(this).height() > lowestPoint){
			
            lowestFieldID 	= $(this).prop('id');
            lowestPoint 	= $(this).position().top + $(this).height();
			
        }
		
    });
	
    $('div.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).css('top',(lowestPoint-$(this).height())+'px');
    });
}

function nuMoveNuDrag() {
	
	//find tab we are moving objects to
	var moveToTab 				= $('#nuDragOptionsTabsDropdown').val().substring($('#nuDragOptionsTabsDropdown').val().length-1);
	var moveToTab 				= $('#nuDragOptionsTabsDropdown').val().substring(5);
	
	$('#nuDragOptionsFields :selected').each(function(i, selected){
		
		var fieldToMove 		= $(selected).text();
		var initialTab 			= $('#nuWindow').contents().find('#'+fieldToMove).attr('data-nu-tab');
		
		//hide objects on screen so they can be redrawn on correct tab.
		$('#nuWindow').contents().find('#'+fieldToMove).attr('data-nu-tab',moveToTab).hide();
		
		//get tab objects array
		var tabObjects 			= $("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[initialTab];
		var index 				= 0;
		var foundField 			= false;
		
		for(var i = 0; i < tabObjects.objects.length; i++) {
			
			if(tabObjects.objects[i].id == fieldToMove) {
				
				var fieldObject = $("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[initialTab].objects[i];
				
				foundField = true;
				
				$("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[moveToTab].objects.push(fieldObject);
				$("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[initialTab].objects.splice(i,1);
				
				i--;
				
			} else if(foundField) {
				$("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[initialTab].objects[i].tab_order -= 10;
			}
		}
		
		//update orders
		var tabObjects 			= $("#nuWindow")[0].contentWindow.nuDragOptionsState.tabs[moveToTab];
		
		for(var j = 0; j < tabObjects.objects.length; j++) {
			tabObjects.objects[j].tab_order = Number(j * 10) + Number(moveToTab * 100);
		}
		
	});
	
	//go to new tab
	$('#nuWindow').contents().find('#nuTab'+moveToTab).click();
	
}

function nuSaveNuDrag(){
	
    $("body").append('<div id="overlay" style="background-color:grey;position:absolute;top:0;left:0;height:100%;width:100%;z-index:999;"></div>');
    
    if(!nuPutFieldDimensionsIntoState()){
        return;
	}
	
	if(parent['nuFORM'] !== undefined){
		parent.nuFORM.edited = false;
	}

	nuSaveAfterDrag();
	
}

function nuAbortSaveDrag(){
	
     $("#overlay").remove();
	
} 

function nuPutFieldDimensionsIntoState(){
	
    for(var tabNo=0; tabNo<$('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs.length; tabNo++){
		
        for(var fieldNo=0; fieldNo<$('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[tabNo].objects.length; fieldNo++){
			
            var field = $('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState.tabs[tabNo].objects[fieldNo];
			
            if($('div#'+field.id,$('#nuDragDialog iframe').contents()).length == 1){
				
                $('div#'+field.id,$('#nuDragDialog iframe').contents()).show();
				
                field.left 		= $('div#'+field.id,$('#nuDragDialog iframe').contents()).position().left;
                field.top 		= $('div#'+field.id,$('#nuDragDialog iframe').contents()).position().top;
                field.width 	= $('div#'+field.id,$('#nuDragDialog iframe').contents()).width();
                field.height 	= $('div#'+field.id,$('#nuDragDialog iframe').contents()).height();
				
                $('div#'+field.id,$('#nuDragDialog iframe').contents()).hide();
				
            } else {
				
                alert('Error putting field dimensions into state with id: '+field.id);
				
                return false;
				
            }
			
        }
		
    }
	
    return true;
	
}

function nuUpdateDragSelections(fieldsSelectBox){
	
    nuUnselectAllDragObjects();
    nuCheckIfMovingTabOrderAllowed(fieldsSelectBox);
	nuCheckIfMovingFieldToOtherTabAllowed(fieldsSelectBox);
	
    $('option:selected', fieldsSelectBox).each(function(){
        $('#'+$(this).prop('id').replace('drag_',''),$('#nuDragDialog iframe').contents()).addClass('nuDragSelected');
    });
	
}

function nuCheckIfMovingTabOrderAllowed(fieldsSelectBox){

    if($('option:selected', fieldsSelectBox).length == 1){
		
        $('#move_down_btn, #move_up_btn').removeAttr('disabled');
        $('#move_down_btn, #move_up_btn').removeClass('nuDragOptionsButtonDisabled');
        $('#move_down_btn, #move_up_btn', window.parent.document.body).removeAttr('disabled');
        $('#move_down_btn, #move_up_btn', window.parent.document.body).removeClass('nuDragOptionsButtonDisabled');
		
    } else {
		
        $('#move_down_btn, #move_up_btn').prop('disabled','disabled');
        $('#move_down_btn, #move_up_btn').addClass('nuDragOptionsButtonDisabled');
        $('#move_down_btn, #move_up_btn', window.parent.document.body).prop('disabled','disabled');
        $('#move_down_btn, #move_up_btn', window.parent.document.body).addClass('nuDragOptionsButtonDisabled');
		
    }
	
}

function nuCheckIfMovingFieldToOtherTabAllowed(fieldsSelectBox){
	
	var currentTabNo 		= $('div.nuTabSelected[id^="nuTab"]').attr('data-nu-tab-filter');
	var tabDropdown 		= $('#nuDragOptionsTabsDropdown',window.parent.document.body);

    if($('option:selected', fieldsSelectBox).length >= 1){
		tabDropdown.removeAttr('disabled');
    } else {
		tabDropdown.prop('disabled','disabled');
    }
	
}


function nuUnselectAllDragObjects(){
	
    $('.nuDragSelected').each(function(){
        $(this).removeClass('nuDragSelected');
    });
	
    $('.nuDragSelected',$('#nuDragDialog iframe').contents()).each(function(){
        $(this).removeClass('nuDragSelected');
    });
	
}


function nuClearFieldsList(){
	
    $('#nuDragOptionsFields',window.parent.document.body).html('');
	$('#nuDragOptionsTabsDropdown',window.parent.document.body).html('');
	
}


function nuPopulateFieldsList(currentlySelectedTabNo){
	
    var tabOrderSearch 	= nuGetMinTabOrderInTab(currentlySelectedTabNo);
    var field 			= null;
	
    for(var i=0; i<window.nuDragOptionsState.tabs[currentlySelectedTabNo].objects.length; i++){
		
        for(var j=0; j<window.nuDragOptionsState.tabs[currentlySelectedTabNo].objects.length; j++){
			
            field 		= window.nuDragOptionsState.tabs[currentlySelectedTabNo].objects[j];
			
            if(field.tab_order == tabOrderSearch){
                $('#nuDragOptionsFields',window.parent.document.body).append('<option id="drag_'+field.id+'">'+field.id+'</option>');
			}
			
        }
		
        tabOrderSearch 	= tabOrderSearch + 10;
		
    }
	
    nuSetTabOrderDataAttrs();
	
}


function nuGetMinTabOrderInTab(currentTabNo){
	
    var minTabOrder 		= 1000000;
	
    for(var i=0; i<window.nuDragOptionsState.tabs[currentTabNo].objects.length; i++){
		
        if(window.nuDragOptionsState.tabs[currentTabNo].objects[i].tab_order < minTabOrder)
            minTabOrder 	= window.nuDragOptionsState.tabs[currentTabNo].objects[i].tab_order;
		
    }
	
    if(minTabOrder == 1000000){
        return null;
	}
	
    return minTabOrder;
}

function nuMoveSelected() {

	var s		= document.getElementsByClassName('nuDragSelected');
	var l		= 0;
	var t		= 0;
	var o		= {};

	for(var i = 0 ; i < s.length ; i ++){

		o       = s[i].style;
		l       = parseInt(o.left) + (window.moveX - window.lastMoveX);
		t       = parseInt(o.top)  + (window.moveY - window.lastMoveY);
		o.left  = l + 'px';
		o.top   = t + 'px';

	}
}

function nuCanMove() {
	
	var s 		= document.getElementsByClassName('nuDragSelected');
	var l 		= 0;
	var t 		= 0;
	var o 		= {};

	for(var i = 0 ; i < s.length ; i ++){

		o       = s[i].style;
		l       = parseInt(o.left) + (window.moveX - window.lastMoveX);
		r       = l + parseInt(o.width);
		t       = parseInt(o.top)  + (window.moveY - window.lastMoveY);
		b       = t + parseInt(o.height);

		if(l < 0) {
			return false;
		}
		
		if(t < 0) {
			return false;
		}
		
	}

	return true;

}

function nuGetTopArea() {
	
	var nuActionHolder 		= parseInt($('#nuActionHolder').css('height'));
	var nuBreadcrumbHolder	= parseInt($('#nuBreadcrumbHolder').css('height'));
	var nuTabHolder 		= parseInt($('#nuTabHolder').css('height'));
//	$p = parent.window.$;
//	var dialogTitle = parseInt($p('#dialogTitle').css('height'));
	var p 					= parent.window.$;
	var dialogTitle 		= parseInt(p('#dialogTitle').css('height'));

	return parseInt(nuActionHolder) + parseInt(nuBreadcrumbHolder) + parseInt(nuTabHolder) + parseInt(dialogTitle);	
	
}

function nuPopulateTabDropdown(currentlySelectedTabNo){
	
	// Create a dropdown with the values of the tabs
	$('div.nuTab[id^="nuTab"]').each(function(){

		var tabNumber 		= $(this).attr('data-nu-tab-filter');
		var tabName 		= $(this).text();	
		
		if(tabNumber != currentlySelectedTabNo) {
			$('#nuDragOptionsTabsDropdown',window.parent.document.body).append('<option value="nuTab'+tabNumber+'">'+tabName+'</option>');
		}
		
    });
	
	// Select the current tab
	$('#nuDragOptionsTabsDropdown').find('option:first').prop('selected', 'selected');
	
}    






//nuform

function nuBuildForm(f){

    $('#nubody').off('.nuresizecolumn'); 				//removes (if exist) the cursormove/touchmove event listeners binded to nubody

	nuSetProperty('CLONED_RECORD', 0);
	nuSetProperty('NEW_RECORD', 0);
	
	if(f.tableSchema === null){  						//-- need to login again
	
		$('body').addClass('nuBrowseBody')
		$('body').removeClass('nuEditBody')
		
		sessionStorage.logout	= 'true';
		parent.parent.parent.parent.parent.location.reload();
		
		return;
		
	}
	
	if(nuFormType() == 'browse'){
		window.nuTimesSaved		= -1;
	}else{
		
		window.nuTimesSaved		= window.nuTimesSaved + 1;
		
		if(window.nuLastForm != f.form_id){
			window.nuTimesSaved	= 0;
		}
		
	}
	
	window.nuLastForm			= f.form_id;
	window.nuSubformRow			= -1;
	window.nuBeforeSave			= null;
	window.nuBeforeDelete		= null;
	window.nuOnClone			= null;
	window.nuBrowseFunction		= window.nuDefaultBrowseFunction;
	window.nuCLONE				= false;
	window.nuSERVERRESPONSE		= f;
	window.nuSERVERRESPONSELU	= [];
	window.nuSESSION			= f.session_id;
	window.nuSUBFORMROW			= [];
	window.nuHASH				= [];                       //-- remove any hash variables previously set.
	window.nuTABHELP			= [];
	window.nuFORMHELP			= [];
	window.nuBROWSEROW			= -1;
	window.nuBROWSECLICKED		= false;
	window.nuUniqueID			= 'c' + String(Date.now());
	window.global_access		= f.global_access == '1';
	nuFORM.edited				= false;
	nuFORM.scroll				= [];
	nuSetSuffix(1000);
	nuSetBody();
	
	nuRedefine_nuSelectBrowse();
	
	if(f.tableSchema.length != 0){  						//-- its an Object (load these once,  at login)
		nuFORM.tableSchema		= f.tableSchema;
	}
	
	nuFORM.formSchema			= f.formSchema;
	window.nuLANGUAGE			= f.translation;
		
	var b 						= window.nuFORM.getCurrent();

	nuAddedByLookup(f);
	
	b.form_id 					= f.form_id;
	b.record_id 				= f.record_id;
	b.session_id 				= f.session_id;
	b.user_id 					= f.user_id;
	b.redirect_form_id			= f.redirect_form_id;
	b.title 					= f.title;
	b.row_height 				= f.row_height;
	b.rows 						= f.rows;
	b.browse_columns 			= f.browse_columns;
	b.browse_sql				= f.browse_sql;
	b.browse_rows 				= f.browse_rows;
	b.pages 					= f.pages;
	b.form_code					= f.form_code;
	b.form_description			= f.form_description;
	b.form_type					= f.form_type;
	b.run_code					= f.run_code;
	b.run_description			= f.run_description;
	b.browse_table_id			= f.browse_table_id;
	
	
	nuAddHolder('nuActionHolder');
	nuAddHolder('nuBreadcrumbHolder');
	
	if(nuFormType() == 'edit'){
		nuAddHolder('nuTabHolder');
	}
	
	nuAddHolder('nuRECORD');
	$('#nuRECORD').attr('data-nu-table', f.table);
	$('#nuRECORD').attr('data-nu-primary-key-name', f.primary_key);
	
	nuResizeBody(f);

	nuAddBreadcrumbs();
	nuAddEditTabs('', f);
	
	nuOptions('', f.form_id, 'form', f.global_access);
	

	nuAddActionButtons(f);
	nuRecordProperties(f, '');

	if(nuFormType() == 'edit'){
		
		nuBuildEditObjects(f, '', '', f);
		nuCalculateForm(false);

		if(f.objects.length > 0){

			if($('#' + f.objects[0].id).attr('data-nu-type') == 'lookup'){
				var obj0	= $('#' + f.objects[0].id + 'code');
			}else{
				var obj0	= $('#' + f.objects[0].id);
			}

		}
		
	}

	nuGetStartingTab();
	
//	if(nuFormType() == 'edit' && nuIsNewRecord() && f.objects.length > 0){
	if(nuFormType() == 'edit' && f.objects.length > 0){
		obj0.focus();
	}

    if(f.record_id == '-2'){
        nuCreateDragOptionsBox(f);
	}else{
		nuAddJavascript(f);
	}
	
	nuAddBrowseListeners(b.column_widths);
	
	if(window.nuLoginH != ''){
		
		$('#nuBreadcrumb0')
		.html(nuTranslate('Home'))
		.attr('onclick', '')
		.attr('onclick', 'nuForm("' + window.nuLoginH + '", -1, "", "", 1);');
		
		window.nuLoginH	 = ''
		
	}

	$('#nuSearchField').focus();
	
	if(window.nuOnLoad){
		nuOnLoad();
	}
	
	if(window.nuMESSAGES.length > 0){
		
		nuMessage(window.nuMESSAGES);
		window.nuMESSAGES	= [];
		
	}
	
	window.nuSAVED		= true;

}


function nuAddedByLookup(f){
	
	var isEdit			= nuFormType() 			== 'edit';
	var isNewRecord		= window.nuLASTRECORD 	== '-1';
	var isLookup		= window.nuTARGET 		!= '';
	
	if(isEdit && isNewRecord && isLookup){
		window.parent.nuGetLookupId(nuFORM.getCurrent().record_id, window.nuTARGET);			//-- called from parent window
	}
	
}


function nuSetBody(){

	$('body').html('');
	$('body').removeClass('nuBrowseBody nuEditBody');
	
	if(nuFormType() == 'browse'){
		$('body').addClass('nuBrowseBody')
	}else{
		$('body').addClass('nuEditBody')
	}
	
}

function nuGetTitleHeight(){

	var a			= ['nuActionHolder', 'nuBreadcrumbHolder', 'nuTabHolder'];
	var b			= 0;
	
	for(var i = 0 ; i < a.length ; i++){
		
		var o		= $('#' + a[i]);
		
		if(o.length == 1){
			
			var t	= o.offset().top;
			var h	= parseInt(o.css('height'));
			b		= Math.max(b, t + h);
			
		}
		
	}
	
	return Number(b + 50);

}


function nuResizeBody(f){

	var d				= f.dimensions;
	var headers			= nuGetTitleHeight();
	
	if(nuFormType() == 'browse'){
		
		var h			= Number(d.browse.height) + headers;
		var w			= Number(d.browse.width);

		$('#nuDragDialog', window.parent.document).
		css({'height'		:	(h + 90) + 'px',
			'width' 		:	(w + 43) + 'px',
			'visibility' 	:	'visible'
		});

		$('#nuWindow', window.parent.document).
		css({'height'		:	(h + 47) + 'px',
			'width' 		:	(w + 30) + 'px'
		});
			
		$('body').css('height', h);
		
	}else{
		
		var h			= Number(d.edit.height) + headers;
		var w			= Number(d.edit.width);
		
		if(f.record_id == '-2'){			//-- bigger for moving objects
			
			h			= h + 200;
			w			= w + 200;
			
		}
		
		$('#nuDragDialog', window.parent.document).
		css({'height'		:	(h + 43) + 'px',
			'width' 		:	(w + 10) + 'px',
			'visibility' 	:	'visible'
		});

		$('#nuRECORD').
		css({'height'		:	(h - 90) + 'px',
			'width' 		:	(w - 30) + 'px'
		});

		$('#nuWindow', window.parent.document).
		css({'height'		:	(h) + 'px',
			'width' 		:	(w - 3) + 'px'
		});
		
		if(h < window.innerHeight){
			$('body').css('height', '100%');
		}else{
			$('body').css('height', h);
		}
		
		if(w > window.innerWidth){
			
			$('#nuBreadcrumbHolder').css('width', w-3);
			$('#nuTabHolder').css('width', w-3);
			$('#nuActionHolder').css('width', w-3);
			
		}
		
	}
	
}


function nuDefine(v){

	if(v === undefined){
		v	= '';
	}
	
	return v;
	
}


function nuAddActionButtons(form){

	var draggable 	= 0;
	var rid			= window.nuFORM.getProperty('record_id');
	
	if(rid == '-2') {
		draggable = 1;
	}

	var button	= form.buttons;

	if(nuFormType() == 'browse'){

		var s 	= nuDefine(nuFORM.getProperty('search'));
		var f 	= nuDefine(nuFORM.getProperty('filter'));
		
		$('#nuActionHolder').append("<input id='nuSearchField' type='text' class='nuSearch' onfocus='this.value = this.value;' onkeypress='nuSearchPressed(event)' onkeydown='nuArrowPressed(event)' value='" + s + "'>&nbsp;");
		$('#nuActionHolder').append("<input id='nuFilter' style='visibility:hidden;width:0px' value='" + f + "'>");
		$('#nuActionHolder').append("<input id='nuSearchButton' type='button' class='nuActionButton ' value='" + nuTranslate('Search') + "' onclick='nuSearchAction(1)'>&nbsp;");
		
		if(button.Add == 1){nuAddActionButton('Add');}
		if(button.Print == 1){nuAddActionButton('Print');}
			
	}else{
		
		if(!draggable){
			
			if(button.Save == 1 && form.form_type != 'launch')	{nuAddActionButton('Save');}
			
			if(rid != -1){
				
				if(button.Delete == 1)							{nuAddActionButton('Delete');}
				if(button.Clone == 1)							{nuAddActionButton('Clone');}
				
			}
			
			if(button.RunHidden != '')							{nuAddActionButton('runhidden', 'Run', button.RunHidden);}
			if(button.Run != '')								{nuAddActionButton('run', 'Run', button.Run);}
			
		}
		
	}
	
	if(window.parent.length == 0 || parent['nuHashFromEditForm']===undefined){ //-- only if Main Form
		$('#nuActionHolder').append("<img id='nulogo' width='120px' src='graphics/logo.png' style='position:absolute;right:20px'>");
	}
	
	if(nuSERVERRESPONSE.shortcode_session != ''){$('#nulogo').remove();}
	
}



function nuAddActionButton(i, v, f){
	
	if(arguments.length == 1){
		
		v	= i;
		f	= 'nu' + i + 'Action()';
		
	}
	
	$('#nuActionHolder').append("<input id='nu" + i + "Button' type='button' class='nuActionButton' value='" + nuTranslate(v) + "' onclick='" + f + "'>&nbsp;");

}


function nuBuildEditObjects(f, p, o, prop){

	if(typeof(f.objects) != 'object'){return;}
	
	var l 			= 3;
	var draggable 	= 0;
	
	if(window.nuFORM.getProperty('record_id') == '-2'){
		draggable 	= 1;
	}
	
	for(var i = 0 ; i < f.objects.length  ; i++){
		
		if(!draggable) {

			var t                       = prop.objects[i].type;
			f.objects[i].parent_type    = o == '' ? '' : o.subform_type;

			if(t == 'input' || t == 'display' || t == 'lookup' || t == 'textarea' || t == 'calc'){
				l = l + nuINPUT(f, i, l, p, prop);
			}else if(t == 'run'){
				l = l + nuRUN(f, i, l, p, prop);
			}else if(t == 'html'){
				l = l + nuHTML(f, i, l, p, prop);
			}else if(t == 'image'){
				l = l + nuIMAGE(f, i, l, p, prop);
			}else if(t == 'select'){
				l = l + nuSELECT(f, i, l, p, prop);
			}else if(t == 'subform' && p == ''){
				l = l + nuSUBFORM(f, i, l, p, prop);
			}else if(t == 'word'){
				l = l + nuWORD(f, i, l, p, prop);
			}
			
			l 	= l + 2;
		
		} else{
			
			$("body").css("overflow", "hidden");
			l = l + nuDRAG(f, i, l, p, prop);
			
		}
		
	}
	
}

function nuAddJSObjectEvents(i, j){

	var o			= document.getElementById(i);

	for(var J = 0 ; J < j.length ; J++){

		var code 	= o.getAttribute(j[J].event);
		var ev		= j[J].event;
		code		= code === null ? '' : code + ';' ;
		
		if(ev == 'beforeinsertrow')		{ev	= 'data-nu-' + ev;}
		if(ev == 'afterinsertrow')		{ev	= 'data-nu-' + ev;}
		if(ev == 'clickdelete')			{ev	= 'data-nu-' + ev;}
		
		o.setAttribute(ev, code + j[J].js);

	}

}

function nuRecordProperties(w, p, l){

	var de    = p + 'nuDelete';
	var fh    = p + 'nuRECORD';                       //-- Edit Form Id
	var chk   = document.createElement('input');
	var sf    = p.substr(0, p.length - 3);

	chk.setAttribute('id', de);
	chk.setAttribute('title', nuTranslate('Delete This Row When Saved'));
	chk.setAttribute('type', w.deletable == '0'?'text':'checkbox');
	chk.setAttribute('onclick', 'nuChange(event)');

	$('#' + fh)
	.append(chk)
	.addClass('nuSection')
	.attr('data-nu-form-id', w.id)
	.attr('data-nu-table', w.table)
	.attr('data-nu-primary-key', w.record_id)
	.attr('data-nu-foreign-key', w.foreign_key)
	.attr('data-nu-foreign-field', p == '' ? '' : w.foreign_key_name);

	$('#' + de)
	.attr('data-nu-data', '')
	.addClass('nuSubformCheckbox')
	.addClass(w.table)

	if(arguments.length == 3){
		
		$('#' + de)
		.prop('checked', w.record_id == -1)
		.attr('data-nu-checkbox', w.deletable == '0'?'':sf)
		.css({'top'			: 3, 
			'left'			: Number(l) + 2, 
			'position' 		: 'absolute', 
			'visibility'	: 'visible'})
			
		if(w.deletable == '0'){				//-- Fike
			$('#' + de).css({'width' : 0, 'height' : 0, 'left' : -10, 'top' : 10})			//-- allows tabbing when there is no checkbox.
		}
		
	}else{
		
		$('#' + de).css('visibility', 'hidden')
		.prop('checked', false)
		.attr('data-nu-checkbox', sf);
		
	}
	
}

function nuDRAG(w, i, l, p, prop){

	var id           = p + prop.objects[i].id;
	var ef           = p + 'nuRECORD';
	var nuObjectType = p + prop.objects[i].type;
	var drg          = document.createElement('div');
	drg.setAttribute('id', id);
	
	$('#' + ef).append(drg);
	
	$('#' + id).css({'top'      : Number(prop.objects[i].top),
					'left'		: Number(prop.objects[i].left),
					'width'		: Number(prop.objects[i].width),
					'height'	: Number(prop.objects[i].height),
					'text-align': prop.objects[i].align,
					'position'	: 'absolute',
					'overflow': 'hidden'
	}).addClass('nu_'+ nuObjectType);

	$('#' + id).text(id);
	$('#' + id).attr('data-drag',1);
    $('#' + id).attr('data-nu-object-id', prop.objects[i].object_id)
		
	nuAddDataTab(id, prop.objects[i].tab, p);
		
	return Number(prop.objects[i].width);
	
}


function nuINPUT(w, i, l, p, prop){
	
	var ID			= p + prop.objects[i].id;
	var id			= p + prop.objects[i].id;
	var ef			= p + 'nuRECORD';                 						//-- Edit Form Id
	var ty			= 'textarea';
	var vis			= prop.objects[i].display == 0 ? 'hidden' : 'visible';
	var input_type	= prop.objects[i].input;
	var hideSF		= '';
	
	if(prop.objects[i].type != 'textarea'){         						//-- Input Object
		ty			= 'input';
	}

	if(prop.objects[i].input == 'file'){
		
		var inp  	= document.createElement('textarea');

		inp.setAttribute('id', id);

		$('#' + ef).append(inp);

		$('#' + id)
		.css('visibility', 'hidden')
		.attr('data-nu-field', id)
		.attr('data-nu-prefix', p)
		.attr('data-nu-data', '')
		.attr('onchange', 'this.className = "nuEdited"')
		.val(prop.objects[i].value);

		id			= id + '_file';
		
	}
	
	var inp  		= document.createElement(ty);

	inp.setAttribute('id', id);

	$('#' + ef).append(inp);

	if(prop.objects[i].parent_type == 'g'){        							//--  in a grid subform
		
		prop.objects[i].left 	= l;
		prop.objects[i].top 	= 3;
		
	}else{

		if(input_type != 'button'){											//-- Input Object
			nuLabel(w, i, p, prop);
		}
		
	}

	if(ty == 'input'){														//-- Input Object

		inp.setAttribute('type', prop.objects[i].input);

		if(prop.objects[i].type == 'lookup'){
			$('#' + id).addClass('nuHiddenLookup');
		}else{
			$('#' + id).addClass('input_' + input_type);
		}

	}

	var onChange	= 'nuChange(event)';

	if(input_type == 'file'){
		onChange	= 'nuChangeFile(event)';
	}

	if(prop.objects[i].type == 'lookup'){
		onChange	= 'nuGetLookupId(this.value, this.id)';
	}
		
	var bump		= 0;

	if(input_type == 'button' && p != ''){
		var bump	= 3;
	}
	
	nuAddDataTab(id, prop.objects[i].tab, p);

	$('#' + id).css({'top'      : Number(prop.objects[i].top),
					'left'		: Number(prop.objects[i].left) + bump,
					'width'		: Number(prop.objects[i].width),
					'height'	: Number(prop.objects[i].height),
					'text-align': prop.objects[i].align,
					'position'	: 'absolute'
	})
	.attr('onchange', onChange)
	.attr('data-nu-field', input_type == 'button' || input_type == 'file' ? null : prop.objects[i].id)
	.attr('data-nu-object-id', w.objects[i].object_id)
	.attr('data-nu-format', '')
	.attr('data-nu-prefix', p)
	.attr('data-nu-type', w.objects[i].type)
	.attr('data-nu-subform-sort', 1)
	.attr('data-nu-label', w.objects[i].label)
	.attr('onfocus', 'nuLookupFocus(event)')

	if(input_type == 'nuScroll'){
		
		var input_js	= 'nuFORM.scrollList(event, ' + w.objects[i].scroll + ')';
		
		$('#' + id)
		.addClass('nuScroll')
		.attr('onkeydown', input_js);
		
	}


	if(input_type == 'nuDate'){
		
		$('#' + id)
		.addClass('nuDate')
		.attr('data-nu-format', w.objects[i].format)
		
	}


	if(input_type == 'nuNumber'){
		
		$('#' + id)
		.addClass('nuNumber')
		.attr('data-nu-format', w.objects[i].format)
		
	}

	if(input_type != 'button'){
		$('#' + id).attr('data-nu-data', '')
	}else{
		$('#' + id).addClass('nuButton')
	}
	
	if(w.objects[i].value != '' && window.nuFORM.getCurrent().record_id == '-1'){             //== check for Cannot be left blank
		$('#' + id).addClass('nuEdited');
	}
	
	if(input_type == 'nuDate'){
		$('#' + id).attr('onclick', 'nuPopupCalendar(this);');
	}

	if(input_type != 'file'){

		if(input_type == 'button'){
			$('#' + id).val(nuTranslate(w.objects[i].value))
		}else{
			
			if(input_type == 'datetime-local'){													//-- replace ' ' between date and time with 'T'
				w.objects[i].value = w.objects[i].value.replace(' ','T');
			}
			
			$('#' + id).val(nuFORM.addFormatting(w.objects[i].value, w.objects[i].format));
		}
	
	}
	
	nuAddJSObjectEvents(id, prop.objects[i].js);
	
	if(w.objects[i].input == 'checkbox'){
		
		document.getElementById(id).checked	= (w.objects[i].value == '1');
		
	}

	
	if(prop.objects[i].type == 'display'){
		
		$('#' + id).addClass('nuReadonly');
		$('#' + id).prop('readonly', true);
		
	}

	if(prop.objects[i].type == 'calc'){
		
		var TOT	= String(w.objects[i].formula).replaceAll("al('", "al('" + p);

		$('#' + id).addClass('nuCalculator')
		.attr('data-nu-format', w.objects[i].format)
		.attr('data-nu-calc-order', w.objects[i].calc_order)
		.prop('readonly', true).prop('tabindex', -1)
		.attr('data-nu-formula', TOT);
		
		if(p != ''){
			$('#' + id).addClass('nuSubformObject');
		}
		
	}

	if(prop.objects[i].type == 'lookup'){
		
		$('#' + id).hide();
		$('#' + id).attr('data-nu-lookup-id','');
		$('#' + id).val(w.objects[i].values[0][1]);

		var target			= id;
		id					= target + 'code';
		var inp				= document.createElement('input');
		
		inp.setAttribute('id', id);
		
		$('#' + ef).append(inp);
		
		nuAddDataTab(id, prop.objects[i].tab, p);
		
		$('#' + id).css({'top'	: Number(prop.objects[i].top),
		    			'left'	: Number(prop.objects[i].left),
			    		'width'	: Number(prop.objects[i].width),
						'height': Number(prop.objects[i].height)
		})
		.attr('data-nu-form-id', w.objects[i].form_id)
		.attr('data-nu-object-id', w.objects[i].object_id)
		.attr ("data-nu-prefix", p)
		.attr('data-nu-target', target)
		.attr('data-nu-type', 'lookup')
		.attr('data-nu-subform-sort', 1)
		.css('visibility', vis)
		.addClass('nuLookupCode')
		.attr('onchange', 'nuGetLookupCode(event)')
		.attr('onfocus', 'nuLookupFocus(event)');
		
		w.objects[i].values[0][0]	= p + prop.objects[i].id;
		w.objects[i].values[1][0]	= p + prop.objects[i].id + 'code';
		w.objects[i].values[2][0]	= p + prop.objects[i].id + 'description';
		
		id 				= target + 'button';
		var inp 		= document.createElement('div');
		
		inp.setAttribute('id', id);
		
		$('#' + ef).append(inp);
		
		nuAddDataTab(id, prop.objects[i].tab, p);
		
		$('#' + id).css({'top'      	: Number(prop.objects[i].top),
						'left'      	: Number(prop.objects[i].left) + Number(prop.objects[i].width) + 6,
						'width'		: 15,
						'height'		: Number(prop.objects[i].height -2)
		})
		.attr('type','button')
		.attr ("data-nu-prefix", p)
		.attr('data-nu-form-id', w.objects[i].form_id)
		.attr('data-nu-object-id', w.objects[i].object_id)
		.attr('data-nu-target', target)
		.attr('data-nu-subform-sort', 1)
		.attr('onfocus', 'nuLookupFocus(event)')
		.attr('onclick', 'nuBuildLookup(this,"")')
		.addClass('nuLookupButton')
		.html('<img border="0" src="graphics/magnify.png" style="height:10px;width:10px" class="nuLookupImg">')
		.css('visibility', vis);

		id = p + prop.objects[i].id + 'description';
		var inp = document.createElement('input');
		inp.setAttribute('id', id);
		
		$('#' + ef).append(inp);
		nuAddDataTab(id, prop.objects[i].tab, p);
		$('#' + id).css({'top'		: Number(prop.objects[i].top),
						'left'		: Number(prop.objects[i].left) + Number(prop.objects[i].width) + 25,
						'width'		: prop.objects[i].description_width,
						'visibility': prop.objects[i].description_width == 0 || prop.objects[i].display == 0 ? 'hidden' : 'visible',
						'height'	: Number(prop.objects[i].height)
		})
		.attr('tabindex','-1')
		.addClass('nuLookupDescription')
		.addClass('nuReadonly')
		.prop('readonly', true);
		
		nuPopulateLookup3(w.objects[i].values, p);
		
		nuSetAccess(ID, prop.objects[i].read);
		
		return Number(prop.objects[i].width) + Number(prop.objects[i].description_width) + 30;
		
	}else{
	
		if(prop.objects[i].type == 'input' && input_type == 'nuAutoNumber'){
			$('#' + id)
			.prop('readonly', true)
			.addClass('nuReadonly')
			.val(prop.objects[i].counter);
		}

		nuSetAccess(ID, prop.objects[i].read);
		
		return Number(prop.objects[i].width) + 4;
		
	}
	
}

function nuLookupFocus(e){

	var p				= $(e.target).attr('data-nu-prefix');
	var t				= $(e.target).attr('data-nu-type');
	
	window.nuSubformRow	= Number(p.substr(p.length - 3));
	
	if(t != 'textarea'){
		$(e.target).select();
	}

}


function nuCurrentRow(){
	return window.nuSubformRow;
}
	

function nuSetAccess(i, r){

	if(r == 2){

		var o	= [i, i + 'code', i + 'button', i + 'description', 'label_' + i];
		
		for(var c = 0 ; c < o.length ; c++){
			
			$('#' + o[c])
			.attr('data-nu-tab', 'x')
			.hide();
			
		}
		
	}

	if(r == 1){
		nuReadonly(i);
	}

}


function nuHTML(w, i, l, p, prop){

	var id  = p + prop.objects[i].id;
	var ef  = p + 'nuRECORD';                       //-- Edit Form Id
	var inp = document.createElement('div');
	
	inp.setAttribute('id', id);
	
	if(prop.objects[i].parent_type == 'g'){
		
		prop.objects[i].left = l;
		prop.objects[i].top = 3;
		
	}else{
		
		nuLabel(w, i, p, prop);
		
	}
	
	$('#' + ef).append(inp);
	
	nuAddDataTab(id, prop.objects[i].tab, p);
	
	$('#' + id).css({'top'     : Number(prop.objects[i].top),
					'left'     : Number(prop.objects[i].left),
					'width'    : Number(prop.objects[i].width),
					'height'   : Number(prop.objects[i].height),
					'position' : 'absolute'
	})
	.addClass('nuHtml').html(w.objects[i].html);
	
	nuSetAccess(id, prop.objects[i].read);
	
	return Number(prop.objects[i].width);

}


function nuIMAGE(w, i, l, p, prop){

	var id  = p + prop.objects[i].id;
	var ef  = p + 'nuRECORD';                       //-- Edit Form Id
	var inp = document.createElement('img');
	
	inp.setAttribute('id', id);
	
	if(prop.objects[i].parent_type == 'g'){
		
		prop.objects[i].left = l;
		prop.objects[i].top = 3;
		
	}else{
		
		nuLabel(w, i, p, prop);
		
	}
	
	$('#' + ef).append(inp);
	
	nuAddDataTab(id, prop.objects[i].tab, p);
	
	$('#' + id).css({'top'     : Number(prop.objects[i].top),
					'left'     : Number(prop.objects[i].left),
					'width'    : Number(prop.objects[i].width),
					'height'   : Number(prop.objects[i].height),
					'position' : 'absolute'
	})
	.attr('src', atob(w.objects[i].src));
	
	nuSetAccess(id, prop.objects[i].read);

	nuAddJSObjectEvents(id, prop.objects[i].js);
	
	return Number(prop.objects[i].width);

}


function nuWORD(w, i, l, p, prop){

	var id  = p + prop.objects[i].id;
	var ef  = p + 'nuRECORD';                       //-- Edit Form Id
	var inp = document.createElement('div');
	
	inp.setAttribute('id', id);
	
	$('#' + ef).append(inp);
	
	nuAddDataTab(id, prop.objects[i].tab, p);
	
	$('#' + id).css({'top'     		: Number(prop.objects[i].top),
					'left'     		: Number(prop.objects[i].left),
					'width'    		: Number(prop.objects[i].width),
					'height'   		: Number(prop.objects[i].height),
					'position' 		: 'absolute',
					'text-align'	: prop.objects[i].align
	})
	.addClass('nuWord')
	.html(nuTranslate(w.objects[i].word))
	.attr('ondblclick','nuPopup("nuobject", "' + prop.objects[i].object_id + '")');
	
	nuSetAccess(id, prop.objects[i].read);
	
	return Number(prop.objects[i].width);

}


function nuRUN(w, i, l, p, prop){

	if ( window.nubuilder_session_name != '' ) {
		var url_append = "&wpsnsc=" + window.nubuilder_session_name;
	} else {
		var url_append = "";
	}	

	var id  = p + prop.objects[i].id;
	var ef  = p + 'nuRECORD';                       //-- Edit Form Id
	var ele = 'input';
	
	if(prop.objects[i].parent_type == 'g'){
		
		prop.objects[i].left 	= l;
		prop.objects[i].top 	= 3;
		
	}
	
	if(prop.objects[i].run_method != 'b'){
		
		ele = 'iframe';

		if(!prop.objects[i].parent_type == 'g'){
			
			nuLabel(w, i, p, prop);
			
		}
		
	}

	var inp = document.createElement(ele);
	
	inp.setAttribute('id', id);
	
	$('#' + ef).append(inp);

	nuAddDataTab(id, prop.objects[i].tab, p);
	
	
	var O			= prop.objects[i];
	
	$('#' + id).css({'top'     		: Number(O.top),
					'left'     		: Number(O.left),
					'width'    		: Number(O.width),
					'height'   		: Number(O.height),
					'position' 		: 'absolute',
					'text-align'	: prop.objects[i].align
	});

	if(O.run_method == 'b'){
		
		var clicker					  	= '';
		
		if(O.run_type == 'F'){clicker 	= "nuStopClick(event);nuForm('" + O.form_id + "','" + O.record_id + "','" + O.filter + "', '')"}
		if(O.run_type == 'R'){clicker 	= "nuRunReport('" + O.record_id + "')";}
		if(O.run_type == 'P'){
			
			if(O.run_hidden){clicker  	= "nuRunPHPHidden('" + O.record_id + "')"}
			if(!O.run_hidden){clicker 	= "nuRunPHP('" + O.record_id + "')"}
			
		}
		
		$('#' + id).attr({
					'type'		: 'button',
					'value'		: nuTranslate(O.label),
					'onclick'	: clicker
		})
		.addClass('nuButton');
		
	}else{

		var F		= O.form_id;
		var R		= O.record_id;
		var L		= O.filter;
		var PA		= O.parameters;
		var P		= window.location.pathname;
		var f		= P.substring(0,P.lastIndexOf('/') + 1)

		window.nuOPENER.push(new nuOpener(O.run_type, F, R, L, PA));

		var open 	= window.nuOPENER[window.nuOPENER.length - 1];
		//var u		= window.location.origin + f + O.src + '&opener=' + open.id;
		var u		= P + '?i=2&opener=' + open.id + url_append;

		$('#' + id).attr('src', u).removeClass('').addClass('nuIframe');

	}

	nuAddJSObjectEvents(id, O.js);

	nuSetAccess(id, prop.objects[i].read);
	
	return Number(O.width);
	
}

function nuSELECT(w, i, l, p, prop){

	var id  = p + prop.objects[i].id;
	var ef  = p + 'nuRECORD';                       //-- Edit Form Id
	
	if(prop.objects[i].parent_type == 'g'){
		
		prop.objects[i].left = l;
		prop.objects[i].top = 3;
		
	}else{
		nuLabel(w, i, p, prop);
	}
	
	var sel = document.createElement('select');
	
	sel.setAttribute('id', id);

	$('#' + ef).append(sel);

	if(w.objects[i].value != '' && window.nuFORM.getCurrent().record_id == '-1'){
		$('#' + id).addClass('nuEdited');
	}
	
	nuAddDataTab(id, prop.objects[i].tab, p);

	$('#' + id).css({'top'     : Number(prop.objects[i].top),
					'left'     : Number(prop.objects[i].left),
					'width'    : Number(prop.objects[i].width),
					'position' : 'absolute'
	})
	.attr('onfocus', 'nuLookupFocus(event)')
	.attr('onchange', 'nuChange(event)')
	.attr('data-nu-field', prop.objects[i].id)
	.attr('data-nu-object-id', w.objects[i].object_id)
	.attr('data-nu-format', '')
	.attr('data-nu-subform-sort', 1)
	.attr('data-nu-data', '')
	.attr('data-nu-label', w.objects[i].label)
	.attr('data-nu-prefix', p);

	if(prop.objects[i].multiple == 1){
	    
		$('#' + id).attr('multiple', 'multiple');
    	
	}
	
	$('#' + id).css('height', Number(prop.objects[i].height));

	var s = String(w.objects[i].value);
	var a = [];
	
	if(w.objects[i].multiple == 0){
		a = [s];
		
	}
	
	
	if(s.substr(0,1) + s.substr(-1) == '[]'){
		eval('a = ' + s);
	}
	
	$('#' + id).append('<option  value=""></option>');

	if(prop.objects[i].options != null){

		for(var n = 0 ; n < prop.objects[i].options.length ; n++){
			
			var opt	= String(prop.objects[i].options[n][1]).replaceAll(' ' ,'&#160;')

			if(a.indexOf(prop.objects[i].options[n][0]) == -1){
				$('#' + id).append('<option  value="'+prop.objects[i].options[n][0]+'">' + opt + '</option>');
			}else{
				$('#' + id).append('<option selected="selected "value="'+prop.objects[i].options[n][0]+'">' + opt + '</option>');
			}

		}

	}
	
	nuAddJSObjectEvents(id, prop.objects[i].js);

	nuSetAccess(id, prop.objects[i].read);

	if(prop.objects[i].read == 1){
		nuDisable(id);
	}
	
	
	return Number(prop.objects[i].width);
	
}

function nuSUBFORM(w, i, l, p, prop){
	
    var SF  		= prop.objects[i];						//-- First row
    var SFR 		= w.objects[i];							//-- All rows
	var id  		= p + SF.id;
	var ef  		= p + 'nuRECORD';						//-- Edit Form Id
	var inp 		= document.createElement('div');
	var fms 		= SFR.forms;

	inp.setAttribute('id', id);
	
	if(SF.parent_type == 'g'){
		
		SF.left 	= l;
		SF.top 		= 3;
		
	}else{		
		nuLabel(w, i, p, prop);	
	}

	$('#' + ef).append(inp);

	nuAddDataTab(id, prop.objects[i].tab, p);
	
	$('#' + id).css({'top'         	: Number(SF.top),
					'left'       	: Number(SF.left),
					'width'      	: Number(SF.width),
					'height'		: Number(SF.height) + 2,
					'overflow-x'	: 'hidden',
					'overflow-y'	: 'hidden'
	})
	.attr('data-nu-object-id', SF.object_id)
	.attr('data-nu-foreign-key-name', SF.foreign_key_name)
	.attr('data-nu-primary-key-name', SF.primary_key_name)
	.attr('data-nu-subform', 'true')
	.attr('data-nu-add', SF.add)
	.attr('data-nu-delete', SF.delete)
	.addClass('nuSubform');

	nuAddJSObjectEvents(id, SF.js);
	
	if(SF.forms[0] !== undefined){
		nuGetSubformRowSize(SF.forms[0].objects, SF, id);
	}

	if(SF.subform_type == 'f'){
		
		var rowHeight   	= Number(SF.dimensions.edit.height + 10);
		var rowWidth    	= Number(SF.dimensions.edit.width  + 10);
		
	}else{
		
		var rowHeight   	= Number(SF.dimensions.grid.height);
		var rowWidth    	= Number(SF.dimensions.grid.width + 55);
		
	}
	
    if(SF.delete == '1'){
		rowWidth 			= rowWidth - 3;
    }else{
        rowWidth 			= rowWidth - 25;		//-- Fike
    }

	var rowTop      = 50;
	
	if(SF.subform_type == 'f'){
		rowTop      = 33;
	}
	
	var tabId  = id + 'nuTabHolder';
	var tabDiv = document.createElement('div');
	tabDiv.setAttribute('id', tabId);
	$('#' + id).prepend(tabDiv);
	$('#' + tabId).css({'top'      : 0,
					'left'       	: 0,
					'width'      	: rowWidth,
					'height'     	: rowTop,
					'overflow-x'	: 'hidden',
					'overflow-y'	: 'hidden',
					'position'	: 'absolute',
					'padding'	: '12px 0px 0px 0px'
	})
	.addClass('nuTabHolder')
	.attr('data-nu-subform', tabId);
	
	if(SF.subform_type == 'f'){
		nuAddEditTabs(id, SF.forms[0]);
	}else{
		
		if(SFR.forms.length > 0){
				
			nuTABHELP[SFR.forms[0].tabs[0].id] 	= SFR.forms[0].tabs[0].help;
			nuFORMHELP[prop.objects[i].id] 		= SFR.forms[0].tabs[0].help;
			
		}
		
	}
	
	nuOptions(id, SF.sf_form_id, 'subform', w.global_access);
	
    var scrId		= id + 'scrollDiv';
	var scrDiv		= document.createElement('div');
	
	scrDiv.setAttribute('id', scrId);
    scrDiv.setAttribute('class', 'nuSubformScrollDiv');
	
	$('#' + id).append(scrDiv);
	$('#' + scrId).css({'top'       	: rowTop,
					'left'        	: 0,
					'width'       	: Number(rowWidth) + 1,
					'height'      	: Number(SF.height) - rowTop + 1,
					'border-width'	: 1,
					'border-style'	: 'none solid solid solid',
					'border-color'	: '#C1C1C1',
					'overflow-x'  	: 'hidden',
					'overflow-y'  	: 'scroll',
					'position'		: 'absolute'
	});

	if(rowWidth > Number(SF.width)){
		
			$('#' + id).css('overflow-x', 'scroll');
			$('#' + scrId).css('height', SF.height - rowTop - 25);
			
	}
	
	rowTop 			= 0;
	var even		= 0;

	for(var c = 0 ; c < fms.length ; c++){

		var prefix 	= id + nuPad3(c);
		var frmId  	= prefix + 'nuRECORD';
		var frmDiv 	= document.createElement('div');
		
		frmDiv.setAttribute('id', frmId);
		$('#' + scrId).append(frmDiv);
		$('#' + frmId).css({'top'       : Number(rowTop),
						'left'          : 0,
						'width'         : Number(rowWidth),
						'height'        : Number(rowHeight),
						'position'      : 'absolute'
		})
		.addClass('nuSubform' + even);

		nuBuildEditObjects(SFR.forms[c], prefix, SF, SF.forms[0]);
		
		if(SF.delete == '1'){
			SF.forms[c].deletable = '1';
		}else{
			SF.forms[c].deletable = '0';				//-- Fike
		}

		nuRecordProperties(SF.forms[c], prefix, rowWidth - 40);

		rowTop 		= Number(rowTop) + Number(rowHeight);
		even		= even == '0' ? '1' : '0'

	}
	
	if(SF.add == 1 && prefix != ''){
		nuNewRowObject(String(prefix));
	}
	
	nuSetAccess(id, prop.objects[i].read);
	
	return Number(SF.width);

}

function nuNewRowObject(p){

	var sf	= p.substr(0, p.length - 3);
	
	if($('#' + p + 'nuRECORD').length == 0){return;}
	
	var h	= document.getElementById(p + 'nuRECORD').outerHTML;
	
	window.nuSUBFORMROW[sf]	= String(h.replaceAll(p, '#nuSubformRowNumber#', true));
	
	$("[id^='" + p + "']").addClass('nuEdit')
	
}


function nuSubformLastRow(t){

	var i					= String($('#' + t.id).parent().attr('id'));
	var p					= i.substr(0, i.length - 17);
	var s					= parseInt(i.substr(11,3)) + 1;
	var n					= $('#' + p + nuPad3(s) + 'nuRECORD').length;

	return n == 0;
	
}


function nuRecordHolderObject(t){
	
	var h		= 'nuRECORD';
	var p		= $('#' + t.id).parent();
	var i		= String(p.attr('id'));
	var c		= 0;

	this.form	= i.substr(0, i.length - 3 - h.length);
	this.strNo	= i.substr(this.form.length, 3);
	this.intNo	= Number(this.strNo);
		
	while ($('#' + this.form + nuPad3(this.intNo + c) + h).length != 0){c++;}
	
	this.rows	= this.intNo + c;
	this.top	= parseInt(p.css('height')) * this.rows;
	var s		= this.form  + nuPad3(this.intNo + 1) + h;
	this.last	= $('#' + s).length == 0;
	var s		= this.form  + nuPad3(this.rows - 1);
	this.html	= window.nuSUBFORMROW[s];
	this.even	= parseInt(this.rows/2) == this.rows/2 ? '0' : '1';
	
}


function nuAddSubformRow(t, e){

	if($('#' + t.id).parent().parent().parent().attr('data-nu-add') == 0){return;}


	var sfid	= $('#' + t.id).parent().parent().parent()[0].id;
	var before	= $('#' + sfid).attr('data-nu-beforeinsertrow');
	var after	= $('#' + sfid).attr('data-nu-afterinsertrow');
	
	var nuCancel = false;
	
	eval(before);
	
	if(nuCancel){return;}
	
	if(e !== false){e.stopPropagation();}

	var o = new nuRecordHolderObject(t);
	
	if(!o.last){return;}
	
	var h	= window.nuSUBFORMROW[o.form].replaceAll('#nuSubformRowNumber#', o.form + nuPad3(o.rows), true);
	
	$('#' + o.form + 'scrollDiv').append(h);
	
	$('#' + o.form + nuPad3(o.rows) + 'nuRECORD').addClass('nuSubform'+ o.even);
	$('#' + o.form + nuPad3(o.rows) + 'nuRECORD').css('top', o.top);
	$('#' + o.form + nuPad3(o.rows)).attr('data-nu-primary-key', '-1');
	$('#' + o.form + nuPad3(o.rows) + 'nuDelete').prop('checked', true);
	$('#' + o.form + nuPad3(o.rows-1) + 'nuDelete').prop('checked', false);
	
	$("[id^='" + o.form + nuPad3(o.rows) + "']").addClass('nuEdited')
	
	$('.nuTabSelected').click();

	$('#' + o.form + nuPad3(o.rows) + 'nuRECORD > .nuLookupButton')
	.on( "click", function() {
	  nuBuildLookup(this,"");
	})
	
	eval(after);
	
}







function nuPad4(i){
	
	return String('000' + Number(i)).substr(-4);

}


function nuPad3(i){
	
	return String('00' + Number(i)).substr(-3);

}


function nuPad2(i){
	
	return String('0' + Number(i)).substr(-2);

}


function nuLabel(w, i, p, prop){
	

	if(prop.objects[i].label == '' || prop.objects[i].display == 0){return;}
	
	var id     = 'label_' + p + prop.objects[i].id;
	var ef     = p + 'nuRECORD';                       //-- Edit Form Id
	
	if(prop.objects[i].input == 'file'){
		var lab    = document.createElement('div');
	}else{
		var lab    = document.createElement('label');
	}
	
	var lab    = document.createElement('label');
	var lwidth = nuGetWordWidth(nuTranslate(prop.objects[i].label));
	
	lab.setAttribute('id', id);
	lab.setAttribute('for',  p + prop.objects[i].id);
	
	$('#' + ef).append(lab);

	nuAddDataTab(id, prop.objects[i].tab, p);
	
	var l = String(nuTranslate(prop.objects[i].label));
	
	$('#' + id).css({'top'		: Number(prop.objects[i].top),
		              'left'	: Number(prop.objects[i].left) - lwidth + -17,
		              'width'	: Number(lwidth + 10)
	})
	.html(l)
	.attr('ondblclick','nuPopup("nuobject", "' + prop.objects[i].object_id + '")');

	if(prop.objects[i].valid == 1){$('#' + id).addClass('nuBlank');}
	if(prop.objects[i].valid == 2){$('#' + id).addClass('nuDuplicate');}
	
}

function nuPopulateLookup3(v, p){
	
		for(var i = 0 ; i < v.length ; i++){

			var fieldname	= String(v[i][0]).replace('#ROW#', p);
			
			$('#' + fieldname).val(v[i][1]);
		}
		
}

function nuAddHolder(t){

	var d 	= document.createElement('div');
	
	d.setAttribute('id', t);
	
	$('body').append(d);
	$('#' + t).addClass(t).html('&nbsp;&nbsp;&nbsp;');
	
}

function nuGetWordWidth(w){
	
	var h = "<div id='nuTestWidth' style='position:absolute;visible:hidden;width:auto'>" + w + "</div>";
	$('body').append(h);
	var l = parseInt($('#nuTestWidth').css('width'));
	$('#nuTestWidth').remove();
	
	return l + 5;
	
}	

function nuGetSubformRowSize(o, SF, id){

    var l = -3;
    var w = 0;

    for(var i = 0 ; i < o.length ; i++){

        var d = Number(o[i].description_width);
        var T = SF.subform_type 		== 'g'      ? 0     : Number(o[i].top);
        var B = o[i].type          		== 'lookup' ? 26    : 0;                    //-- lookup button
        var D = o[i].type          		== 'lookup' ? d     : 0;                    //-- lookup description
        
		if(o[i].type == 'select'){
			w = Number(o[i].width) + B + D - 4;
		}else{
			w = Number(o[i].width) + B + D;
		}
        
        
        if(SF.subform_type == 'g'){                                             //-- grid
            
            nuBuildSubformTitle(o[i], l, w, id, i);
            l = l + w + 6;
            
        }
        
    }

}

function nuBuildSubformTitle(o, l, w, id, col){
    
	var titleId = 'title_' + id + o.id;
	var div 	= document.createElement('div');
	var label	= nuTranslate(o.label);

	if(o.read == 2){
		label	= '';
	}
	
	div.setAttribute('id', titleId);

	$('#' + id).append(div);
	
	$('#' + titleId).css({'top'     	: 0,
					'left'          	: Number(l) + 9,
					'width'         	: Number(w),
					'height'        	: 50,
					'text-align'    	: 'center',
					'position'      	: 'absolute'
	})
	.html(label)
	.attr('data-nu-field', o.id)
	.attr('data-nu-subform', id)
	.attr('onclick', 'nuSortSubform("' + id + '", "' + (col + 1) + '", event)')
	.attr('data-nu-order', 'asc')
	.attr('ondblclick', 'nuPopup("nuobject", "' + o.object_id + '")')
	.addClass('nuTabHolder')
	.addClass(o.input=='number'||o.input=='nuNumber'?'number':'text')
	
	if(o.valid == 1){$('#' + titleId).addClass('nuBlank');}
	if(o.valid == 2){$('#' + titleId).addClass('nuDuplicate');}

}

function nuBuildSubformDeleteTitle(l, id, subform_id){
    
	var titleId		= id + 'DeleteSF';
   	var div 		= document.createElement('div');
	
   	div.setAttribute('id', titleId);
	
   	$('#' + id).append(div);
    	
	$('#' + titleId).css({'top'     	: 0,
					'left'          	: Number(l)-12,
					'width'         	: 52,
					'height'        	: 50,
					'text-align'    	: 'center',
					'font-size'     	: 10,
					'padding'     	: 0,
					'position'      	: 'absolute'
	})
	.html('<img id="nuMoveable" src="graphics/numove.png" style="padding:8px;width:12px;height:12px;" title="Arrange Objects"><br>Delete')
	.addClass('nuTabHolder')
	.attr('onclick','nuPopup("'+subform_id+'", "-2");');

}

function nuAddBreadcrumbs(){

	var b	= window.nuFORM.breadcrumbs.length;
	
    for(var i = 0 ; i < b ; i++){
		nuAddBreadcrumb(i);
    }
    
}


function nuAddBreadcrumb(i){

	var last 	= (i + 1 == window.nuFORM.breadcrumbs.length);                 //-- last breadcrumb

	var bc 		= window.nuFORM.breadcrumbs[i];
	var bcId 	= 'nu_bc_' + i;
	var bcId 	= 'nuBreadcrumb' + i;
	var logout = '';
	
	var div		= document.createElement('div');
	div.setAttribute('id', bcId);

	$('#' + 'nuBreadcrumbHolder').append(div);
	
	if(last){
		
		$('#' + bcId)
		.addClass('nuNotBreadcrumb')
		.html(nuTranslate(bc.title));
		
		if(i == 0){
			
			//if(nuMainForm()){
			//	logout = nuTranslate('Logout');
			//}
				
			$('#' + bcId)
			.css('cursor', "pointer")
			.attr('onclick', "nuLogout()")
			.html(logout);
			
		}
		
	}else{
		
		$('#' + bcId)
		.attr('onclick', 'nuGetBreadcrumb(' + i + ')')
		.addClass('nuBreadcrumb')
		.html(nuTranslate(bc.title) + '<div id="nuarrow'+i+'" class="nuBreadcrumbArrow">&nbsp;&#x25BA;&nbsp;<div>');
		
	}
	
}


function nuMainForm(){
	
	var result = false; 	

	if(opener){
		try {
			result = nuDocumentID == opener.nuDocumentID;	
		} catch ( error ) {
			result = false;
		}
		return result;
	}
	
	return nuDocumentID == parent.nuDocumentID;

}

function nuSetTitle(t){
	
	if(nuFormType() == 'browse'){return;}

	nuFORM.setProperty('title', t);
	
	var b 	= $('.nuBreadcrumb').length;
	
	$('#nuBreadcrumb' + b).html(t);
	
}


function nuAddEditTabs(p, w){
	
	if(nuFormType() == 'edit'){
		nuSetStartingTab(p, w);
	}

    for(var i = 0 ; i < w.tabs.length ; i++){

		nuEditTab(p, w.tabs[i], i);

    }
	
	var l 		= 7;
	
//    for(var i = 0 ; i < w.browse_columns.length ; i++){
//		l 		= nuBrowseTitle(w.browse_columns, i, l);
 //   }


	for(var i = 0 ; i < w.browse_columns.length ; i++){
		l       = nuBrowseTitle(w.browse_columns, i, l);
		
		if (w.browse_columns[i].width != '0') {
			p = i;
		} 
		
	}
	
	
	
	var f 		= nuFORM.getProperty('nosearch_columns');

	for(var i = 0 ; i < f.length ; i++){
		$('#nusort_' + f[i]).addClass('nuNoSearch');
	}
	
	window.nuBrowseWidth	= l;
	
	nuDetach();

	if(w.browse_columns.length > 0){
		
		nuBrowseTable();
		//nuOptions('nuBrowseTitle' + (w.browse_columns.length - 1), w.form_id, 'browse', w.global_access);
		nuOptions('nuBrowseTitle' + p, w.form_id, 'browse', w.global_access);
	}
    
}

function nuSetStartingTab(p, w){
	
	var t 				= window.nuFORM.getProperty('tab_start');
	
	if(w.tabs.length == 0){
		nuFORMHELP[p] 	= ''
	}else{
		nuFORMHELP[p] 	= nuTABHELP[w.tabs[0].id]
	}
	
	for(var i = 0 ; i < t.length ; i++){
		
		nuFORMHELP[p] 	= nuTABHELP[w.tabs[0].id];
		
		if(t[i].prefix == p){return;}
		
	}

	t.push(new nuStartingTab(p));
	
}

function nuGetStartingTab(){

	var t = window.nuFORM.getProperty('tab_start');
	
	for(var i = 0 ; i < t.length ; i++){
		
		$('#' + t[i].prefix + 'nuTab' + t[i].tabNumber).addClass('nuTabSelected');
		$('#' + t[i].prefix + 'nuTab' + t[i].tabNumber).click();
		
	}
	
}


function nuSetTab(pthis){

	var t = window.nuFORM.getProperty('tab_start');
	
	for(var i = 0 ; i < t.length ; i++){
		
		if(t[i].prefix == $('#' + pthis.id).attr('data-nu-form-filter')){
			
			$('#' + t[i].prefix + 'nuTab' + t[i].tabNumber).addClass('nuTabSelected');
			t[i].
			$('#' + t[i].prefix + 'nuTab' + t[i].tabNumber).click();
			
		}
		
	}
	
}

function nuStartingTab(p){

		this.prefix 		= p;
		this.tabNumber 	= 0;
		
}

function nuEditTab(p, t, i){

    var tabId  = p + 'nuTab' + i;
	var div    = document.createElement('div');
	div.setAttribute('id', tabId);
	
	$('#' + p + 'nuTabHolder').append(div);
	$('#' + tabId)
	.html(nuTranslate(t.title))
	.addClass('nuTab')
	.addClass('nuDragNoSelect')
	.attr('data-nu-tab-filter', i)
	.attr('data-nu-form-filter', p)
	.attr('data-nu-tab-id', t.id)
	.attr('onclick','nuSelectTab(this)')
	
	window.nuTABHELP[t.id]	= t.help;

}

function nuOptions(p, f, t, access){

	var R			= window.nuFORM.getProperty('record_id');
	
	if(R != '-2') {

		var id  	= p + 'nuOptions';
		var img		= document.createElement('img');
		
		img.setAttribute('id', id);
		
		if(t == 'form' && nuFormType() == 'edit') {
			$('#nuTabHolder').append(img);	
		}
		
		if(t == 'subform') {
			$('#' + p + 'nuTabHolder').append(img);
		}

		
		if(t == 'browse') {
			$('#' + p).append(img);	
		}

		$('#' + id)
		.attr('src', 'graphics/nuoptions.png')
		.attr('title', 'Options')
		.attr('onclick', 'nuGetOptionsList("' + f + '", this, "' + p + '", "' + access + '", "' + t + '")')
		.css({'top'			: 5, 
		'right' 			: 5, 
		'width' 			: 15, 
		'height' 			: 15, 
		'position' 			: 'absolute', 
		'opacity'			: 0.5,
		'border-style' 		: 'none'})
		.addClass('nuIcon')
		.hover(function(){
			$( this ).attr('src', 'graphics/nuoptions_red.png');
		}, function(){
			$( this ).attr('src', 'graphics/nuoptions.png');
		});
		
		if(t == 'form'){
			
			$('#' + id)
			.css('top', 66)
			.css('right', 10);
			
		} else {
			
			$('#' + id)
			.css('top', 5)
			.css('right', 5);
			
		}
		
	}
   
}


function nuAllowChanges(f){
	return nuSERVERRESPONSE.form_access == 0 || String(f).substr(0,2) != 'nu' || f == 'nuuserhome';
}



function nuGetOptionsList(f, t, p, a, type){

	var u		= nuFORM.getProperty('user_id');
	var list	= [];
	var ul		= '<ul>';
	
	if(nuFormType() == 'browse'){

		list.push([nuTranslate('Searchable Columns'), 	'nuGetSearchList()', 						'graphics/nu_option_searchable.png', 	'Ctrl+Shft+C']);

		if(a == 1 || f == 'nuuserhome'){
			
			if(nuAllowChanges(f)){
			
				list.push([nuTranslate('Form Properties'), 		'nuPopup("nuform", "' + f + '")', 		'graphics/nu_option_properties.png',	'Ctrl+Shft+F']);
				list.push([nuTranslate('Form Object List'), 		'nuPopup("nuobject", "", "' + f + '")', 'graphics/nu_option_objects.png',		'Ctrl+Shft+O']);
				
			}
			
			list.push([nuTranslate('nuDebug Results'), 		'nuPopup("nudebug", "")', 					'graphics/nu_option_debug.png',			'Ctrl+Shft+D']);
			
		}
		
		list.push([nuTranslate('Refresh'), 					'nuGetBreadcrumb()', 						'graphics/nu_option_refresh.png', 		'Ctrl+Shft+R']);
		list.push([nuTranslate('Search'),					'nuSearchAction();', 						'graphics/nu_option_button.png',		'Ctrl+Shft+S']);

		if(nuSERVERRESPONSE.buttons.Add == '1'){list.push([nuTranslate('Add'),							'nuAddAction();', 						'graphics/nu_option_button.png',		'Ctrl+Shft+A']);}
		if(nuSERVERRESPONSE.buttons.Print == '1'){list.push([nuTranslate('Print'),						'nuPrintAction();',						'graphics/nu_option_button.png',		'Ctrl+Shft+P']);}
			
	}

	
	if(nuFormType() == 'edit'){

		if(a == 1){
			
			if(nuAllowChanges(f)){
			
				list.push([nuTranslate('Arrange Objects'), 		'nuPopup("' + f + '", "-2")', 			'graphics/nu_option_arrange.png', 		'Ctrl+Shft+A']);
				list.push([nuTranslate('Form Properties'), 		'nuPopup("nuform", "' + f + '")', 		'graphics/nu_option_properties.png',	'Ctrl+Shft+F']);
				list.push([nuTranslate('Form Object List'), 	'nuPopup("nuobject", "", "' + f + '")', 'graphics/nu_option_objects.png',		'Ctrl+Shft+O']);
				
			}
			
			if(type != 'subform'){
				list.push([nuTranslate('nuDebug Results'), 		'nuPopup("nudebug", "")', 					'graphics/nu_option_debug.png',		'Ctrl+Shft+D']);
			}
			
		}

		if(type != 'subform'){
			
			list.push([nuTranslate('Refresh'), 					'nuGetBreadcrumb()', 						'graphics/nu_option_refresh.png', 	'Ctrl+Shft+R']);
			
			if(nuFORM.getCurrent().form_type != 'launch'){
				
				if(nuSERVERRESPONSE.buttons.Save == '1'){list.push([nuTranslate('Save'),					'nuSaveAction();', 							'graphics/nu_option_button.png',		'Ctrl+Shft+S']);}
				if(nuSERVERRESPONSE.buttons.Delete == '1'){list.push([nuTranslate('Delete'),				'nuDeleteAction();', 						'graphics/nu_option_button.png',		'Ctrl+Shft+Y']);}
				if(nuSERVERRESPONSE.buttons.Clone == '1'){list.push([nuTranslate('Clone'),					'nuCloneAction();', 						'graphics/nu_option_button.png',		'Ctrl+Shft+C']);}
				
			}
			
		}
		
		if(nuFORMHELP[p] != ''){
			list.push([nuTranslate('Help'), nuFORMHELP[p], 'graphics/nu_option_help.png', 'Ctrl+Shft+?']);
		}

	}

	if(list.length == 0){return;}
	
	var id  		= 'nuOptionsListBox';
	var div    		= document.createElement('div');
	
	div.setAttribute('id', id);

	$('body').append(div);

	$('#' + id)
	.css({'top' 	: 0,
	'right' 		: 0, 
	'height'		: 20 + (list.length * 20),
	'width'			: 300,
	'position'		: 'absolute',
	'text-align' 	: 'left'})
	.html('<span style="font-weight:bold">&nbsp;&nbsp;Options<\span>')
	.addClass('nuOptionsList');

	nuBuildOptionsList(list, p, type);
	$('[data-nu-option-title]').css('padding', 3);
	
}


function nuBuildOptionsList(l, p, type){												//-- loop through adding options to menu

	var icon		= $('#' + p + 'nuOptions');
	var off			= icon.offset();
	var top			= off.top;
	var left		= off.left < 240 ? 240 : off.left;
	var ul			= '';
	var	iprop		= {'position': 'absolute','text-align' : 'left' , 'width' : 15, 'height' : 15};
	var width		= 0;
	var height		= 30 + (l.length * 30);
	
	for(var i = 0 ; i < l.length ; i++){
		var width	= Math.max((nuGetWordWidth(l[i][0]) + nuGetWordWidth(l[i][3])), width);
	}

	for(var i = 0 ; i < l.length ; i++){
		
		var t			= l[i][0];
		var f			= l[i][1];
		var c			= l[i][2];
		var k			= l[i][3];
		var itemtop 	= 30 + (i * 20);
		
		var icon 	= document.createElement('img');
		var icon_id 		= 'nuOptionList' + i.toString();
				
		icon.setAttribute('id', icon_id);
		
		$('#nuOptionsListBox').append(icon);

		$('#' + icon.id)
		.css(iprop)
		.css({'top'	: itemtop, 'left' : 5})
//		.attr('onclick', f)
		.attr('src', c);

		var desc = document.createElement('div');
		var desc_id 		= 'nuOptionText' + i.toString();
		
		desc.setAttribute('id', desc_id);

		$('#nuOptionsListBox').append(desc);
		var	prop		= {'position' : 'absolute', 'text-align' : 'left', 'height' : 15};

		$('#' + desc.id)
		.css(prop)
		.css({'top'	: itemtop,'left' : 30})
		.html(t)
		.attr('onclick', f)
		.attr('data-nu-option-title', t)
		.addClass('nuOptionsItem');
		
		var shortcut_key 			= document.createElement('div');
		var shortcut_key_id 		= 'nuOptionTextShortcutKey' + i.toString();
		
		shortcut_key.setAttribute('id', shortcut_key_id);
		
		if(p == ''){
			$('#nuOptionsListBox').append(shortcut_key);
		}
		
		var	prop			= {'position' : 'absolute', 'text-align' : 'left', 'height' : 15, 'width' : 50};

		$('#' + shortcut_key.id)
		.css(prop)
		.css({'top'	: itemtop +3, 'right' : 10})
		.html(k)
		.attr('onclick', f)
		.addClass('nuOptionsItemShortcutKey');
		
	}


	var icon	= $('#' + p + 'nuOptions');
	var off		= icon.offset();
	var top		= off.top;
	var left	= off.left;
	var reduce	= 0;
	
	if(type == 'browse'){
			
		top		= off.top;
//		left	= off.left - width - 26;
		left	= off.left < 240 ? off.left : off.left - width - 26;
		
	}

	if(type == 'form'){
			
		top		= off.top - 6;
		left	= off.left - width - 23;
		
	}

	if(type == 'subform'){
			
		top		= off.top - 3;
		left	= off.left - width - 23;
		reduce	= 55;
		
	}
	
	$('#nuOptionsListBox').css({
			'height'	: 40 + (l.length * 20),
			'width' 	: 40 + width - reduce,
			'left' 		: left + reduce,
			'top'		: top
	});

	$('.nuOptionsItem').css({'width' : width - 73, 'padding' : '0px 0px 0px 3px'});

}


function nuSelectTab(tab){

    var filt = $('#' + tab.id).attr('data-nu-tab-filter');
    var form = $('#' + tab.id).attr('data-nu-form-filter');
    var tabId = $('#' + tab.id).attr('data-nu-tab-id');
	
	window.nuFORMHELP[form]	= window.nuTABHELP[tabId]
	
	var t 	= nuFORM.getProperty('tab_start');

	for(var i = 0 ; i < t.length ; i++){
		
		if(t[i].prefix == form){
			
			t[i].tabNumber	= filt;
		}
		
	}

	// Treating nuIframes and nuHtml differently as anything that needs to calculate size can't be display: none when the page loads 
	$("[data-nu-form='" + form + "']:not('.nuIframe, .nuHtml')").hide();	
	$(".nuIframe[data-nu-form='" + form + "']").css('visibility','hidden');
	$(".nuHtml[data-nu-form='" + form + "']").css('visibility','hidden');
	$("[data-nu-form-filter='" + form + "']").removeClass('nuTabSelected');	

	$("[data-nu-form='" + form + "'][data-nu-tab='"  + filt + "']:not([data-nu-lookup-id]):not('.nuIframe, .nuHtml')").show();
	$(".nuIframe[data-nu-form='" + form + "'][data-nu-tab='"  + filt + "']").css('visibility','visible');
	$(".nuHtml[data-nu-form='" + form + "'][data-nu-tab='"  + filt + "']").css('visibility','visible');
	$('#' + tab.id).addClass('nuTabSelected');

}


function nuAddDataTab(i, t, p){

    var P = String(p);
    var f = P.substr(0, P.length - 3);
    $('#' + i).attr('data-nu-tab', t).attr('data-nu-form', f);

}


function nuBrowseTitle(b, i, l){

	var bc		= window.nuFORM.getCurrent();
	var un		= bc.nosearch_columns.indexOf(i);
	var id  	= 'nuBrowseTitle' + i;
	var w 		= Number(b[i].width);
	var div 	= document.createElement('div');
	
	div.setAttribute('id', id);
	
	var cb	= '';
	
	if(bc.sort == i){
		
		if(bc.sort_direction == 'asc'){
			cb	= cb + '<span id="sort_direction">&#x25BC;</span>';
		}else{
			cb	= cb + '<span id="sort_direction">&#x25B2;</span>';
		}
		
	}
		
	var br	= '<br>';
	var sp	= '<span style="font-size:16px" id="nusort_' + i + '" class="nuSort" onclick="nuSortBrowse(' + i + ')"> ' + nuTranslate(b[i].title) + ' </span>'
	
	$('#nuRECORD').append(div);

	$('#' + id)
	.html(cb + br + sp)
	.addClass('nuBrowseTitle')
	.css({	'text-align'	: 'center',
			'overflow'		: 'visible',
			'width'			: w,
			'left'			: l
	});

	if(w == 0){
		$('#' + id).hide();
	}

	$('#nusearch_' + i).attr('checked', un == -1);
	
	return l + w;
	
}



function nuTitleDrag(i){

	var bc				= window.nuFORM.getCurrent();
	var col				= bc.browse_columns;
	var rows			= bc.rows;
	var h				= bc.row_height;
	var div				= document.createElement('div');

	div.setAttribute('id', 'nuTitleDrag' + i);
	
	$('#' + 'nuBrowseTitle' + i).append(div);


	$('#' + div.id)
	.addClass('nuDragLineV')
	.css('height', h)
	.attr('onmousedown', 'nuDragBrowseDown(event)')
	.attr('onmousemove', 'nuDragBrowseMove(event)')
	.attr('onmouseup','nuDragBrowseUp(event)');
	
}


function nuDragBrowseDown(e){
	
	var t					= parseInt($('#nuBrowseTitle0').css('top'));
	var l					= parseInt($('#nuBrowseTitle0').css('left'));
	var f					= parseInt($('#nuBrowseFooter').css('top'));

	window.nuDRAGLINEVSTART	= e.pageX;
	window.nuDRAGLINEVID	= e.target.id;

	$('#' + e.target.id).css('height', f-t);
	
}

function nuDragBrowseMove(e){
	
	if(window.nuDRAGLINEVID == '' || e.buttons != 1){return;}
	
	var l	= e.x

	$('#' + nuDRAGLINEVID).css('left', l);
	
}



function nuDragBrowseUp(e){
	
	var l	= e.offsetX;
	var h	= parseInt($('#nuBrowseTitle0').css('height'));
	
	$('#' + e.target.id).css('height', h);
	window.nuDRAGLINEVID	= '';
	
}





function nuBrowseColumnSize(e){

	var l	= $('#' + e.target.id)
	
	var bc					= window.nuFORM.getCurrent();
	var totalBrowseHeight	= bc.rows * bc.row_height;

	$('#' + e.target.id).css('height', 400);
	
}




function nuBrowseTable(){

	var bc				= window.nuFORM.getCurrent();
	var col				= bc.browse_columns;
	var row				= bc.browse_rows;
	var rows			= bc.rows;
	var h				= bc.row_height;
	var t				= 57 - h;
	var l				= 13;

	for(r = 0 ; r < rows ; r++){
	
		l				= 7;
		t				= t + h;
		
		for(c = 0 ; c < col.length ; c++){
		
			var w		= Number(col[c].width);
			var a		= nuAlign(col[c].align);
			var f		= col[c].format;
			var rw		= r;
			var column	= c;
			var id		= 'nucell_' + rw + '_' + c;
			var div		= document.createElement('div');
			
			div.setAttribute('id', id);
				
			$('#nuRECORD').append(div);

			$('#' + id)
			.attr('data-nu-row', rw)
			.attr('data-nu-column', column)
			.addClass(w == 0 ? '' : 'nuBrowseTable')
			.addClass('nuCell' + ((r/2) == parseInt(r/2) ? 'Even' : 'Odd'))
			.css({	'text-align'	: a,
					'overflow'	: 'hidden',
					'width'		: w-8,
					'top'		: t,
					'left'		: l,
					'height'	: h-7,
					'position'	: 'absolute'
			});

			if(w == 0){
				$('#' + id).hide();
			}
			
			if(w < 8){
				
				$('#' + id)
				.css('padding', 0)
				.css('border-width', 0);
				
			}

			if(r < row.length){

				$('#' + id)
				.html(nuFORM.addFormatting(row[r][c+1], col[c].format))
				.attr('data-nu-primary-key', row[r][0])
				.attr('onclick', 'nuSelectBrowse(event, this)')
				.hover(
				
					function() {
						
						$("[data-nu-row]").addClass('nuBrowseTable');
						$("[data-nu-row]").removeClass('nuSelectBrowse');
		
						var rw 				= $( this ).attr('data-nu-row');
						window.nuBROWSEROW	= -1;

						$("[data-nu-row='" + rw + "']").addClass('nuSelectBrowse');
						$("[data-nu-row='" + rw + "']").removeClass('nuBrowseTable');
						 
						
					}, function() {
						
						$("[data-nu-row]").addClass('nuBrowseTable');
						$("[data-nu-row]").removeClass('nuSelectBrowse');
		
						var rw 				= $( this ).attr('data-nu-row');
						window.nuBROWSEROW	= -1;

						$("[data-nu-row='" + rw + "']").addClass('nuBrowseTable');
						$("[data-nu-row='" + rw + "']").removeClass('nuSelectBrowse');
						
					}
				);

			}
			
			l = l + w;

		}
		
	}

	var la	= '<span id="nuLast" onclick="nuGetPage(' + (bc.page_number)     + ')" class="nuBrowsePage">&#9668;</span>';
	var ne	= '<span id="nuNext" onclick="nuGetPage(' + (bc.page_number + 2) + ')" class="nuBrowsePage">&#9658;</span>';

	var pg	= '&nbsp;Page&nbsp;';
	var cu	= '<input id="browsePage" style="text-align:center;margin:3px 0px 0px 0px;width:40px" onchange="nuGetPage(this.value)" value="' + (bc.page_number + 1) + '" class="browsePage"/>';
	var of	= '&nbsp;/&nbsp;' + (bc.pages==0?1:bc.pages) + '&nbsp;';

	var id	= 'nuBrowseFooter';
	var div = document.createElement('div');
	div.setAttribute('id', id);
		
	$('#nuRECORD').append(div);

	$('#' + id)
	.addClass('nuBrowseTitle')
	.html(la+pg+cu+of+ne)
	.css({	'text-align'	: 'center',
			'width'			: l - 7,
			'top'			: t + h,
			'left'			: 7,
			'height'		: 25,
			'position'		: 'absolute'
	});
	
	nuHighlightSearch();
}


function nuAlign(a){

	if(a == 'l'){return 'left';}
	if(a == 'r'){return 'right';}
	if(a == 'c'){return 'center';}
	
}

function nuClickSearchColumn(e){

	var c	= e.target.id.substr(12);
	$('#nuSearchList' + c).click();
	nuSetSearchColumn();
	
}

function nuSetSearchColumn(){

	var nosearch = [];

	$('.nuSearchCheckbox').each(function( index ) {
		
		if(!$(this).is(':checked')){
			
			nosearch.push(index);
			
			$('#nusort_' + index)
			.addClass('nuNoSearch')
			
		}else{
			
			$('#nusort_' + index)
			.removeClass('nuNoSearch')
		}
		
	});

	window.nuFORM.setProperty('nosearch_columns', nosearch);

}

function nuSetNoSearchColumns(a){
	
	var s	= nuFORM.getCurrent().nosearch_columns;
	a		= s.concat(a);
	
	for(var i = 0 ; i < a.length ; i++){
		$('#nusort_' + a[i]).addClass('nuNoSearch');
	}

	nuFORM.setProperty('nosearch_columns', a);
	
}


function nuSearchPressed(e){

    if(!e){e=window.event;}

    if(e.keyCode == 13 && window.nuBROWSEROW == -1){                    //-- enter key
        $('#nuSearchButton').click();
    }else if(e.keyCode == 13 && window.nuBROWSEROW != -1){              //-- enter key
	
		var i	= '#nucell_' + window.nuBROWSEROW + '_0';
		
		nuSelectBrowse('', $(i)[0]);

    }else{

		window.nuBROWSEROW = -1;
		$("[data-nu-row]").addClass('nuBrowseTable');
		$("[data-nu-row]").removeClass('nuSelectBrowse');

	}



}

function nuArrowPressed(e){

    if(!e){e=window.event;}

	var rows	= $("[data-nu-column='0'][data-nu-primary-key]").length - 1;
	
    if(e.keyCode == 38){                    //-- up
		
		if(window.nuBROWSEROW == -1){
			window.nuBROWSEROW	= rows;
		}else{
			window.nuBROWSEROW	= window.nuBROWSEROW - 1;
		}

		$("[data-nu-row]").addClass('nuBrowseTable');
		$("[data-nu-row]").removeClass('nuSelectBrowse');
		
		$("[data-nu-row='" + window.nuBROWSEROW + "']").addClass('nuSelectBrowse');
		$("[data-nu-row='" + window.nuBROWSEROW + "']").removeClass('nuBrowseTable');
		
    }

    if(e.keyCode == 40){                    //-- down
		
		if(window.nuBROWSEROW == rows){
			window.nuBROWSEROW	= -1;
		}else{
			window.nuBROWSEROW	= window.nuBROWSEROW + 1;
		}

		$("[data-nu-row]").addClass('nuBrowseTable');
		$("[data-nu-row]").removeClass('nuSelectBrowse');
		
		$("[data-nu-row='" + window.nuBROWSEROW + "']").addClass('nuSelectBrowse');
		$("[data-nu-row='" + window.nuBROWSEROW + "']").removeClass('nuBrowseTable');
		
    }
    
}

function nuSearchAction(p){

	var s	= String($('#nuSearchField').val()).replaceAll("'","&#39;", true);
	var f	= String($('#nuFilter').val()).replaceAll("'","&#39;", true);
	
	window.nuFORM.setProperty('search', s);
	window.nuFORM.setProperty('filter', f);
	
	if(arguments.length == 1){
		window.nuFORM.setProperty('page_number', 0);
	}

	nuGetBreadcrumb();
	
}


function nuAddAction(){

	var bc					= window.nuFORM.getCurrent();
	nuForm(bc.redirect_form_id, '-1');
	
}

function nuRunPHPAction(code) {
	nuRunPHP(code);
}

function nuRunReportAction(code) {
	nuRunReport(code);
}

function nuEmailReportAction(code) {
	nuEmailReport(code);
}

function nuSortBrowse(c){

	var l					= window.nuFORM.getCurrent();
	l.filter				= $('#nuFilter').val();
	l.page_number			= 0;
	
	if(c == l.sort){
		l.sort_direction	= l.sort_direction == 'asc' ? 'desc' : 'asc';
	}else{
		
		l.sort				= c;
		l.sort_direction	= 'asc';
		
	}
	
	nuSearchAction();
	
}


function nuGetPage(p){

	var P = parseInt('00' + p);
	var B = window.nuFORM.getCurrent();
	
	if(P == 0){
		P = 1;
	}
	
	if(P > B.pages){
		P = B.pages;
	}
	
	B.page_number = P - 1;
	
	nuSearchAction();
	
}

/*

function nuSelectBrowse(e, t){
	
	if(window.nuBROWSECLICKED){return;}
	
	window.nuBROWSECLICKED	= true;
	var y 					= window.nuBrowseFunction;					//-- browse, lookup or custom function name
	var i 					= window.nuTARGET;
	var p					= $('#' + t.id).attr('data-nu-primary-key');
	var f					= window.nuFORM.getProperty('form_id');
	var r					= window.nuFORM.getProperty('redirect_form_id');

	if(y == 'browse'){
		
		if(r == ''){
			nuForm(f, p);
		}else{
			nuForm(r, p);
		}
		
	}else if(y == 'lookup'){
		
		window.parent.nuGetLookupId(p, i);			//-- called from parent window
		
	}else{

		window[y](e);
		
	}
	
}

*/

function nuPopulateLookup(fm, target){
	
	var p 		= String($('#' + target).attr('data-nu-prefix'));
	var f		= fm.lookup_values;
	
	window.nuSubformRow	= Number(p.substr(p.length - 3));
	
	for(var i = 0 ; i < f.length ; i++){
		
		var	id	= String(f[i][0]);

		if(id.substr(0, p.length) != p){
			id	= p + id;
		}
		
		$('#' + id).addClass('nuEdited');
		
		if($('#' + id).attr('type') == 'checkbox'){
			
			if(f[i][1] == '1'){
				$('#' + id).prop('checked', true); 
			}else{
				$('#' + id).prop('checked', false);
			}
			
		}else{
			
			$('#' + id).val(f[i][1]);

			if($('#' + id).attr('data-nu-format') !== undefined){
				
				nuReformat($('#' + id)[0]);
				$('#' + id).addClass('nuEdited')
				$('#' + p + 'nuDelete').prop('checked', false);
				
			}
			
		}
		
		if(i == 1){$('#' + id).focus();}
		
	}
	
	nuCalculateForm();

	eval(fm.lookup_javascript);
	
	$('#dialogClose').click();

}


function nuChooseOneLookupRecord(e, fm){
	
	var o						= new nuLookupObject(e.target.id);
	var i						= o.id_id;
	var t						= document.getElementById(e.target.id);
	var like					= nuEncode(fm.lookup_like);

	if(fm.lookup_values.length	== 0){
		nuGetLookupId('', i);
	}
	
	if(fm.lookup_values.length	== 1){
		
		if(e.target.value.toUpperCase() == fm.lookup_values[0][1].toUpperCase()){
			nuGetLookupId(fm.lookup_values[0][0], i);
		}else{
			nuBuildLookup(t, e.target.value);
		}	
		
	}
	
	if(fm.lookup_values.length	 > 1){
		nuBuildLookup(t, e.target.value, like);
	}

}


function nuLookupObject(id, set, value){

	if($('#' + id).length == 0){
		
		this.id_id				= '';
		this.code_id			= '';
		this.description_id		= '';
		this.id_value			= '';
		this.code_value			= '';
		this.description_value	= '';

		return;
		
	}
	
	var i						= nuValidLookupId(id, 'code');
	i							= nuValidLookupId(i, 'description');
	this.id_id					= i;
	this.code_id				= i + 'code';
	this.description_id			= i + 'description';
	this.id_value				= $('#'  + this.id_id).val();
	this.code_value				= $('#'  + this.code_id).val();
	this.description_value		= $('#'  + this.description_id).val();

	if(arguments.length == 3 && set == 'id'){
		$('#' + this.id).val(value);
	}
	if(arguments.length == 3 && set == 'code'){
		$('#' + this.code).val(value);
	}
	if(arguments.length == 3 && set == 'description'){
		$('#' + this.description).val(value);
	}
	
}

function nuValidLookupId(id, fld){
	
	var i	= String(id);
	var f	= String(fld);
	var il	= i.length;
	var fl	= f.length;

	if(i.substr(il-fl) === f){
		
		i			= i.substr(0, il - fl);

		if($('#' + i + f).length == 1 && $('#' + i + f + f).length == 1){
			
			i 	= i + f;
			
		}
		
	}
	
	return i;
	
}

function nuHighlightSearch(){

	var bc		= window.nuFORM.getCurrent();
	var exclude	= bc.nosearch_columns;

	var search	= String(bc.search)
	.split(' ')
	.filter(function(a) {return (a != '' && a.substr(0,1) != '-')})
	.sort(function(a,b) {return (a.length > b.length)});
	
	$('.nuBrowseTable').each(function(index){
		
//		var col	= Number(String($(this).attr('id')).substr(11));
		var col	= Number(String($(this).attr('data-nu-column')));
		
		if(exclude.indexOf(col) == -1){
			
			var h	= String($(this).html());
			
			for(var i = 0 ; i < search.length ; i++){
				h	= h.replaceAll(search[i],'`````' + search[i] + '````', true);
			}

			h 		= h.replaceAll('`````', '<span class="nuBrowseSearch" onclick="this.offsetParent.onclick()">', true);
			h 		= h.replaceAll('````', '</span>', true);
			
			$(this).html(h);
			
		}
		
	});
	
}



function nuChange(e){

	if(e.target.id.substr(-8) == 'nuDelete'){

		var sfid	= $(e.target).parent().parent().parent()[0].id;
		var click	= $('#' + sfid).attr('data-nu-clickdelete');

		eval(click);
	
		nuHasBeenEdited();
		nuCalculateForm();
		
		return;
		
	}
	
	window.nuSAVED		= false;
		
	var t	= $('#' + e.target.id)[0];
	var p	= $('#' + t.id).attr('data-nu-prefix');
	
	nuReformat(t);
	
	$('#' + p + 'nuDelete').prop('checked', false);
	$('#' + t.id).addClass('nuEdited');
	nuHasBeenEdited();
	
	$('#nuCalendar').remove();
	$('#' + t.id).removeClass('nuValidate');
	nuCalculateForm();

	if(p == ''){return;}
	
	nuAddSubformRow(t, e);
	
}


function nuChooseEventList(){

    if($('#sob_all_type').val() == 'subform'){
        
        return ['beforeinsertrow','afterinsertrow','clickdelete'];
    
    }else{
        
        return ['onblur','onclick','onchange','onfocus','onkeydown'];
    
    }

}


function nuChangeFile(e){

	if(e.target.id.substr(-8) == 'nuDelete'){
		
		nuHasBeenEdited();
		return;
		
	}

	var theFile			= e.target.id;
	var theTextarea		= theFile.substr(0, theFile.length - 5);
	
    if($('#' + theFile).val()==''){return;}
    
	var a		= $('#' + theFile)[0].files[0];
	var r		= new FileReader();

	r.onload 	= function(e) {
	    
		var f	= btoa(r.result);
		var o	= {'file' : f, 'name' : a.name, 'size' : a.size, 'type' : a.type};
		var j	= JSON.stringify(o);
		
		if(j.length > 600000){
			
			alert('File is too large, cannot be saved. Must be under 300Kb');
			return;
			
		}
		
    	$('#' + theTextarea).val(j).addClass('nuEdited');

	}

	r.readAsDataURL(a);
	
	var t	= $('#' + theFile)[0];
	var p	= $('#' + theTextarea).attr('data-nu-prefix');
	
	$('#' + p + 'nuDelete').prop('checked', false);
	$('#' + theTextarea).addClass('nuEdited');

	nuHasBeenEdited();
	
	if(p == ''){return;}

	nuAddSubformRow(t, e);
	
}


function nuCalculateForm(setAsEdited){	//-- calculate subform 'calcs' first
	
    var subformFirst 	= function(a, b){

		var A			= $('#' + a.id).hasClass('nuSubformObject') ? 0 : 1000;
		var B			= $('#' + b.id).hasClass('nuSubformObject') ? 0 : 1000;
		var a			= parseInt($('#' + a.id).attr('data-nu-calc-order'));
		var b			= parseInt($('#' + b.id).attr('data-nu-calc-order'));
		
		if(arguments.length == 0){
			$('#' + a.id).addClass('nuEdited');
		}
		
		return (a + A) - (b + B);
	
    }

	var f	= $("[data-nu-formula]");
	
    f.sort(subformFirst);
	
	f.each(function( index ) {		//-- start with calculations inside a subform
	
		$(this).addClass('nuEdited');
		
		var formula 	= $(this).attr('data-nu-formula');
		var fmt			= $(this).attr('data-nu-format');
		var v			= 0;
		
		if(formula != ''){
			eval('var v = ' + formula);
		}
		
		var fixed		= nuFORM.addFormatting(v, fmt);

		$(this).val(fixed);
		
	});	
	
}


function nuHasBeenEdited(){
	
	$('#nuSaveButton').addClass('nuSaveButtonEdited');
	nuFORM.edited	= true;
	
}

function nuHasNotBeenEdited(){
	
	$('#nuSaveButton').removeClass('nuSaveButtonEdited');
	nuFORM.edited	= false;
	window.nuSAVED	= true;
	
}

function nuDeleteAction(){
	
    if (confirm("Delete This Record?")) {

		$('#nuDelete').prop('checked', true);
		
		nuUpdateData('delete');
		
    }
	
}


function nuDeleteAllAction(){
	
    if (confirm("Delete This Record?")) {

		$('#nuDelete').prop('checked', true);
		
		nuUpdateData('delete', 'all');
		
    }
	
}


function nuCloneAction(){
	
	window.nuTimesSaved	= 0;

	$('[data-nu-primary-key]').each(function(index){
		
			$(this).attr('data-nu-primary-key','-1');
			
	});
	
	$('[data-nu-field]').each(function(index){
		
		$(this).addClass('nuEdited');
			
	});
	
	window.nuFORM.setProperty('record_id', -1);

	$('#nuCloneButton').css('visibility','hidden');
	$('#nuDeleteButton').css('visibility','hidden');
	
	$('#nuSaveButton')
	.css('background-color', 'red')
	.css('visibility','visible');
	
	nuCLONE	= true;
	nuSetProperty('CLONED_RECORD', 1);
	nuEmptyNoClone();
	
	if(window.nuOnClone){
		nuOnClone();
	}
	
}


function nuEmptyNoClone(){
	
	var c		= nuSERVERRESPONSE.noclone;
	
	for(var i = 0 ; i < c.length ; i++){
		
		if(c[i].subform){
			
			$('#' + c[i].id + 'scrollDiv' + ' > .nuSubform1').remove();
			$('#' + c[i].id + 'scrollDiv' + ' > .nuSubform0').each(function( index ) {
				
				if($(this)[0].id != c[i].id + '000nuRECORD'){
					$(this).remove();
				}
				
			});
		
			var k	= $('#' + c[i].id + '000nuRECORD').children();
			
			for(var s = 0 ; s < k.length ; s ++){
				
				if($('#' + k[s].id).hasClass('nuEdited')){
					
					$('#' + k[s].id).val('');

					if($('#' + k[s].id + 'button').length == 1){
						
						$('#' + k[s].id + 'code').val('');
						$('#' + k[s].id + 'description').val('');
						
					}
					
					
				}
				
			}

			$('#' + c[i].id + '000nuDelete').prop('checked', true);
			$('#' + c[i].id + '001nuRECORD').remove();
			
		}else{
			
			if($('#' + c[i].id).length == 1){
				$('#' + c[i].id).val('').change();
			}
			
		}
		
	}
	
}



function nuIsClone(){
	return nuCLONE;
}


function nuIsNewRecord(){
	return nuFORM.getCurrent().record_id == -1 && !nuCLONE;
}



function nuSaveAction(){
	
	if(nuNoDuplicates()){
		nuUpdateData('save');
	}

}

function nuSavingProgressMessage(){
	
    var e = document.createElement('div');

    e.setAttribute('id', 'nuProgressSaved');

    $('#nuActionHolder').append(e);
    $('#' + e.id).html('<img src=\'graphics/ajax-loader.gif\'/>');
    $('#' + e.id).addClass('nuSaveMessageProgress');
	$('#' + e.id).css('position','absolute');
	$('#' + e.id).css('left',(($('#nuActionHolder').width() / 2) - ($('#nuProgressSaved').width() / 2))+ 'px');
    $('#' + e.id).show();
	
	$('.nuActionButton').hide();
	
}  

function nuSavingMessage(){

    $("#nuProgressSaved").hide();
	
    var e = document.createElement('div');
	
    e.setAttribute('id', 'nuNowSaved');
	
    $('#nuActionHolder').append(e);
    $('#' + e.id).html('Record Saved');
    $('#' + e.id).addClass( 'nuSaveMessage');
	$('#' + e.id).css('position','absolute');
	$('#' + e.id).css('left',(($('#nuActionHolder').width() / 2) - ($('#nuNowSaved').width() / 2))+ 'px');
    $("#nuNowSaved").fadeToggle(3000);
	
	$('.nuActionButton').show();
	
} 

function nuAbortSave(){
	
    $("#nuProgressSaved").hide();
    $('.nuActionButton').show();
	
}


function nuAddJavascript(o){

	var nuLoadEdit		= null;
	var nuLoadBrowse	= null;
	
	var s				= document.createElement('script');
	s.innerHTML 		= "\n\n" + o.javascript + "\n\n";
	
	$('body').append(s);
/*
	if(nuFormType() == 'browse'){
		if(nuLoadBrowse != null){nuLoadBrowse();}
	}else{
		if(nuLoadEdit != null){nuLoadEdit();}
	}
*/	
}

function nuHashFromEditForm(){

	var A				= {};
	var S				= nuSubformObject('');
	var B				= nuFORM.getCurrent();
	
	if(S.rows.length == 0 ){return A;}

	for (var key in B) {
		A[key]	= B[key];
	}

	for(var i = 0 ; i < S.fields.length ; i++){
		A[S.fields[i]]	= S.rows[0][i];
	}
	
	return A;

}



function nuDetach(){

	$('.nuDragLineV').each(function( index ) {

		var j	= $(this);
		var o	= j.offset();
		var t	= j.css('top', o.top);
		var l	= j.css('left', o.left);
		
		j.appendTo('body')

	});	
		
}

function nuSearchableList(){

	var bc				= window.nuFORM.getCurrent();
	var col				= bc.browse_columns;
	var no				= bc.nosearch_columns;
	var div				= document.createElement('div');
	
	div.setAttribute('id', 'nuSearchableDialog');

	$('body').append(div);

	$('#nuSearchableDialog')
	.addClass('nuSearchableDialog')
	.css('width', 150)
	.css('height', 30 + (col.length * 20))
	.css('top', 10)
	.css('left', 10);

	for(var i = 0 ; i < col.length ; i++){
		
		var input				= document.createElement('input');
		var search				= bc.nosearch_columns.indexOf(i) == -1 ? false : true;
		
		input.setAttribute('id', 'nuSearchableCheckbox' + i);
		
		$('#nuSearchableDialog').append(input);
		
		$('#' + 'nuSearchableCheckbox' + i)
		.append(input)
		.addClass('nuSearchableDialog')
		.css('left', 5)
		.css('height', 25)
		.css('top', 10 + (i * 27))
		.checked				= search;

		if(search){
			$('#' + 'nuSearchableCheckbox' + i)
			.addClass('nuNoSearch')
		}


		
		var span				= document.createElement('span');

		span.setAttribute('id', 'nuSearchableTitle' + i);
		
		$('#nuSearchableDialog').append(input);

		$('#' + 'nuSearchableTitle' + i)
		.append(span)
		.addClass('nuSearchableDialog')
		.css('width', 25)
		.css('left', 25)
		.css('height', 25)
		.css('top', 10 + (i * 20))
		.html(col[i].title);

	}

}

function nuWidestTitle(c){
	
	var w		= 120;

	for(var i = 0 ; i < c.length ; i++){
		
		var t 	= String(c[i].title).replaceAll('<br>', ' ').replaceAll('<p>', ' ');;
		w		= Math.max(nuGetWordWidth(t), w);
		
	}
	
	return w + 70;
	
}


function nuGetSearchList(){
	
	var n		= nuFORM.getProperty('nosearch_columns');
	var c		= nuFORM.getProperty('browse_columns');
	var d 		= document.createElement('div');

	$('#nuOptionsListBox').remove();

	var widest	= nuWidestTitle(c) + 20;
	
	d.setAttribute('id', 'nuSearchList');
	
	$('body').append(d);

	$('#' + d.id).css({
		'width'				: widest + 20,
		'height'			: 10 + (c.length * 30),
		'top'				: 138,
		'left'				: (window.nuBrowseWidth - widest) / 2,
		'position'			: 'absolute',
		'text-align'    	: 'left'
	})
	.html('<span style="font-weight:bold">&nbsp;&nbsp;Include When Searching<\span>')
	.addClass('nuOptionsList');

	for(var i = 0 ; i < c.length ; i++){
		
		var isChecked	= true;
		
		if($.inArray(i,nuFORM.getCurrent().nosearch_columns) != '-1') {
			isChecked	= false;
		}
		
		var p 			= document.createElement('input');

		p.setAttribute('id', 'nuSearchList' + i);
		p.setAttribute('type', 'checkbox');

		$('#' + d.id).append(p);

		$('#' + p.id).css({
			'width'			: 20,
			'height'		: 20,
			'top'			: 30 + (i * 20),
			'left'			: 5,
			'position'		: 'absolute',
			'text-align'    : 'left'
		})
		.prop('checked', isChecked)
		.attr('onclick', 'nuSetSearchColumn();')
		.addClass('nuSearchCheckbox');
		
		var t 			= document.createElement('div');
		var nobr		= String(c[i].title).replaceAll('<br>', ' ').replaceAll('<p>', ' ');;


		t.setAttribute('id', 'nuSearchText' + i);

		$('#' + d.id).append(t);

		$('#' + t.id).css({
			'height'		: 20,
			'top'			: 33 + (i * 20),
			'left'			: 40,
			'position'		: 'absolute',
			'text-align'    : 'left'
		})
		.attr('onclick', 'nuClickSearchColumn(event);')
		.addClass('nuOptionsItem')
		.html(nobr)
		.click(function() {
			
			var cb = $('#nuSearchList' + i).attr('checked');
			
			$('#' + 'nuSearchList' + i).attr('checked', !cb);
			
			nuSetSearchColumn();
			
		});
		
		var shortcut_key 	= document.createElement('div');
		var shortcut_key_id = 'nuSearchTextShortcutKey' + i.toString();
		
		shortcut_key.setAttribute('id', shortcut_key_id);

		$('#nuSearchList').append(shortcut_key);
		
		var	prop			= {'position' : 'absolute', 'text-align' : 'left', 'height' : 15, 'width' : 50};

		$('#' + shortcut_key.id)
		.css(prop)
		.css({'top'	: 37 + (i * 20), 'right' : 10})
		.html('Ctrl+Shift+' + i)
		.addClass('nuOptionsItemShortcutKey');
	}
	
	$('.nuOptionsItem').css({'width' : widest - 90, 'padding' : '3px 0px 0px 3px'});
	$('#nuSearchList').css({'height' : 50 + (c.length * 20)});
	
}


function nuTotal(f){
	return Number(nuFORM.calc(f));
}


function nuMessage(o){
	
	window.nuHideMessage	= false;

	var par		= window.document;
	
	$('#nuMessageDiv', par).remove();

	if(o.length == 0){return;}
	
	var widest	= 5;

	for(var i = 0 ; i < o.length ; i++){
		widest	= Math.max(widest, nuGetWordWidth(o[i]));
	}

	widest		= Math.min(widest + 200, 1000);
	var l 		= 20;

	$('body', par).append("<div id='nuMessageDiv' class='nuMessage' style='overflow:hidden;width:" + widest + "px;top:100px;left:" + l + "px' ></div>")
	
	for(var i = 0 ; i < o.length ; i++){
		
		$('#nuMessageDiv', par).append(o[i]);
		$('#nuMessageDiv', par).append('<br>');
		
	}

}


function nuWindowPosition(){
	
	var d						= $('#nuDragDialog', window.parent.document);
	
	var l						= parseInt(d.css('left'));
	var t						= parseInt(d.css('top'));
	var w						= parseInt(d.css('width'));
	var h						= parseInt(d.css('height'));

	window.nuDialogSize			= {left:l, top:t, width:w, height:h};

	var d						= $('#nuWindow', window.parent.document);
	
	var w						= parseInt(d.css('width'));
	var h						= parseInt(d.css('height'));

	window.nuWindowSize			= {width:w, height:h};
	
}

function nuNoDuplicates(){
	
	window.nuDuplicate	= true;

	$('.nuTabHolder.nuDuplicate').each(function( index ) {
		
		var t	= $(this).html();
		var f	= $(this).attr('data-nu-field');
		var s	= $(this).attr('data-nu-subform');
		var sf	= nuSubformObject(s);
		var a	= [];
		var c	= sf.fields.indexOf(f);
		
		for(var i = 0 ; i < sf.rows.length ; i++){
			
			if(sf.deleted[i] == 0){
					
				var rv	= sf.rows[i][c];
				
				if(a.indexOf(rv) != -1){
					
					nuMessage(['Duplicate <b>' + t + '</b> on row <b>' + i + '</b>']);
					
					window.nuDuplicate	= false;
					
					return;
					
				}
				
				a.push(sf.rows[i][c]);
				
			}
			
		}
		
	});

	return window.nuDuplicate;
	
}

function nuFormType(){
	
	if(nuFORM.getCurrent().record_id == ''){
		return 'browse';
	}else{
		return 'edit';
	}
	
}


function nuBuildFastReport(){

	var sf				= nuSubformObject('fast_report_sf');
	var left			= 3;
	var rows			= sf.rows;
	window.nuNextID		= 0;
	window.nuREPORT		= JSON.parse(JSON.stringify(window.nuREPORTdefault));

	for(var i = 0 ; i < rows.length ; i++){
		
		if(sf.deleted[i] == '0'){
			
			var title	= rows[i][1];
			var field	= rows[i][2];
			var width	= Number(rows[i][3]);
			var sum		= rows[i][4];
			var align	= sum==0?'left':'right';

			var o		= JSON.parse(JSON.stringify(window.nuOBJECT));		//-- title
			o.left		= Number(left);
			o.width		= width;
			o.top		= 70;
			o.fieldName	= title;
			o.objectType= 'label';
			o.textAlign	= align;
			
			nuFastObject(2,0,o);

			var o		= JSON.parse(JSON.stringify(window.nuOBJECT));		//-- field
			o.left		= Number(left);
			o.width		= width;
			o.fieldName	= field;
			o.textAlign	= align;

			nuFastObject(0,0,o);

			if(align == 'right'){
					
				var o		= JSON.parse(JSON.stringify(window.nuOBJECT));		//-- sum
				o.left		= Number(left);
				o.width		= width;
				o.fieldName	= 'SUM(' + field + ')';
				o.textAlign	= align;
				
				nuFastObject(1,1,o);
				
			}

			left		= left + width + 2;
			
		}
		
	}

	nuFastReportFormat(left);
	
	$('#fieldlist').val(JSON.stringify(window.nuREPORT));
	
	nuFORM.setProperty('nuREPORT', window.nuREPORT);
	
}


function nuFastObject(g,s,o){

	o.id			= 'obj' + nuPad3(window.nuNextID);
	o.name			= o.id;
	o.left			= Number(o.left) + 2;
	
	nuREPORT.groups[g].sections[s].objects.push(o);
	
	window.nuNextID++;
	
}

function nuNewFastObject(){

	var o			= JSON.parse(JSON.stringify(window.nuOBJECT));
	o.id			= 'obj' + nuPad3(window.nuNextID);
	o.name			= o.id;
	
	window.nuNextID++;
	
	return o;
	
}
	

function nuFastReportFormat(width){

	var o			= nuNewFastObject();		//-- report title
	o.left			= 2;
	o.top			= 10;
	o.width			= 300;
	o.height		= 30;
	o.fontWeight	= 'b';
	o.fontSize		= '20';
	o.objectType	= 'label';
	nuREPORT.width 	= 297;
	nuREPORT.height	= 210;
	var pageWidth	= 290 * 4;
	var sf			= nuSubformObject('fast_report_sf');
	
	nuREPORT.orientation = 'L';
	nuREPORT.groups[3].sortField			= sf.rows[0][2];
	nuREPORT.groups[2].sections[0].height 	= 100;
	nuREPORT.groups[2].sections[0].objects.push(o);

	var o			= nuNewFastObject();		//-- underline titles
	o.left			= 2;
	o.top			= 93;
	o.width			= width;
	o.height		= 1;
	o.borderWidth	= 1;
	o.fieldName		= 'KEEP EXACT HEIGHT';
	o.objectType	= 'label';

	nuREPORT.groups[2].sections[0].objects.push(o);

	var o			= nuNewFastObject();		//-- page footer
	o.left			= 2;
	o.top			= 3;
	o.width			= pageWidth;
	o.height		= 1;
	o.borderWidth	= 1;
	o.fieldName		= 'KEEP EXACT HEIGHT';
	o.objectType	= 'label';

	nuREPORT.groups[2].sections[1].objects.push(o);
	
	var o			= nuNewFastObject();		//-- page footer date
	o.left			= 2;
	o.top			= 9;
	o.width			= 600;
	o.fieldName		= 'Printed : #day#-#month#-20#year# #hour#:#minute#:#second#';
	o.objectType	= 'label';

	nuREPORT.groups[2].sections[1].objects.push(o);
	
	var o			= nuNewFastObject();		//-- page footer page no.
	o.top			= 9;
	o.left			= pageWidth - 200;
	o.width			= 200;
	o.textAlign		= 'right';
	o.fieldName		= 'Page #page# of #pages#';
	o.objectType	= 'label';

	nuREPORT.groups[2].sections[1].objects.push(o);
	
	if(nuREPORT.groups[1].sections[1].objects.length > 0){
		
		var o			= nuNewFastObject();		//-- overline sums
		o.left			= 2;
		o.top			= 3;
		o.width			= width;
		o.height		= 1;
		o.borderWidth	= 1;
		o.fieldName		= 'KEEP EXACT HEIGHT';
		o.objectType	= 'label';

		nuREPORT.groups[1].sections[1].objects.push(o);
		
	}	
}

function nuRedefine_nuSelectBrowse(){

	nuSelectBrowse = function (e, t){

		var y 				= window.nuBrowseFunction;					//-- browse, lookup or custom function name
		var i 				= window.nuTARGET;
		var p				= $('#' + t.id).attr('data-nu-primary-key');
		var f				= window.nuFORM.getProperty('form_id');
		var r				= window.nuFORM.getProperty('redirect_form_id');
		
		if(y == 'browse'){
			
			if(r == ''){
				nuForm(f, p);
			}else{
				nuForm(r, p);
			}
			
		}else if(y == 'lookup'){
			
			window.parent.nuGetLookupId(p, i);			//-- called from parent window
			
		}else{

			window[y](e);
			
		}
		
		nuSelectBrowse = function (e, t){}					//-- so that it doesn't run twice.
		
	}
		
}


function nuSetVerticalTabs(){
	
	$('#nuTabHolder').css('display', 'inline-block');
	$('.nuTab').css('display', 'block');
	$('.nuTab').css('width', 200);
	$('#nuRecord').css('display', 'inline-block');
	$('.nuTab').css('padding', '8px 2px 0px 2px');
	$('#nuTabHolder').css('height', window.innerHeight)

	var w   = 0;

	$('.nuTab').each(function( index ) {

		$(this).html('&nbsp;&nbsp;&nbsp;' + $(this).html());
		w   = Math.max(w, nuGetWordWidth($(this).html()));

	});

	$('#nuTabHolder').html($('#nuTabHolder').html().substr(18));
	$('#nuTabHolder').css('width', w + 30);

}


function nuHasBeenSaved(){
	
	return window.nuTimesSaved;	

}


//-- object for dragging sections --//


function nuLoadReport(b){
	
	window.addEventListener("keydown", function(e) {
		
		if([38, 40].indexOf(e.keyCode) > -1) {					// space and arrow keys
			e.preventDefault();
		}
		
	}, false);

	if($('#nuDragDialog').length == 0){
		
		nuDIALOG.dialog = '';
		nuDIALOG.dialogX = 0;
		nuDIALOG.dialogY = 0;
		
	}else{
		
		nuDIALOG.dialogX = parseInt($('#nuDragDialog').css('left'));
		nuDIALOG.dialogY = parseInt($('#nuDragDialog').css('top'));
		
	}
	
	$('body').children().remove();

	window.nuDrag  = new nuCreateDrag();
	window.nuDragD = new nuCreateDialog('');
	window.nuDragR = new nuDragReport();

	if(nuDragID == 1000){
		nuDragR.setIds();
	}
	
	$('body').off('keydown');
	$('body').off('keyup');
	$('body').off('mousedown');
	$('body').off('mouseup');
	$('body').off('mousemove');
	
	$('body').on('mousedown.nudrag', function(event){nuDrag.down(event);});
	$('body').on('keydown.nudrag',   function(event){nuDrag.move(event);});
	$('body').on('keyup.nudrag',     function(event){nuDrag.up(event);});
	$('body').on('mouseup.nudrag',   function(event){nuDrag.up(event);});
	$('body').on('mousemove.nudrag', function(event){nuDrag.move(event);});
	
	$('body').on('mousedown.nureport', function(event){nuDragR.down(event);});
	$('body').on('keydown.nureport',   function(event){nuDragR.move(event);});
	$('body').on('keyup.nureport',     function(event){nuDragR.up(event);});
	$('body').on('mouseup.nureport',   function(event){nuDragR.up(event);});
	$('body').on('mousemove.nureport', function(event){nuDragR.move(event);});

	if(arguments.length == 0){
		
		var r 		= JSON.stringify(nuREPORT);
		nuBACKUP.push(JSON.parse(r));
		
	}
	
	nuDrag.createArea(150, 50, nuREPORT.width * 4, 600);
	nuDrag.isReport = true;
	nuDragR.createSectionHolder();
	nuDrag.setSelected();
	nuSetTools();	
	nuSetDialog();
	
}


function nuSetnuScroll(l){

	var flds = ['#fieldName', "[id^='sortField']"]
	
	for(var i = 0 ; i < flds.length ; i++){

		$( flds[i] )
		.addClass('nuScroll')
		.keydown(function() {
			nuFORM.scrollList(event, l);
		});	

	}

}



function nuDragReport(){

	this.groups     = [[10],[0,20],[1,19],[2,18],[3,17],[4,16],[5,15],[6,14],[7,13],[8,12],[9,11]];
	this.height     = 0;
	this.startX     = 0;
	this.startY     = 0;
	this.moveX      = 0;
	this.moveY      = 0;
	this.beingMoved = '';
	this.moveFrom   = 0;
	this.moveTo     = 0;
	this.sectionTop = 0;
	this.dragging   = false;

	
	this.getObject = function(id) {

		for(var g = 0 ; g < nuREPORT.groups.length ; g++){
			
			for(var s = 0 ; s < nuREPORT.groups[g].sections.length ; s++){
				
				for(var o = 0 ; o < nuREPORT.groups[g].sections[s].objects.length ; o++){
					
					if(nuREPORT.groups[g].sections[s].objects[o].id == id){return nuREPORT.groups[g].sections[s].objects[o];}
					
				}
			
			}
			
		}
			
	}

	
	this.getGroupAndSection = function(id) {

		for(var g = 0 ; g < nuREPORT.groups.length ; g++){
			
			for(var s = 0 ; s < nuREPORT.groups[g].sections.length ; s++){
				
				for(var o = 0 ; o < nuREPORT.groups[g].sections[s].objects.length ; o++){
					
					if(nuREPORT.groups[g].sections[s].objects[o].id == id){return [g,s];}
					
				}
			
			}
			
		}
			
	}


	this.setObject = function(O) {

		for(var g = 0 ; g < nuREPORT.groups.length ; g++){
			
			for(var s = 0 ; s < nuREPORT.groups[g].sections.length ; s++){
				
				for(var o = 0 ; o < nuREPORT.groups[g].sections[s].objects.length ; o++){
					
					
					if(nuREPORT.groups[g].sections[s].objects[o].id == O.id){
						
						nuREPORT.groups[g].sections[s].objects.splice(o, 1);
						nuREPORT.groups[g].sections[s].objects.push(O);
						
						return;
						
					}
				}
			}
		}
			
	}

	this.addObject = function(g, s, O) {

		nuREPORT.groups[g].sections[s].objects.push(O);
		
	}

	this.removeObject = function(i) {
		
		for(var g = 0 ; g < nuREPORT.groups.length ; g++){
			
			for(var s = 0 ; s < nuREPORT.groups[g].sections.length ; s++){
				
				for(var o = 0 ; o < nuREPORT.groups[g].sections[s].objects.length ; o++){
					
					if(nuREPORT.groups[g].sections[s].objects[o].id == i){
						
						nuREPORT.groups[g].sections[s].objects.splice(o, 1);
						return;
						
					}
				}
			}
		}
	}

	

	this.setIds = function() {

		for(var g = 0 ; g < nuREPORT.groups.length ; g++){
			
			for(var s = 0 ; s < nuREPORT.groups[g].sections.length ; s++){
				
				for(var o = 0 ; o < nuREPORT.groups[g].sections[s].objects.length ; o++){
					
					var i = this.newId();
					
					nuREPORT.groups[g].sections[s].objects[o].id   = i;
					nuREPORT.groups[g].sections[s].objects[o].name = i;
					
				}
			}
		}
	}

	this.newId = function() {

		nuDragID = nuDragID + 1;
		return 'obj' + nuDragID;

	}


	this.createSectionHolder = function() {

		this.height = 0;
		
		var e = document.createElement('div');

		e.setAttribute('id', 'nuSectionHolder');

		$('body').append(e);
		
		$('#nuSectionHolder').css({'position':'absolute', 'left':10, 'top':0, 'width':nuDrag.areaWidth(), 'top':nuDrag.areaTop(), 'background-color':'yellow', 'border-width':1,'border-style':'solid none none solid'});

		for(i = 1 ; i < this.groups.length ; i++){
			this.createSection(i, 0);
		}
		
		this.createSection(0, 0);
			
		for(i = this.groups.length - 1 ; i > 0 ; i--){
			this.createSection(i, 1);
		}
		
		nuDrag.areaHeight(this.height);
		nuDragR.areaHeight(this.height);

		$('#nuDragArea').css('border-style', 'solid solid none solid');
		$('body').css('height', this.sectionTop + 500);

	}

	this.areaHeight = function(a) {

		if(arguments.length == 1){
			return $('#nuSectionHolder').css('height', a);
		}
		return parseInt($('#nuSectionHolder').css('height'));

	}
	
	this.createSection = function(g, s) {
		
		var i        = this.groups[g][s];
		var S        = nuREPORT.groups[g].sections[s]
		
		var v        = S.height == 0  ? 'hidden'           : 'visible';
		var b        = S.height == 0  ? 'none'             : 'none none solid none';
		var w        = S.height == 0  ? 0                  : 1;
		var t        = 'Detail';
		
		this.height  = this.height + S.height;

		if(i < 10){t = nuREPORT.groups[g].sortField + ' Header';}
		if(i > 10){t = nuREPORT.groups[g].sortField + ' Footer';}
		
		if(S.height < 20){t = '';}
		
		var e = document.createElement('div');
		
		e.setAttribute('id', 'nuSectionLeft' + i);
		
		$('#nuSectionHolder').append(e);
		$('#nuSectionLeft' + i).css({'position':'absolute', 'top': this.sectionTop, 'width':140, 'height':S.height, 'background-color':S.color, 'border-style':b, 'visibility':v});
		$('#nuSectionLeft' + i).addClass('nuSection');
		$('#nuSectionLeft' + i).html(t);
		
		if(S.height > 2){
			$('#nuSectionLeft' + i).append('<div id="nuLeftMove'+i+'" data-group="'+g+'" data-section="'+s+'" class="nuDragLine" title="Resize ' + S.label + ' " style="left:0px; bottom:0px; width:139px;">');
		}

		var e = document.createElement('div');
		
		e.setAttribute('id', 'nuSection' + i);
		
		$('#nuDragArea').append(e);
		$('#nuSection' + i).css({'position':'absolute', 'top': this.sectionTop, 'width':nuDrag.areaWidth(), 'height':S.height-1, 'background-color':S.color, 'border-style':b, 'visibility':v});
		$('#nuSection' + i).attr({'data-group': g, 'data-section':s, 'data-order':i});
		$('#nuSection' + i).addClass('nuSection nuDragArea nuRight');
		
		for(var I = 0 ; I < S.objects.length ; I++){

			this.createObject(this.sectionTop, S.objects[I], i);
			
		}

		this.sectionTop = this.sectionTop + S.height;

	}
	
	this.createObject = function(t, o, i) {

		var w  = {B:'bold', N:'normal', I:'italic'};
		var id = o.id;
		var e  = document.createElement('div');
		
		e.setAttribute('id', id);

		$('#nuDragArea').append(e);

		$('#' + id).css({
						'position':'absolute', 
						'left':Number(o.left), 
						'top':Number(o.top) + Number(t), 
						'width':o.width, 
						'height':o.height, 
						'background-color':o.backgroundColor, 
						'z-index':o.zIndex, 
						'border-color':o.borderColor,
						'border-width':o.borderWidth,
						'border-style':'solid',
						'font-family':o.fontFamily,
						'font-weight':w[o.fontWeight],
						'text-align':o.textAlign,
						'font-size':o.fontSize + 'px',
						'color':o.fontColor
						});
						
		$('#' + id).addClass('nuDragObject');
		$('#' + id).html(o.fieldName);
		$('#' + id).attr('data-order', i);
		
	}

	this.adjustObjectsForMovedSection = function(event) {

			var m = event.clientY - this.moveFrom;
			var g = $(this.beingMoved).attr('data-group');
			var s = $(this.beingMoved).attr('data-section');
			
			this.resizeSection(g, s, m);

			nuLoadReport();

	}

	this.adjustSectionForMovedObjects = function(event) {

		nuDrag.getSelected();

		var sel = document.getElementsByClassName('nuDragSelected');
		var m   = nuDrag.multipleSections();
		var min = 30;
		var grp = 0;
		var sec = 0;
		
		var o,S,g,s,T;
		
		
		for(var i = 0 ; i < sel.length ; i ++){
			
			min      = Math.min(min, this.sectionOfObject(sel[i].id));
			
		}
		
		grp           = $('#nuSection'+min).attr('data-group');
		sec           = $('#nuSection'+min).attr('data-section');
		
		for(var i = 0 ; i < sel.length ; i ++){
			
			o        = this.getObject(sel[i].id);
			S        = this.sectionOfObject(sel[i].id);
			g        = $('#nuSection'+S).attr('data-group');
			s        = $('#nuSection'+S).attr('data-section');
			o.width  = parseInt($('#' + o.id).css('width'));
			o.height = parseInt($('#' + o.id).css('height'));
			o.left   = parseInt($('#' + o.id).css('left'));
			
			
			this.removeObject(o.id);
			if(m){
				T        = parseInt($('#nuSection'+S).css('top'));
				o.top    = parseInt($('#' + o.id).css('top')) - T;
				$('#' + o.id).attr('data-order', S);
				this.addObject(g, s, o);
				this.resizeSection(g, s, 0);
			}else{
				T        = parseInt($('#nuSection'+min).css('top'));
				o.top    = parseInt($('#' + o.id).css('top')) - T;
				this.addObject(grp, sec, o);
				$('#' + o.id).attr('data-order', min);
				this.resizeSection(grp, sec, 0);
			}
			
		}
		
		nuLoadReport();
		
	}


	this.resetObjectProperties = function(p, v) {

		nuDrag.getSelected();

		var sel = document.getElementsByClassName('nuDragSelected');

		for(var i = 0 ; i < sel.length ; i ++){
			
			var o = this.getObject(sel[i].id);
			o[p]  = v;
			this.setObject(o)
			
		}
		
		nuLoadReport();
		
	}


	this.resizeSection = function(g, s, c) {

		var i = this.groups[g][s];
		var l = this.lowestSectionObject(g, s);
		var h = parseInt($('#nuSection' + i).css('height'));
		var m = Math.max(c, l - h);

//		nuREPORT.groups[g].sections[s].height = h + m + 2;
		nuREPORT.groups[g].sections[s].height = h + m + 1;
		
	}


	this.lowestSectionObject = function(g, s) {

		var i        = this.groups[g][s];
		var T        = parseInt($('#nuSection' + i).css('top'));
		var a        = $("[data-order='"+i+"']").filter(".nuDragObject");
		var t        = 0;
		var h        = 0;
		var b        = 0;
		
		a.each(function() {
			
			t   = parseInt($( this ).css('top')) - T;
			h   = parseInt($( this ).css('height')) + (parseInt('0'+$( this ).css('border-width')) * 2);
			b   = Math.max(b, Number(t) + Number(h) + 1);
			
		});

		return b;
		
	}



	this.sectionOfObject = function(o) {

		var t = parseInt($('#'+o).css('top'));
		
		for(i = 0 ; i < 21 ; i++){
			
			T = parseInt($('#nuSection'+i).css('top'));
			
			if(T > t){
				return i-1;
			}
			
		}

		return 20;
		
	}




	this.move = function(event) {

		if($('#nuDragLine').length == 1){
			
			var s = document.getElementById('nuDragLine');
			var o = s.style;

			this.moveY  = event.clientY - this.startY;
			this.startY = event.clientY;
			
			var t = parseInt(o.top)  + this.moveY;
			
			o.top   = t + 'px';

		}
		
		if(event.ctrlKey && event.keyCode == 90){
			
			nuUndo();
			
		}
		
		if(event.keyCode == 46){

			if($('#nuDragDialog').length == 1){return;}
			
			var sel 			= document.getElementsByClassName('nuDragSelected');
			
			for(var i = 0 ; i < sel.length ; i ++){
				
				this.removeObject(sel[i].id);

			}
			
			nuREPORT.selected 	= [];
			
			nuLoadReport();
			
		}
		
	}



	this.inSection = function() {
	
		if($('#nuDragLine').length == 1){
			
			var s = document.getElementById('nuDragLine');
			var o = s.style;

			this.moveY  = event.clientY - this.startY;
			this.startY = event.clientY;
			
			var t = parseInt(o.top)  + this.moveY;
			
			o.top   = t + 'px';

		}
		
	}

	this.down = function(event) {

		var lc = window.nuLastClick[event.target.id];
		
		if(lc == undefined){
			window.nuLastClick[event.target.id] = Date.now();
		}else{
			if((Date.now() - lc) > 300){
				window.nuLastClick[event.target.id] = Date.now();
			}else{
				nuObjectDialog();
				return;
			}
		}
		

		if(event.buttons == 1 && (String(event.target.className).split(' ')[1]) == 'nuDragSelected'){
			
			this.dragging   = true;
			
		}
		
		if(String(event.target.id).substr(0,10) == 'nuLeftMove'){
			
			this.beingMoved   = '#' + event.target.id;
			this.moveFrom     = event.clientY;
			this.startY       = event.clientY;
			var e             = document.createElement('div');
			var t             = $(this.beingMoved).offset().top
			
			$(this.beingMoved).css('background-color','red');

			e.setAttribute('id', 'nuDragLine');

			$('body').append(e);
			$('#nuDragLine').css({'left':10, 'top':t, 'width':140 + nuDrag.areaWidth()});
			$('#nuDragLine').addClass('nuDragLine');
			
		}
		
	}

	this.up = function(event) {

		if(event.target.id == 'nuSelectBox' && String($('#dialogTitleWords').html()).substr(12) == 'Object Properties'){
			nuLoadReport();
		}
		
		if($('#nuDragLine').length == 1){
			
			this.adjustObjectsForMovedSection(event);
			
		}

		if(this.dragging){
	
			this.adjustSectionForMovedObjects(event);
			this.dragging   = false;
			
		}

	}

}

function nuSetDialog(){ //-- reopen Dialog at set to last position

	if(nuDIALOG.dialog != ''){
		
		window[nuDIALOG.dialog]();
		$('#nuDragDialog').css('left', nuDIALOG.dialogX);
		$('#nuDragDialog').css('top', nuDIALOG.dialogY);
		$('#' + nuREPORT.setFocus).focus();
		
	}

	
}

function nuSetTools(){
	
		var e  = document.createElement('div');
		var h = '';
		h = h + '<img id="nuItema"  onclick="nuUndo()" src="graphics/nu_undo.png" title="Undo" style="position:absolute;top:5px;left:5px;height:15px;width:15px">';
//		h = h + '<div id="nuItemU" onclick="nuUndo()" title="Undo" class="nuToolbar" style="width:80px">Undo<span style="font-weight:normal;font-size:12px;">('+(nuBACKUP.length-1)+')</span></div>';
		h = h + '<div id="nuItem0" onclick="nuNewObject()" class="nuToolbar">' 			+ opener.nuTranslate('New Object') + '</div>';
		h = h + '<div id="nuItem1" onclick="nuCloneObjects(false)" class="nuToolbar">' 	+ opener.nuTranslate('Clone Object') + '</div>';
		h = h + '<div id="nuItem7" onclick="nuSelectDialog()" class="nuToolbar">' 		+ opener.nuTranslate('Select Objects') + '</div>';
		h = h + '<div id="nuItem2" onclick="nuAdjustDialog()" class="nuToolbar">' 		+ opener.nuTranslate('Adjust Objects') + '</div>';
		h = h + '<div id="nuItem4" onclick="nuObjectDialog()" class="nuToolbar">' 		+ opener.nuTranslate('Object Properties') + '</div>';
		h = h + '<div id="nuItem3" onclick="nuGroupDialog()" class="nuToolbar">' 		+ opener.nuTranslate('Group Properties') + '</div>';
		h = h + '<div id="nuItem5" onclick="nuReportDialog()" class="nuToolbar">' 		+ opener.nuTranslate('Report Properties') + '</div>';
		h = h + '<div id="nuItem6" onclick="nuStringify()" class="nuToolbar">' 			+ opener.nuTranslate('Copy Changes') + '</div>';
		
		e.setAttribute('id', 'nuToolBar');
		$('body').prepend(e);

		$('#nuToolBar').css({
						'position'			: 'absolute', 
						'left'				: 10, 
						'top'				: 10, 
						'width'				: 1200, 
						'height'			: 25, 
						'background-color'	: 'lightgrey', 
						'font-size'			: 16
						});

		$('#nuToolBar').html(h);
		$('#nuToolBar').addClass('nuSection nuDragToolbar nuDragDialog');
		moveToolbar();
	
	
}

function moveToolbar(){
	
		$('#nuToolBar').css('top', window.scrollY + 10);
		
}

function nuNewObject(){
	
	nuREPORT.selected 	= [];
	var o             	= JSON.parse(JSON.stringify(nuOBJECT));
	var i             	= nuDragR.newId();
	var l             	= nuREPORT.groups[0].sections[0].objects.length;
	
	o.id   				= i;
	o.name 				= i;
	
	nuREPORT.groups[0].sections[0].objects[l] = o;
	nuREPORT.selected.push(i);

	nuLoadReport();

}
	

function nuCloneObjects(){

	nuREPORT.selected = [];

	var sel = document.getElementsByClassName('nuDragSelected');
	
	for(var i = 0 ; i < sel.length ; i ++){
		
		var o		= nuDragR.getObject(sel[i].id);
		var gs		= nuDragR.getGroupAndSection(sel[i].id);
		var g		= gs[0];
		var s		= gs[1];
		var l		= nuREPORT.groups[g].sections[s].objects.length;
		var d		= nuDragR.newId();
		var j	 	= JSON.parse(JSON.stringify(o));

		j.id		= d;
		j.name		= d;
		j.left		= Number(j.left) + 2;
		
		nuREPORT.groups[g].sections[s].objects[l] = j;
		nuREPORT.selected.push(d);
		
	}
	
	nuLoadReport();
		
}
	

function nuSelectDialog(){

	nuDIALOG.dialog = 'nuSelectDialog';

	nuDragD.createDialog(200, window.scrollY + 50, 700, 600, 'Select Objects');
	
	var e          = document.createElement('select');
	e.multiple     = 'multiple';
	e.setAttribute('id', 'nuObjectList');

	$('#nuDragDialog').append(e);
	
	$('#nuObjectList').css({
		'width'            : '620px',
		'height'           : '500px',
		'top'              : '60px',
		'left'             : '40px',
		'position'         : 'absolute',
		'font-family'      : 'Lucida Console',
		'z-index'          : 5000
	})
	
	.change(function() {
		
		$('.nuDragObject').removeClass('nuDragSelected');
		
		$("#nuObjectList > option:selected").each(function() {
			
			$('#' + this.value).addClass('nuDragSelected');
			
		});
	});


	var a       = [];
	var sel     = document.getElementsByClassName('nuDragObject');

	for(var o = 0 ; o < sel.length ; o ++){
			
		a[a.length] = new nuOrderedSelectObjects(sel[o].id);
			
	}
	
	a.sort(nuSortObjects);
	
	for(var i = 0 ; i < a.length ; i ++){
			
		var o   = $('#' + a[i].id);
		var sec = $('#nuSectionLeft' + o.attr('data-order')).html();
		var val = o.html();
		var sel = o.hasClass('nuDragSelected')  ? ' selected ' : '';
		
		$("#nuObjectList").append("<option "+ sel +" value='"+ a[i].id +"'>"+sec + " : " + a[i].id + " : " + val +"</option>") ;
		
	}
	
	$('#nuModal').remove();
		

}


function nuAdjustDialog(){

	nuDIALOG.dialog = 'nuAdjustDialog';
	
	nuDragD.createDialog(400, window.scrollY + 50, 400, 350, opener.nuTranslate('Adjust Selected Objects'));
	nuAdjustButton(80, 10, 'nuMoverAlignLeftClick()', 		opener.nuTranslate('Align To Left'), 		opener.nuTranslate('Align All Selected Objects To Left'));
	nuAdjustButton(80, 270, 'nuMoverAlignRightClick()', 	opener.nuTranslate('Align To Right'), 		opener.nuTranslate('Align All Selected Objects To Right'));
	nuAdjustButton(65, 140, 'nuMoverAlignTopClick()', 		opener.nuTranslate('Align To Top'), 		opener.nuTranslate('Align All Selected Objects To Top'));
	nuAdjustButton(100, 140, 'nuMoverAlignBottomClick()', 	opener.nuTranslate('Align To Bottom'), 		opener.nuTranslate('Align All Selected Objects To Bottom'));
	nuAdjustButton(155, 140,'nuMoverAdjustVerClick()' , 	opener.nuTranslate('Space Vertically'), 	opener.nuTranslate('Adjust All Selected Objects Vertically'));
	nuAdjustButton(190, 140,'nuMoverAdjustHorClick()' , 	opener.nuTranslate('Space Horizontally'), 	opener.nuTranslate('Adjust All Selected Objects Horizontally'));
	nuAdjustButton(250, 140,'nuResizeTallestClick()' , 		opener.nuTranslate('Tallest'), 				opener.nuTranslate('Resize to Tallest'));
	nuAdjustButton(265, 270,'nuResizeWidestClick()' , 		opener.nuTranslate('Widest'), 				opener.nuTranslate('Resize to Widest'));
	nuAdjustButton(265, 10,'nuResizeThinestClick()' , 		opener.nuTranslate('Thinnest'), 			opener.nuTranslate('Resize to Thinnest'));
	nuAdjustButton(285, 140,'nuResizeShortestClick()' , 	opener.nuTranslate('Shortest'), 			opener.nuTranslate('Resize to Shortest'));

	$('#nuModal').remove();
	
}

function nuAdjustButton(top, left, funct, value, title){

	var e = document.createElement('input');                           //-- create button
	
	e.setAttribute('id', 'bt_' + String(title).split(' ').join('_'));
	e.setAttribute('type', 'button');
	e.setAttribute('value',   value);
	e.setAttribute('title',   title);
	e.setAttribute('onclick', funct );
	
	$('#nuDragDialog').append(e);
	$('#' + e.id).addClass('nuButton');
	$('#nuDrag').append(e);
	$('#' + e.id).css({
		'width'				: 120,
		'height'			: 30,
		'font-size'			: '12px',
		'top'				: top,
		'left'				: left,
		'z-index'			: 5000,
		'position'			: 'absolute',
	})

}


function nuREPORTUpdate(p, v){
	
	var s = document.getElementsByClassName('nuDragSelected');
	
	for(var i = 0 ; i < s.length ; i ++){
		
	}
	
}


function nuMoverAlignLeftClick(){
	
	var s = document.getElementsByClassName('nuDragSelected');
	var l = 100000;
	
	for(var i = 0 ; i < s.length ; i ++){
		
		l = Math.min(l, parseInt(s[i].style.left));

	}
	
	$('.nuDragSelected').css('left', l);
	nuDragR.resetObjectProperties('left', l);

}


function nuMoverAlignRightClick(){
	
	var s 				= document.getElementsByClassName('nuDragSelected');
	var r 				= 0;
	nuDragR.dragging	= true;
	var gs				= nuDragR.getGroupAndSection(s[0].id);
	
	for(var i = 0 ; i < s.length ; i ++){
		
		var o 			= nuDragR.getObject(s[i].id);
		r				= Math.max(r, o.left + o.width - (o.borderWidth * 2));
		
	}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		var o 			= nuDragR.getObject(s[i].id);
		o.left			= r - o.width - (o.borderWidth * 2);
		
		nuDragR.setObject(o);
		
	}
	
	nuLoadReport();

}


function nuMoverAlignTopClick(){
	
	var s 				= document.getElementsByClassName('nuDragSelected');
	var t 				= 100000;
	nuDragR.dragging	= true;
	var gs				= nuDragR.getGroupAndSection(s[0].id);
	
	for(var i = 0 ; i < s.length ; i ++){
		
		if(JSON.stringify(nuDragR.getGroupAndSection(s[i].id)) != JSON.stringify(gs)){
			return;
		}
		
		var o 			= nuDragR.getObject(s[i].id);
		t				= Math.min(t, o.top);
		
	}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		var o 			= nuDragR.getObject(s[i]);
		s[i].top		= t;
		
		nuDragR.getObject(s[i]);
		
	}
	
	nuDragR.resetObjectProperties('top', t);
	
}



function nuMoverAlignBottomClick(){
	
	var s 				= document.getElementsByClassName('nuDragSelected');
	var b 				= 0;
	nuDragR.dragging	= true;
	var gs				= nuDragR.getGroupAndSection(s[0].id);
	
	for(var i = 0 ; i < s.length ; i ++){
		
		if(JSON.stringify(nuDragR.getGroupAndSection(s[i].id)) != JSON.stringify(gs)){
			return;
		}
		
		var o 			= nuDragR.getObject(s[i].id);
		b				= Math.max(b, o.top + o.height - (o.borderWidth * 2));
		
	}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		var o 			= nuDragR.getObject(s[i].id);
		o.top			= b - o.height - (o.borderWidth * 2);
		
		nuDragR.setObject(o);
		
	}
	
	nuLoadReport();

}


function nuMoverAdjustVerClick(){

	var t = 10000000;
	var b = 0;
	var h = 0;
	var a = [];
	var o = {};
	var d = document.getElementsByClassName('nuDragSelected');
	nuDragR.dragging	= true;
	
	for(var i = 0 ; i < d.length ; i ++){
		
		o   = new nuOrderedSelectObjects(d[i].id);
		
		t   = Math.min(t, Number(o.top));                                                            //-- calculate highest top
		b   = Math.max(b, Number(o.top) + Number(o.height));                                          //-- calculate lowest bottom
		h   = h + Number(o.height);                                                                   //-- total height of objects
		
		a.push(o);

	}

	if(b-t < h){return;}
	
	var s = a.sort(function(A, B){return A.top - B.top;});
	var newGap = (b-t-h) / (a.length-1);
	var newTop  = t;
	
	for(var i = 0 ; i < s.length - 1 ; i++) {                                      //-- reposition all Objects ordered by highest (except the last one)

		$('#' + s[i].id).css('top', newTop);                                       //-- move object
		newTop  = newTop + newGap + Number(s[i].height);
	
	}

}



function nuMoverAdjustHorClick(){

	var l 				= 10000000;
	var b 				= 0;
	var w 				= 0;
	var a 				= [];
	var o 				= {};
	var d 				= document.getElementsByClassName('nuDragSelected');
	nuDragR.dragging	= true;
	
	for(var i = 0 ; i < d.length ; i ++){
		
		o   = new nuOrderedSelectObjects(d[i].id);
		
		l   = Math.min(l, Number(o.left));                                                            //-- calculate leftest left
		b   = Math.max(b, Number(o.left) + Number(o.width));                                          //-- calculate lowest bottom
		w   = w + Number(o.width);                                                                    //-- total width of objects
		
		a.push(o);

	}
	
	if(b-l < w){return;}
	
	var s = a.sort(function(A, B){return A.left - B.left;});
	var newGap = (b-l-w) / (a.length-1);
	var newLeft  = l;
	
	for(var i = 0 ; i < s.length - 1 ; i++) {                                      //-- reposition all Objects ordered by leftest (except the last one)

		$('#' + s[i].id).css('left', newLeft);                                      //-- move object
		newLeft  = newLeft + newGap + Number(s[i].width);
	
	}
	

}



function nuResizeWidestClick(){
	
	var s = document.getElementsByClassName('nuDragSelected');
	var w = 0;
	
	for(var i = 0 ; i < s.length ; i ++){
		
		w = Math.max(w, parseInt(s[i].style.width));

	}
	
	
	for(var i = 0 ; i < s.length ; i ++){
		
		if(parseInt(s[i].style.left) + w < nuDrag.areaWidth()){
			s[i].style.width = String(w) + 'px';
			
		}else{
			s[i].style.width = (nuDrag.areaWidth() - parseInt(s[i].style.left)) + 'px';
		}

	}
	
	nuDragR.resetObjectProperties('width', w);
	nuDragR.dragging	= true;

}




function nuResizeTallestClick(){
	
	var s = document.getElementsByClassName('nuDragSelected');
	var h = 0;
	
	for(var i = 0 ; i < s.length ; i ++){
		
		h = Math.max(h, parseInt(s[i].style.height));

	}

	if(nuDrag.multipleSections()){return;}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		s[i].style.height = String(h) + 'px';

	}
	
	nuDragR.resetObjectProperties('height', h);
	nuDragR.dragging	= true;

}


function nuResizeThinestClick(){
	
	var s = document.getElementsByClassName('nuDragSelected');
	var w = 10000000;
	
	for(var i = 0 ; i < s.length ; i ++){
		
		w = Math.min(w, parseInt(s[i].style.width));

	}

	if(nuDrag.multipleSections()){return;}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		s[i].style.width = String(w) + 'px';

	}
	
	nuDragR.resetObjectProperties('width', w);
	nuDragR.dragging	= true;

}



function nuResizeShortestClick(){
	
	var s = document.getElementsByClassName('nuDragSelected');
	var h = 10000000;
	
	for(var i = 0 ; i < s.length ; i ++){
		
		h = Math.min(h, parseInt(s[i].style.height));

	}

	if(nuDrag.multipleSections()){return;}
	
	for(var i = 0 ; i < s.length ; i ++){
		
		s[i].style.height = String(h) + 'px';

	}
	
	nuDragR.resetObjectProperties('height', h);
	nuDragR.dragging	= true;

}




function nuSortObjects(a,b){

	return ((a.order * 10000) + Number(a.top)) - ((b.order * 10000) + Number(b.top))

}

	
function nuOrderedSelectObjects(i){
	
	this.id      = i;
	this.order   = parseInt($('#' + i).attr('data-order'));
	this.top     = parseInt($('#' + i).css('top'));
	this.height  = parseInt($('#' + i).css('height'));
	this.left    = parseInt($('#' + i).css('left'));
	this.width   = parseInt($('#' + i).css('width'));
	
	return this;

}


function nuObjectDialog(){

	var S = document.getElementsByClassName('nuDragSelected');
	
	if(S.length == 0){return;}
	
	nuDIALOG.dialog = 'nuObjectDialog';
	
	nuDragD.createDialog(400, window.scrollY + 50, 450, 450, 'Object Properties');
	
	var D   = nuDragR.getObject(S[0].id);
	var top = 60;
	var fun = 'nuUpdateProperties';
	
	top = nuDialogInput('ID', 'id', top, 200, D, fun);
	$('#id').attr('disabled', true);
	top = nuDialogInput('Object Type', 'objectType', top, 200, D, fun, [['field','Field'],['label','Label'],['image','Image']]);
	top = nuDialogInput('Left', 'left', top, 200, D, fun);
	top = nuDialogInput('Top', 'top', top, 200, D, fun);
	top = nuDialogInput('Height', 'height', top, 200, D, fun);
	top = nuDialogInput('Width', 'width', top, 200, D, fun);
	top = nuDialogInput('Background Color', 'backgroundColor', top, 200, D, fun);
	top = nuDialogInput('Border Color', 'borderColor', top, 200, D, fun);
	top = nuDialogInput('Border Width', 'borderWidth', top, 200, D, fun);
	top = nuDialogInput('Field Name', 'fieldName', top, 200, D, fun);
	top = nuDialogInput('Font Color', 'fontColor', top, 200, D, fun);
//	top = nuDialogInput('Font Family', 'fontFamily', top, 200, D, fun, [['Helvetica','Helvetica'],['Arial','Arial'],['Courier','Courier'],['Times','Times'],['Symbol','Symbol']]);
	top = nuDialogInput('Font Family', 'fontFamily', top, 200, D, fun, window.nuFonts);
	top = nuDialogInput('Font Size', 'fontSize', top, 200, D, fun);
	top = nuDialogInput('Font Weight', 'fontWeight', top, 200, D, fun, [['','Normal'],['b','Bold'],['i','Italic']]);
	top = nuDialogInput('Format', 'format', top, 200, D, fun,  window.nuFormats);
	top = nuDialogInput('Text Align', 'textAlign', top, 200, D, fun, [['left','Left'],['right','Right'],['center','Center']]);
	top = nuDialogInput('Image', 'image', top, 200, D, fun);
	top = nuDialogInput('Minimum Rows', 'minRows', top, 200, D, fun);
	top = nuDialogInput('Maximum Rows', 'maxRows', top, 200, D, fun);
	top = nuDialogInput('Z Index', 'zIndex', top, 200, D, fun);
	
	nuBlankMultipleValues(S);
	$('#nuDragDialog').css('height', top + 20);

//    $("#nuDragDialog").append('<img src="./trash_can.png" height="17px" width="17px" id="deleteObject" value="Delete" onclick="deleteSelectedObjects()"/>');
	
	$("#deleteObject")
	.css('position','absolute')
	.css('top','7px')
	.css('right','5px');

	var t	= 'Field Name';
	
	if(D['objectType'] == 'image'){t	= 'Source';}
	if(D['objectType'] == 'label'){t	= 'Title';}

	$('#caption_fieldName330').html(t);
/*	
	if(D['objectType'] == 'image'){
		nuSetnuScroll(window.nuImages);
	}else{
		nuSetnuScroll(window.nuTT);
	}

*/

	
	if(D['objectType'] == 'image'){
		nuSetnuScroll(window.nuImages);
	}
	
	if(D['objectType'] == 'field'){
		nuSetnuScroll(window.nuTT);
	}
	
	if(D['objectType'] == 'label'){
		nuSetnuScroll([["KEEP EXACT HEIGHT"]]);
	}
	

	$('#nuModal').remove();

}

function deleteSelectedObjects(){
	
	var sel 			= document.getElementsByClassName('nuDragSelected');
			
	for(var i = 0 ; i < sel.length ; i ++){
		
		window.nuDragR.removeObject(sel[i].id);

	}
	
	nuREPORT.selected	= [];
	nuLoadReport();
	
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
}

function nuBlankMultipleValues(S){
	
	var f = nuDragR.getObject(S[0].id);  //-- first Object
	var k = Object.keys(f);
	
	for(var i = 0 ; i < k.length ; i ++){
		
		var v = f[k[i]];
		
		for(I = 1 ; I < S.length ; I++){

			var o = nuDragR.getObject(S[I].id);
			
			if(f[k[i]] != o[k[i]]){$('#' + k[i]).val('');}
			
		}
		
	}
	
}


function nuReportDialog(){

	nuDragD.createDialog(400, window.scrollY + 50, 450, 450, 'Report Properties');


	var top = 60;
	var fun = 'nuUpdateReport';
	
	nuDIALOG.dialog = 'nuReportDialog';
	

	top = nuDialogInput('Width', 'width', top, 180, nuREPORT, 'nuDoNothing');
	top = nuDialogInput('Height', 'height', top, 180, nuREPORT, 'nuDoNothing');
	top = nuDialogInput('Paper', 'paper', top, 180, nuREPORT, fun, [['A4','A4'],['A5','A5'],['Letter','Letter'],['Legal','Legal']]);
	top = nuDialogInput('Orientation', 'orientation', top, 180, nuREPORT, fun, [['P','Portrait'],['L','Landscape']]);
	
	$('#width').attr('disabled', true);
	$('#height').attr('disabled', true);

	$('#nuDragDialog').css('height', top + 20);

	$('#nuModal').remove();

}


function nuGroupDialog(){

	nuDIALOG.dialog = 'nuGroupDialog';
	
	nuDragD.createDialog(400, window.scrollY + 50, 650, 750, 'Group Properties');


	var top = 60;
	var left = 120;
	var fun = 'nuUpdateGroup';

	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[1], 'nuDoNothing');
	$('#sortField').attr({'id' : 'sortField1', 'readonly' : true, 'data-group' : 1}).css('background-color','#DFDFDF').click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[2], 'nuDoNothing');
	$('#sortField').attr({'id' : 'sortField2', 'readonly' : true, 'data-group' : 2}).css('background-color','#DFDFDF').click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[3], fun);
	$('#sortField').attr({'id' : 'sortField3', 'data-group' : 3}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[4], fun);
	$('#sortField').attr({'id' : 'sortField4', 'data-group' : 4}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[5], fun);
	$('#sortField').attr({'id' : 'sortField5', 'data-group' : 5}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[6], fun);
	$('#sortField').attr({'id' : 'sortField6', 'data-group' : 6}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[7], fun);
	$('#sortField').attr({'id' : 'sortField7', 'data-group' : 7}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[8], fun);
	$('#sortField').attr({'id' : 'sortField8', 'data-group' : 8}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[9], fun);
	$('#sortField').attr({'id' : 'sortField9', 'data-group' : 9}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[10], fun);
	$('#sortField').attr({'id' : 'sortField10', 'data-group' : 10}).click(function(){nuClickGroup(this);});
	top = nuDialogInput('', 'sortField', top, left, nuREPORT.groups[0], fun);
	$('#sortField').attr({'id' : 'sortField0', 'readonly' : true, 'data-group' : 0}).css('background-color','#DFDFDF').click(function(){nuClickGroup(this);});

	var top = 120;
	var left = left + 210;
	
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[3], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy3').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[4], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy4').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[5], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy5').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[6], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy6').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[7], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy7').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[8], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy8').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[9], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy9').css('width',105);
	top = nuDialogInput('', 'sortBy', top, left, nuREPORT.groups[10], 'nuDoNothing', [['a','Ascending'],['d','Descending']]);
	$('#sortBy').attr('id', 'sortBy10').css('width',105);
	
	var top = 430;
	var left = left - 100;
	
	top = nuDialogInput('Section Name', 'label', top, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[0], 'nuDoNothing');
	$('#label').attr('id', 'label0').attr('readonly', true).css('background-color','#DFDFDF');
	top = nuDialogInput('Section Height', 'height', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[0], 'nuUpdateSectionProperty');
	$('#height').attr({'id' : 'height0', 'data-property' : 'height', 'data-section' : '0'});
//	top = nuDialogInput('Section Color', 'color', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[0], 'nuUpdateSectionProperty');
//	$('#color').attr({'id' : 'color0', 'data-property' : 'color', 'data-section' : '0'});
	top = nuDialogInput('Page Break', 'page_break', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[0], 'nuUpdateSectionProperty', [['0','No'],['1','Yes']]);
	$('#page_break').attr({'id' : 'page_break0', 'data-property' : 'page_break', 'data-section' : '0'});

	var top = 550;
	
	if(nuREPORT.groups[nuDIALOG.groupNumber].sections.length == 2){

		top = nuDialogInput('Section Name', 'label', top, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[1], 'nuDoNothing');
		$('#label').attr('id', 'label1').attr('readonly', true).css('background-color','#DFDFDF');
		top = nuDialogInput('Section Height', 'height', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[1], 'nuUpdateSectionProperty');
		$('#height').attr({'id' : 'height1', 'data-property' : 'height', 'data-section' : '1'});
//		top = nuDialogInput('Section Color', 'color', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[1], 'nuUpdateSectionProperty');
//		$('#color').attr({'id' : 'color1', 'data-property' : 'color', 'data-section' : '1'});
		top = nuDialogInput('Page Break', 'page_break', top-5, left, nuREPORT.groups[nuDIALOG.groupNumber].sections[1], 'nuUpdateSectionProperty', [['0','No'],['1','Yes']]);
		$('#page_break').attr({'id' : 'page_break0', 'data-property' : 'page_break', 'data-section' : '1'});

	}
	
	nuMoveGroup();
	
	$('#nuDragDialog').css('height', top + 20);

	nuSetnuScroll(window.nuTT);

	$('#nuModal').remove();
	
}




function nuMoveGroup(){

		var e = document.createElement('button');  
		e.setAttribute('id', 'grpup');
		$('#nuDragDialog').append(e);
		
		$('#' + e.id).css({'font-size':10,'position':'absolute','left':15,'top':150,'width':90,'height':30}).html(opener.nuTranslate('Move Up'));
		$('#' + e.id).click(function(){	nuMoveReportGroup(nuDIALOG.groupNumber, -1);});

		var e = document.createElement('button');  
		e.setAttribute('id', 'grpdn');
		$('#nuDragDialog').append(e);
		
		$('#' + e.id).css({'font-size':10,'position':'absolute','left':15,'top':200,'width':90,'height':30}).html(opener.nuTranslate('Move Down'));
		$('#' + e.id).click(function(){	nuMoveReportGroup(nuDIALOG.groupNumber, 1);});

}


function nuDialogInput(cap, id, top, left, val, fun, sel){

    if(cap != ''){
        var e = document.createElement('span');  
        e.setAttribute('id', 'caption_' + id + top);
        $('#nuDragDialog').append(e);
		
        $('#' + e.id).css({
						'position'    : 'absolute',
						'left'        : left-210,
						'top'         : top,
						'width'       : 200,
						'font-family' : 'helvetica',
						'text-align'  : 'right'
						});
		
        $('#' + e.id).html(opener.nuTranslate(cap));
    }

	if(arguments.length == 7){
		var e = document.createElement('select');  
		var ew = 4;
	}else{
		var e = document.createElement('input');  
		var ew = 0;
	}
    e.setAttribute('id', id);
    
    $('#nuDragDialog').append(e);
	
    $('#' + e.id).css({
					'position'    : 'absolute',
					'left'        : left,
					'top'         : top,
					'width'       : 200 + ew,
					'font-family' : 'helvetica',
					'font-size'   : '14px'
					});
							
	$('#' + e.id).change(function(){
		window[fun](this);
	});
		
	if(arguments.length == 7){

		for(var i = 0 ; i < sel.length ; i++){
			
			$('#' + id).append("<option value='"+ sel[i][0] +"'>" + sel[i][1] + "</option>") ;
			
		}
		
	}

    $('#' + e.id).val( val[id]);
	
	return top + 30;
    
}

function nuUpdateGroup(t){
	
		var g = $('#' + t.id).attr('data-group');
		var G = nuREPORT.groups[g];
		var s = nuREPORT.groups[g].sections.length
		
		G.groupBy                  = $('#sortBy'     + g).val();
		G.sortField                = $('#sortField'  + g).val();
		
		for(var i = 0 ; i < s.length ; i++){
			G.sections[i].color        = $('#height' + i).val();
			G.sections[i].height       = $('#color' + i).val();
			G.sections[i].label        = 'Header ' + $('#label' + i).val();
			G.sections[i].page_break   = $('#page_break' + i).val();
			
			if(g == 0){G.sections[i].label  = 'Detail';}
			if(g == 1 && s == 0){G.sections[i].label  = $('#label' + i).val() + ' Header';}
			if(s == 1){G.sections[i].label  = $('#label' + i).val() + ' Footer';}
			
		}
		
	nuREPORT.setFocus = t.id;
	
	nuLoadReport();

	
}

	
function nuUpdateProperties(t){

	var sel 		= document.getElementsByClassName('nuDragSelected');
	nuDIALOG.dialog = 'nuObjectDialog';


	for(var i = 0 ; i < sel.length ; i ++){

		var o 		= nuDragR.getObject(sel[i].id);
		
		o[$(t).attr('id')]  = $(t).val();
		nuDragR.setObject(o);
		
	}

	nuREPORT.setFocus = $(t).attr('id');

	nuLoadReport();
	
}

function nuDoNothing(t){

}



function nuUpdateReport(t){

	var p        = $('#paper').val() + $('#orientation').val();
	var a        = [];
	
	a['A4P']     = [['297'],['210']];
	a['A5P']     = [['210'],['148']];
	a['LetterP'] = [['279.4'],['215.9']];
	a['LegalP']  = [['355.6'],['215.9']];
	a['A4L']     = [['210'],['297']];
	a['A5L']     = [['148'],['210']];
	a['LetterL'] = [['215.9'],['279.4']];
	a['LegalL']  = [['215.9'],['355.6']];

	
    nuREPORT[$(t).attr('id')] = $(t).val();
    nuREPORT['height']        = Number(a[p][0][0]);
    nuREPORT['width']         = Number(a[p][1][0]);
	
	nuREPORT.setFocus = $(t).attr('id');
	
	nuLoadReport();

}

function nuUndo(){

	if(nuBACKUP.length > 1){
		
		nuBACKUP.splice(nuBACKUP.length - 1, 1);
		nuREPORT = nuBACKUP[nuBACKUP.length - 1]
		
		nuLoadReport(1);
		
	}
	
}


function nuClickGroup(t){
	
	var g = $(t).attr('data-group');
	
	if(g > 0 && $('#sortField' + (g - 1)).val() == ''){
		nuLoadReport(1);
		return;
	}
	
	nuDIALOG.groupNumber = g;
	
	nuREPORT.groups[g].sections[0].label = $(t).val() + ' Header';
	
	if(nuREPORT.groups[g].sections.length == 2){
		nuREPORT.groups[g].sections[1].label = $(t).val() + ' Footer';
	}
	
	nuREPORT.setFocus = $(t).attr('id');
	
	nuLoadReport(1);
	
}



function nuUpdateSectionProperty(t){

	var g = nuDIALOG.groupNumber;
	var s = $(t).attr('data-section');
	var p = $(t).attr('data-property');
	var v = $(t).val();
	var o = {};
	
	if(p == 'height'){
		
		v = Math.max(v, nuDragR.lowestSectionObject(g, s));
		
	}
	
	nuREPORT.groups[g].sections[s][p] = v;
	
	nuREPORT.setFocus = $(t).attr('id');
	
	nuLoadReport();

}



function nuMoveReportGroup(ele, dir) {
	
	var groupNumber = Number(ele);
	if(dir == 1) {
		if(groupNumber >= 10 || nuREPORT.groups[groupNumber + 1].sortField == '') {
			return;
		} else {
			var tempObj = nuREPORT.groups[groupNumber];
			nuREPORT.groups[groupNumber] = nuREPORT.groups[groupNumber + 1];
			nuREPORT.groups[groupNumber + 1] = tempObj;
			nuREPORT.setFocus= $('#sortField' + (groupNumber + 1)).attr('id');
			nuDIALOG.groupNumber = groupNumber + 1;
		}
	} else if(dir == -1) {
		if(groupNumber <= 3 || nuREPORT.groups[groupNumber - 1].sortField == '') {
			return;
		} else {
			var tempObj = nuREPORT.groups[groupNumber];
			nuREPORT.groups[groupNumber] = nuREPORT.groups[groupNumber - 1];
			nuREPORT.groups[groupNumber - 1] = tempObj;
			nuREPORT.setFocus= $('#sortField' + (groupNumber - 1)).attr('id');
			nuDIALOG.groupNumber = groupNumber - 1;
		}
	}
	
	nuLoadReport();

}

function nuUp(e){

	var el						= $(e.target);
	
	if(el.hasClass('nuTableName')){

		window.nuY	= parseInt($(e.target).parent().css('top'));
		window.nuX	= parseInt($(e.target).parent().css('left'));

	}

	if(el.hasClass('nuBoxField')){
		
		var id				= String(window.nuCurrentID);
		
		if(id.split('_').length == 3){							//-- eg. field_1_boxc14966188848055365
			
			var I				= id;
			var i				= e.target.id;
			
			if(I.split('_')[2] != i.split('_')[2]){				//-- different box
			
				nuSQL.addJoin(I + '--' + i, '')
				nuAngle();	
				
			}
			
		}

	}
	
	window.nuCurrentID	= '';
	
	nuSQL.buildSQL();
	
}


function nuDown(e){

	var el						= $(e.target);

	if(el.hasClass('nuRelationships')){
		
		nuChangeJoin(e);		
		return;

	}

	window.nuCurrentID			= e.target.id;
	
	if(el.hasClass('nuTableName')){

		window.nuY				= e.clientY - parseInt($(e.target).parent().css('top'));
		window.nuX				= e.clientX - parseInt($(e.target).parent().css('left'));

	}

}



function nuMove(e){

	if(window.nuCurrentID == ''){return;}

	var el						= $('#' + window.nuCurrentID);

	if(el.hasClass('nuTableName')){
		
		if(e.buttons == 1){
			
			if(e.clientY - window.nuY > 0){
				el.parent().css('top', e.clientY - window.nuY);
			}
			if(e.clientX - window.nuX > 0){
				el.parent().css('left', e.clientX - window.nuX);
			}
			
			nuAngle();
			
		}
		
	}
		
}


function nuAngle(){

	$('.nuRelationships').remove();

	var j			= parent.$('#sse_json').val();
	
	if(j == ''){return;}

	var J			= JSON.parse(j);
	var r			= J.joins;
	var ok			= [];
	
	for (var key in r){																//-- remove links to closed boxes
	
		var I		= key.split('--')[0];
		var i		= key.split('--')[1];

		if($('#' + I).length == 1 && $('#' + i).length == 1){
			ok[I + '--' + i]	= r[key]
		}

	}
	
	nuSQL.refreshJoins(ok);
	
	for (var key in nuSQL.joins){

		var F	= $('#' + nuSQL.joins[key].from);
		var T	= $('#' + nuSQL.joins[key].to);
		var f	= F.offset();
		var t	= T.offset();
		var d 	= Math.atan2(t.top - f.top, t.left - f.left) * 180 / Math.PI;		//-- angle in degrees
		var w	= Math.sqrt(Math.pow(f.top - t.top, 2) + Math.pow(f.left - t.left, 2));
		var i	= 'joins' + nuID();
		var jt	= nuSQL.joins[key].join;
		var lm	= 7;

		var L = document.createElement('div');										//-- relationship box (line)
		
		L.setAttribute('id', i);
		
		$('body').append(L);
		
		$('#' + L.id).css({
			'width'				: jt == 'LEFT' ? w - lm : w,
			'height'			: 6,
			'left'				: f.left,
			'top'				: f.top,
			'position'			: 'absolute',
			'text-align'    	: 'center',
			'border'			: 'rgba(255, 153, 0, .5) 0px solid',
			'border-left-width'	: jt == 'LEFT' ? lm : 0,
			'border-left-color'	: 'purple',
			'background-color'	: 'rgba(255, 153, 0, .5)',
			'transform'			: 'rotate(' + d + 'deg)',
		})
		.attr('data-nu-join', key)
		.attr('title', jt + ' JOIN ON ' + nuSQL.joins[key].fromfield + ' = ' + nuSQL.joins[key].tofield + ' (Click to Change Join)')
		.addClass('nuRelationships')
		.hover(function(){
			$(this).css('border-top-width', 2);
			$(this).css('border-bottom-width', 2);
			}, function(){
			$(this).css('border-top-width', 0);
			$(this).css('border-bottom-width', 0);
		});

		var L		= $('#' + L.id);
		var top 	= parseInt(f.top + f.top - L.top);
		var left	= parseInt(f.left + f.left - L.left);

		$('#' + i)
		.css('top', top)
		.css('left', left);
		
		
		var Ltop	= parseInt(L.css('top'));
		var Lleft	= parseInt(L.css('left'));

		if(F.offset().top < T.offset().top){
			L.css('top', 7 + Ltop + F.offset().top - L.offset().top);
		}else{
			L.css('top', 7 + Ltop + L.offset().top - F.offset().top);
		}
		
		if(F.offset().left < T.offset().left){
			L.css('left', -20 + Lleft - (L.offset().left - F.offset().left));
		}else{
			L.css('left', -20 + Lleft - (L.offset().left - T.offset().left));
		}

	}
	
}


function nuChangeJoin(e){
	
	var v			= parent.$('#sse_json').val();
	var j			= JSON.parse(v);
	var i			= $(e.target).attr('data-nu-join');

	if(j.joins[i] == ''){
		j.joins[i] 	= 'LEFT';
	}else{
		j.joins[i] 	= '';
	}

	parent.$('#sse_json')
	.val(JSON.stringify(j))
	.change();

	nuSQL.buildSQL();
	
}

// nuajax

function nuAjax(w,successCallback,errorCallback){

	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?rt=api&wpsnsc=" + window.nubuilder_session_name;
        } else {
                var ajaxurl = "index.php?rt=api";
        }

	w	= nuAddEditFieldsToHash(w);
	
 	$.ajax({

		async    : true,  
		dataType : "json",
		url      : ajaxurl,
		method   : "POST",
		data     : {nuSTATE : w},
		dataType : "json",			
		success	 : function(data,textStatus,jqXHR){
				successCallback(data,textStatus,jqXHR);
		},
		error    : function(jqXHR,textStatus,errorThrown){
			
			var msg			= String(jqXHR.responseText).split("\n");
 			nuMessage(msg);
			window.test = jqXHR.responseText;

			if (errorCallback !== undefined) {
				errorCallback(jqXHR,textStatus,errorThrown);
			}
			
			nuFormatAjaxErrorMessage(jqXHR, errorThrown);
			
		},

		complete: function(jqXHR,textStatus){
			//todo - probably not needed
		}
		
	});    

}

function nuForm(f, r, filter, search, n, like){
	
	if(n == 2){
		
		window.nuNEW	= 1;
		//filter			= '';
		search			= '';
		
	}

	if(like==undefined){
		like 			= '';
	}else{
		like 			= nuDecode(like);
	}
	
	if(nuOpenNewBrowserTab('getform', f, r, filter)){return;}

	var u 				= '';
	var p 				= '';
	var s				= '';
		
	if(n != 1){   //-- add a new breadcrumb
		window.nuFORM.addBreadcrumb();
	}

	var current					= window.nuFORM.getCurrent();
	current.search				= search;
	
	if(current.filter == ''){
		
		if(filter != ''){
			current.filter 		= filter;
		}else{
			
			if(window.nuFILTER != ''){
				current.filter 	= window.nuFILTER;
			}
			
		}
		
	}
	
	var last	 	= $.extend(true, {}, current);

	last.call_type		= 'getform';
	last.form_id 		= f;
	last.record_id		= r;
	last.filter 		= filter ==''?window.nuFILTER:filter;
	last.search 		= search;
    	last.like	 	= like;
	last.form_length	= Object.keys(nuFORM.formSchema).length;
    	last.table_length	= Object.keys(nuFORM.tableSchema).length;

	if(parent['nuHashFromEditForm']===undefined){
		last.hash           = [];
	}else{
		last.hash           = parent.nuHashFromEditForm();
	}

	var successCallback = function(data,textStatus,jqXHR){

		var fm 			= data;

		if(nuDisplayError(fm)){

			parent.$('#nuModal').remove();
			nuFORM.breadcrumbs.pop();
			
			if(fm.log_again == 1){location.reload();}
		
		}else{
			
			var last		= window.nuFORM.getCurrent();
			last.record_id	= fm.record_id;
			last.FORM 		= fm.form;

			nuBuildForm(fm);
			
		}
     };

	nuAjax(last,successCallback);
	
}


function nuGetReport(f, r){

	if(nuOpenNewBrowserTab('getreport', f, r, '')){return;}

	var last			= window.nuFORM.addBreadcrumb();

	last.session_id 	= window.nuSESSION;
	last.call_type 		= 'getreport';
	last.form_id 		= f;
	last.record_id		= r;

	if(parent['nuHashFromEditForm']===undefined){
		last.hash           = [];
	}else{
		last.hash           = parent.nuHashFromEditForm();
	}
	
	var successCallback = function(data,textStatus,jqXHR){
	
		var fm  = data;
		
		if(!nuDisplayError(fm)){
			nuBuildForm(fm);
		}
			
	}
		
     nuAjax(last, successCallback);
		
}


function nuRunReport(f, iframe){

	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?rt=pdf&wpsnsc=" + window.nubuilder_session_name + "&i=";
        } else {
                var ajaxurl = "index.php?rt=pdf&i=";
        }


	var current			= nuFORM.getCurrent();
	var last	 		= $.extend(true, {}, current);

	last.session_id 	= window.nuSESSION;
	last.call_type		= 'runreport';
	last.form_id		= f;
	last.hash 			= nuHashFromEditForm();
	
	var successCallback = function(data,textStatus,jqXHR){
		
		var fm 			= data;
		
		if(!nuDisplayError(fm)){
			
			var pdfUrl	= ajaxurl + fm.id;
			
			if(iframe === undefined){
				window.open(pdfUrl);
			}else{
				parent.$('#'+ iframe).attr('src', pdfUrl);
			}
			
		}
		
	}

	nuAjax(last,successCallback);
	
}

function nuLogout(f, iframe){
	window.open('index.php?rt=lo', '_self');
}

function nuGetPHP(f, r){

	if(nuOpenNewBrowserTab('getphp', f, r, '')){return;}

	window.nuFORM.addBreadcrumb();

	var current			= nuFORM.getCurrent();
	var last	 		= $.extend(true, {}, current);

	last.session_id 	= window.nuSESSION;
	last.call_type 		= 'getphp';
	last.form_id 		= f;
	last.record_id		= r;

	if(parent['nuHashFromEditForm']===undefined){
		last.hash           = [];
	}else{
		last.hash           = parent.nuHashFromEditForm();
	}
	
	var successCallback = function(data,textStatus,jqXHR){
		
		var fm  		= data;
		
		if(!nuDisplayError(fm)){

			nuFORM.setProperty('record_id', fm.record_id);
			nuBuildForm(fm);
			
		} else {
			window.nuFORM.breadcrumbs.pop();
		}
	}
	
	nuAjax(last, successCallback);
	
}


function nuRunPHP(pCode, iframe, rbs){
	
	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?rt=php&wpsnsc=" + window.nubuilder_session_name + "&i=";
        } else {
                var ajaxurl = "index.php?rt=php&i=";
        }

	if(arguments.length < 3 ){
		
		if(window.nuBeforeSave){
			if(nuBeforeSave() === false ){return;}
		}
		
	}

	var current				= nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);
	
	last.session_id			= nuSESSION;
	last.call_type 			= 'runphp';
	last.form_id 			= pCode;
	last.nuFORMdata			= nuFORM.data();
	
	if(nuFORM.getCurrent() === undefined){
		
		last.record_id 		= parent.nuFORM.getCurrent().record_id;

		if(parent['nuHashFromEditForm']===undefined){
			last.hash       = [];
		}else{
			last.hash       = parent.nuHashFromEditForm();
		}
		
		
	}else{

		last.record_id 		= nuFORM.getCurrent().record_id;
		last.hash 			= nuHashFromEditForm();
		
	}
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		var fm				= data;
		
		if(!nuDisplayError(fm)){
			
			var pdfUrl		= ajaxurl + fm.id;
			
			if(iframe === undefined || iframe === ''){
				window.open(pdfUrl);
			}else{
				parent.$('#' + iframe).attr('src', pdfUrl);
			}
			
		}
		
	};
	
	nuAjax(last,successCallback);
	
}


function nuRunPHPHidden(i, rbs){

	if(arguments.length == 1){
		
		if(window.nuBeforeSave){
			if(nuBeforeSave() === false ){return;}
		}
		
	}

	var current				= nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);

	last.session_id			= window.nuSESSION;
	last.call_type 			= 'runhiddenphp';
	last.form_id  			= 'doesntmatter';
	last.hash_record_id		= last.record_id;
	last.record_id			= i;								//-- php code
	last.nuFORMdata			= nuFORM.data();
	last.hash  				= nuHashFromEditForm();
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		var fm				= data;
		
		if(nuDisplayError(fm)){return;};

		window.nuSERVERRESPONSE_HIDDEN	= fm;
		eval(fm.callback + ';');
		
	};
	
	nuAjax(last,successCallback);
	
}


function nuSystemUpdate(){
	
	var mess				= nuTranslate("Update system? Be sure to backup first.");
    if(confirm(mess) == false){return;}
	
	var current				= nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);
	
	last.session_id			= nuSESSION;
	last.call_type 			= 'systemupdate';
	last.form_id 			= 'systemupdate';
	last.nuFORMdata			= nuFORM.data();
	last.hash  				= nuHashFromEditForm();
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		var fm				= data;
		
		if(!nuDisplayError(fm)){
			
			var pdfUrl		= 'index.php?rt=nusystemupdate&i=' + fm.id;
			window.open(pdfUrl);
			
		}
		
	};
	
	nuAjax(last,successCallback);
	
}



function nuAttachImage(i, c){
	
	c						= String(c).toLowerCase();
	var imgID				= 'image_' + i;
	var w					= $('#' + i).css('width');
	var h					= $('#' + i).css('height');

	
	$('#' + i).html('<img id="' + imgID + '" class="nuBrowseImage" width="' + w + '" height="' + h + '" src="">');

	if(window.nuGraphics.indexOf(c + '.png') != -1){						//-- check filenames in graphics dir.
	
		$('#' + imgID).attr('src', "graphics/" + c + ".png")

		return;
		
	}
	
	var PARENT				= parent.parent.parent.parent.parent.parent.parent.parent.parent;
	
	if(PARENT.nuImages[c] !== undefined){
		
		var p				= JSON.parse(PARENT.nuImages[c]);
		var b				= atob(p.file);
		
		$('#' + imgID).attr('src', b)

		return;
		
	}
	
	var current				= nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);

	last.session_id			= window.nuSESSION;
	last.call_type 			= 'getfile';
	last.fileCode			= c;
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		if(nuDisplayError(data)){return;};

		if(data.JSONfile !== null){
			
			PARENT.nuImages[c] 	= data.JSONfile;
			var p			= JSON.parse(PARENT.nuImages[c]);
			var b			= atob(p.file);
			
			$('#' + imgID).attr('src', b)
		
		}
		
	};
	
	nuAjax(last,successCallback);
	
}


function nuAttachButtonImage(i, c){
	
	c						= String(c).toLowerCase();

	if(window.nuGraphics.indexOf(c + '.png') != -1){						//-- check filenames in graphics dir.

		$('#' + i)
		.css('background-image', 'url("graphics/' + c + '.png')
		.css('background-repeat', 'no-repeat')
		.css('background-size', '30px')
		.css('padding', '0px 0px 0px 33px')
		.css('text-align', 'left')

		return;
		
	}
	
	var PARENT				= parent.parent.parent.parent.parent.parent.parent.parent.parent;
	
	if(PARENT.nuImages[c] !== undefined){
		
		var p				= JSON.parse(PARENT.nuImages[c]);
		var b				= atob(p.file);
		
		$('#' + i)
		.css('background-image', 'url("' + b + '")')
		.css('background-repeat', 'no-repeat')
		.css('background-size', '30px')
		.css('padding', '0px 0px 0px 33px')
		.css('text-align', 'left')

		return;
		
	}
	
	var current				= nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);

	last.session_id			= window.nuSESSION;
	last.call_type 			= 'getfile';
	last.fileCode			= c;
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		if(nuDisplayError(data)){return;};

		if(data.JSONfile !== null){
			
			PARENT.nuImages[c] 	= data.JSONfile;
			var p			= JSON.parse(PARENT.nuImages[c]);
			var b			= atob(p.file);
			
			$('#' + i)
			.css('background-image', 'url("' + b + '")')
			.css('background-repeat', 'no-repeat')
			.css('background-size', '30px')
			.css('padding', '0px 0px 0px 30px')
			.css('text-align', 'left')
		
		}
		
	};
	
	nuAjax(last,successCallback);
	
}


function nuGetLookupId(pk, id){

	$('#nuLookupList').remove();
	
	var l				= $('#' + id);
	
	var last			= nuFORM.getCurrent();

	last.session_id		= nuSESSION;
	last.call_type 		= 'getlookupid';
	last.object_id		= l.attr('data-nu-object-id');
	last.target			= l.attr('data-nu-target');
	last.prefix			= l.attr('data-nu-prefix');
	last.primary_key 	= pk;

	var successCallback = function(data,textStatus,jqXHR){		
	
		nuSERVERRESPONSELU 	= data;

		if(!nuDisplayError(data)){
			
			nuPopulateLookup(data, id);
			$('#' + id).addClass('nuEdited');
			nuHasBeenEdited();
			
			var o		= $('#' + id);

			if(o.attr('data-nu-prefix') == ''){return;}
			
			nuAddSubformRow(o[0], false);

		}
		
	};
	
	nuAjax(last,successCallback);
	
}


function nuGetLookupCode(e){

	var last				= window.nuFORM.getCurrent();

	last.session_id			= window.nuSESSION;
	last.call_type 			= 'getlookupcode';
	last.object_id			= e.target.getAttribute('data-nu-object-id');
	last.target				= e.target.getAttribute('data-nu-target')
	last.code		 		= e.target.value;
	last.hash  				= nuHashFromEditForm();
	
	var successCallback = function(data,textStatus,jqXHR){		
		
		nuSERVERRESPONSELU 	= data;
	
		if(!nuDisplayError(data)){
			nuChooseOneLookupRecord(e, data);
		}
			
	};

	nuAjax(last,successCallback);
	
}


function nuPrintAction(){
	
	if ( window.nubuilder_session_name != '' ) {
                var ajaxurl = "index.php?rt=html&wpsnsc=" + window.nubuilder_session_name + "&i=";
        } else {
                var ajaxurl = "index.php?rt=html&i=";
        }

	var last			= window.nuFORM.getCurrent();

	last.call_type 		= 'runhtml';
	last.browse_columns	= nuSERVERRESPONSE.browse_columns;
	last.browse_sql 	= nuSERVERRESPONSE.browse_sql;
	last.session_id 	= window.nuSESSION;
	
	var successCallback = function(data,textStatus,jqXHR){		

		var fm 					= data;
		
		if(!nuDisplayError(fm)){
			
			var p   			= ajaxurl + fm.id;
			
			window.open(p);

		}
		
	};

	nuAjax(last,successCallback);

}

function nuUpdateData(action, instruction){
	
	if(action == 'save' && window.nuBeforeSave){if(nuBeforeSave() === false ){return;}}
	if(action != 'save' && window.nuBeforeDelete){if(nuBeforeDelete() === false ){return;}}
	if(nuFORM.getCurrent().record_id == -1){nuSetProperty('NEW_RECORD', 1);}



	var current				= window.nuFORM.getCurrent();
	var last		 		= $.extend(true, {}, current);

	var f					= last.form_id;
	var r					= last.record_id;
	window.nuLASTRECORD		= last.record_id;

	if(arguments.length == 2){
		last.instruction	= instruction;
	}
	
	last.call_type 			= 'update';
	last.deleteAll 			= $('#nuDelete').is(":checked") ? 'Yes' : 'No';
	last.nuFORMdata			= nuFORM.data(action);
	last.hash 				= nuHashFromEditForm();
	last.session_id 		= window.nuSESSION;
	
	$('.nuActionButton').hide();
	
	var successCallback 	= function(data,textStatus,jqXHR){
		
		var fm 				= data;

		if(nuDisplayError(fm)){
			
			$('.nuActionButton').show();
		
			nuAbortSave();
			
		}else{
			
			if(fm.after_event){
				nuMESSAGES	= fm.errors;
			}
			
			if($('#nuDelete').prop('checked')){
				
				if (action == "delete" && instruction == "all" && fm.record_id == ""){
					
					nuSearchAction();
					nuGetBreadcrumb();
					return;
					
				}
				
				
				window.nuFORM.removeLast();						//-- return to browse
				nuGetBreadcrumb();
				
				if(nuCurrentProperties() == undefined){

					parent.$('#nuModal').remove();
					parent.$('#nuDragDialog').remove();
					
				}
				
			}else{

				nuForm(f, fm.record_id, fm.filter, fm.search, 1);		//-- go to saved or created record
				
			}
			
			nuSavingMessage();
			
		}
	};

	nuAjax(last,successCallback,nuAbortSave);
	
}

function nuSaveAfterDrag() {
	
	var f				= $('#nuDragDialog iframe')[0].contentWindow.nuFORM;

	var last			= f.getCurrent();

    last.call_type		= 'nudragsave';
    last.nuDragState	= $('#nuDragDialog iframe')[0].contentWindow.nuDragOptionsState;
	
	var successCallback	= function(data,textStatus,jqXHR){

		if(nuDisplayError(data.errors)){
			alert(data.errors[0]);
		} else {
			
			$('div#nuDragDialog div#dialogTitle img#dialogClose').click();
			nuGetBreadcrumb();
			
		}
		
		$("#overlay").remove();
	};
		
	nuAjax(last,successCallback,nuAbortSaveDrag);
	
}

function nuOpenNewBrowserTab(c, f, r, filter){
	
	if(window.nuNEW == 1) {
		
		window.nuNEW 	= 0;
		
		window.nuOPENER.push(new nuOpener('F', f, r, filter));

		nuOpenerAppend('type', c);
		
	    var len 	  	= window.nuOPENER.length - 1;
		var id 	    	= window.nuOPENER[window.nuOPENER.length - 1].id;
		var u			= window.location.origin + window.location.pathname + '?i=' + len + '&opener=' + id ;
		
		window.open(u);

		return true;

	}else{
		
		return false;
		
	}
		
}


function nuAbortSave(){
	
    $("#nuProgressSaved").hide();
    $('.nuActionButton').show();
	
}

function nuStartDatabaseAdmin() {

        window.open("index.php?rt=pma");
}

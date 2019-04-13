

class nuFormObject {
	
	constructor() {
		
		this.tableSchema		= [];
		this.formSchema			= [];
		this.formats			= this.setFormats();
		this.breadcrumbs 		= [];
		this.scroll		 		= [];
		this.edited				= false;
		this.deleteForm			= false;
		
	}
	
	getCurrent(){
		
		return this.breadcrumbs[this.breadcrumbs.length - 1];
		
	}
	
	removeLast(){
		
		this.breadcrumbs.pop();
		
	}
	
	removeAfter(b) {

		while(this.breadcrumbs.length - 1 > b) {
			this.removeLast();
		}
		
	}
	
	scrollList(e, l){
		
		if(this.scroll[e.target.id] === undefined){
			
			this.scroll[e.target.id]	= {'list' : l, 'index' : 0};
			
			for(var i = 0 ; i < l.length ; i++){
				
				if(e.target.value == l[i]){
					this.scroll[e.target.id].index = i;
				}
				
			}
			
		}

		if(JSON.stringify(this.scroll[e.target.id].list) != JSON.stringify(l)){
			this.scroll[e.target.id].index = 0;
		}
		
		this.scroll[e.target.id].list	= l;

		var s	= this.scroll[e.target.id];
		
		if(e.keyCode == 38){
			
			s.index --;
			
			if(s.index == -1){
				this.scroll[e.target.id].index = s.list.length -1;
			}
			
		}else if(e.keyCode == 40){
			
			s.index ++;

			if(s.index == s.list.length){
				this.scroll[e.target.id].index = 0;
			}
			
		}else{
			return false;
		}
		
		var theid 		= e.target.id;
		var theindex	= this.scroll[theid].index;
		var thevalue	= s.list[theindex];
		
		$('#' + e.target.id)
		.val(thevalue)
		.change();
		
		nuHasBeenEdited();
		
	}
	
	addBreadcrumb(){
		
		var b				= {};
		b.form_id 			= '';
		b.redirect_form_id	= '';
		b.record_id 		= '';
		b.title				= '';
		b.call_type        	= '';
		b.column_widths    	= 0;
		b.filter           	= '';
		b.forms        		= [];
		b.iframe			= 0;
		b.lookup_id        	= '';
		b.object_id        	= '1';
		b.page_number      	= 0;
		b.password     		= '';
		b.rows        		= -1;
		b.row_height		= 25;
		b.search           	= '';	
		b.session_id		= '';
		b.nosearch_columns 	= [];
		b.sort             	= '-1';
		b.sort_direction   	= 'desc';
		b.subforms			= 0;
		b.tab_start      	= [];
		b.username			= '';
		b.user_id			= '';
		
		this.breadcrumbs.push(b);
		
		return this.getCurrent();
		
	}

	setProperty(f, v) {
		this.breadcrumbs[this.breadcrumbs.length -1][f] = v;
	}
	

	getProperty(f) {
		return this.breadcrumbs[this.breadcrumbs.length - 1][f];
	}
	
	dataType(t, f){
		
		var tab	= this.tableSchema[t];
		
		for(var i = 0 ; i < tab.length ; i++){
			
			if(tab[i][0] == f){
				return tab[i][1];
			}
		}
	
	}
	
	tablesFromSQL(sql){
		
		var t		= [];
		var tables	= this.getTables();
		sql			= sql + ' ';
		sql			= sql.replace(/[\n\r]/g, ' ');
		
		for(var i = 0 ; i < tables.length ; i++){
			
			if(sql.indexOf(' ' + tables[i] + ' ') != -1){
				t.push(tables[i]);
			}
			
		}
		
		return t;
	
	}
	
	formFields(t){
		
		var tab	= this.formSchema[t];
		var fld	= [];
		
		if(tab === undefined){
			return fld;
		}
		
		
		for(var i = 0 ; i < tab.length ; i++){
			fld.push(tab[i]);
		}
		
		return fld;
	
	}
	
	tableFields(t){
		
		var tab	= this.tableSchema[t];
		var fld	= [];
		
		if(tab === undefined){
			return fld;
		}
		
		
		for(var i = 0 ; i < tab.length ; i++){
			fld.push(tab[i]);
		}
		
		return fld;
	
	}
	
	
	SQLFields(sql){										//-- sfo_browse_sql

		var tab		= this.tablesFromSQL(sql);
		var fld		= [];
		
		for(var i = 0 ; i < tab.length ; i++){
			
			var f	= nuFORM.tableSchema[tab[i]].names;
			fld		= fld.concat(f);
			
		}
		
		return fld;
	
	}
	
	
	selectFields(){									//-- from SELECT builder

		var fld		= [];
		
		$('#sqlframe').contents().find('.nuBox').each(function(index) {
			
			var b	= $(this)[0].id;
			var a	= $('#sqlframe').contents().find('#alias' + b).val();
			var t	= $('#sqlframe').contents().find('#tablename' + b).html();
			
			if(a == ''){
				a	= t;
			}
			
			var f	= nuFORM.tableSchema[t].names;
			
			for(var i = 0 ; i < f.length ; i ++){
				fld.push(a + '.' + f[i]);
			}
			
			
		});
		
		return fld;
	
	}
	
	
	relationshipFields(){

		var t		= [];
		var fld		= [];

		$('.nuBox').each(function(index) {
			
			var b	= $(this)[0].id;
			var T	= $('#tablename' + b).val();
			var A	= $('#alias' + b).val();
			
			t.push({'tablename' : T, 'alias' : A});
			
		});

		for(var i = 0 ; i < t.length ; i++){
			
			var f	= nuFORM.tableSchema[t[i].tablename].names;
			
			for(var I = 0 ; I < f.length ; I ++){
				fld.push(t[i].alias + '.' + f[I]);
			}
			
		}
		
		return fld;
	
	}
	
	getForms(){
	
		var forms	= [];
		
		for (var key in nuFORM.formSchema) {

			if (nuFORM.formSchema.hasOwnProperty(key)) {
				forms.push(key) 
			}
			
		}
		
		return forms;
		
	}
	
	getTables(){
	
		var tables	= [];
		
		for (var key in nuFORM.tableSchema) {

			if (nuFORM.tableSchema.hasOwnProperty(key)) {
				tables.push(key) 
			}
			
		}
		
		return tables;
		
	}
	
	getJustTables(){
	
		var tables	= [];
		
		for (var key in nuFORM.tableSchema) {

			if (nuFORM.tableSchema.hasOwnProperty(key)) {
				
				if(nuSERVERRESPONSE.viewSchema.indexOf(key) == -1){
					tables.push(key);
				}
			}
			
		}
		
		return tables;
		
	}
	
	calc(field){
		
		if(field.split('.').length == 2){
			
			var subform_name	= field.split('.')[0];
			var field_name		= field.split('.')[1];
			
		}else{
			
			var o				= $('#' + field);
			var f				= o.attr('data-nu-format');
			var v				= o.val();
			
			return nuFORM.removeFormatting(v, f);
			
		}

		var d				= this.data();											//-- an array of all data as subforms (the mainform is the first element)
		var v				= 0;
		var u				= 0;
		
		for(var i =  0 ; i < d.length ; i++){
			
			var SF			= d[i];
			
			if(SF.id == subform_name){												//-- i've got the right subform
			
				var fmt		= $("[id$='" + field_name + "']input[id^='" + subform_name + "']").attr('data-nu-format')			
				var f		= SF.fields.indexOf(field_name);						//-- check for valid field(column)
				
				if(f == -1){return 0;}
				
				for(var c = 0 ; c < SF.rows.length ; c++){

					if(SF.deleted[c] == 0){										//-- add up only stuff not being deleted
						
//						u	= nuFORM.removeFormatting(SF.rows[c][f], fmt);
						u	= SF.rows[c][f];
						v	= parseFloat(Number(v) + Number(u)).toPrecision(10)
						
					}
					
				}
				
				return Number(v);
				
			}
		}
		
		return 0;
	
	}
	
	data(action = 'save'){
		
		var d					= [];
		var sf					= this.subforms();

		for(var i = 0 ; i < sf.length ; i++){
			
			var o				= this.subform(sf[i], action);
			
			o.columns			= null;
			o.chartData			= null;
			o.chartDataPivot	= null;
			
			d.push(o);
			
		}
		
		return d;
		
	}
	
	subforms(){
		
		var s	= [''];
			
		$("[data-nu-subform='true']").each(function(index) {
			s.push($(this)[0].id);
		});
		
		return s;

	}

	subform(sf, action = 'save'){

		var id			= sf;
		var deleteAll	= action == 'delete';
		
		if(sf == ''){
			
			id			= 'nuBuilder4EditForm';
			var oi		= 	-1;
			var fk		= '';
			var pk		= $('#nuRECORD').attr('data-nu-primary-key-name');
			var table	= $('#nuRECORD').attr('data-nu-table');
			var sel		= '#nuRECORD';
			var sf		= 'nuRECORD';
			
			if(table === undefined){
				oi		= parent.nuFORM.getCurrent().form_id;
			}else{
				oi		= nuFORM.getCurrent().form_id;
			}
		
		}else{
			
			var sel		= "[id*='" + sf + "'][id*='nuRECORD']";
			var table	= $(sel).attr('data-nu-table');
			var oi		= $('#' + sf).attr('data-nu-object-id');
			var fk		= $('#' + sf).attr('data-nu-foreign-key-name');
			var pk		= $('#' + sf).attr('data-nu-primary-key-name');
			var nd		= $('#' + sf).attr('data-nu-delete');
			var na		= $('#' + sf).attr('data-nu-add');

		}
		
		var o			= {'id':id, 'foreign_key':fk, 'primary_key':pk, 'object_id':oi, 'table':table, 'action':action};	//-- foreign_key id id Form's record_id (which might change if cloned.)
		var F			= ['ID'];
		o.rows			= [];
		o.columns		= [];
		o.chartData		= [];
		o.chartDataPivot= [];
		o.edited		= [];
		o.deleted		= [];
		var deleteRow	= false;
		
		$(sel).each(function(index){
			
			var THIS			= $(this);
			var dnpk			= $(this).attr('data-nu-primary-key')
			var V				= [dnpk];
			var E				= [0];
			var C				= 1;
			var chk				= $('#' + this.id).prop("checked");

			THIS.children('[data-nu-data]').each(function(){
				
				if(this.id.substr(-8) == 'nuDelete'){
					chk			=($('#' + this.id).prop("checked") || deleteAll) ? 1 : 0 ;
				}

				
				if(sf == 'nuRECORD'){						//-- the main Form
					F[C]		= this.id;
				}else{
					F[C]		= this.id.substr(sf.length + 3);
				}
				
				var dnf			= $('#' + this.id).attr('data-nu-format');
				var typ			= $('#' + this.id).attr('type');
				var val			= $('#' + this.id).val();

				if(typ == 'checkbox'){
					val			= $('#' + this.id).prop("checked") ? 1 : 0 ;
				}
				
				if(typeof($('#' + this.id).val()) == 'object'){						//-- multi SELECT Object
					val			= JSON.stringify($('#' + this.id).val());
				}
				
				V[C]			= nuFORM.removeFormatting(val, dnf);
				E[C]			= $('#' + this.id).hasClass('nuEdited') ? 1 : 0 ;

				C++;
				
			});
			
			o.rows.push(V);
			o.edited.push(E);
			o.deleted.push(chk);
			
		});
		
		o.fields				= F;
		var titles				= [];

		
		for(var f = 0 ; f < o.fields.length - 1 ; f++){
			
			var c				= [];
			var d				= 0;
			
			titles.push($('#title_' + sf + o.fields[f]).html())
			
			for(var r = 0 ; r < o.rows.length ; r++){
				
				if(o.rows[r][o.fields.length - 1] == 0){
					c.push(o.rows[r][f]);
				}
				
			}
			
			o.columns.push(c);
		
		}
		
		for(var i = 0 ; i < o.rows.length ; i++){
			
			var row				= JSON.parse(JSON.stringify(o.rows[i]));
			
			row.shift();
			row.pop();
			
			if(o.deleted[i] == 0){
				
				for(var ro = 0 ; ro < row.length ; ro++){
					
					if(ro != 0){
						row[ro]	= Number(row[ro]);
					}
					
				}
				
				o.chartData.push(row);
			}
			
		}

		titles.shift();
		o.chartData.splice(0,0, titles);
		
		for(var i = 0 ; i < o.chartData[0].length ; i++){
			
			row					= [];

			for(var p = 0 ; p < o.chartData.length ; p++){
				row.push(o.chartData[p][i]);
			}
			
			o.chartDataPivot.push(row);
			
		}
		
		if(nd == 0){								//-- no deleting allowed
		
			for(var i = 0 ; i < o.rows.length ; i ++){
				o.deleted[i]	= 0;
			}
			
			if(na == 1){
				o.deleted[o.deleted.length - 1]	= 1;
			}
			
		}
		
		return o;
		
	}	
	
	

	setFormats(){
		
		var f	= {};

		f['01']		= {'mmm' : 'Jan', 'mmmm' : 'January',	'mm' : '01' , 'm' : '1',  'jsmonth' : 0};
		f['02']		= {'mmm' : 'Feb', 'mmmm' : 'February',	'mm' : '02' , 'm' : '2',  'jsmonth' : 1};
		f['03']		= {'mmm' : 'Mar', 'mmmm' : 'March', 	'mm' : '03' , 'm' : '3',  'jsmonth' : 2};
		f['04']		= {'mmm' : 'Apr', 'mmmm' : 'April', 	'mm' : '04' , 'm' : '4',  'jsmonth' : 3};
		f['05']		= {'mmm' : 'May', 'mmmm' : 'May',		'mm' : '05' , 'm' : '5',  'jsmonth' : 4};
		f['06']		= {'mmm' : 'Jun', 'mmmm' : 'June',		'mm' : '06' , 'm' : '6',  'jsmonth' : 5};
		f['07']		= {'mmm' : 'Jul', 'mmmm' : 'July',		'mm' : '07' , 'm' : '7',  'jsmonth' : 6};
		f['08']		= {'mmm' : 'Aug', 'mmmm' : 'August', 	'mm' : '08' , 'm' : '8',  'jsmonth' : 7};
		f['09']		= {'mmm' : 'Sep', 'mmmm' : 'September',	'mm' : '09' , 'm' : '9',  'jsmonth' : 8};
		f['10']		= {'mmm' : 'Oct', 'mmmm' : 'October', 	'mm' : '10' , 'm' : '10', 'jsmonth' : 9};
		f['11']		= {'mmm' : 'Nov', 'mmmm' : 'November', 	'mm' : '11' , 'm' : '11', 'jsmonth' : 10};
		f['12']		= {'mmm' : 'Dec', 'mmmm' : 'December', 	'mm' : '12' , 'm' : '12', 'jsmonth' : 11};

		f.Jan		= {'mmm' : 'Jan', 'mmmm' : 'January',	'mm' : '01' , 'm' : '1',  'jsmonth' : 0};
		f.Feb		= {'mmm' : 'Feb', 'mmmm' : 'February',	'mm' : '02' , 'm' : '2',  'jsmonth' : 1};
		f.Mar		= {'mmm' : 'Mar', 'mmmm' : 'March', 	'mm' : '03' , 'm' : '3',  'jsmonth' : 2};
		f.Apr		= {'mmm' : 'Apr', 'mmmm' : 'April', 	'mm' : '04' , 'm' : '4',  'jsmonth' : 3};
		f.May		= {'mmm' : 'May', 'mmmm' : 'May',		'mm' : '05' , 'm' : '5',  'jsmonth' : 4};
		f.Jun		= {'mmm' : 'Jun', 'mmmm' : 'June',		'mm' : '06' , 'm' : '6',  'jsmonth' : 5};
		f.Jul		= {'mmm' : 'Jul', 'mmmm' : 'July',		'mm' : '07' , 'm' : '7',  'jsmonth' : 6};
		f.Aug		= {'mmm' : 'Aug', 'mmmm' : 'August', 	'mm' : '08' , 'm' : '8',  'jsmonth' : 7};
		f.Sep		= {'mmm' : 'Sep', 'mmmm' : 'September',	'mm' : '09' , 'm' : '9',  'jsmonth' : 8};
		f.Oct		= {'mmm' : 'Oct', 'mmmm' : 'October', 	'mm' : '10' , 'm' : '10', 'jsmonth' : 9};
		f.Nov		= {'mmm' : 'Nov', 'mmmm' : 'November', 	'mm' : '11' , 'm' : '11', 'jsmonth' : 10};
		f.Dec		= {'mmm' : 'Dec', 'mmmm' : 'December', 	'mm' : '12' , 'm' : '12', 'jsmonth' : 11};

		f.January	= {'mmm' : 'Jan', 'mmmm' : 'January',	'mm' : '01' , 'm' : '1',  'jsmonth' : 0};
		f.February	= {'mmm' : 'Feb', 'mmmm' : 'February',	'mm' : '02' , 'm' : '2',  'jsmonth' : 1};
		f.March		= {'mmm' : 'Mar', 'mmmm' : 'March', 	'mm' : '03' , 'm' : '3',  'jsmonth' : 2};
		f.April		= {'mmm' : 'Apr', 'mmmm' : 'April', 	'mm' : '04' , 'm' : '4',  'jsmonth' : 3};
		f.May		= {'mmm' : 'May', 'mmmm' : 'May',		'mm' : '05' , 'm' : '5',  'jsmonth' : 4};
		f.June		= {'mmm' : 'Jun', 'mmmm' : 'June',		'mm' : '06' , 'm' : '6',  'jsmonth' : 5};
		f.July		= {'mmm' : 'Jul', 'mmmm' : 'July',		'mm' : '07' , 'm' : '7',  'jsmonth' : 6};
		f.August	= {'mmm' : 'Aug', 'mmmm' : 'August', 	'mm' : '08' , 'm' : '8',  'jsmonth' : 7};
		f.September	= {'mmm' : 'Sep', 'mmmm' : 'September',	'mm' : '09' , 'm' : '9',  'jsmonth' : 8};
		f.October	= {'mmm' : 'Oct', 'mmmm' : 'October', 	'mm' : '10' , 'm' : '10', 'jsmonth' : 9};
		f.November	= {'mmm' : 'Nov', 'mmmm' : 'November', 	'mm' : '11' , 'm' : '11', 'jsmonth' : 10};
		f.December	= {'mmm' : 'Dec', 'mmmm' : 'December', 	'mm' : '12' , 'm' : '12', 'jsmonth' : 11};

		f.Sun		= {'ddd' : 'Sun', 'dddd' : 'Sunday', 	'dd' : '01', 	'd' : '1'};
		f.Mon		= {'ddd' : 'Mon', 'dddd' : 'Monday', 	'dd' : '02', 	'd' : '2'};
		f.Tue		= {'ddd' : 'Tue', 'dddd' : 'Tueday', 	'dd' : '03', 	'd' : '3'};
		f.Wed		= {'ddd' : 'Wed', 'dddd' : 'Wednesday',	'dd' : '04', 	'd' : '4'};
		f.Thu		= {'ddd' : 'Thu', 'dddd' : 'Thursday', 	'dd' : '05', 	'd' : '5'};
		f.Fri		= {'ddd' : 'Fri', 'dddd' : 'Friday', 	'dd' : '06', 	'd' : '6'};
		f.Sat		= {'ddd' : 'Sat', 'dddd' : 'Saturday', 	'dd' : '07', 	'd' : '7'};

		f.Sunday	= {'ddd' : 'Sun', 'dddd' : 'Sunday', 	'dd' : '01', 	'd' : '1'};
		f.Monday	= {'ddd' : 'Mon', 'dddd' : 'Monday', 	'dd' : '02', 	'd' : '2'};
		f.Tuesday	= {'ddd' : 'Tue', 'dddd' : 'Tueday', 	'dd' : '03', 	'd' : '3'};
		f.Wednesday	= {'ddd' : 'Wed', 'dddd' : 'Wednesday',	'dd' : '04', 	'd' : '4'};
		f.Thursday	= {'ddd' : 'Thu', 'dddd' : 'Thursday', 	'dd' : '05', 	'd' : '5'};
		f.Friday	= {'ddd' : 'Fri', 'dddd' : 'Friday', 	'dd' : '06', 	'd' : '6'};
		f.Saturday	= {'ddd' : 'Sat', 'dddd' : 'Saturday', 	'dd' : '07', 	'd' : '7'};

		return f;
		
	}
	
	addFormatting(v, f){

		
		if(v == undefined)	{return '';}
		if(v == null)		{return '';}
		if(f == undefined)	{return v;}
		if(f == '')			{return v;}
		if(v == '')			{return v;}
		
		v				= String(v);
		f				= String(f);
		
		if(f[0] == 'N'){									//-- number  '456.789','N|€ 1,000.00'

			var F		= nuNumberFormat(f);
			v			= v.replace(F.decimal, '.');

			if(isNaN(Number(v))){return '';}

			var o		= v.split('.');
			var h		= nuAddThousandSpaces(o[0], F.separator);
			
			var d		= o.length==1?'':o[1];
			var p		= F.sign + ' ' + h + F.decimal;
			var s		= String(d + String(0).repeat(100)).substr(0, F.places).trim();

			if(String(h) == 'toobig' && nuSERVERRESPONSE.access_level_code == ''){
				nuMessage(["What did we say ?",'','<img id="thebig" src="graphics\\point.png">']);return '';
			}
			
			return String(p + s).trim();
		
		}
		
		if(f[0] == 'D'){	//-- date

			if(String(v.split(' ')[0]) == '0000-00-00'){return '';}
			if(v == ''){return '';}
			
			var FMT		= this.setFormats();
			var d		= String(v.split(' ')[0]).split('-');
			var t		= String(v.split(' ')[1]).split(':');

			if(t[0] == 'undefined'){
				var t	= [0, 0, 0];
			}
			
			var o 		= new Date(d[0], d[1]-1, d[2], t[0], t[1], t[2], 0);			//-- (year, month, day, hours, minutes, seconds, milliseconds)
			
			if(o =='Invalid Date'){return '';}
			
			var wee		= o.toString().split(' ')[0];								//-- Tue Sep 07 2004 11:11:12 GMT+0930 (Cen. Australia Standard Time)
			var mth		= o.toString().split(' ')[1];
			var day		= o.toString().split(' ')[2];
			var yea		= o.toString().split(' ')[3];
			var hou		= String(o.toString().split(' ')[4]).split(':')[0];
			var min		= String(o.toString().split(' ')[4]).split(':')[1];
			var sec		= String(o.toString().split(' ')[4]).split(':')[2];
			
			var s		= String(f);
			
			if(Number(hou) > 11){
				
				s		= s.replaceAll('pp', 	'pm');
				s		= s.replaceAll('PP', 	'PM');
				
			}else{
				
				s		= s.replaceAll('pp', 	'am');
				s		= s.replaceAll('PP', 	'AM');

			}
			
			s			= s.replaceAll('yyyy',		yea);
			s			= s.replaceAll('yy',		String(yea).substr(2));
			s			= s.replaceAll('mmmm',		FMT[mth]['mmmm']);
			s			= s.replaceAll('mmm',		FMT[mth]['mmm']);
			s			= s.replaceAll('mm',		FMT[mth]['mm']);
			s			= s.replaceAll('dddd',		FMT[wee]['dddd']);
			s			= s.replaceAll('ddd',		FMT[wee]['ddd']);
			s			= s.replaceAll('dd',		day);
			s			= s.replaceAll('hh',	 	hou);
			s			= s.replaceAll('nn',		min);
			s			= s.replaceAll('ss', 		sec);
			
			return s.substr(2);
			
		}
		
		return v;
		
	}

	
	removeFormatting(v, f){
		
		if(v == undefined)	{return '';}
		if(f == undefined)	{return v;}
		if(f == '')			{return v;}
		if(v == '')			{return v;}
		
		v				= String(v);
		f				= String(f);

		if(f[0] == 'N'){										//-- number
		
			var F		= nuNumberFormat(f);
			
			v			= v.replaceAll(F.separator, '')
			
			if(F.decimal.length == 1){
				v	= v.replace(F.decimal, '.')
			}
			
			var sign	= '';
			
			if(v.split(' ').length == 2){
				sign	= v.split(' ')[0];
			}
			
			var bits	= v.split('.');

			if(bits.length == 1){bits.push('');}

			bits[0]		= String(bits[0]).replace(sign, '') + (F.places==0?'':'.');
			bits[1]		= String(bits[1]).substr(0, F.places)
			
			return String(bits[0] + bits[1]).trim();
			
		}

		if(f[0] == 'D'){										//-- date
			
			if(f.substr(0, 10) == '0000-00-00'){
				return '';
			}
			
			var FMT		= this.setFormats();
			var hasTime	= f.indexOf('hh') != -1 || f.indexOf('nn') != -1 || f.indexOf('ss') != -1; 	//-- looking for the time
			
			v			= String(v)
							.replaceAll(':', ' ')
							.replaceAll('/', ' ')
							.replaceAll('.', ' ')
							.replaceAll('-', ' ')
							.replaceAll(',', ' ')
							.split(' ');
							
			f			= String(f)
							.substr(2)
							.replaceAll(':', ' ')
							.replaceAll('/', ' ')
							.replaceAll('.', ' ')
							.replaceAll('-', ' ')
							.replaceAll(',', ' ')
							.split(' ');
							
							
			var o 		= Date().toString().split(' ', 6)								//-- Tue Sep 07 2004 11:11:12 GMT+0930 (Cen. Australia Standard Time)
			var time	= String(o[4]).split(':');
			
			var d		= {'y' : o[3], 'm' : FMT[o[1]].jsmonth, 'd' : o[2], 'h' : time[0], 'n' : time[1], 's' : time[2]};	//-- today's date
			for(var i = 0 ; i < f.length ; i++){
				
				var fmt	= String(f[i]);
				var l	= fmt[0];
				
				if(l == 'm' && FMT[v[i]] !== undefined){
					d.m		= FMT[v[i]]['mm'];					//-- javascript month
				}
				
				if(fmt == 'dd'){
					d.d		= v[i];
				}
				if(l == 'y'){
					d.y 	= v[i];
				}
				
				if(l == 'h'){d.h = v[i];}
				if(l == 'n'){d.n = v[i];}
				if(l == 's'){d.s = v[i];}
				
			}
			
			var o 	= new Date(d.y, Number(d.m) - 1, d.d, Number(d.h), Number(d.n), Number(d.s), 0);
			var y	= String(o.getFullYear()) 	+ '-';
			var m	= nuPad2(o.getMonth() + 1)	+ '-';
			var a	= nuPad2(o.getDate())		+ ' ';
			var h	= nuPad2(o.getHours()) 		+ ':';
			var n	= nuPad2(o.getMinutes()) 	+ ':';
			var s	= nuPad2(o.getSeconds());

			if(hasTime){
				return  String(y+m+a+h+n+s);
			}else{
				return  String(y+m+a).trim();
			}
			
		}
		
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

class nuSelectObject{
	
	constructor() {
		
		this.boxID		= '';
		this.table		= '';
		this.joins		= [];
		this.boxes		= [];
		this.tempTables	= [];
		this.tempJoins	= [];
		
	}
	

	addBox(t, id){

		this.table		= t;
		var s			= parent.nuFORM.tableSchema;
		var n			= s[t].names;
		var p			= s[t].types;
		var i			= arguments.length == 1 ? nuID() : String(id).substr(3);
		this.boxID		= 'box' + i;
		this.scrollID	= 'scroll' + i;
		var w			= this.boxWidth(s, t);
		var box			= document.createElement('div');		//-- box

		this.boxes.push(this.boxID);		
		
		box.setAttribute('id', this.boxID);
		$('body').append(box);
		$('#' + this.boxID).css({
			'width'        		: w,
			'height'       		: Math.min(20 + (n.length * 20), 190),
			'top'				: 25 + (25 * $('.nuBox').length),
			'left'				: 22 + (22 * $('.nuBox').length),
			'position'			: 'absolute',
			'border'			: 'solid grey 1px',
			'overflow'			: 'hidden',
			'padding-top'		: '5px',
			'background-color'	: 'darkgrey',
			'z-index'			: -1,
		})
		.addClass('nuBox')
		.addClass('nuDragNoSelect')
		.addClass('nuBoxHeader')
		.addClass('nuBoxShadow');
		
		
		var scroll	= document.createElement('div');			//-- scroll

		scroll.setAttribute('id', this.scrollID);
		
		$('#' + this.boxID).append(scroll);
		$('#' + scroll.id).css({
			'width'        		: w,
			'height'       		: Math.min(20 + (n.length * 20), 175),
			'top'				: 22,
			'left'				: 0,
			'overflow'			: 'scroll',
			'overflow-x'		: 'hidden',
			'line-height'		: 1,
		})
		.addClass('nuDragNoSelect')
		.addClass('nuBoxHeader');

		var tbl	= document.createElement('div');				//-- tablename

		tbl.setAttribute('id', 'tablename' + this.boxID);
		
		$('#' + this.boxID).append(tbl);
		
		$('#' + tbl.id)
		.css({
			'position'			: 'absolute',
			'width'				: 280,
			'height'			: 15,
			'top'				: 2,
			'left'				: 0,
			'padding-left'		: 22,
			'text-align'		: 'left',
			'border' 			: 'none',
			'font-weight'		: 'bold',
			'background-color'	: 'darkgrey',
		})
		.html(t)
		.addClass('nuDragNoSelect')
		.addClass('nuTableName')
		.addClass('nuBoxTitle');
		
		var bck	= document.createElement('input');								//-- checkbox all

		bck.setAttribute('id', 'checkall' + this.boxID);
		
		$('#' + this.boxID).append(bck);
		
		$('#' + bck.id)
		.css({
			'position'			: 'absolute',
			'width'				: 20,
			'top'				: 2,
			'left'				: -1,
		})
		.attr('type', 'checkbox')
		.attr('onchange', 'window.nuSQL.buildSQL("table","' + this.boxID + '")')
		.prop('checked', true);
		
		var col	= document.createElement('input'); 								//-- table alias

		col.setAttribute('id', 'alias' + this.boxID);
		
		$('#' + this.boxID).append(col);
		
		$('#' + col.id)
		.css({
			'position'			: 'absolute',
			'width'				: 30,
			'top'				: 2,
			'right'				: 18,
			'background-color'	: 'darkgrey',
		})
		.change(function(){
			nuSQL.buildSQL();
		})
		
		for(var rows = 0 ; rows < n.length ; rows++){								//-- add field list
			this.boxRow(rows, n[rows], p[rows], w);
		}

		var x 	= document.createElement('div');									//-- close box
		
		x.setAttribute('id', 'nuBoxClose' + this.boxID);
		
		$('#' + this.boxID).append(x);
		
		$('#' + x.id).css({
			'width'				: 16,
			'height'			: 15,
			'top'				: 3,
			'right'				: 1,
			'position'			: 'absolute',
			'color'				: 'black',
			'text-align'    	: 'center',
		})
		.html('<img onclick="$(this).parent().parent().remove();nuSQL.buildSQL()" id="nbc' + this.boxID + '" src="graphics/nu_box_close.png" width="10px" height="10px">')
		.addClass('nuDragNoSelect')
		.addClass('nuButtonHover')
		.addClass('nuClose');
		
	}

	buildSQL(c, b){

		if(parent.$('#sse_edit').val() == 1){return;}

		nuAngle();
	
		var s 	= this.buildSelect(c, b);
		var f	= this.buildFrom();
		var c	= this.buildClauses();
		
		parent.$('#sse_sql')
		.val(s + f + c + "\n")
		.change();
		
		parent.$('#sse_json')
		.val(this.buildJSON())
		.change();


		if(parent.$('#nuSaveToTextareaButton').length == 1){
			
			parent.$('#nuSaveToTextareaButton').hide();
			parent.$('#nuSaveButton').show();
			
		}
	}
	
	buildSelect(c, b){				//-- checkbox type, boxID
	
		if(c == 'field'){
			
			$('#checkall' + b)
			.prop('checked', false);
			
		}
		
		if(c == 'table'){
			
			$('.checkfield.' + b)
			.prop('checked', false);
			
		}
		
		var	s		= [];
		
		for(var i = 0 ; i < this.boxes.length ; i++){
			
			var b				= this.boxes[i];
			
			if($('#' + b).length == 1){
				
				var t			= $('#tablename' + b).html();
				var a			= $('#alias' + b).val();
				var u			= a == '' ? t : a;
				var T			= this.justAlias(t, a);

				
				if($('#checkall' + b).is(':checked')){
					s.push(T + '.*');
				}else{
					
					$('.checkfield.' + b).each(function(index){
						
						var f	= 'field' + $(this)[0].id.substr(6);
						
						if($(this).is(':checked')){
							
							var box 	= String($(this)[0].id).split('_')[2];
							var alias 	= $('#alias' + box).val();
							
							if(alias == undefined || alias == ''){
								s.push(T + '.' + $('#' + f).html());
							}else{
								s.push(T + '.' + $('#' + f).html() + ' AS ' + T + '_' + $('#' + f).html());
							}
						}
						
					});

				}
				
			}
			
		}
		
		var SQL	= "SELECT\n    " + s.join(',\n    ') + "\n";
		
		return SQL;
		
	}
	
	buildFrom(){
			
		var THIS			= this;
		this.tempTables		= this.usedTables();
		this.tempJoins		= this.getJoinObjects();													//-- current visible joins

		for(var i = 0 ; i < this.tempTables.length ; i++){

			if(this.tempTables[i].used != -1){
		
				var f		= this.tempTables.sort(torder);
				var more	= true;
				var t		= this.tempTables[i].table;
				var a		= this.tempTables[i].alias;
				var A		= this.fromAlias(f[0].table, f[0].alias);
				var defined	= [A, a];												//-- growing list of used tables
				var ob		= {};
				var s		= '';
				var F		= [];
				
				while(more){
					
					var q	= this.getJoinObject(defined);
					ob		= q[1];
					more	= q[0];
					
					if(more){
						
						var a1		= ob.type == 'LEFT' ? "\n        LEFT JOIN " :  "\n        JOIN ";
						
						var a		= this.justAlias(ob.tables[0], ob.aliases[0]);
						
						if(defined.indexOf(A) == -1 || defined.indexOf(a) == -1){
							
							var a2	= this.buildAlias(ob.tables[0], ob.aliases[0]);
							A		= this.justAlias(ob.tables[0], ob.aliases[0]);
							
						}else{
							
							var a2	= this.buildAlias(ob.tables[1], ob.aliases[1]);
							A		= this.justAlias(ob.tables[1], ob.aliases[1]);
							
						}
						
						defined.push(A);
						defined.push(a);
							
						this.markTableAsUsed(ob.tables[0], ob.aliases[0]);
						this.markTableAsUsed(ob.tables[1], ob.aliases[1]);
						
						var a3		= ob.joins.join(' AND ');
						
						this.tempTables[i].joins.push(a1 + a2 + ' ON ' + a3);
						
					}
					
				}
			}
			
		}
		
		
		var torder 		= function(b, a){
			return (a.joins.length < b.joins.length);
		}

		var f			= this.tempTables.sort(torder);
		var F			= [];
		
		for(var i = 0 ; i < f.length ; i++){
			
			if(f[i].joins.length > 0 || f[i].used != -1){
				
				var a	= this.fromAlias(f[i].table, f[i].alias);
				var j	= f[i].joins.join("");
				
				F.push("\n    " + a + j);
				
			}
			
		}
		
		return "\nFROM" + F;
		
	}
	
	markTableAsUsed(t, a){

		for(var i = 0 ; i < this.tempTables.length ; i++){
			
			if(this.tempTables[i].table == t || this.tempTables[i].alias == a){
				
				this.tempTables[i].used	= -1;
				
				return;
				
			}
			
		}
		
	}


	usedTables(){
		
		var T			= [];
		var THIS		= this;
		this.tempJoins	= this.getJoinObjects();													//-- current visible joins
		
		$('.nuBox').each(function(index){
			
			var b		= $(this)[0].id;
			var t		= $('#tablename' + b).html();
			var a		= $('#alias' + b).val();
			var u		= 0;
			
			for (var k in THIS.joins){
			
				var o	= THIS.joins[k];
				
				if(o.fromalias == a || o.fromtable == t || o.toalias == a || o.totable == t){u ++;}
				
			}

			T.push({'table' : t, 'alias' : THIS.justAlias(t,a), 'used' : u, 'joins' : []});
			
		});
		
		
		var uses 		= function(b, a){
			return (b.used < a.used);
		}
		
		T.sort(uses);
		
		return T;
		
	}

	
	getJoinObject(a){
	
		var tj		= this.tempJoins;
		var aList	= [];
		
		for(var i = 0 ; i < a.length ; i++){
			
			var s	= a[i].split(' ');
			
			aList.push(s[0]);
			aList.push(s[s.length - 1]);
		}
		
		for(var i = 0 ; i < tj.length ; i++){
			
			var o	= tj[i];
			
			var j	= this.justAlias(o.tables[0], o.aliases[0]);
			var J	= this.justAlias(o.tables[1], o.aliases[1]);
			
			if(aList.indexOf(j) != -1 || aList.indexOf(J) != -1){
				
				var r	= this.tempJoins.splice(i, 1);
				
				return [true,o];
				
			}
			
		}
		
		return [false,{}];
		
	}

	
	
	
	getJoinObjects(){
		
		var r		= this.joins;													//-- JOIN
		var j		= [];
		var J		= [];
			
		for (var k in r){
		
			var R	= r[k];
			var T	= R.fromtable;
			var t	= R.totable;
			var A	= R.fromalias;
			var a	= R.toalias;
			var B	= this.justAlias(R.fromtable, R.fromalias);
			var b	= this.justAlias(R.totable, R.toalias);
			var n	= String(B + '.' + R.fromfield +  ' = ' + b + '.' + R.tofield);
			var id	= [B, b].sort().join('--');
			
			if(j[id] === undefined){
				
				j[id]	= {
					'tables' 	: [T, t], 
					'aliases' 	: [A, a], 
					'type' 		: R.join, 
					'joins' 	: [n],
					'used'		: false
				};
				
			}else{
				j[id].joins.push(n);
				
				if(R.type == 'LEFT'){
					R.type = 'LEFT';
				}
				
			}
			
		}
			
		for (var k in j){
			J.push(j[k]);
		}
		
		return J;
		
	}


	fromAlias(t, a){

		if(a == t){
			return t;
		}else{
			return t + ' AS ' + a;
		}
		
	}

	buildAlias(t, a){

		if(a == ''){
			return t;
		}else{
			return t + ' AS ' + a;
		}
		
	}
	

	justAlias(t, a){
		
		if(a == ''){
			return t;
		}else{
			return a;
		}
		
	}
	

	refreshJoins(r){										//-- build objects to draw relationship lines  from
	
		this.joins	= [];
		
		for (var k in r){
			
			var I		= String(k).split('--')[0];
			var i		= String(k).split('--')[1];

			var B		= String(I).split('_')[2];
			var b		= String(i).split('_')[2];

			var T		= $('#tablename' + B).html();
			var A		= $('#alias' + B).val();
			var F		= $('#' + I).html();
			
			var t		= $('#tablename' + b).html();
			var a		= $('#alias' + b).val();
			var f		= $('#' + i).html();
			
			var o	= 	{
				
						'from' 		: I, 
						'fromtable'	: T,
						'fromalias'	: A,
						'fromfield' : F, 

						'to' 		: i, 
						'totable'	: t,
						'toalias'	: a,
						'tofield' 	: f, 

						'join' 		: r[k],
						
						};
						
			this.joins[I + '--' + i]	= o;

		}

	}

	
	buildClauses(){
		
		var o 		= function(b, a){														//-- used to order clauses
			return (b[1] + 10000 + Number(b[4])) - (a[1] + 10000 + Number(a[4]));
		}
		
		var T		= '';
		var F		= '';
		var C		= '';
		var S		= '';
		var WHERE	= [];
		var ORDERBY	= [];
		var GROUPBY	= [];
		var HAVING	= [];
		var c		= parent.nuFORM.subform('zzzzsys_select_clause_sf').rows;

		c.sort(o);

		var clauses	= '';
		
		for(var i = 0 ; i < c.length ; i++){
			
			var T	= c[i][1];
			var F	= c[i][2];
			var C	= c[i][3];
			var S	= c[i][4];
			var D	= c[i][6];
			var cl	= F != '' && C != '';			//-- valid statement for WHERE and HAVING
			var gr	= F != '' && S != '';			//-- valid statement for ORDER BY and GROUP BY

			if(D == 0){
				
				if(T == 1 && cl){WHERE.push('(' + F + ' ' + C + ')');}
				if(T == 4 && cl){HAVING.push('(' + F + C + ')');}
				if(T == 2 && gr){GROUPBY.push(F + ' ' + S);}
				if(T == 3 && gr){ORDERBY.push(F + ' ' + S);}
				
			}

		}

		if(WHERE.length > 0){clauses	+= "\n\nWHERE\n    ("	+ WHERE.join(" AND \n    ") 	+ ")\n";}
		if(GROUPBY.length > 0){clauses	+= "\nGROUP BY\n    " 	+ GROUPBY.join(",\n    ") 		+ "\n";}
		if(HAVING.length > 0){clauses	+= "\nHAVING\n    " 	+ HAVING.join(" AND \n    ") 	+ "\n";}
		if(ORDERBY.length > 0){clauses	+= "\nORDER BY\n    " 	+ ORDERBY.join(",\n    ") 		+ "\n";}

		return clauses;
		
	}


	boxWidth(s, t){
		
		var s	= parent.nuFORM.tableSchema
		var n	= s[t].names;
		var w	= nuGetWordWidth(t) + 130;
		
		for(var i = 0 ; i < s[t].names.length ; i++){
			w	= Math.max(w, nuGetWordWidth(s[t].names[i]));
		}
		
		return w;

	}
	

	boxRow(i, v, t, w){
			
		this.boxColumn('select', i, 0, 	18,	v, '');
		this.boxColumn('field', i, 22, 	300,v,  t, w);
		
	}
	
	
	boxColumn(c, t, l, w, v, title){

		var suf		= '_' + t + '_' + this.boxID;

		if(c == 'select'){
			var col	= document.createElement('input');
		}else{
			var col	= document.createElement('span');
		}
		
		col.setAttribute('id', c + suf);
		
		$('#' + this.scrollID).append(col);
		
		$('#' + col.id)
		.css({
			'position'	: 'absolute',
			'width'		: w,
			'top'		: t * 18,
			'left'		: l,
		})
		.attr('title', title);

		if(c == 'select'){			//-- checkbox

			$('#' + col.id)
			.attr('data-nu-field', 'field' + suf)
			.attr('onchange', 'window.nuSQL.buildSQL("field","' + this.boxID + '")')
			.attr('type', 'checkbox')
			.addClass(this.boxID)
			.addClass('checkfield');
			
		}else{

			$('#' + col.id)
			.addClass('nuBoxTitle')
			.addClass('nuBoxField')
			.addClass(this.boxID)
			.css('width', Number(w))
			.css('padding-top', 2)
			.hover(
			
				function(event){
					if(event.buttons == 1 && window.nuCurrentID != ''){
						
						$(this).css('color','green');
						$(this).css('cursor','e-resize');
						
					}else{
						
						$(this).css('color','red');
						$(this).css('cursor','e-resize');
						
					}
				}, 
				function() {

					$(this).css('color','');
					$(this).css('cursor','default');
					
				})
				
			.html(v);
			
		}
		
	}
	
	buildJSON(){
		
		var j				= {};
		var a				= [];
		var THIS 			= this;
		
		$('.nuBox').each(function(index){
			
			var i			= $(this)[0].id;
			var o			= {}
			
			o.id			= i;
			o.position		= $(this).position();
			o.tablename		= $('#tablename' + i).html();
			o.alias			= $('#alias' + i).val();
			o.checkall		= $('#checkall' + i).is(':checked');
			o.checkboxes	= THIS.getCheckboxes(i);
			
			a.push(o);
			
		});

		j.tables			= a;
		var joins			= {};
		var r				= this.joins;
		
		for (var k in r){
			
			var jFrom		= r[k].from;
			var jTo			= r[k].to;
			var jJoin		= r[k].join;
			
			joins[jFrom + '--' + jTo]	= jJoin;
			
		}
		
		j.joins				= joins;

		return JSON.stringify(j);
		
	}

	addJoinsToJSON(){
		
	}

	
	getCheckboxes(b){

		var c		= [];
		
		$(':checkbox.' + b).each(function(index){
			c.push($(this).is(':checked'));
		});
		
		return c;
		
	}
	
	
	getJoins(){
		
		var a						= [];
		var j						= [];
		var r						= this.joins;
		
		for (var k in r){
			
			a[r[k].from + '--' + r[k].to]	= r[k];
			j.push(a[r[k].from + '--' + r[k].to]);
			
		}

		return this.joins;
		
	}
	
	rebuildGraphic(){
		
		var j		= $('#sse_json', parent.document).val();

		if(j == '' || j === undefined){return true;}
		
		var J		=	JSON.parse(j);
		
		for(var i = 0 ; i < J.tables.length ; i++){	
		
			if(typeof(parent.nuFORM.tableSchema[J.tables[i].tablename]) == 'undefined'){
				
				nuMessage(['No table named <b>' + J.tables[i].tablename + '</b>.']);
				
				return false;
				
			}
			
		}

		for(var i = 0 ; i < J.tables.length ; i++){	
			
			var t	= J.tables[i];
			var cb	= J.tables[i].checkboxes;
			
			this.addBox(t.tablename, t.id);
			
			$('#' + t.id)
			.css('top', t.position.top)
			.css('left', t.position.left);
			
			$('#tablename' 	+ t.id).html(t.tablename);
			$('#alias' 		+ t.id).val(t.alias);
			$('#checkall'	+ t.id).prop('checked', t.checkall);
			
			for(var c = 0 ; c < cb.length ; c++){
				$('#select_' + c + '_' + t.id).prop('checked', cb[c]);
			}
			
		}
		
		var r							= J.joins;				//-- JOIN
		
		for (var k in r){
			
			var I						= String(k).split('--')[0];
			var i						= String(k).split('--')[1];

			this.joins[I + '--' + i]	= r[k];

		}

		nuAngle();
		
		return true;
		
	}
	
	addJoin(key, v){

		var j		= parent.$('#sse_json').val();
		
		if(j == ''){
			var J 	= {'joins':[]};
		}else{
			var J	= JSON.parse(j);
		}

		J.joins[key] = v;
		
		var u	= JSON.stringify(J);
		
		parent.$('#sse_json').val(u);

	}
	
	
}



//////////////////////////////////////////////////////////////////////////////////
//Ajax call for ABOUT 
//////////////////////////////////////////////////////////////////////////////////

	$(document).ready(function(){
		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/about/'},
			dataType:'json',
			success:function(msg){
				//console.log(msg.quote);
				var x='';	
				//console.log(msg.title);
				//console.log(msg.description);				      
				x+='<h1>' + msg.title	 +'</h1>' +'<p> <b>' + msg.description+ '</b></p>' + '" '  +msg.quote + ' "'+ '</br>' +' - ' + msg.quoteAuthor;					
			
				$('#about').html(x);			
			},
			error:function(){
				//do something...
			}
		});
		

//////////////////////////////////////////////////////////////////////////////////
//Ajax call for MINORS
//////////////////////////////////////////////////////////////////////////////////
		
								
		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/minors/'},
			dataType:'json',
			success:function(msg){
				var x='<h1> Minors </h1> </br>';
				$.each(msg, function(i, item){
					////console.log(item.name);
					////console.log(item.description);
					x+='<p>'+item.name+'</p>' + '<b>' + item.title + '</b> </br>' +item.description;
				});
				$('#minors').append(x);
			 },
			error:function(){
			}		
		});

});

//////////////////////////////////////////////////////////////////////////////////
//Ajax call for UNDERGRADDEGREES
//////////////////////////////////////////////////////////////////////////////////

//WMC
		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/undergraduate/degreeName=wmc'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p> <b>'+msg.title+'</b></p>'  + msg.description  + '</br>' + ' <b>Concentrations: </b> ' + msg.concentrations + ' &nbsp; ' ;
			$('#wmc').html(x);
			 },
			error:function(){
			}	
		});

//HCC

    		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/undergraduate/degreeName=hcc'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p> <b>'+msg.title+' </b></p>' + msg.description  + '</br>'  + " <b> Concentrations: </b>"+ msg.concentrations  ;
			$('#hcc').html(x);
			 },
			error:function(){
			}	
		});
		
		
//CIT
		   $.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/undergraduate/degreeName=cit'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p><b>'+msg.title+'</b></p>' + msg.description  + '</br>' +'<b> Concentrations: </b>' + msg.concentrations;
			$('#cit').html(x);
			 },
			error:function(){
			}	
		});
		
		
//////////////////////////////////////////////////////////////////////////////////
//Ajax call for GRADUATE DEGREES
//////////////////////////////////////////////////////////////////////////////////

//IST
		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/graduate/degreeName=ist'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p> <b>'+msg.title+'</b></p>'  + msg.description  + '</br>' +'<b> Concentrations: </b> &nbsp;' + msg.concentrations;
			$('#ist').html(x);
			 },
			error:function(){
			}	
		});

//HCC

    		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/graduate/degreeName=hci'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p> <b>'+msg.title+'</b></p>' + msg.description  + '</br>'  + '<b> Concentrations: </b>' + msg.concentrations ;
			$('#hci').html(x);
			 },
			error:function(){
			}	
		});
		
		
//CIT
		   $.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/graduate/degreeName=nsa'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p><b>'+msg.title+'</b></p>' + msg.description  + '</br>' +'<b> Concentrations: </b>' + msg.concentrations;
			$('#nsa').html(x);
			 },
			error:function(){
			}	
		});		
		
//Graduate Advanced Certificates		
			$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/degrees/graduate/degreeName=graduate%20advanced%20certificates'},
			dataType:'json',
			success:function(msg){
			var x='';
			x+= '<p><b>'+msg.degreeName+'</b></p>' + msg.availableCertificates;
			$('#certificates').html(x);
			 },
			error:function(){
			}	
		});		
		
//////////////////////////////////////////////////////////////////////////////////
//Employment
//////////////////////////////////////////////////////////////////////////////////		
		
//Intro & Degree Statistics
			$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/employment/'},
			dataType:'json',
			success:function(msg){
				var x=msg.introduction.title;
				var y=msg.degreeStatistics.title + '</br>';
				$.each(msg.introduction.content, function(i, introduction){
					x+='<h1>'+introduction.title+'</h1>' + introduction.description;
				});
				$('#introduction').html(x);
				$.each(msg.degreeStatistics.statistics, function(i, statistics){
					y+=statistics.value+'</br>' + statistics.description;
				});
				$('#statistics').html(y);
			},
			error:function(){}
		});	




//Co-op Table
      		$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/employment/coopTable'},
			dataType:'json',
			success:function(msg){
			var arr = msg.coopTable.coopInformation;
				var x='<thead><tr><th>Degree</th><th>Degree1</th><th>Degree3</th><th>Degree3</th></tr></thead><tbody>';
				$.each(arr, function(i,coopInformation){					
					x+='<tr>'+ '<td>' +  coopInformation.degree + '</td>' ;
					x+='<td>' + coopInformation.employer + '</td>';
					x+='<td>' + coopInformation.city + '</td>';
					x+='<td>' + coopInformation.term + '</td>' + '</tr>';					
				});
				x+='</tbody>';
				$('#coopTable').html(x);
				$('#coopTable').DataTable();
			},
			error:function(){}
		});	


		

//////////////////////////////////////////////////////////////////////////////////
//FOOTER
//////////////////////////////////////////////////////////////////////////////////		

//Links			
			$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/footer/'},
			dataType:'json',
			success:function(msg){
			
				var x='';
				$.each(msg.quickLinks, function(i, item){
					//console.log(item.title);					
					x+='<li>' + '<a href="' + item.href +'">' + item.title + '</a>' +'</li> ';
				});
				$('.list1').html(x);
			},
			error:function(){}
		});	
				
//Social
      $.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/footer/social'},
			dataType:'json',
			success:function(msg){ 
				var x='';
				x+= '<h1>' + msg.social.title + '</h1>' + '</br>' + msg.social.tweet;
				$('#content1').html(x);
			},
			error:function(){}
		});	
				
//////////////////////////////////////////////////////////////////////////////////
//PEOPLE
//////////////////////////////////////////////////////////////////////////////////		

myXhr('get',{path:'/people/'},'#people').done(function(json){
			var x='Faculty' + '</br>';
	$.each(json.faculty,function(i, item){
				x+='<div id="img">' + '<img src="'+$(this)[0].imagePath+'"/>' + '</div>';
		});
		$('#faculty').append(x);
		
		var y='Staff' + '</br>';
	 $.each(json.staff,function(i, item){
				y+='<div id="img">' + '<img src="'+$(this)[0].imagePath+'"/>' + '</div>';
		});
		$('#staff').append(y);
	});
		
	
function myXhr(t, d, idForSpinner){
	return $.ajax({
    type:t,
	cache:false,
	async:true,
	url:'proxy.php',
	data:d,
	dataType:'json',
	beforeSend:function(){
	$(idForSpinner).append('<img src="gears.gif" class="spin"/>');
	}
	})
		.always(function(){
			//kill spinner
		$(idForSpinner).find('.spin').fadeOut(2000,function(){$(this).remove()});
		})
		.fail(function(){
			//handle failures
		});
}


//////////////////////////////////////////////////////////////////////////////////
//	CONTACT FORM
//////////////////////////////////////////////////////////////////////////////////	
	
			$.ajax({
			type:'get',
			url:'proxy.php',
			cache:false,
			data:{path:'/contactForm/'},
			dataType:'html',
			success:function(msg){	
			$('#contactForm').html(msg);
			},
			error:function(){}
		});	
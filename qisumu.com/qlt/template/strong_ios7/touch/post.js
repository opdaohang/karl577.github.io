
i=0;
for(var a in smilies_type){
    i++;
    for(var b in smilies_type[a]){
        if(b==0){
            if(i==1){

				$("#fastsmilies_k").append("<li class='fthis' id='tabtoogle"+a.replace(/_/g, '')+"'  onclick='ftab("+a.replace(/_/g, '')+");'>"+smilies_type[a][0]+"</li>");

            }else{
                $("#fastsmilies_k").append("<li id='tabtoogle"+a.replace(/_/g, '')+"'  onclick='ftab("+a.replace(/_/g, '')+");'>"+smilies_type[a][0]+"</li>");
            }
        }
    }
}
q = 0;

for(var a in smilies_array){
	
	q++;
	(q == 1) ? isfthis ="fthis" : isfthis ="";	
	(q == 1) ? isshow ="style='display:block;'" : isshow ="style='display:none;'";
	var appends = "<div id='fastsmiliess"+a+"' "+isshow+" class='fastsmilies_tab "+isfthis+"'>";	
    for(var b in smilies_array[a][1]){
		
			var imgurl = './static/image/smiley/'+smilies_type['_'+a][1]+'/';
			appends +="<a href='javascript:;' onclick=\"insertIcon('"+smilies_array[a][1][b][1]+"');\"><img id="+a+" src='"+imgurl+smilies_array[a][1][b][2]+"' ></a>";	 
		 
		 
    }
	
		appends +="</div>";
		$("#fastsmilies_v").append(appends);

}

function ftab(v){
		$('#fastsmiliess'+v).show();
  		$('#fastsmiliess'+v).siblings().hide();
  		$('#tabtoogle'+v).siblings().removeClass('fthis');
		$('#tabtoogle'+v).addClass('fthis');
}


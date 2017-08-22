console.log('hello from Rich at ' + Date());


listCancers=function(id){
    if(!id){console.warn('id not defined')
    }else{
        cbio.get(
            null,
            function(x){
                var div = document.getElementById(id)
                var h = ''
                x.forEach(function(xi,i){
                   if(i==0){
                       h +='<h2>'+xi+'</h2>'
                   }else{
                       h +='<li>'+xi+'</li>'
                   }

                   //debugger 
                })
                div.innerHTML=h
                
            }
        )    
    }
     
    
}

listCancers('cancerTypesDiv')
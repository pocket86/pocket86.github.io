$("nav").on("click", "a", function (evt) {
            evt.preventDefault();
            var id = evt.target.id;
    
            if(id === "Home"){
                $("#homePage").show();
                $("#dynamicPages").hide();
                $("#contentTitle").html("Welcome To Acme!");
            } else{
                $("#homePage").hide();
                loadDynamicPage(id);
            }
        });





function loadDynamicPage(id){
    
    $.getJSON("js/acme.json", function (data) {
        console.log(data);
        var page;
        
        if(id === "Anvils"){
            page = data.Anvils;
        } else if(id === "Explosives"){
            page = data.Explosives;
        } else if(id === "Decoys"){
            page = data.Decoys;
        } else {
            page = data.Traps;
        }
        
        //change the page content
        $("#contentTitle").html(page.name);
     
    }); // end getJSON
}

function home(){
    $("#homePage").show();
    $("#anvilsPage").hide();
    $("#explosivesPage").hide();
    $("#decoysPage").hide();
    $("#trapsPage").hide();
}

function anvils(){
    $("#homePage").hide();
    $("#anvilsPage").show();
    $("#explosivesPage").hide();
    $("#decoysPage").hide();
    $("#trapsPage").hide();
}

function explosives(){
    $("#homePage").hide();
    $("#anvilsPage").hide();
    $("#explosivesPage").show();
    $("#decoysPage").hide();
    $("#trapsPage").hide();
}

function decoys(){
    $("#homePage").hide();
    $("#anvilsPage").hide();
    $("#explosivesPage").hide();
    $("#decoysPage").show();
    $("#trapsPage").hide();
}

function traps(){
    $("#homePage").hide();
    $("#anvilsPage").hide();
    $("#explosivesPage").hide();
    $("#decoysPage").hide();
    $("#trapsPage").show();
}
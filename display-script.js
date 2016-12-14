
$(document).ready(function() {

    var profilesString = localStorage.getItem("profiles");
    var profiles = JSON.parse(profilesString);


    // for(var i = 0; i < profiles.length; i++) {
    //     create_modal(profiles[i])
    // }
    create_modal(profiles[0]);
    create_carousel(profiles[0]);
    slider();

});


    function create_carousel(current){
        var newCaro = $('.item.jason').clone(true).removeClass().addClass("item " + current.name);
        newCaro.removeAttr("data-target");
        newCaro.attr("data-target", "#"+current.name);
        console.log(newCaro.data().target);
        $('.item').after(newCaro);
        var duplicate = $("." +current.name+ " .name");
        duplicate[0].innerHTML = current.name;
    }

function expand(){
    if($('#info').is(':hidden')) {
        $('#info').show()
    }else{
        $('#info').hide()
    }
    console.log('ive been clicked!')
}
function remove_profile(){
    $('.active').hide();
}
function slider(){
    $('.carousel').carousel({
        interval: 6000,
        interval: false
    })
}

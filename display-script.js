
$(document).ready(function() {

    var profilesString = localStorage.getItem("profiles");
    var profiles = JSON.parse(profilesString);

    // for(var i = 0; i < profiles.length; i++) {
    //     create_modal(profiles[i])
    // }
    create_modal(profiles[0]);
    create_carousel(profiles[0]);


});


    function create_carousel(current){
        var newCaro = $('.item.jason').clone(true).removeClass().addClass("item " + current.name);
        newCaro.removeAttr("data-target")
        newCaro.attr("data-target", "#"+current.name)
        console.log(newCaro.data().target);
        $('.item').after(newCaro);
        var duplicate = $("." +current.name+ " .name");
        duplicate[0].innerHTML = current.name;
    }
    function create_modal(current) {
        var name = current.name
        var newModal = $('#jason.modal').clone(true).addClass(name).removeAttr("id").attr("id", current.name);
        $('#jason.modal').after(newModal);
        $("." +name +" .modal-title")[0].innerHTML = current.name;
        $("." +name +" #name")[0].innerHTML = current.name;
        $("." +name +" #location")[0].innerHTML = current.location;
        $("." +name +" #age")[0].innerHTML = current.age;
        $("." +name +" #about")[0].innerHTML = current.about;
        $("." +name +" #skills")[0].innerHTML = current.skills;
        $("." +name +" #gear")[0].innerHTML = current.gear;
        $("." +name +" #looking")[0].innerHTML = current.interest;
        $("." +name +" iframe").removeAttr("src");
        $("." +name +" iframe").attr("src", current.youtube[0])
        console.log($("." +name +" iframe")[0].src)
        
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

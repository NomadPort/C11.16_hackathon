
$(document).ready(function() {

    var profilesString = localStorage.getItem("profiles");
    var profiles = JSON.parse(profilesString);
    // function create_modal(profile) {
    //     var newModal = $('#modal-placeholder').clone();
    //     var newId = profile.name.split(" ").join("-").toLowerCase();
    //     newModal.attr("id", newId);
    //     newModal.children(".modal-title").html(profile.name);
    //     newModal.children(".name_input").html(profile.name);
    //     newModal.children(".age_input").html(profile.age);
    //     newModal.children(".location_input").html(profile.location);
    //     newModal.children(".description_input").html(profile.description);
    //     newModal.css("visibility", "visible");
    //     $("body").append(newModal);
    //     console.log(newModal)
    // }
    // function create_display_v2(profile) {
    //     var newDisplayItem = $('#item-placeholder').clone();
    //     newDisplayItem.children('.name_display h1').html(profile.name);
    //     //target for the id
    //     var newId = profile.name.split(" ").join("-").toLowerCase();
    //     newDisplayItem.data("target", "#"+newId);
    //     newDisplayItem.show();
    //     $(".carousel-inner").append(newDisplayItem);
    // }
});

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
    $('.item').carousel('pause');
}
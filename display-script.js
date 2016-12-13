$(document).ready(function() {

    var profilesString = localStorage.getItem("profiles");
    var profiles = JSON.parse(profilesString);

    for(var i = 0; i < profiles.length; i++) {
        create_modal(profiles[i])
    }
    function create_modal(profile) {
        var newModal = $('#modal-placeholder').clone();
        newModal.attr("id", profile.name);
        newModal.children(".modal-title").html(profile.name);
        newModal.children(".name_input").html(profile.name);
        newModal.children(".age_input").html(profile.age);
        newModal.children(".location_input").html(profile.location);
        newModal.children(".description_input").html(profile.description);
        $("body").append(newModal);
    }
});
function expand(){
    if($('#info').is(':hidden')) {
        $('#info').show()
    }else{
        $('#info').hide()
    }
    console.log('ive been clicked!')
}
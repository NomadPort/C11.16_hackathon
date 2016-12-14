$(document).ready(function() {

    var profilesString = localStorage.getItem("profiles");
    var profiles = JSON.parse(profilesString);
    console.log(profilesString);

    for(var i = 0; i < profiles.length; i++) {
        create_modal(profiles[i])
        create_carousel(profiles[i], i);
    }

    slider();

});
function create_modal(profile) {
    var newModal = $('#modal-placeholder').clone();
    var newId = profile.name.split(" ").join("-").toLowerCase();
    newModal.attr("id", newId);
    newModal.find(".modal-title").html(profile.name);
    newModal.find(".name_input").html(profile.name);
    newModal.find(".age_input").html(profile.age);
    newModal.find(".location_input").html(profile.location);
    newModal.find(".description_input").html(profile.description);
    newModal.find(".interest_input").html(profile.interest);
    newModal.find(".skills_input").html(profile.skills.join(", "));
    newModal.find(".equipment_input").html(profile.equipment);
    for(var i = 0; i < profile.youtube.length; i++) {
        var video_id = profile.youtube[i];
        var video = $('<iframe/>')
            .attr("src", "https://www.youtube.com/embed/" + video_id)
            .attr("width", "560")
            .attr("height", "315")
            .attr("frameborder", "0")
        newModal.find('.info').append(video);
    }
    $("body").append(newModal);
}

//shows more profile info upon click
function create_carousel(current){
    var newId = current.name.split(" ").join("-").toLowerCase();
    var newCaro = $('#item-placeholder').clone();
    newCaro.removeAttr("id");
    newCaro.removeAttr("data-target");
    newCaro.attr("data-target", "#"+newId);
    newCaro.find('h1.name').html(current.name);
    var numOfItems = $('#pic_display .item').length;
    var newIndicator = $('<li/>').attr("data-slide-to", numOfItems).attr('data-target',"#carousel");
    $('.carousel-indicators').append(newIndicator);
    $('#pic_display').append(newCaro);
}
function expand(){
    if($('#info').is(':hidden')) {
        $('#info').show()
    }else{
        $('#info').hide()
    }
    console.log('ive been clicked!')
}
//hides profiles upon click
function remove_profile(){
    $('.active').hide();
}
function slider(){
    $('.carousel').carousel({
        interval: 6000,
        interval: false
    })
}

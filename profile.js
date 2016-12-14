//function to grab Youtube channel
function get_channel(){
    var youtube_username = $("#youtube_clip").val();
    var channel_data;
    var upload_info;

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/channels",
        data: {
            part:"contentDetails",
            forUsername: youtube_username,
            key: "AIzaSyDMYs0eOSofGXXJC817X5BZMHm4PIhezOY",
            format:"json"
        },
        dataType: "json"
    })
        .then(function(msg){
            channel_data = msg;
            play_list_id = channel_data.items[0].contentDetails.relatedPlaylists.uploads;
            get_video(upload_info);
        })
}
//function to grab playlist from channel
function get_video(video_address){
    var grab_song;
    $.ajax({
        url:"https://www.googleapis.com/youtube/v3/playlistItems",
        data: {
            part: "snippet",
            playlistId: play_list_id,
            key: "AIzaSyDMYs0eOSofGXXJC817X5BZMHm4PIhezOY"
        },
        dataType:"json"
    })
        .then(function(msg){
            playlist_data = msg;
            var song_array = playlist_data.items;
            var videos_array = [];
            for(var i = 0; i < song_array.length; i++) {
                var new_object = {};
                new_object.description = playlist_data.items[i].snippet.description;
                new_object.title = $("<div>")
                    .append($("<label>").text(playlist_data.items[i].snippet.title))
                    .append($("<input>")
                        .attr("type","checkbox")
                        .attr("value",playlist_data.items[i].snippet.resourceId.videoId))
                    .addClass("video_title");
                new_object.thumbnail = $("<img>").attr("src", playlist_data.items[i].snippet.thumbnails.default.url).addClass("col-md-6 col-md-offset-3");
                new_object.video_id = $("<iframe>")
                    .attr('width', 460).attr("height", 305)
                    .attr("src", "https://www.youtube.com/embed/" + playlist_data.items[i].snippet.resourceId.videoId)
                    .attr("frameborder", 0)
                    .addClass("col-md-12");
                videos_array.push(new_object);
                $(".video_display").append(videos_array[i].title, videos_array[i].video_id)
            }
        })
}
function clear_youtube_form(){
    $("#youtube_clip").val("");
    $(".video_display").html("");
}
//function to append chosen videos to create profile form
function upload_video() {
    var checkboxes = $(".video_title input");
    for (var i = 0; i < checkboxes.length; i++){
        console.log(checkboxes[i]);
        if($(checkboxes[i]).is(':checked')){
            $(".youtube_clip_area").append(
                $("<iframe>")
                    .attr('width', 460)
                    .attr("height", 305)
                    .attr("src", "https://www.youtube.com/embed/" + checkboxes[i].value)
                    .attr("frameborder", 0)
                    .data("video_id",checkboxes[i].value)
                    .addClass("col-md-12")
            );
        }
    }
}
//creates form objects to insert dynamically onto display page
function create_form_objects(){
    location.href = "display.html";
    var profile_object = {};
    profile_object.name = $("#name_input").val();
    profile_object.location = $("#location_input").val();
    profile_object.age = $("#age_input").val();
    profile_object.description = $("#description_input").val();
    profile_object.interest = $("#interest_input").val();
    profile_object.skills = [];
    $(".skill_checkbox input:checkbox:checked").each(function(){
        profile_object.skills.push($(this).val());
    });
    profile_object.equipment = $("#equipment_input").val();
    profile_object.youtube = [];
    $(".youtube_clip_area iframe").each(function(){
        profile_object.youtube.push($(this).data("video_id"))
    });
    // localStorage.setItem("profiles", "[]");
    var profilesString = localStorage.getItem("profiles");
    if (profilesString === null) {
        profilesString = "[]";
    }
    var profiles = JSON.parse(profilesString);
    profiles.push(profile_object);
    var newProfilesString = JSON.stringify(profiles);
    localStorage.setItem("profiles", newProfilesString);
}

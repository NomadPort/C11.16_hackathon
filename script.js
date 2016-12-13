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
                new_object.title = $("<h4>").text(playlist_data.items[i].snippet.title).addClass("col-md-8");
                new_object.thumbnail = $("<img>").attr("src", playlist_data.items[i].snippet.thumbnails.default.url).addClass("col-md-6 col-md-offset-3").click();
                new_object.video_id = $("<iframe>").attr('width', 460).attr("height", 305).attr("src", "https://www.youtube.com/embed/" + playlist_data.items[i].snippet.resourceId.videoId).attr("frameborder", 0).addClass("col-md-12");
                // playlist_data.items[i].snippet.resourceId.videoId
                videos_array.push(new_object);
                $(".video_display").append(videos_array[i].title, videos_array[i].video_id)
            }
    })
}
function expand(){
    if($('#info').is(':hidden')) {
        $('#info').show()
    }else{
        $('#info').hide()
    }
console.log('ive been clicked!')
}

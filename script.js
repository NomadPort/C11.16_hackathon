function get_channel(username){
    // var youtube_username = $(".youtube_video").val();
    var channel_data;
    var upload_info;

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/channels",
        data: {
            part:"contentDetails",
            forUsername: "dmtmusicchannel",
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
            playlist_data = msg
            grab_song = playlist_data.items[0].snippet.resourceId.videoId;
            console.log("playlist: ", grab_song);
    })
}

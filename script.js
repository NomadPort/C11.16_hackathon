function get_channel(username){
    // var youtube_username = dmtmusicchannel;
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
            playlist_data = msg;
            var song_array = playlist_data.items;
            var videos_array = [];

            for(var i = 0; i < song_array.length; i++) {
                var new_object = {};
                new_object.description = playlist_data.items[i].snippet.description;
                new_object.title = playlist_data.items[i].snippet.title;
                new_object.thumbnail = playlist_data.items[i].snippet.thumbnails.default.url;
                new_object.video_id = playlist_data.items[i].snippet.resourceId.videoId;
                videos_array.push(new_object)
            }

            console.log(videos_array
            )
    })
}

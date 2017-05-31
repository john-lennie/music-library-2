var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  returnPlaylists: function (currentPlaylist) {
    var playlistId = currentPlaylist.id;
    //console.log(playlistId);
    var playlistName = currentPlaylist.name;
   // console.log(playlistName);
    var numberOfTracks = currentPlaylist.tracks.length;
    return (playlistId + ": " + playlistName + " - " + numberOfTracks+ " tracks" );
  },
  printPlaylists: function () {
    var libraryPlaylists =  this.playlists;
    for (var currentPlaylist in libraryPlaylists) {
      if(libraryPlaylists.hasOwnProperty(currentPlaylist)) {
        console.log(this.returnPlaylists(libraryPlaylists[currentPlaylist]));
      }
    }
  },
  returnTracks: function (currentTrack) {
    var trackId = currentTrack.id;
    var trackName = currentTrack.name;
    var trackArtist = currentTrack.artist;
    var trackAlbum = currentTrack.album;
   return (trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum +")" );
  },
  printTracks: function () {
    var libraryTracks =  this.tracks;
    for (var currentTrack in libraryTracks) {
      if(libraryTracks.hasOwnProperty(currentTrack)) {
        console.log(this.returnTracks(libraryTracks[currentTrack]));
      }
    }
  },
  printPlaylist: function (playlistId) {
    console.log(this.returnPlaylists(this.playlists[playlistId]));
    var tracks = this.playlists[playlistId].tracks;
    for (i = 0; i < tracks.length; i++) {
       console.log(this.returnTracks(this.tracks[tracks[i]]));
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  },
  addTrack: function (name, artist, album) {
    var id = "t" + this.uid();
    this.tracks[id] = {id: id, name: name, artist: artist, album: album};
  },
  addPlaylist: function (name) {
    var id = "p" + this.uid();
    this.playlists[id] = {id: id, name: name, tracks: []};
  }
}

library.addPlaylist("favplaylist");
library.printPlaylists();



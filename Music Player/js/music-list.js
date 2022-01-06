	//Inspired by CodeNepal
//Made by Rahul
//Licensed under MIT License
//For adding new songs to music player

//Copy this code and paste it in below array...
//{
  //  name: "Name of song",
  //  artist: "Song artist",
  //  album: "Album of song --optional",
  //  img: "Img src of the song",
  //  src: "Mp3 format src of the song"
  //  }, 

//But there are some precautions for doing this>>
//1. Remove the double slash befire every line...
// Like this 
 //{name : "song-name", artist: "artist", album: "song-album", img: "img-src", src: "song audio file" } //
//2. in the img atribute--> The image path of file should be like this {music IndexNo -(x)} + '.jpg'} ...
//Like this
			//If the song is Closer and song no. is 5 then..
                      // img: "music-5" 
//No need to put the .mp3 or .jpg extension here.
//3. in the src atribute--> The song audio path of file should be like this {music IndexNo -(x)} + '.mp3'} ...
//Like this
			//If the song is Closer and song no. is 5 then..
                      // src: "music-5" 
//No need to put the .mp3 or .jpg extension here also.


//For simplifying your work paste this code simply...
/* {
    name: "song",
    artist: "singer",
    album: "album",
    img: "music-{no.}",
    src: "music-{no.}"
  }, 
  
  */	  

// like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }

  let allMusic = [
    {
      name: "Harley Bird - Home",
      artist: "Jordan Schor",
      album: "",
      img: "music-1",
      src: "music-1"
    },
    {
      name: "Raatan Lambiyan",
      artist: "Jubin Nautiyal",
      album: "",
      img: "music-7",
      src: "music-7"
    },
    {
      name: "Khairiyat",
      artist: "Arijit Singh",
      album: "",
      img: "music-8",
      src: "music-8"
    },
    {
      name: "Faded",
      artist: "Alan Walker",
      album: "",
      img: "music-9",
      src: "music-9"
    },
    {
      name: "Darkside",
      artist: "Alan Walker",
      album: "",
      img: "music-10",
      src: "music-10"
    },
    {
      name: "Hamari Adhuri Kahani",
      artist: "Arijit Singh",
      album: "",
      img: "music-11",
      src: "music-11"
    },
    {
      name: "Filhall-2",
      artist: "BPraak",
      album: "",
      img: "music-12",
      src: "music-12"
    },
    {
      name: "Ikson Anywhere – Ikson",
      artist: "Ikson",
      album: "",
      img: "music-2",
      src: "music-2"
    },
    {
      name: "Beauz & Jvna - Crazy",
      artist: "Beauz & Jvna",
      album: "",
      img: "music-3",
      src: "music-3"
    },
    {
      name: "Hardwind - Want Me",
      artist: "Mike Archangelo",
      album: "",
      img: "music-4",
      src: "music-4"
    },
    {
      name: "Jim - Sun Goes Down",
      artist: "Jim Yosef x Roy",
      album: "",
      img: "music-5",
      src: "music-5"
    },
    {
      name: "Lost Sky - Vision NCS",
      artist: "NCS Release",
      album: "",
      img: "music-6",
      src: "music-6"
    },
    {
      name: "Me Tera Boyfriend",
      artist: "Arijit Singh",
      album: "",
      img: "music-13",
      src: "music-13"
    },
    {
      name: "Me Tera Ho Gya",
      artist: "NCS Release",
      album: "",
      img: "music-14",
      src: "music-14"
    },
    
    {
      name: "Tera Ban Jaunga",
      artist: "NCS Release",
      album: "ASSA",
      img: "music-16",
      src: "music-16"
    },
    {
      name: "Tum Hi Aana",
      artist: "Jubin Nautiyal",
      album: "ASSA",
      img: "music-17",
      src: "music-17"
    },
    {
      name: "Shape Of You",
      artist: "Ed Sheeran",
      album: "ASSA",
      img: "music-18",
      src: "music-18"
    },
    {
      name: "Manwa Lage",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-19",
      src: "music-19"
    },
    {
      name: "Me Tenu Samjhava Ki",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-20",
      src: "music-20"
    },
    {
      name: "Saawan Aaya He",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-21",
      src: "music-21"
    },
    {
      name: "Uska Hi banana",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-22",
      src: "music-22"
    },
    {
      name: "Har Kisi Ko",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-23",
      src: "music-23"
    },
    {
      name: "Khuda Na Khasta",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-24",
      src: "music-24"
    },
    {
      name: "Raat Bhar",
      artist: "Arijit Singh",
      album: "ASSA",
      img: "music-25",
      src: "music-25"
    },
    {
      name: "Despacito",
      artist: "Luis Fonsi",
      album: "ASSA",
      img: "music-26",
      src: "music-26"
    },
    {
      name: "Dil Galti Kar Baitha He",
      artist: "Jubin Nautiyal",
      album: "ASSA",
      img: "music-27",
      src: "music-27"
    },
    {
      name: "Jeene Laga Hu",
      artist: "Atif Aslam",
      album: "ASSA",
      img: "music-29",
      src: "music-29"
    },

    {
      name: "Jeene Laga Hu",
      artist: "Atif Aslam",
      album: "ASSA",
      img: "music-29",
      src: "music-29"
    }
    
  ];
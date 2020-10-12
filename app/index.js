const music=document.querySelector("audio");
        const img =document.querySelector("img");
        const play=document.querySelector(".main_btn");
        const artist=document.querySelector("#artist");
        const title=document.querySelector("#title");
        const prev=document.querySelector("#prev");
        const next=document.querySelector("#next");
        // const play=document.querySelector(".main_btn");

        const songs=[{
            song_name:"3_Peg_(From__3_Peg_)",
            image_name:"thapa-1",
            title:"3_Peg",
            artist:"Sharry_Maan",
        },
        {
            song_name:"Sohneya_Sajna-Sunidhi_Chauhan-Ankit_Tiwari-www.Mp3Mad.Com",
            image_name:"colorful-flower-on-dark-tropical-260",
            title:"Sohneya_Sajna",
            artist:"Sunidhi_Chauhan",
        },
        {
            song_name:"Tera_Kala_Badnam_Ho_Liya_(PagalWorldMp3.co)",
            image_name:"ganesh-ji-images",
            title:"Tera_Kala",
            artist:"gorkhali takma",
        }
        ];




        var isPlaying=false;
        const playMusic= ()=>{
            isPlaying=true;
            music.play();
            play.classList.replace("fa-play","fa-pause");
            img.classList.add("anime");
            
        }

        const pauseMusic=()=>{
            isPlaying=false;
            music.pause();
            play.classList.replace("fa-pause","fa-play");
            img.classList.remove("anime");
        }

        
        
       play.addEventListener("click",()=>{
           if(isPlaying){
               pauseMusic();
           }
           else{
               playMusic();
           }
       });
       const loadSong=(songs)=>{
           title.textContent=songs.title;
           artist.textContent=songs.artist;
           music.src="music/"+songs.song_name+".mp3";
           img.src="images/"+songs.image_name+".jpg";
      };
      var songIndex=0;
      const nextSong=()=>{
          songIndex=(songIndex+1)%songs.length;
          loadSong(songs[songIndex]);
          playMusic();
      };
      const prevSong=()=>{
          songIndex=(songIndex-1+songs.length)%songs.length;
          loadSong(songs[songIndex]);
          playMusic();
      };
    //   lo/adSong(songs); 

    next.addEventListener("click",nextSong);
    prev.addEventListener("click",prevSong);
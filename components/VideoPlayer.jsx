"use client"
import ReactPlayer from "react-player"


export default function VideoPlayer() {

  const videoData = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/lfNZTgvd7Ew?si=iVBPQezkUJfIOZ03",
    },
    { id: 2, link: "https://cdn.jsdelivr.net/gh/jabedalamakash/cdn_skyfoundation/sachin.mp4" },
    { id: 3, link: "https://www.youtube.com/embed/7E9sTW1hbBo?si=Fqjdt8UuNBrfYGsA" },
    { id: 4, link: " https://youtu.be/SsF2NqQ-fig?si=P4KQVfUpvTI9T1ER" },
   
    
  ];
  return (
    <section>
      <h1>Hello Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

        {videoData.map((video) => {
          return (
            <main key={video.id}>
              <ReactPlayer controls
              height="100%"
              width="100%"
              className="mx-auto" url={video.link} />
            </main>
          );
        })}
      </div>
    </section>
  );
}

"use client"
import ReactPlayer from "react-player"


export default function VideoPlayer() {

  const videoData = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/lfNZTgvd7Ew?si=iVBPQezkUJfIOZ03",
    },
    { id: 2, link: "sachin.mp4" },
  ];
  return (
    <section>
      <h1>Hello Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

        {videoData.map((video) => {
          return (
            <main key={video.id}>
              <ReactPlayer controls url={video.link} />
            </main>
          );
        })}
      </div>
    </section>
  );
}

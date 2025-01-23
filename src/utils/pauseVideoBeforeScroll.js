export const pauseVideoBeforeScroll = ({
  video = null,
  pauseTimeout = 1501,
}) => {
  if (!video) return console.warn("No video");

  video.play();

  setTimeout(() => {
    video.pause();

    function scrollListener() {
      document.removeEventListener("scroll", scrollListener);
      video.play();
    }

    document.addEventListener("scroll", scrollListener);
  }, pauseTimeout);
};

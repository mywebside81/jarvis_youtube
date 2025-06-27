function openYouTubeApp() {
  const song = document.getElementById("songInput").value.trim();
  if (!song) {
    alert("Please enter a song name");
    return;
  }

  // Mobile YouTube link to trigger app (if allowed by Android)
  const youtubeLink = `https://m.youtube.com/results?search_query=${encodeURIComponent(song)}`;

  // Open in new tab (Android may prompt to open YouTube app)
  window.open(youtubeLink, "_blank");
}

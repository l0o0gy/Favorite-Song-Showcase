function displaySongInfo() {
    // Extract input values from the form
    const songName = document.getElementById('songName').value;
    const youtubeLink = document.getElementById('youtubeLink').value;
    const description = document.getElementById('description').value;
    const year = document.getElementById('year').value;

    // Convert YouTube link to embeddable format "seach on it from youtube"
    const embeddableLink = embedLink(youtubeLink);

    document.getElementById('displaySongName').textContent = songName;
    document.getElementById('displayDescription').textContent = description;
    document.getElementById('displayYear').textContent = year;

    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<iframe src="${embeddableLink}"  ></iframe>`;

    document.getElementById('formarea').style.display = 'none';
    document.getElementById('display-area').style.display = 'block';

    }

function embedLink(youtubeLink) {
    const videolink = youtubeLink.split('video=');
    const embedLink = `https://www.youtube.com/embed/${videolink}`;
    return embedLink;
}
console.log('Welcome to Google Drive Direct Download Link Generator');

//! CREATE VARIABLES
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

// PASTE LINK
function generateLink(e) {
    e.preventDefault();

    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes('https://drive.google.com/file/d/');
    // console.log(gLink.value);

    if (confirmLink == true) {
        const getDownloadLink = gLink.value
            .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "");

        // console.log(getDownloadLink);

        downloadLink.value = getDownloadLink;

        function copy(target) {
            if (target.value == "") {
                alert("Please Generate a Download Link");
            } else {
                target.select();
                document.execCommand("copy");
                alert("Link Copied")
            }
        }

        const copyBtn = document.querySelector('.copy');
        copyBtn.addEventListener("click", () => {
            return copy(downloadLink);
        });

        // EMBED AUDIO
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '"type="audio/mp3"></audio>';
        const embedAudio = document.getElementById("embed-audio");

        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
        // console.log(embedAudio.value);

        const copyAudio = document.querySelector('.copy-audio');
        copyAudio.addEventListener('click', () => {
            return copy(embedAudio);
        });

        // EMBED VIDEO
        const getVideoLink = gLink.value
            .replace("/view?usp=sharing", "");

        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';

        const embedVideo = document.getElementById('embed-video');
        embedVideo.value = `${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector('.copy-video');
        copyVideo.addEventListener('click', () => {
            return copy(embedVideo)
        });
    } else {
        alert('Please Enter Google Drive File Link !!');
    }
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearForm);

function clearForm(e) {
    e.preventDefault();
    gLink.value = "";
    downloadLink.value = "";
    embedAudio.value = "";
    embedVideo.value = "";
}


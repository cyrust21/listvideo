const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Campfire Night',
        'name': 'campfire.mp4',
        'duration': '0:43',
    },
    {
        'id': 'a2',
        'title': 'concert light effects',
        'name': 'concert light effects.mp4',
        'duration': '2:05',
    },
    {
        'id': 'a3',
        'title': 'gull water birds',
        'name': 'gull water birds.mp4',
        'duration': '2:49',
    },

    {
        'id': 'a4',
        'title': 'lake sunset tree',
        'name': 'lake sunset tree.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'puppy',
        'name': 'puppy.mp4',
        'duration': '2:05',
    },
    {
        'id': 'a6',
        'title': 'stand up paddle',
        'name': 'stand up paddle.mp4',
        'duration': '2:33',
    },
    {
        'id': 'a7',
        'title': 'waterfall jungle',
        'name': 'waterfall jungle.mp4',
        'duration': '0:29',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'video/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

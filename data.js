// DATA
let getVideos = {
    list: []
};

let video1 = {
    "name": "Lake",
    "cathegory": "landscapes",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/6f021f0268d5dd0d4e286ad5202f57335f2a8cc568704c4f7865c97879443ef8",
};

let video2 = {
    "name": "Road",
    "cathegory": "towns",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/362a284952d3a7250e4bdd72a659ea78e8ec79804e0e6a2053dfe4c10e7d79f1",
};

let video3 = {
    "name": "Seoul",
    "cathegory": "towns",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/2eecdca905bd8af66193f39e1ee6262ad70c6c749a9f7acc51903aacca9b4b8c",
};

let video4 = {
    "name": "Skyscrapers",
    "cathegory": "towns",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/3e3e619bcf79155208e49224579993346e0ad4e3faa0d93522a01f202d953ad9",
};

let video5 = {
    "name": "Trafic",
    "cathegory": "towns",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/99e4fd7b6e7d7256be3f613fa0aeb12507491327780d270bb21b968bc79fe2d8",
};

let video6 = {
    "name": "Tiger",
    "cathegory": "animals",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/f15c16b99f82d8201767d3a841ff40849c8a1b812ffbfd2e393d2b6aa6682a6e",
};

let video7 = {
    "name": "Red Paint",
    "cathegory": "others",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a",
};

let video8 = {
    "name": "Subscribe",
    "cathegory": "others",
    "source": "https://pixabay.com/videos/",
    "src": "./videos/f40fd562f63078722310bf105375576916ef81609331c36aa36015b4f56f9082",
};

getVideos.list.push(video1);
getVideos.list.push(video2);
getVideos.list.push(video3);
getVideos.list.push(video4);
getVideos.list.push(video5);
getVideos.list.push(video6);
getVideos.list.push(video7);
getVideos.list.push(video8);

// Export
module.exports.getVideos = getVideos;
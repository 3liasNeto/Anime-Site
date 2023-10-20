fetch("https://api.jikan.moe/v4/reviews/anime")
  .then(response => response.json())
  .then(data => {
    const topAnime = data.data; 
    console.log(topAnime)
    
    const animeTitle = topAnime.title;
    const animeEpisodes = topAnime.episodes;
    const animeSynopsis = topAnime.synopsis;
    const animeImage = topAnime.images.jpg.image_url

    document.getElementById("anime-title").textContent = animeTitle;
    document.getElementById("anime-episodes").textContent = animeEpisodes;
    document.getElementById("anime-synopsis").textContent = animeSynopsis;
    document.getElementById("anime-image").src = animeImage;
  
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

fetch("https://api.jikan.moe/v4/top/anime")
  .then(response => response.json())
  .then(data => {
    const topAnime = data.data; // Array de animes
    console.log(topAnime)

    topAnime.forEach(anime => {
    const animeTitle = anime.title; 
    const animeEpisodes = anime.episodes;
    const animeSynopsis = anime.synopsis;
    
    document.getElementById("anime-title").textContent = animeTitle;
    document.getElementById("anime-episodes").textContent = animeEpisodes;
    document.getElementById("anime-synopsis").textContent = animeSynopsis; 
    for (let i = 0; i < topAnime.length; i++) {
      const anime = topAnime[i];
      const animeImage = anime.images.jpg.image_url
      const imageElement = document.querySelectorAll("#anime-image_list")[i];
      imageElement.src = animeImage;
      imageElement.alt = animeTitle;
    }
    
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
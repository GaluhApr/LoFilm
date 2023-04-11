import axios from "axios";

const trendingMovies = () => {
  const base_url = "https://api.themoviedb.org/3";
  const api_key = "22dcedc52286377a0c91b3f80593b587";
  const img_url = "https://image.tmdb.org/t/p/w500";

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${base_url}/trending/movie/week?api_key=${api_key}`,
        {
          params: {
            page: 1,
          },
        }
      );
      renderMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  getMovies();

  const renderMovies = (movies) => {
    const filmElement = document.querySelector("#trending");
    filmElement.innerHTML = `
    <style>
    .trending-container {
      width: 30%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0 20px;
    }
    
    .trending-movie {
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .trending-movie:hover {
      transform: scale(1.02);
    }

    .images {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
    
    .movieDescription {
      padding: 10px;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
      color: #fff;
    }

    .movie-title {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #BA5799;
    }

    .movie-overview {
      margin: 0;
    }

    .movie-footer {
      display: flex;
      justify-content: space-between;
      margin: 0;
    }

    .movie-rate {
      color: #FEFF86;
    }

    @media (max-width: 768px) { 
      .trending-container {
        width: 40%;
    }

    @media (max-width: 480px) {
      .trending-container {
          width: 70%;
      }

      .movie-title {
        font-size: 1.2rem;
      }

      .movieDescription {
        font-size: 0.8rem;
      }
    } 
    </style>`;

    movies.forEach((movies) => {
      filmElement.innerHTML += `
        <div class="trending-container">
          <div class="trending-movie">
            <Image src="${img_url}/${movies.poster_path}" alt="test" class="images" />
              <div class="movieDescription">
                <p class="movie-title">${movies.title}</p>
                <p class="movie-overview">
                ${movies.overview}
                </p>
                  <div class="movie-footer"> 
                    <p class="movie-date">
                    ${movies.release_date}
                    </p>
                    <p class="movie-rate">★
                    ${movies.vote_average}
                    </p>
                  </div>
              </div>
          </div>  
        </div>
      `;
    });
  };
};

export default trendingMovies;

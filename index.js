/* global Vue */
/* global axios */
var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: [],
      newMovie: "",
      containsZoolander: "",
      newMovieParams: {},
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.findZoolander();
      this.newMovie = "";
    },
    findZoolander: function () {
      this.containsZoolander = this.movies.includes("zoolander");
    },
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies.json").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    moviesCreate: function () {
      axios.post("http://localhost:3000/movies.json", this.newMovieParams).then((response) => {
        console.log("success", response.data);
        this.movies.push(response.data);
      });
    },
  },
  created: function () {
    this.findZoolander();
    this.moviesIndex();
  },
};

Vue.createApp(App).mount("#app");

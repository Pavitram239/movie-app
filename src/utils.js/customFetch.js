import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWQxMjgzMGJlMGJiNzZhMmRlY2NhYjljNmI3ZWQ5NyIsIm5iZiI6MTcyMDExMzg1Mi4wMTIwMTcsInN1YiI6IjY2ODZkOTA3ZmJkZmJjNTJlNjVkMmRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q645kBaBTKKc6ciccSwhFa6WNpsAVXEW7CTM4St3O1M",
  },
});

export default customFetch;

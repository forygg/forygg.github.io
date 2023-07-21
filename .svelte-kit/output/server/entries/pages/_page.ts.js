import "moment";
const all_min = "";
const load = async ({ fetch }) => {
  function fetchComicById(id) {
    const comicApiUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
    return fetch(comicApiUrl).then((response) => response.json());
  }
  let comic = null;
  if (typeof document !== "undefined") {
    const form = document.getElementById("email-form");
    const input = document.getElementById("email-input");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = input.value;
      const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;
      fetch(apiUrl).then((response) => response.json()).then((data) => fetchComicById(data)).then((data) => {
        console.log(data);
        comic = data;
      }).catch((error) => console.log(error));
      input.value = "";
    });
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        if (target) {
          const element = document.querySelector(target);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      });
    });
  }
  return {
    comic
  };
};
export {
  load
};

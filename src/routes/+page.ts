import moment from 'moment';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  export interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  }


export const load = async ({fetch}) => {    

    function fetchComicById(id: number): Promise<Comic> {
        const comicApiUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
        return fetch(comicApiUrl).then(response => response.json());
      }
      let comic = null;
      if (typeof document !== 'undefined') {
        const form = document.getElementById('email-form') as HTMLFormElement;
        const input = document.getElementById('email-input') as HTMLInputElement;
        
        form.addEventListener('submit', function (e: Event) {
          e.preventDefault();
    
          const email = input.value;
          const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;
    
          fetch(apiUrl)
            .then(response => response.json())
            .then((data: number) => fetchComicById(data))
            .then((data: Comic) => {
              console.log(data);
              comic = data;
            })
            .catch(error => console.log(error));
    
          input.value = '';
        });
    
        
        document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
          anchor.addEventListener('click', function (this: Element, e: Event) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target) {
              const element = document.querySelector(target) as HTMLElement;
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }
          });
        });
      }
    return {
        comic
      };
}
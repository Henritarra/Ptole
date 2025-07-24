const concertsDiv = document.querySelector("#concerts-list");
const todaysDate = new Date();
  fetch("https://concerts-mwi2.onrender.com/concerts/ptole").then(res =>{
    if (!res.ok) {
        throw new Error("Network Problem 😢" + res.statusText);
    }
    return res.json();
}).then(concerts => {
    console.log(concerts)
    concerts.sort((a, b) => new Date(a.date) - new Date(b.date));
    concerts.forEach((concert) => {
      const date = new Date(concert.date); 
      const month = new Intl.DateTimeFormat("en-GB", {
        month: "short"
      }).format(date);
      const day = date.getDate();
      console.log(date);
      console.log(month.toUpperCase);
     if (date < todaysDate) {
      return
     }

      const html = `
      <div class="concert-box">
            <div class="date">
                <p class="day">${day}</p>
                <p class="month">${month.toUpperCase()}</p>
            </div>
            <div class="concert-middle">
            <div class="concert-title">${concert.title}</div>
            <div class="concert-description">${concert.description}</div>
            <div class="concert-timeandlocation">
              <div class="concert-time">${concert.time}</div>
              <p>-</p>
              <div class="concert-location">${concert.location}</div>
            </div>
            
            </div>
            <a href="${concert.link}" class="concert-link">Link</a>
        </div>  
      `;
      console.log(html);
      concertsDiv.insertAdjacentHTML('beforeend', html);
      // concertsDiv.innerHTML += html;
    });
    observeNewConcerts();

}).catch(error => {
    console.error("Fetch Operation Not Working 🦇", error);
});

function observeNewConcerts() {
  const newElements = document.querySelectorAll(".concert-box");
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.8 });
  
  newElements.forEach(element => observer.observe(element));
}
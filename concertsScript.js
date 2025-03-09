const concertsDiv = document.querySelector("#concerts-list");

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
      const html = `
      <div class="concert-box">
            <div class="date">
                <p class="day">${day}</p>
                <p class="month">${month.toUpperCase}</p>
            </div>
            <div class="concert-description">${concert.description}</div>
            <a href="${concert.link}" class="concert-link">Link</a>
        </div>  
      `;
      concertsDiv.innerHTML += html;
    })

}).catch(error => {
    console.error("Fetch Operation Not Working 🦇", error);
});

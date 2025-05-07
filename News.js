const collegeNews = [
    {
      title: "Inter-college Football Finals",
      content: "Team A won the finals after a tough match against Team B.",
    },
    {
      title: "New AI Course Launched",
      content: "The CS department launches a new elective in Artificial Intelligence.",
    },
    {
      title: "Annual Tech Fest Announced",
      content: "Tech Fest 2024 is set to kick off this November with many competitions.",
    },
    {
      title: "Library Timings Extended",
      content: "Library will now be open until 9 PM on weekdays.",
    }
  ];
  
  function displayCollegeNews() {
    const container = document.getElementById("collegeNewsContainer");
    container.innerHTML = "";
    collegeNews.forEach(news => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="news-card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.content}</p>
          </div>
        </div>`;
      container.appendChild(card);
    });
  }
  
  async function fetchLiveNews() {
    const container = document.getElementById("liveNewsContainer");
    container.innerHTML = "";
  
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey= 6b08f92a6e3b476ea75f195bd9af467e");
      const data = await response.json();
      data.articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
          <div class="news-card h-100 border border-success">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description || "No description available."}</p>
              <a href="${article.url}" target="_blank" class="btn btn-sm btn-outline-success mt-2">Read More</a>
            </div>
          </div>`;
        container.appendChild(card);
      });
    } catch (error) {
      container.innerHTML = "<p class='text-danger'>Failed to load live news.</p>";
      console.error("News fetch error:", error);
    }
  }
  
  // Load initial content
  displayCollegeNews();
  fetchLiveNews();
  
  // Refresh live news every 2 hours
  setInterval(fetchLiveNews, 2 * 60 * 60 * 1000);
  
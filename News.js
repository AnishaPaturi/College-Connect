const newsArticles = [
    {
        title: "Class A Mid-Term Exam Schedule Released",
        content: "The mid-term exam schedule for Class A has been announced. Check the portal for details.",
        category: "academics",
        class: "classA",
    },
    {
        title: "Sports Fest Registration Open",
        content: "Register for the annual sports fest. Teams from all classes can participate.",
        category: "sports",
        class: "all",
    },
    {
        title: "Coding Workshop",
        content: "A hands-on coding workshop for Class B students will be held on Saturday.",
        category: "events",
        class: "classB",
    },
    {
        title: "Library Extended Hours",
        content: "The library will now remain open till 10 PM for all students.",
        category: "academics",
        class: "all",
    },
];

function loadNews(filterCategory = "all", filterClass = "all") {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    newsArticles.forEach((article) => {
        if (
            (filterCategory === "all" || article.category === filterCategory) &&
            (filterClass === "all" || article.class === filterClass)
        ) {
            const newsCard = document.createElement("div");
            newsCard.classList.add("col");

            newsCard.innerHTML = `
                <div class="news-card">
                    <h5>${article.title}</h5>
                    <p>${article.content}</p>
                </div>
            `;

            newsContainer.appendChild(newsCard);
        }
    });
}

document.getElementById("applyFilter").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const classSpecific = document.getElementById("classSpecific").value;
    loadNews(category, classSpecific);
});

// Initial load
loadNews();

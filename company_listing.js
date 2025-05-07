// Handling Resume Upload and Job Suggestions
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const resumeFile = document.getElementById('resume-file').files[0];

    if (resumeFile) {
        // Simulate file parsing process
        console.log('File uploaded:', resumeFile.name);
        alert('Resume uploaded successfully!');

        // Generate job suggestions based on the resume
        generateJobSuggestions();
    }
});

function generateJobSuggestions() {
    // Example job suggestions (to be replaced with dynamic data from the backend)
    const jobs = [
        {
            companyName: 'Tata Consultancy Services',
            jobTitle: 'Software Developer',
            location: 'Remote',
            skills: 'Java, SQL, Cloud',
            jobType: 'Full-time',
        },
        {
            companyName: 'Tech Mahindra',
            jobTitle: 'Marketing Intern',
            location: 'On-site, Pune',
            skills: 'SEO, Digital Marketing',
            jobType: 'Internship',
        },
        {
            companyName: 'Infosys',
            jobTitle: 'Data Analyst',
            location: 'Bangalore, India',
            skills: 'Python, SQL, Data Visualization',
            jobType: 'Full-time',
        },
        {
            companyName: 'IBM',
            jobTitle: 'AI Researcher',
            location: 'New York, USA',
            skills: 'Machine Learning, Python',
            jobType: 'Full-time',
        },
        {
            companyName: 'Google',
            jobTitle: 'Software Engineer',
            location: 'Remote',
            skills: 'C++, JavaScript, Algorithms',
            jobType: 'Full-time',
        },
        {
            companyName: 'Microsoft',
            jobTitle: 'Product Manager',
            location: 'Redmond, USA',
            skills: 'Project Management, Data Analysis',
            jobType: 'Full-time',
        },
        {
            companyName: 'Oracle',
            jobTitle: 'Database Administrator',
            location: 'On-site, Bangalore',
            skills: 'SQL, Database Management',
            jobType: 'Full-time',
        },
        {
            companyName: 'Accenture',
            jobTitle: 'Cloud Consultant',
            location: 'Remote',
            skills: 'Cloud Computing, AWS, Azure',
            jobType: 'Full-time',
        }
    ];

    const jobListContainer = document.getElementById('suggested-jobs-list');
    jobListContainer.innerHTML = ''; // Clear previous suggestions

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('card', 'mt-3');

        jobElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${job.jobTitle}</h5>
                <p><strong>Company:</strong> ${job.companyName}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Skills Required:</strong> ${job.skills}</p>
                <p><strong>Job Type:</strong> ${job.jobType}</p>
                <a href="#" class="btn btn-primary">Apply Now</a>
            </div>
        `;

        jobListContainer.appendChild(jobElement);
    });
}

// Populate the Company Listings dynamically
window.onload = function () {
    const companies = [
        {
            name: 'Tata Consultancy Services',
            description: 'Tata Consultancy Services is an IT services, consulting, and business solutions organization.',
            logo: 'images/tcs.jpg',
            roles: 'Software Developer, Cloud Specialist',
            location: 'India, Worldwide',
            jobType: 'Full-time, Internship',
            skills: 'Java, SQL, Cloud Computing',
            applicationUrl: '#'
        },
        {
            name: 'Tech Mahindra',
            description: 'Tech Mahindra is a leading provider of digital transformation, consulting, and business reengineering services.',
            logo: 'images/Tech_Mahindra.png',
            roles: 'Marketing Intern, Data Analyst',
            location: 'India, USA',
            jobType: 'Full-time, Internship',
            skills: 'SEO, Digital Marketing',
            applicationUrl: '#'
        },
        {
            name: 'Infosys',
            description: 'Infosys is a multinational corporation that provides IT consulting and software services.',
            logo: 'images/Infosys.jpg',
            roles: 'Software Developer, Data Analyst',
            location: 'India, USA, Europe',
            jobType: 'Full-time, Internship',
            skills: 'Java, Python, SQL',
            applicationUrl: '#'
        },
        {
            name: 'IBM',
            description: 'IBM offers cloud platforms, artificial intelligence, and cognitive solutions to businesses around the world.',
            logo: 'images/IBM.jpg',
            roles: 'Software Engineer, AI Researcher',
            location: 'USA, Europe, Asia',
            jobType: 'Full-time',
            skills: 'Python, AI, Machine Learning',
            applicationUrl: '#'
        },
        {
            name: 'Google',
            description: 'Google is a multinational technology company specializing in Internet-related services and products.',
            logo: 'images/Google.png',
            roles: 'Software Engineer, Product Manager',
            location: 'Worldwide',
            jobType: 'Full-time, Internship',
            skills: 'JavaScript, C++, Cloud Computing',
            applicationUrl: '#'
        },
        {
            name: 'Microsoft',
            description: 'Microsoft is a technology company providing software, cloud services, and hardware solutions.',
            logo: 'images/Microsoft.jpg',
            roles: 'Product Manager, Cloud Consultant',
            location: 'Worldwide',
            jobType: 'Full-time',
            skills: 'Project Management, Data Analysis, Cloud Technologies',
            applicationUrl: '#'
        },
        {
            name: 'Oracle',
            description: 'Oracle provides comprehensive and fully integrated stack of cloud applications and platform services.',
            logo: 'images/Oracle.png',
            roles: 'Database Administrator, Cloud Consultant',
            location: 'Worldwide',
            jobType: 'Full-time',
            skills: 'SQL, Cloud Computing, Data Management',
            applicationUrl: '#'
        },
        {
            name: 'Accenture',
            description: 'Accenture is a global professional services company, providing consulting and technology services.',
            logo: 'images/Accenture.png',
            roles: 'Cloud Consultant, IT Consultant',
            location: 'Worldwide',
            jobType: 'Full-time',
            skills: 'Cloud Computing, Consulting, AWS, Azure',
            applicationUrl: '#'
        }
    ];

    const companyCards = document.getElementById('company-cards');
    companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        card.innerHTML = `
            <div class="card">
                <img src="${company.logo}" class="card-img-top" alt="${company.name}">
                <div class="card-body">
                    <h5 class="card-title">${company.name}</h5>
                    <p class="card-text">${company.description}</p>
                    <p><strong>Roles:</strong> ${company.roles}</p>
                    <p><strong>Location:</strong> ${company.location}</p>
                    <p><strong>Job Type:</strong> ${company.jobType}</p>
                    <a href="${company.applicationUrl}" class="btn btn-primary">Apply Now</a>
                </div>
            </div>
        `;

        companyCards.appendChild(card);
    });
};
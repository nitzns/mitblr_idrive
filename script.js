const companies = [
    {
        name: "Goldman Sachs",
        offerType: "Summer Internship",
        category: "Core", 
        jobDescription: "Attached", 
        eligibleBranches: "BTech All branches", 
        eligibilityCriteria: "BTech 6 CGPA & above, No Backlogs",                                        
        stipend: "100000 pm",
        workLocation: "Bengaluru/Hyderabad",
        lastDateToRegister: "4 PM, 13th July 2024",
        onlineTest: "23 July 2024",
        link: "https://forms.office.com/r/qeamNYQXtd"
    },
    {
        name: "Uber India Pvt. Ltd",
        offerType: "Summer Internship",
        category: "Software Engineering Intern",
        jobDescription: "Leading the industry in sustainable energy and eco-friendly solutions.",
        eligibleBranches: "BTech CC, CS, IT, DS, CS (AIML), EE, EC, EI, CPS, MT, AE, AU, IP, ME",
        eligibilityCriteria: "BTech 6 CGPA & above, No Backlogs",
        stipend: "Rs. 1,77,000 per month [inclusive of Rs. 15,000 housing allowance per month]",
        workLocation: "Bengaluru/Hyderabad",
        lastDateToRegister: "10 AM, 25th July 2024",
        onlineTest: "27th July 2024",
        link: "https://forms.office.com/r/vfVCGKZSGH"
    },
    {
        name: "BNY",
        offerType: "Summer Internship",
        category: "Core",
        jobDescription: "Attached",
        eligibleBranches: "BTech CC, CS, IT, DS, AIML, EC, EE, EI, CPS, ME, CV",
        eligibilityCriteria: "BTech 7.5 CGPA & above, No Backlogs",
        stipend: "75000 pm",
        onConversionCTC: "21.64 LPA",
        workLocation: "Pune, Chennai",
        lastDateToRegister: "N/A",
        onlineTest: "12th August @ 6 PM",
        link: "Click Here to Apply"
    }, // Added a comma here
    {
        name: "GE Healthcare",
        offerType: "Summer Internship",
        category: "Core",
        jobDescription: "EEDP",
        eligibleBranches: "BTech CC, CS, IT, DS, AIML, EC, EE, EI, CPS, ME",
        eligibilityCriteria: "BTech 6 CGPA & above, No Backlogs",
        stipend: "40000 pm",
        onConversionCTC: "1620000 for CS role & 1151000 for Non CS role",
        workLocation: "Bengaluru",
        selectionProcess: "Online Test: 14th August @ 5 PM, Interview: 20th August 2024",
        lastDateToRegister: "9 AM, 12th August 2024",
        onlineTest: "14th August @ 5 PM",
        link: "https://forms.office.com/r/mDaAFthY9x"
    },
    {
        name: "Western Digital",
        offerType: "Summer Internship",
        category: "Core",
        jobDescription: "N/A",
        eligibleBranches: "BTech CC, CS, IT, DS, AIML, EC, EE",
        eligibilityCriteria: "BTech 6 CGPA & above, No Backlogs",
        stipend: "35000 pm + 2k food coupons",
        onConversionCTC: "19.5 LPA + RSU",
        workLocation: "PAN India",
        selectionProcess: "19th August 2024",
        lastDateToRegister: "N/A",
        onlineTest: "N/A",
        link: "https://smrtr.io/mDSFQ"
    },
    {
        name: "Cisco",
        offerType: "Summer Internship",
        category: "Software Engineer Intern",
        jobDescription: "N/A",
        eligibleBranches: "Any branch",
        eligibilityCriteria: "No Backlogs",
        stipend: "98000",
        workLocation: "PAN India",
        selectionProcess: "19th August 2024",
        lastDateToRegister: "N/A",
        onlineTest: "N/A",
        link: "https://jobs.cisco.com/jobs/IsAJob?projectId=1421663&source=Cisco+Jobs+Career+Site"
    },
    {
        name: "UiPath",
        offerType: "Summer Internship",
        category: "Core",
        jobDescription: "Software Engineer Intern",
        eligibleBranches: "BTech CC, CS, IT, DS, AIML, EC, EE, EI, CPS – Female candidates only",
        eligibilityCriteria: "BTech 7 CGPA & above, No Backlogs",
        stipend: "1,50,000 INR",
        relocation: "1,00,000 INR",
        workLocation: "Bengaluru/Hyderabad",
        selectionProcess: "HackerRank Test: 26th August @ 8 PM, Interview: 29th or 30th August 2024",
        lastDateToRegister: "N/A",
        onlineTest: "26th August @ 8 PM",
        link: "https://forms.gle/bnrz5JPB1FwxaVdu7"
    },
    {
        name: "Goldman Sachs (Cyber Security)",
        offerType: "Summer Internship",
        category: "Core",
        jobDescription: "Software Engineer Intern - 8 weeks",
        eligibleBranches: "BTech CS (Cyber Security)",
        eligibilityCriteria: "BTech 7 CGPA & above, No Backlogs",
        stipend: "1,00,000 INR per month",
        workLocation: "Bengaluru/Hyderabad",
        selectionProcess: "30 August 2024 | 7PM – 8PM, September 3 | 11AM",
        lastDateToRegister: "N/A",
        onlineTest: "N/A",
        link: "https://higher.gs.com/campus?&page=1&sort=RELEVANCE"
    }
];



function displayCompanies(filteredCompanies = companies) { // Accept filtered companies
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = ''; // Clear previous company cards

    filteredCompanies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';

        companyCard.innerHTML = `
            <h2>${company.name}</h2>
            <p><strong>Offer Type:</strong> ${company.offerType}</p>
            <p><strong>Category:</strong> ${company.category}</p>
            <p><strong>Job Description:</strong> ${company.jobDescription}</p>
            <p><strong>Eligible Branches:</strong> ${company.eligibleBranches}</p>
            <p><strong>Eligibility Criteria:</strong> ${company.eligibilityCriteria}</p>
            <p><strong>Stipend:</strong> ${company.stipend}</p>
            <p><strong>On Conversion CTC:</strong> ${company.onConversionCTC || 'N/A'}</p> 
            <p><strong>Work Location:</strong> ${company.workLocation}</p>
            <p><strong>Last Date to Register:</strong> ${company.lastDateToRegister}</p>
            <p><strong>Online Test:</strong> ${company.onlineTest || 'N/A'}</p>
            <p><strong>Selection Process:</strong> ${company.selectionProcess || 'N/A'}</p>
            <p><a href="${company.link}" target="_blank">Apply here</a></p>
        `;

        companyList.appendChild(companyCard);
    });
}

function searchCompanies() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredCompanies = companies.filter(company => 
        company.name.toLowerCase().includes(searchInput)
    );
    displayCompanies(filteredCompanies); // Pass filtered companies to display function
}

document.addEventListener('DOMContentLoaded', () => {
    displayCompanies(); // Display all companies on load
});

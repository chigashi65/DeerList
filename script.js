// Array of deer data (name and image URL)
const deerData = [
    { name: "Whitetail", imageUrl: "assets/whitetaildeer.jpeg" },
    { name: "Mule Deer", imageUrl: "assets/muledeer.jpeg" },
    { name: "Red Deer", imageUrl: "assets/reddeer.webp" },
    { name: "Fallow Deer", imageUrl: "assets/fallowdeer.jpeg" },
    { name: "Sika Deer", imageUrl: "assets/sikadeer.jpeg" }
];

// Get the container element
const deerListContainer = document.getElementById("deerList");
const scrollIndication = document.getElementById("scrollIndication");

// Loop through the deerData array
deerData.forEach(deer => {
    // Create a new div element
    const deerElement = document.createElement("div");
    deerElement.classList.add("deerElement"); // Add a class for styling

    // Create an image element
    const deerImage = document.createElement("img");
    deerImage.src = deer.imageUrl;
    deerImage.alt = deer.name;
    deerImage.classList.add("deerImage"); // Add a class for styling

    // Create a paragraph element for the deer name
    const deerNameElement = document.createElement("p");
    deerNameElement.textContent = deer.name;

    // Append the image and paragraph elements to the container
    deerElement.appendChild(deerImage);
    deerElement.appendChild(deerNameElement);

    deerListContainer.appendChild(deerElement);
});


// SCROLL disappear
window.addEventListener('scroll', function () {
    var verticalLine = document.getElementById('verticalLine');
    var scrollIndicator = document.getElementById('scrollIndicator');

    // Calculate how far the user has scrolled
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the maximum scroll position (total height of the document - viewport height)
    var maxScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition >= maxScroll) {
        verticalLine.classList.add('hidden');
        scrollIndicator.classList.add('hidden');
    } else {
        verticalLine.classList.remove('hidden');
        scrollIndicator.classList.remove('hidden');
    }
});


//Footer using Loop

const footerData = [
    "Instagram",
    "Facebook",
    "Contact Me"
];

// Create the footer element
const footer = document.createElement("footer");

// Loop through the footerData array and create anchor elements
footerData.forEach(linkText => {
    const link = document.createElement("a");
    link.href = "#"; // Replace with the actual link
    link.textContent = linkText;
    footer.appendChild(link);

    // Add a separator (pipe character) between links
    if (footerData.indexOf(linkText) < footerData.length - 1) {
        const separator = document.createElement("span");
        separator.textContent = " | ";
        footer.appendChild(separator);
    }
});

// Append the footer to the body
document.body.appendChild(footer);



    const contentSection = document.getElementById('contentSection');

    // Sample data for content
    const sampleContent = [
    "Copyright 1999-2023",
    "by CHIHARU HIGASHI, All Rights Reserved."
    ];

    // Create paragraphs dynamically using a for loop
    for (let i = 0; i < sampleContent.length; i++) {
  const paragraph = document.createElement('p');
    paragraph.textContent = sampleContent[i];
    contentSection.appendChild(paragraph);
}
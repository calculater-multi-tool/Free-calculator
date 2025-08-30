// File: /js/health-hub-loader.js

// This function runs when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Get the container where tools will be placed
    const toolsContainer = document.getElementById('tools-container');
    
    // Step 2: Clear the "Loading..." message
    toolsContainer.innerHTML = '';

    // Step 3: Get the list of tools from our JSON file
    fetch('/data/health-tools.json')
        .then(response => response.json())
        .then(tools => {
            // Step 4: Loop through each tool in the list
            tools.forEach(tool => {
                // Step 5: Create a HTML "card" for each tool
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.innerHTML = `
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <a href="${tool.url}" class="view-tool-button">Use This Tool</a>
                `;
                // Step 6: Add the card to the container
                toolsContainer.appendChild(toolCard);
            });
        })
        .catch(error => {
            // If there's an error (e.g., JSON file not found), show a message
            console.error("Error loading tools:", error);
            toolsContainer.innerHTML = '<p>Tools will be available soon. Please check back later.</p>';
        });
});

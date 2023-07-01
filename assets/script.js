// Function to search for Topics, called by button click.
async function searchTopic() {
    // Get the user input
    var topic = document.getElementById('topicInput').value.trim();
    // Input validation
    if (topic === '') {
      alert('Please enter a topic.');
      return;
    }
  
    // Perform a search using Web Search API found at rapidapi.com
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${topic}&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true&fromPublishedDate=null&toPublishedDate=null`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9c87cf3d42msh23dac74cec4328bp1b4dbdjsnc47d2a2101c4',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      // Handle the search results
      var resultsList = document.getElementById('resultsList');
      var button = document.getElementById('searchBtn');
      resultsList.innerHTML = ''; // Clear previous results
      // Append the results as clickable links
      result.value.forEach(function (item) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.title;
        li.appendChild(link);
        resultsList.appendChild(li);
      });
    } catch (error) {
      console.error(error);
    }
  }
  // Thank you so much for the opportunity! I had a lot of fun making this!
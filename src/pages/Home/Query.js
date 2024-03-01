export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET', // or 'PUT', 'DELETE', etc. 
      headers: {
        'Content-Type': 'application/json'
      },
      
    });
    const data = await response.json();
    return data;
};

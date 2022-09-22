

const box = document.querySelector('.box');

const getQuotes = async (page, limit) => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    // handle 404
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();

}

// show the quotes
const showQuotes = (box) => {
    quotes.forEach(box => {
        const quoteEl = document.createElement('blockquote');
        quoteEl.classList.add('box');

        quoteEl.innerHTML = `
            <span>${box.id})</span>
            ${box.box}
            <footer>${box.author}</footer>
        `;

        box.appendChild(box);
    });
};
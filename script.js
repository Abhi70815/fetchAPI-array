// Part 1: onClick Event Listener
const fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click', () => {
    // Start promise chaining when button is clicked
    promiseAPI1()
    .then((resolved) => promiseAPI2(resolved))
    .then((resolved) => promiseAPI3(resolved));
});

// Part 2: Promise Chaining
function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Make fetch request to API endpoint
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    // Display data in UI
                    displayPostsData(data.posts);
                    // Resolve promise with true
                    resolve(true);
                })
                .catch(error => reject(error));
        }, 1000);
    });
}

function promiseAPI2(resolved) {
    if (resolved) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch('https://dummyjson.com/products')
                    .then(response => response.json())
                    .then(data => {
                        displayProductsData(data.products);
                        resolve(true);
                    })
                    .catch(error => reject(error));
            }, 2000);
        });
    }
}

function promiseAPI3(resolved) {
    if (resolved) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch('https://dummyjson.com/todos')
                    .then(response => response.json())
                    .then(data => {
                        displayTodosData(data.todos);
                        resolve(true);
                    })
                    .catch(error => reject(error));
            }, 3000);
        });
    }
}



// Display data functions
function displayPostsData(posts) {
    posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        `;
        document.getElementById('posts-tbody').appendChild(row);
    });
}

function displayProductsData(products) {
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
        `;
        document.getElementById('products-tbody').appendChild(row);
    });
}

function displayTodosData(todos) {
    todos.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.todo}</td>
            <td>${todo.completed ? 'Yes' : 'No'}</td>
        `;
        document.getElementById('todos-tbody').appendChild(row);
    });
}
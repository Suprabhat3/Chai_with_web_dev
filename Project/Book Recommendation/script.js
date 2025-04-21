
    const books = [
        // Self Help
        {
            category: 'self-help',
            title: 'Atomic Habits',
            author: 'James Clear',
            image: 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg'
        },
        {
            category: 'self-help',
            title: 'The Power of Now',
            author: 'Eckhart Tolle',
            image: 'https://m.media-amazon.com/images/I/61Ij8nLooNL._UF1000,1000_QL80_.jpg'
        },
        {
            category: 'self-help',
            title: 'The 7 Habits of Highly Effective People',
            author: 'Stephen R. Covey',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'self-help',
            title: 'Think and Grow Rich',
            author: 'Napoleon Hill',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtdt-wkDTbt0VFKhO_VhwKMwMDtkezsQp9g&s'
        },

        // Fiction
        {
            category: 'fiction',
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://m.media-amazon.com/images/I/61HAE8zahLL.jpg'
        },
        {
            category: 'fiction',
            title: 'The God of Small Things',
            author: 'Arundhati Roy',
            image: 'https://m.media-amazon.com/images/I/91saO95VziL.jpg'
        },
        {
            category: 'fiction',
            title: 'The White Tiger',
            author: 'Aravind Adiga',
            image: 'https://www.amysbookshelf.co.uk/wp-content/uploads/2021/03/The-White-Tiger-FI.jpg'
        },
        {
            category: 'fiction',
            title: 'Midnight\'s Children',
            author: 'Salman Rushdie',
            image: 'https://5.imimg.com/data5/ZB/OQ/PG/ANDROID-19351533/product-jpeg-1000x1000.jpg'
        },

        // Biography
        {
            category: 'biography',
            title: 'Wings of Fire',
            author: 'A.P.J. Abdul Kalam',
            image: 'https://m.media-amazon.com/images/I/71V46+-55yL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            category: 'biography',
            title: 'The Story of My Experiments with Truth',
            author: 'Mahatma Gandhi',
            image: 'https://m.media-amazon.com/images/I/61Q3PvMKEkL._SY522_.jpg'
        },
        {
            category: 'biography',
            title: 'Unfinished',
            author: 'Priyanka Chopra Jonas',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HLgWvn31eKBIZFGyD01gncb_i2_LQn6n5A&s'
        },
        {
            category: 'biography',
            title: 'Playing It My Way',
            author: 'Sachin Tendulkar',
            image: 'https://m.media-amazon.com/images/I/71fI+NoJACL.jpg'
        },

        // New Category: Business
        {
            category: 'business',
            title: 'Rich Dad Poor Dad',
            author: 'Robert Kiyosaki',
            image: 'https://gyaanstore.com/cdn/shop/files/240_110f4f1b-4f70-40a6-8bab-343e71b4832f.png?v=1701690950&width=990'
        },
        {
            category: 'business',
            title: 'The Lean Startup',
            author: 'Eric Ries',
            image: 'https://m.media-amazon.com/images/I/41BPLKaHmTL._SY445_SX342_.jpg'
        }
    ];

    function displayBooks(category = 'all') {
            const container = document.getElementById('booksContainer');
            container.innerHTML = '';

            const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

            filteredBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';
                bookCard.innerHTML = `
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                `;
                container.appendChild(bookCard);
            });
        }

        function filterBooks(category) {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            event.target.classList.add('active');
            
            displayBooks(category);
        }

        // Initial display
        displayBooks();
    // (Rest of the JavaScript code remains the same)

const change = document.getElementById("change")

function dischangeAnimation(){
    setTimeout(() => {
        change.style.width = "0vw";
    }, 1);
}

window.addEventListener("load", () => {
    dischangeAnimation();
});


const signupButton = document.getElementById("signupButton")

signupButton.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "login.html";
    },1000)
})



const index = document.getElementById("index")

index.addEventListener("click",()=>{
    change.style.display = "block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "index.html"
    },1000)
})


const library = document.getElementById("library")

library.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "library.html";
    },1000)
})

const contact = document.getElementById("contact")



contact.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "contact.html";
    },1000)
})


const aboutMe = document.getElementById("aboutMe")

aboutMe.addEventListener("click",()=>{
    change.style.display = "block"
    change.style.width = "100%"
    setTimeout(()=>{
        window.location.href = "about-me.html"
    },1000)
})




// ChatGPT codes/////////////////////////////////////////////////////////////

const grid = document.getElementById("booksGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function getBooks() {
    return Array.from(grid.children);
}

// Sort A–Z
function sortAZ() {
    const books = getBooks();
    books.sort((a, b) =>
        a.dataset.title.localeCompare(b.dataset.title)
    );
    books.forEach(book => grid.appendChild(book));
}

// Sort Z–A
function sortZA() {
    const books = getBooks();
    books.sort((a, b) =>
        b.dataset.title.localeCompare(a.dataset.title)
    );
    books.forEach(book => grid.appendChild(book));
}

// Search books
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    getBooks().forEach(book => {
        const title = book.dataset.title.toLowerCase();
        book.style.display = title.includes(value) ? "block" : "none";
    });
});

// Filter by category
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    getBooks().forEach(book => {
        if (category === "all" || book.dataset.category === category) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});




const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

const books = document.querySelectorAll(".book-card");

books.forEach(book => {
    book.addEventListener("click", () => {
        const title = book.getAttribute("data-title");
        const category = book.getAttribute("data-category");
        const descAttr = book.getAttribute("data-desc") || `Category: ${category}. A brief description of "${title}".`;
        const imgSrc = book.querySelector("img").src;

        modalTitle.textContent = title;
        modalDesc.textContent = descAttr;
        modalImage.src = imgSrc;
        modalImage.alt = title;

        modal.classList.add("show"); // triggers transition
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});




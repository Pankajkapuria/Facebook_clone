// Generate random photo URLs
function getRandomPhoto(width = 40, height = 40, seed = Math.random()) {
    return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 10000)}`;
}

function getRandomPostImage() {
    return `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 10000)}`;
}

// Load random images on page load
window.addEventListener('load', function() {
    // Load profile pictures for posts
    document.querySelectorAll('.profile-pic').forEach((img, index) => {
        img.src = getRandomPhoto(40, 40);
        img.style.objectFit = 'cover';
    });

    // Load random post images
    document.querySelectorAll('.post-image').forEach((img) => {
        img.src = getRandomPostImage();
        img.style.objectFit = 'cover';
    });

    // Load random friend avatars
    document.querySelectorAll('.friend-avatar img').forEach((img) => {
        img.src = getRandomPhoto(32, 32);
        img.style.objectFit = 'cover';
    });

    // Load random suggested page images
    document.querySelectorAll('.suggestion img').forEach((img) => {
        img.src = getRandomPhoto(40, 40);
        img.style.objectFit = 'cover';
    });
});

// Like button functionality
document.querySelectorAll('.post-action-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.innerHTML.includes('fa-thumbs-up')) {
            this.style.color = '#0a66c2';
            this.innerHTML = '<i class="fas fa-thumbs-up"></i><span>Like</span>';
        }
    });
});

// Sidebar navigation
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Comment button
document.querySelectorAll('.post-action-btn').forEach(button => {
    if (button.innerHTML.includes('fa-comment')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Comment feature coming soon!');
        });
    }
});

// Share button
document.querySelectorAll('.post-action-btn').forEach(button => {
    if (button.innerHTML.includes('fa-share')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Share feature coming soon!');
        });
    }
});

// Create post input focus
const postInput = document.querySelector('.creator-header input');
if (postInput) {
    postInput.addEventListener('focus', function() {
        alert('Post creation feature coming soon!');
    });
}

// Menu button
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Menu options coming soon!');
    });
});

// Follow button
document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.innerHTML === 'Follow') {
            this.innerHTML = 'Following';
            this.style.backgroundColor = '#e4e6eb';
            this.style.color = '#0a66c2';
        } else {
            this.innerHTML = 'Follow';
            this.style.backgroundColor = '#0a66c2';
            this.style.color = 'white';
        }
    });
});

// Search bar functionality
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert('Search for: ' + this.value);
        }
    });
}

// Navigation icons
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const title = this.getAttribute('title');
        alert(title + ' feature coming soon!');
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

console.log('Facebook Layout Script Loaded Successfully!');

function getRandomNumberOneToNine() {
    return Math.floor(Math.random() * (10 - 1)) + 1
}

const images = {
    1: 'https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    3: 'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000',
    4: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    5: 'https://www.spectator.co.uk/wp-content/uploads/2023/05/6Cat-Alamy.jpg?w=1000',
    6: 'https://natusan.co.uk/cdn/shop/articles/natusan-blog-how-cat-years-work-header_600x600_crop_center.jpg?v=1674474680',
    7: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    8: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    9: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-29951-800.jpg',
}

const img = document.createElement('img');

img.src = images[getRandomNumberOneToNine()];

img.style.maxWidth = '1000px';
img.style.maxHeight = '900px';

const body = document.querySelector('body');

body.append(img);
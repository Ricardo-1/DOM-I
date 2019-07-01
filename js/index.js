const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById('cta-img');
ctaImg.src= 'img/header-img.png';

const midImg = document.getElementById('middle-img');
midImg.src= 'img/mid-page-accent.jpg';

// Nav Links //
const links = document.querySelectorAll('a');
links[0].textContent= 'Services';
links[1].textContent= 'Product';
links[2].textContent= 'Vision';
links[3].textContent= 'Features';
links[4].textContent= 'About';
links[5].textContent= 'Contact';
links.forEach(links=>links.style.color='green');

const newLink = document.createElement('a');
newLink.textContent = 'Green Eggs';
newLink.style.color = 'green';

const newerLink = document.createElement('a');
newerLink.textContent = 'and Ham';
newerLink.style.color = 'green';

const addLinks = document.querySelector('nav');

addLinks.prepend(newLink);
addLinks.append(newerLink);

// links.appendChild(a)



const ctaText = document.getElementsByClassName('cta-text');
const domIsAwesome = document.querySelector('h1');
domIsAwesome.innerHTML= `DOM<br>IS<br>AWESOME`;
domIsAwesome.style.whiteSpace= 'pre-line';



const paraHead = document.querySelectorAll('h4');
paraHead[0].textContent= 'Features';
paraHead[1].textContent= 'About';
paraHead[2].textContent= 'Services';
paraHead[3].textContent= 'Product';
paraHead[4].textContent= 'Vision';
paraHead[5].textContent= "Contact";

const paraPara = document.querySelectorAll('p');
paraPara[0].textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraPara[1].textContent= "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraPara[2].textContent= "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraPara[3].textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraPara[4].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraPara[5].textContent= "123 Way 456 Street Somwhere, USA";
paraPara[6].textContent= "1 (888) 888-8888";
paraPara[7].textContent= "sales@greatidea.io"

const footerP = document.querySelector('footer', 'p');
footerP.textContent= 'Copyright Great Idea! 2018';

const btn = document.querySelector('button');
btn.textContent= 'Get Stared'


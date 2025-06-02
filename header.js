const headerHTML = `
<div class="container">
    <div class="header_nav d-flex flex-wrap align-items-center justify-content-between">
    <div class="logo"><a href="index.html"><img src="images/logo.svg" height="80" alt=""></a></div> 
    <input class="navCheck" type="checkbox" id="navCheck">
    <label for="navCheck" class="breadcum"><span></span><span></span><span></span></label>
    <nav>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="index.html" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="shop.html" class="nav-link px-2 link-secondary">Shop</a></li>
        <li><a href="about.html" class="nav-link px-2 link-dark">About</a></li>
        <li><a href="blog.html" class="nav-link px-2 link-dark">Blog</a></li>
        <li><a href="contact.html" class="nav-link px-2 link-dark">Contact Us</a></li>
        </ul>   
    </nav>
    <div class="headerRight">
        <a href="cart.html" class="cartItem">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <span class="cartItemNum" id="cartValue">0</span>
        </a>
    </div>         
</div>            
</div> 
`;


const headerElement = document.querySelector('.mainHeader');
// headerElement.insertAdjacentHTML("afterbegin", headerHTML);
headerElement.innerHTML = headerHTML;
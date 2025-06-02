const footerHTML = `    
        <div class="footer-main">
            <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h3>HELP</h3>
                    <ul class="icon-list icon-line">
                        <li><a href="general-support.html">General Support</a></li>
                        <li><a href="where-does-it.html">Where does it come from</a></li>
                        <li><a href="why-do-we-use-it.html">Why do we use it</a></li>
                        <li><a href="where-can-i-get.html">Where can I get some</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h3>ABOUT US</h3>
                    <ul class="icon-list icon-line">
                        <li><a href="about.html">About us and the company</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="contact.html">Contact us online</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h3>MORE FROM US</h3>
                    <ul class="icon-list icon-line">
                        <li><a href="#">Partners and advertising</a></li>
                        <li><a href="faqs.html">FAQS</a></li>
                        <li><a href="#">Services and projects</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h3>SUBSCRIBE</h3>
                    <p>Join the JOLEAF email community for big news and big offers.</p>
                    <hr class="space-xs">
                    
					
                    <form action="detox-and-eye-mask.html" class="form-box" method="post">
                        <input type="hidden" name="nospam" value="">
                        <div class="row">
                            <div class="col-8">
                                <input id="email" name="email" placeholder="Email" type="email" class="input-text" required="" value="">
                            </div>
                            <div class="col-4">
                                <input class="btn btn-sm" type="submit" name="subscribe" value="Join">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <div class="footer-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <a href="#" title=""><img src="images/logo-white.svg" alt="logo"></a>
                    </div>
                    <div class="col-lg-4 justify-content-center text-center">
                        <span>© Copyright 2025 Joleaf <br> 
                        All rights reserved</span>
                    </div>
                    <div class="col-lg-4 align-right">                        
                        <div class="icon-links icon-social social-colors-hover">
                            <a class="facebook" href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a class="twitter" href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a> 
                            <a class="instagram" href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a> 
                            <a class="pinterest" href="#" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
       
        
   
`;


const footerElem = document.querySelector('.footer');
// footerElem.insertAdjacentHTML("afterbegin", footerHTML);
footerElem.innerHTML = footerHTML;
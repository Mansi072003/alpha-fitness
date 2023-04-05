import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
       
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/">our services</a></li>
                <li><a href="/">privacy policy</a></li>
                <li><a href="/">affiliate program</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">shipping</a></li>
                <li><a href="/">returns</a></li>
                <li><a href="/">order status</a></li>
                <li><a href="/">payment option</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Exercises</h4>
              <ul>
                <li><a href="/">Terms and Conditions</a></li>
                <li><a href="/">Benefits</a></li>
                <li><a href="/">Terms of use</a></li>
                
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="/"><i class="fab fa-facebook-f"></i></a>
                <a href="/"><i class="fab fa-twitter"></i></a>
                <a href="/"><i class="fab fa-instagram"></i></a>
                <a href="/"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

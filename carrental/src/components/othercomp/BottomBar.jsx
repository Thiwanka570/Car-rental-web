import React from 'react'
import './bottomBar.css'

function BottomBar() {
    return (
        <div>
            <div class="bottom-bar">
                <div class="bottom-bar-content">
                    <div class="social-media">
                        <a href="https://www.facebook.com" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="contact-section">
                        <p><strong>Contact Us:</strong> info@yourcompany.com | +1 (123) 456-7890</p>
                    </div>
                    <div class="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

        </div>
    )
}

export default BottomBar
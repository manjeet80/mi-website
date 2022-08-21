import React from 'react'
import { FaMap, FaShieldAlt, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'
import '../styles/PreFooter.css'
import '../styles/Footer.css'

const Footer = ({ footer }) => {
    return (
        <>
            <div className="PreFooter-1">
                <div>
                    <i><BsArrowRepeat /></i>
                    <p><b>Hassle-free replacement </b><br />10-day easy replacement police on mi.com </p>
                </div>
                <div>
                    <i><FaShieldAlt /></i>
                    <p><b>100% secure payment</b><br />We support cards,wallets,ENI and COD </p>
                </div>
                <div>
                    <i><FaMap /></i>
                    <p><b>Vast service network</b><br />1000 Mi service-centers across 600 cities </p>
                </div>
            </div>
            <div className="PreFooter-2">
                <div>
                    <h4>Let's STAY IN TOUCH</h4>
                    <p>Get updates on sales specials and more</p>
                </div>
                <div>
                    <div>
                        <input type="email" placeholder='Enter Email Address' />
                        <button>›</button>
                    </div>
                    <p>Thanks. You're on our email list for special offers.</p>
                </div>
                <div>
                    <h4>Follow MI</h4>
                    <p>We want to hear from you!</p>
                </div>
                <div>
                           <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Ce%7Cfacebook%7C&placement=&creative=550525804791&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1001394929%26loc_physical_ms%3D1007766%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIPH4Nlpxbx9hZD82bAWthz-PLQMtaEFm8ELHpw64_nfAdVZpHk6VBRoCkjYQAvD_BwE"> <i> <FaFacebook className='facebook' /></i></a>
                           <a href="https://www.youtube.com/"><i><FaYoutube className='youtube' /></i></a> 
                            <a href="https://www.instagram.com/accounts/login/?next=/explore/"><i><FaInstagram className='insta' /></i> </a>
                            <a href="https://twitter.com/i/flow/login"><i><FaTwitter className='twitter' /></i></a>
                </div>
            </div>
            <div className="Footer">
                <div>
                    <p>Support</p>
                    {
                        footer.support.map((item) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        footer.shopAndLearn.map((item) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div>
                    <p>RETAIL STORE</p>
                    {
                        footer.retailStore.map((item) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div>
                    <p>ABOUT</p>
                    {
                        footer.aboutUS.map((item) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div>
                    <p>CONTACT US</p>
                    {
                        footer.contactUs.map((item) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div className="footer-btn">
                    <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button>
                </div>
            </div>
            <div className="last-footer">
                <p>Copyright @ 2010 - 2021. All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer

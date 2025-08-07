import {
  FaLightbulb,
  FaArrowRight,
  FaArrowDown,
  FaBuildingCircleArrowRight,
  FaMoneyBill,
  FaRegMoon,
  FaSun,
  FaCaretDown,
  FaCaretUp,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaPeopleGroup,
} from "react-icons/fa6";
import "./Home.css";
import Image1 from "./assets/Image-a.jpg";
import Image2 from "./assets/Image-b.jpg";
import Image3 from "./assets/Image-c.jpg";
import { FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";
import Switch from "react-switch";

const Home = () => {
  const [theme, setTheme] = useState(true);
  const [answer, setAnswers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleToggle = (id) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: !prevAnswers[id],
    }));
  };
  return (
    <div data-theme={theme}>
      <div className="header">
        <div className="logoandname">
          <FaLightbulb className="logo" />
          <p className="logo-name">SolverCorp</p>
        </div>
        <div>
          <ul className="header-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="switch-parent">
          <p className="switch">
            {" "}
            <p className="menu-name">
              <Switch
                onChange={() => setTheme(!theme)}
                checked={theme}
                checkedIcon={<FaRegMoon className="moon" />}
                uncheckedIcon={<FaSun className="sun" />}
                onColor="#384589"
                offColor="fc9601"
              />
            </p>
          </p>
          <p className="header-contact-us">Contact Us</p>
        </div>
      </div>

      <div className="header-text">
        <div className="first-text">
          <h2 className="we-crafting">
            We are Crafting Real Results More Traffic, More Leads, More Growth
          </h2>

          <div className="client-worldwide">
            <div className="clients">
              <div className="we-crafting-image">
                <img src={Image3} className="product-image-1" />
              </div>

              <div className="we-crafting-image">
                <img src={Image3} className="product-image-1" />
              </div>

              <div className="we-crafting-image">
                <img src={Image3} className="product-image-1" />
              </div>
            </div>
            <p>Client Worldwide</p>
          </div>
        </div>
        <div className="header-sub-text">
          <p className="success-text">
            Your success is our mission. We create custom digital marketing strategies
            that increases brand awareness, engagements, and revenue
          </p>
          <button className="get-started">
            <div className="get-started-parent">
              <p className="get-started-text">Get Started</p>
              <div className="get-started-icon">
                <FaArrowRight className="arrow-right" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="scroll-down-parent">
        <div className="scroll-down-header">
          <p className="scroll-down">
            SCROLL DOWN <FaArrowDown className="arrow-down" />
          </p>
        </div>
        <div>
          <div className="experience-flex">
            <div className="experience-a">
              <p className="experience-number">23K</p>
              <p className="number-of-experience">Number of Jobs</p>
              <p className="see-our-portfolio">
                SEE OUR PORTFOLIO
                <FaArrowRight className="arrow-right-b" />
              </p>
            </div>
            <div className="experience-a">
              <p className="experience-number">8+</p>
              <p className="number-of-experience">Years of experiences</p>
            </div>
          </div>
        </div>
        <div className="product-info-parent">
          <div className="product-info">
            <div className="product-info-a">
              <p>Product Design</p>
              <p>PRODUCT NAME</p>
            </div>
            <div className="product-info-a">
              <p className="Date">August</p>
            </div>
          </div>
          <img src={Image1} className="product-image" />
        </div>
      </div>

      <div className="about-us-div">
        <div className="about-a">
          <button className="about-us-text">
            <FaInfoCircle /> About Us
          </button>
        </div>
        <div className="about-b">
          <p className="marketing-agency-text">
            We are a digital marketing agency committed to delivery innovative strategies
            that elevate your brand, increase engagement and drive measurable growth. With
            data-driven solutions and creative expertise.
          </p>
          <div className="sub-about-div">
            <div className="sub-about-icon-div">
              <FaBuildingCircleArrowRight className="sub-about-icon" />
              <p className="sub-about-text-a">ROI Increased by 300%</p>
              <p className="sub-about-text-b">Data backed performance marketing</p>
            </div>
            <div className="sub-about-icon-div">
              <FaBuildingCircleArrowRight className="sub-about-icon" />
              <p className="sub-about-text-a">ROI Increased by 300%</p>
              <p className="sub-about-text-b">Data backed performance marketing</p>
            </div>
            <div className="sub-about-icon-div">
              <FaBuildingCircleArrowRight className="sub-about-icon" />
              <p className="sub-about-text-a">ROI Increased by 300%</p>
              <p className="sub-about-text-b">Data backed performance marketing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-projects-div">
        <div className="latest-project-sub">
          <span className="latest-project-flex">
            <button className="latest-project-button">
              Latest Projects
              <FaProjectDiagram className="project-icon" />
            </button>
            <p className="latest-project-text">
              Showcasing Creativity, Inspiring Possibilities
            </p>
          </span>
          <p className="see-all-portfolio">
            SEE ALL PORTFOLIO <FaArrowRight className="arrow-right-b" />
          </p>
        </div>

        <div className="latest-projects-grid">
          <div className="project-grid-1">
            <img src={Image2} className="product-image-a" />
          </div>
          <div className="project-grid-2">
            <img src={Image2} className="product-image-a" />
          </div>
          <div className="project-grid-3">
            <img src={Image2} className="product-image-a" />
          </div>
        </div>
      </div>

      <div className="our-services">
        <div className="latest-project-sub-b">
          <span className="latest-project-flex">
            <button className="latest-project-button-b">
              Our Services
              <FaProjectDiagram className="project-icon" />
            </button>
            <p className="latest-project-text">Digital Solutions for Business Growth</p>
          </span>
          <span className="sub-c">
            <p className="see-all-portfolio-b">
              From branding to performance, we deliver data driven solutions that drive
              engagement, boost conversations and accelerate growth
            </p>
            <p className="see-all-portfolio">
              SEE MORE <FaArrowRight className="arrow-right-b" />
            </p>
          </span>
        </div>

        <div className="digital-growth-grid">
          <div className="growth-a">
            <p className="digital-growth-text">SEO & Content Marketing</p>
          </div>
          <div className="growth-b">
            <img src={Image2} className="product-image-a" />
          </div>
          <div className="growth-c">
            <p className="digital-growth-text-b">
              Boost visibility and engagement with powerful SEO strategies and compelling
              content that drive traffic, enhance rankings and maximize conversations
            </p>
          </div>
        </div>
        <div className="digital-growth-grid">
          <div>
            <p className="digital-growth-text">Pay-Per-Click (PPC) Advertising</p>
          </div>
          <div>
            <img src={Image2} className="product-image-a" />
          </div>
          <div>
            <p className="digital-growth-text-b">
              Boost visibility and engagement with powerful SEO strategies and compelling
              content that drive traffic, enhance rankings and maximize conversations
            </p>
          </div>
        </div>
        <div className="digital-growth-grid">
          <div>
            <p className="digital-growth-text">Social Media Management</p>
          </div>
          <div>
            <img src={Image2} className="product-image-a" />
          </div>
          <div>
            <p className="digital-growth-text-b">
              Boost visibility and engagement with powerful SEO strategies and compelling
              content that drive traffic, enhance rankings and maximize conversations
            </p>
          </div>
        </div>
      </div>

      <div className="pricing-div">
        <div className="pricing-a">
          <button className="pricing-button">
            <FaMoneyBill /> Pricing
          </button>
        </div>
        <p className="upgrade-today-text">
          Upgrade Today - Unlock More Features, More Power, More Growth!
        </p>
        <p className="invest-text">
          Investing in your growth has never been easier. Discover our flexible pricing
          plans and unlock a world of possibilities.
        </p>

        <div className="payment-plan">
          <p className="monthly-plan">Monthly</p>
          <p className="annual-plan">Annually</p>
        </div>

        <div className="payment-plan-grid">
          <div className="standard-plan">
            <p className="plan-name">Standard Plan</p>
            <p className="plan-amount">$40/Month</p>
            <p className="plan-details">
              Perfect for individuals and small businesses looking to establish their
              online presence
            </p>
            <button className="payment-get-started">GET STARTED</button>
            <div className="plan-details-b">
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
            </div>
          </div>
          <div className="standard-plan">
            <p className="plan-name">Premium Plan</p>
            <p className="plan-amount">$80/Month</p>
            <p className="plan-details">
              Perfect for individuals and small businesses looking to establish their
              online presence
            </p>
            <button className="payment-get-started">GET STARTED</button>
            <div className="plan-details-b">
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
              <p className="features">Full Access To All Features</p>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-projects-div">
        <div className="latest-project-sub">
          <span className="latest-project-flex">
            <button className="latest-project-button">
              Frequently Asked Question
              <FaProjectDiagram className="project-icon" />
            </button>
            <p className="latest-project-text">Frequently Asked Question</p>
          </span>
          <p className="see-all-portfolio">
            Clear Answers, Quick Solutions. Helping You Move Forward
          </p>
        </div>
      </div>
      <div className="faq-grid">
        <div className="faq-parent">
          <span className="faq-flex">
            <div>
              <p>Web Design</p>
              <p>CHARLOTTE AI</p>
            </div>
            <div>
              <p>7th Aug</p>
            </div>
          </span>
          <div className="faq-image-div">
            <img src={Image1} className="faq-image" />
          </div>
        </div>
        <div>
          <span className="faq-qestions" onClick={() => handleToggle(1)}>
            <p>What services does your digital marketing agency offer?</p>
            <div className="arrow-down-div">
              {answer[1] ? (
                <FaCaretUp className="arrow-down-icon" />
              ) : (
                <FaCaretDown className="arrow-down-icon" />
              )}
            </div>
          </span>
          {answer[1] && <p className="answers">Answer</p>}
          <span className="faq-qestions" onClick={() => handleToggle(2)}>
            <p>How can digital marketing benefit my business</p>
            <div className="arrow-down-div">
              {answer[2] ? (
                <FaCaretUp className="arrow-down-icon" />
              ) : (
                <FaCaretDown className="arrow-down-icon" />
              )}
            </div>
          </span>
          {answer[2] && <p className="answers">Answer</p>}
          <span className="faq-qestions" onClick={() => handleToggle(3)}>
            <p>How long does it take to see results?</p>
            <div className="arrow-down-div">
              {answer[3] ? (
                <FaCaretUp className="arrow-down-icon" />
              ) : (
                <FaCaretDown className="arrow-down-icon" />
              )}
            </div>
          </span>{" "}
          {answer[3] && <p className="answers">Answer</p>}
          <span className="faq-qestions" onClick={() => handleToggle(4)}>
            <p>Do you offer customized marketing strategies?</p>
            <div className="arrow-down-div">
              {answer[4] ? (
                <FaCaretUp className="arrow-down-icon" />
              ) : (
                <FaCaretDown className="arrow-down-icon" />
              )}
            </div>
          </span>{" "}
          {answer[4] && <p className="answers">Answer</p>}
          <span className="faq-qestions" onClick={() => handleToggle(5)}>
            <p>What industries do you specialize in?</p>
            <div className="arrow-down-div">
              {answer[5] ? (
                <FaCaretUp className="arrow-down-icon" />
              ) : (
                <FaCaretDown className="arrow-down-icon" />
              )}
            </div>
          </span>{" "}
          {answer[5] && <p className="answers">Answer</p>}
        </div>
      </div>

      <div className="client-testimonial">
        <div className="pricing-b">
          <button className="pricing-button">
            <FaPeopleGroup /> Cient testimonies
          </button>
        </div>
        <p className="client-testimony">
          Our business experienced a significant transformation thanks to this team's
          digital marketing expertise. They delivered tangible improvements in our online
          visibility.
        </p>
        <div className="client-testimonial-div">
          <div className="client-testimony-image-div">
            <img src={Image2} className="client-image" />
          </div>
          <div className="client-details">
            <p className="client-name">Amanda Holly</p>
            <p className="client-job-description">Nursing Assistant</p>
          </div>
        </div>
      </div>
      <div className="drive-quality-leads">
        <div className="latest-project-sub-c">
          <span className="latest-project-flex-c">
            {/* <button className="latest-project-button">
              Frequently Asked Question
              <FaProjectDiagram className="project-icon" />
            </button> */}
            <p className="latest-project-text-c">
              Drive Quality Leads, Maximize Growth, Convert More Customers!
            </p>
            <p className="drive-leads-text">
              Boost your business with targeted strategies that attract high quality
              leads, enhance conversions and accelerate
            </p>
          </span>
          <button className="get-started">
            <div className="get-started-parent">
              <p className="get-started-text">Get Started</p>
              <div className="get-started-icon">
                <FaArrowRight className="arrow-right" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="footer-parent">
        <div className="footer-logo-details">
          <div className="footerlogoandname">
            <FaLightbulb className="logo" />
            <p className="logo-name">SolverCorp</p>
          </div>
          <p>We Drive Real Result, More traffic. More Leads, more Growth!</p>
          <div className="footer-social-icons">
            <FaXTwitter className="footer-twitter" />
            <FaInstagram className="footer-instagram" />
            <FaLinkedin className="footer-linkedin" />
          </div>
        </div>
        <div className="footer-quick-links">
          <div>
            <p className="main-menu">Main Menu</p>
            <p className="main-menu-sub">About Us</p>
            <p className="main-menu-sub">Portfolio</p>
            <p className="main-menu-sub">Services</p>
            <p className="main-menu-sub">Pricing</p>
            <p className="main-menu-sub">Testimonies</p>
          </div>
          <div>
            <p className="main-menu">Company</p>
            <p className="main-menu-sub">Career</p>
            <p className="main-menu-sub">Our Teams</p>
            <p className="main-menu-sub">FAQ's</p>
            <p className="main-menu-sub">Contact Us</p>
          </div>
          <div>
            <p className="main-menu">Resources</p>

            <p className="main-menu-sub">Product</p>
            <p className="main-menu-sub">Envato</p>
            <p className="main-menu-sub">Others</p>
            <p className="main-menu-sub">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import styles from "./css/home.module.css";
import Tile from "./components/Tile";
import ashutosh from "../../assets/images/myImage.jpg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import instagram from "../../assets/images/instagram.svg";
import github from "../../assets/images/github.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLoading(false);
      setError("Please enter a valid email address.");
      return;
    }

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbziig2l7Q2uCJLAcP3ilnr6DqUgeHZgkVO3E3Lqg0B9Ua8jSomlSzlpPK9SrxLR7k4/exec";

    fetch(googleScriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then(() => {
        setSuccess("Successfully Submitted");
        setLoading(false);
        setEmail("");
      })
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Tile
          title="NoMonday Studios"
          content="Boost your brand creativity with NoMonday Studios. We specialize in crafting stunning designs and captivating videos that leave a lasting impression."
          className={styles.noMonday}
          page={"https://nomondaystudios.com"}
          anim="fade-right"
        />
        <Tile
          title="Collide"
          content="meet randomly online for spontaneous, engaging chats. Connect, converse, and explore new conversations."
          className={styles.collide}
          page={"https://www.collide.ing/"}
          anim="fade-down"
        />
        <Tile
          title="MacBease"
          content="The social media app where college students like you redefine the campus experience! Unleash your boundless creativity, ignite your innovation, and connect with a vibrant community"
          className={styles.macBease}
          page={
            "https://play.google.com/store/apps/details?id=com.Macbease&hl=en_IN"
          }
          anim="fade-down-right"
        />

        <div
          className={styles.contactMe}
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <h1 className={styles.title}>Contact me</h1>
          <p className={styles.instruction}>
            Submit Your mail. I will reach you asap
          </p>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <div className={styles.subContainer}>
            <input
              type="email"
              placeholder="Email"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={styles.submitButton}
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        <div className={`${styles.card} ${styles.ashutosh}`}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <img
                src={ashutosh}
                alt="ashutosh"
                className={styles.imgContainer}
              />
            </div>
            <div className={styles.cardBack}>
              <p>
                I am not great at advice. But can I interest you in a sarcastic
                comment?
                <br />
                <br />
                <i>
                  <span>-Chandler Bing</span>
                </i>
              </p>
            </div>
          </div>
        </div>

        <Tile
          title="Soles"
          content="A sneakerhead's paradise. Find the perfect pair of kicks for every occasion."
          className={styles.soles}
          page={"https://soles2-0.onrender.com/"}
          anim="fade-up"
        />

        <Tile
          title="Vibe"
          content="Vibe lets you create epic polls, share bold ideas, and spark real-time buzz with instant votes and feedback from peers."
          className={styles.vibe}
          page={"https://vibe-rosy.vercel.app/"}
          anim="fade-up"
        />

        <Tile
          title="About"
          content="As a software tester, I specialize in ensuring the quality and reliability of software applications. With a keen eye for detail and a methodical approach, I excel at identifying bugs, improving functionality, and enhancing user satisfaction. My goal is to deliver robust and error-free software solutions that meet user expectations and business requirements."
          className={styles.about}
          anim="fade-down"
        />

        <div
          className={styles.skills}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.skillsContainer}>
            <div>
              <p>JIRA</p>
              <p>Manual Testing</p>
              <p>Bug Testing</p>
              <p>UI UX Design</p>
            </div>
            <div>
              <p>Sortware Testing</p>
              <p>Selenium</p>
              <p>Apache</p>
              <p>Unit Testing</p>
            </div>
          </div>
        </div>

        <Tile
          title={"PrintSaathi"}
          content="Your go to printing partner for fast efficient and quality printing services. PrintSaathi is a one stop solution for all your printing needs."
          page={"https://printsaathi.com"}
          className={styles.printSaathi}
          anim="fade-down-left"
        />

        <div className={styles.socialHandles}>
          <a
            href="https://twitter.com/AshutoshPurush1"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.twitter}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-purushottam-370096228/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.linkedin}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://wa.me/918917336247"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.whatsapp}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/stfu__.ash/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.instagram}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://github.com/AshAzax22"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.github}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={github} alt="github" />
          </a>
        </div>

        <div
          className={styles.ashutoshPurushottam}
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <h1 className={styles.name}>Anurag</h1>
          <h1 className={styles.name}>Gautam</h1>
          <h1 className={styles.job}>UI/UX designer</h1>
          <a href="mailto:ashutoshash.az22@gmail.com" className={styles.mail}>
            anurag.gautam@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

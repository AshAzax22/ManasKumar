import { useEffect, useState } from "react";
import styles from "./css/home.module.css";
import Tile from "./components/Tile";
import manas from "../../assets/images/manas.jpg";
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
              <img src={manas} alt="ashutosh" className={styles.imgContainer} />
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
          content="As a full stack web developer, I am passionate about creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into reality. My goal is to build innovative solutions that enhance user experiences and drive business success. I am always eager to learn and adapt to new challenges in the ever-evolving tech landscape."
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
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Debugging</p>
            </div>
            <div>
              <p>React</p>
              <p>Mongo DB</p>
              <p>Express</p>
              <p>Node js</p>
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
            href="https://www.linkedin.com/in/manaskumar8544/"
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
            href="https://www.instagram.com/manasrockstar1018/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialHandle} ${styles.instagram}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://github.com/manaskumar8544"
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
          <h1 className={styles.name}>Manas</h1>
          <h1 className={styles.name}>Kumar</h1>
          <h1 className={styles.job}>Full Stack Web Developer</h1>
          <a href="mailto:ashutoshash.az22@gmail.com" className={styles.mail}>
            manaskumar184@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

import logo from "./prism.png";
import illustration from "./illustration1.png";
import AOS from "aos";
import drf from "./drf1.png";
import { useEffect } from "react";

// import Irene from "./images/irene.jpeg";
// import Mariel from "./images/mariel.jpeg";
// import Tayo from "./images/tayo.jpeg";
// import Ivan from "./images/ivan.png";
import Albert from ".images/albert_shin.jpg";
import Chirag from ".images/chirag.jpeg";
import James_W from ".images/james_wellermeyer.jpg";
import Nika from ".images/nika_duan.jpg";

// Speaker / Mentor Imports
import Lee from "./images/lee.jpeg";
import Alex from "./images/alex.jpeg";
import Densil from "./images/densil.jpeg";
import Maria from "./images/maria.jpeg";
import Sam from "./images/sam.jpeg";
import Lachy from "./images/lachy.jpeg";
import Vinay from "./images/vinay.jpeg";
import Monica from "./images/monica.jpeg";

import "./App.css";
import "aos/dist/aos.css";

const faq = [
  {
    q: "When should I apply?",
    a: "Applications are open until May 4th. We encourage you to apply as soon as possible!",
  },
  {
    q: "Who are you looking for?",

    a: [
      "You’re a full-time student who identifies as LGBTQ+. (If you're not a full time student, I still want to help! Feel free to email me!)",
      "You have an anticipated graduation of 2022 or later. If this is the summer before you start a full-time program, we especially encourage you to apply (ex: B-School, Law School, Incoming freshman, etc.)",
      "We welcome students of all backgrounds to apply. You could be a freshman majoring in Poli-sci, a junior starting your own art studio, or a PhD student studying Machine Learning.",
      "You have passion for entrepreneurship and curiosity about new innovations, businesses, or technology. Don’t worry if you don’t have a ton of experience yet. We value life-long learners and folks driven by curiosity.",
      "You have hustle and like to tackle challenges head on.",
    ],
  },
  {
    q: "What is the selection process?",
    a: "After reviewing your application, a member of our team may reach out to you for a 30-minute Zoom interview. This interview is to get to know you better and learn more about your background and interests. Our team will release final decisions in mid May",
  },
  {
    q: "What is the time commitment?",
    a: "The program is 6-weeks long and will run from June 12th - July 17th. Each session will be held on Saturday afternoons from 11-1pm PST (2-4pm EST).",
  },
  {
    q: "Where will sessions be held?",
    a: "Our sessions will be 100% remote. This gives you the flexibility to be a part of our community regardless of where you’ll be spending your summer.",
  },
  {
    q: "What does a typical Prism session look like?",
    a: "The Dorm Room Fund Team is partnering with some of the best VCs, Angel Investors and Founders in the game to teach you a new topic each week. Sessions will be a combination lecture style teaching, digital fireside chats and small group projects.",
  },
  {
    q: "Do I have to pay for this program?",
    a: "No. At Dorm Room Fund, we aim to make entrepreneurship and education as accessible as possible. While the program is free for you, we do invest time, energy and resources into making our program great. The only thing that we ask for is that you commit to giving the program 100%.",
  },
  {
    q: "What is Dorm Room Fund?",
    a: "We're a student-run venture fund backed by First Round Capital. We invest in startups where at least one person on the founding team is a student (undergraduate or graduate). Our investment team is run by student leaders, entrepreneurs, and innovators across the country.",
  },
  {
    q: "Who should I contact if I have more questions?",
    a: "Prism team at ",
    email: "prism@dormroomfund.com",
  },
];

const success = [
  "A curriculum crafted around the fundamentals and best practices of Venture Capital. Including sessions on sourcing the best companies, developing investors intuition, venture finance, and more.",
  "Access to leading LGBTQ+ investors who have walked in their shoes. Angel investors and fund managers who have built portfolios from the ground up.",
  "Mentors that are dedicated to their success and who have a wealth of knowledge to share.",
  "A community that is like-mind, diverse and highly motivated. A value-rich community of their peers, Dorm Room Fund, First Round Capital, and VC and entrepreneurship networks like StartOut and Gaingels.",
];

const curriculum = [
  "🔤 Week 1: Intro to VC",
  "💰 Week 2: Venture Finance 101",
  "🦄 Week 3: Evaluating Deals and Due Diligence",
  "☕️ Week 4: Sourcing and Supporting Founders",
  "📚 Week 5: Market Thesis Development",
  "👩🏽‍💻 Week 6: Final Presentations / Career Coaching",
];

const mentors = [
  {
    name: "Lee Edwards",
    role: "Partner @ Root VC",
    photo: (
      <img src={Lee} alt="headshot of Lee" width={200} className="headshot" />
    ),
  },
  {
    name: "Alex Marshall",
    role: "Special Projects @ First Round",
    photo: (
      <img src={Alex} alt="headshot of Alex" width={200} className="headshot" />
    ),
  },
  {
    name: "Densil Porteous",
    role: "CEO @ Pride Fund",
    photo: (
      <img
        src={Densil}
        alt="headshot of Densil"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Maria Salamanca",
    role: "Partner @ Unshackled Ventures",
    photo: (
      <img
        src={Maria}
        alt="headshot of Maria"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Sam Altman",
    role: "Ex-YC, CEO @ OpenAI",
    photo: (
      <img src={Sam} alt="headshot of Sam" width={200} className="headshot" />
    ),
  },
  {
    name: "Lachy Groom",
    role: "Angel Investor",
    photo: (
      <img
        src={Lachy}
        alt="headshot of Lachy"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Vinay Iyengar",
    role: "Investor @ Two Sigma Ventures",
    photo: (
      <img
        src={Vinay}
        alt="headshot of Vinay"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Monica Black",
    role: "Founder and Managing Director @ Function.vc",
    photo: (
      <img
        src={Monica}
        alt="headshot of Monica"
        width={200}
        className="headshot"
      />
    ),
  },
];

const team = [
  {
    name: "Albert Shin",
    pronouns: "he/him",
    college: "Harvard University '23",
    dog: "Corgi",
    photo: (
      <img
        src={Albert}
        alt="headshot of Albert"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Chirag Mahapatra",
    pronouns: "he/him",
    college: "Booth '23",
    dog: "Bernedoodle",
    photo: (
      <img
        src={Chirag}
        alt="headshot of Chirag"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "James Wellemeyer",
    pronouns: "he/him",
    college: "Columbia University '23",
    dog: "Octopus",
    photo: (
      <img
        src={James_W}
        alt="headshot of James"
        width={200}
        className="headshot"
      />
    ),
  },
  {
    name: "Nika Duan",
    pronouns: "she/her",
    college: "HBS '23",
    dog: "Vizsla",
    photo: (
      <img src={Nika} alt="headshot of Nika" width={200} className="headshot" />
    ),
  },
];

function App() {
  const date = new Date();
  const options = { month: "long" };
  const dateMonth = new Intl.DateTimeFormat("en-US", options).format(date);

  const dateYear = date.getFullYear();
  const windowHeight = window.innerHeight;

  useEffect(() => {
    AOS.init({
      offset: Math.max(windowHeight / 2.4),
      duration: 600,
    });
    AOS.refresh();
  }, [windowHeight]);

  return (
    <div>
      <div className="container">
        <div className="flex" data-aos="fade-down" data-aos-duration="1000">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">Prism Investor Track</div>

          <button
            className="button"
            disabled
            onClick={() =>
              window.open("https://airtable.com/shrZ0jUQi8kQicaIc", "_blank")
            }
          >
            Applications are open!
          </button>
        </div>

        <div
          className="illustration-container"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={illustration}
            alt="illustration of people dancing in a parade"
            className="illustration"
          />
        </div>
        <div
          className="paragraph call-line"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          🏳️‍🌈 Together, we can turn the VC industry into a brilliant spectrum of
          individuals
        </div>
        <div className="logos" data-aos="fade-up">
          <img src={drf} alt="DRF Logo" className="drf-logo" />
        </div>
        <div className="paragraph" data-aos="fade-up">
          Dorm Room Fund’s <strong>Prism Investor Track</strong> is 6-week
          masterclass supporting the next generation of queer venture investors!
          We’re bringing together a select cohort of talented LGBTQ+ students to
          gain a new community and learn from the best startup investors in the
          business.
        </div>
        <div className="paragraph" data-aos="fade-up">
          Leveraging the resources from our communities across the country, the
          Prism Investor Track is setting students up for success through:
          <ol>
            {success.map((e, i) => {
              return <li className="success-text">{e}</li>;
            })}
          </ol>
        </div>
        <div className="paragraph" data-aos="fade-up">
          <div className="subtitle">Curriculum</div>
          <div>
            New to Venture Capital? Never even heard of it before? We’ve got you
            covered. Our six week program will give you the fundamental skills
            and frameworks you need to jumpstart your Venture Capital journey.
            Here’s what it looks like:
          </div>
          <ul>
            {curriculum.map((e) => {
              return <li className="success-text">{e}</li>;
            })}
          </ul>
        </div>

        <div className="paragraph" data-aos="fade-up">
          <div className="subtitle">Organizing Team</div>
          <div className="people">
            {team.map((user) => {
              return (
                <div className="person-descriptor">
                  {user.photo}
                  <div className="name">{user.name}</div>
                  <div className="pronouns">{user.pronouns}</div>
                  <div>{user.college}</div>
                  {/* <div>
                    <b>Favorite dog breed:</b> {user.dog}
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="paragraph">
          <div className="subtitle">Speakers and Mentors</div>
          <div style={{ marginBottom: "4%" }}>
            Here are some of the amazing people you'll learn from and chat with!
            More on the way 👀
          </div>
          <div className="mentors">
            {mentors.map((user) => {
              return (
                <div className="person-descriptor">
                  {user.photo}
                  <div className="name">{user.name}</div>
                  <div className="pronouns">{user.role}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="paragraph" data-aos="fade-up">
          Applications for the Prism Investor Track 2021 are closed.
        </div>
      </div>
      <div className="faq-container">
        <div className="subtitle">FAQ</div>
        {faq.map((e, i) => {
          const question = (i + 1).toString().concat(". ").concat(e.q);
          if (Array.isArray(e.a)) {
            return (
              <div data-aos="fade-up">
                <div className="question">{question}</div>

                <ul>
                  {e.a.map((event, i) => {
                    return <li className="answer list">{event}</li>;
                  })}
                </ul>
              </div>
            );
          } else if (e.email) {
            return (
              <div data-aos="fade-up">
                <div className="question">{question}</div>
                <div className="answer">
                  {e.a}{" "}
                  <a
                    href={"mailto:".concat(e.email)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.email}{" "}
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div data-aos="fade-up">
                <div className="question">{question}</div>
                <div className="answer">{e.a}</div>
              </div>
            );
          }
        })}
        <div className="footer" data-aos="fade-in" data-aos-offset="200">
          <div>
            Crafted by{" "}
            <a href="https://dormroomfund.com" target="_blank" rel="noreferrer">
              Dorm Room Fund
            </a>{" "}
          </div>
          <div>
            © {dateMonth} {dateYear}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

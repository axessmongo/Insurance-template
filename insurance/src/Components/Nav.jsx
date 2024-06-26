import React from "react";
import life from "../assets/images/LIFE-INSURANCE.png";
// import car from "../assets/images/Car-Insurance1.jpg";
import bike from "../assets/images/bike-insurance-plan.jpg";
import logo from "../assets/images/logo.jpg";
import lifeinsu from "../assets/images/life-insu.png";
import sevabhav from "../assets/images/Sevabhav.png";
import excellence from "../assets/images/Excellence.png";
import credibility from "../assets/images/Credibility.png";
import fire from "../assets/images/fire2.png";
import child from "../assets/images/child 1.png";
import health from "../assets/images/Health (2).png";
import life1 from "../assets/images/Life1.png";
import home from "../assets/images/Home.png";
import bike1 from "../assets/images/bike.png";
import senior from "../assets/images/senior.png";
import accident from "../assets/images/accident.png";
import healthbanner from "../assets/images/health-banner1.png";
import car from "../assets/images/car-insu1.png";
import banner from "../assets/images/insimg.jpg";
import banner1 from "../assets/images/insurance1.avif";
import banner2 from "../assets/images/banner-2.jpg";
import logo1 from "../assets/images/Insurance.png";

function Nav() {
  return (
    <div className="overflow-hidden">
      {/* Nav */}

      <section className="nav-banner  d-flex justify-content-end align-items-center">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top m-auto rounded-2"
          id="home"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo1} className="logo1" alt="" />
            </a>


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-3 heading5 p-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#corevalue">
                    Core Value
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#types">
                    Types
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
        <a href="https://axesstechnology.in/contact" target='_blank'>
          <button className='buy-now-bt'>BuyNow</button></a>
      </div> */}

      {/* Banner */}
      <section className="herobanner banner mt-5 pt-4 " id="home">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={banner1}
                className="d-block  imgsz img-fluid"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner}
                className="d-block imgsz img-fluid"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner2}
                className="d-block img-fluid imgsz "
                alt="Slide 3"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <img src={banner} className="img-fluid imgsz mt-4" alt="" />
        </div> */}
      </section>
      {/* About */}
      <section className="container mt-5" id="about">
        <h1 className="text-center text-danger p-2 rounded-5 mt-5 display-4">
          𝔸𝕓𝕠𝕦𝕥
        </h1>
        <div
          className=" bg-danger-subtle rounded-3"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="row mt-5 justify-content-evenly">
            <div className="col-md-5 ">
              <div className="justify-content-center d-flex">
                <img
                  src={lifeinsu}
                  className="aboutimg p-5 img-fluid "
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </div>
            </div>
            <div className="col-md-6  d-flex  align-items-center">
              <div className="" data-aos="fade-left" data-aos-duration="1000">
                <h3 className="text-center">Brief History of Our Company</h3>
                <p className=" p-3">
                  Founded in 1995, our insurance company began with a mission to provide comprehensive and reliable coverage
                  to individuals and businesses. Over the past two decades, we have grown from a small local provider to a
                  nationally recognized name in the insurance industry. Our commitment to innovation, customer service, and
                  community involvement has driven our success and allowed us to expand our offerings. Today, we proudly serve
                  thousands of clients, helping them protect what matters most with a wide range of insurance solutions.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR CORE VALUES */}
      <section className="container mt-5" id="corevalue">
        <div>
          <h1 className="text-center text-danger m-5 corevalue">
            Our Core Principles
          </h1>
          <div className="row justify-content-around">
            <div
              className="col-md-4 mt-3"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="">
                <div className="p-5 bg-body-secondary rounded-4">
                  <div className="text-center mb-3">
                    <img src={sevabhav} alt="" />
                    <h4>Integrity</h4>
                  </div>
                  <p>
                    We uphold the highest standards of honesty and ethics in everything we do. Our commitment to
                    integrity ensures that our clients can trust us to protect their interests.
                  </p>

                </div>
              </div>
            </div>
            <div
              className="col-md-4 mt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="p-5 bg-warning-subtle rounded-4">
                <div className="text-center mb-3">
                  <img src={excellence} alt="" />
                  <h4>Customer-Centric</h4>
                </div>

                <p>
                  We prioritize our clients' needs above all else. By listening and responding to their
                  feedback, we continually improve our services and provide personalized solutions.
                </p>
              </div>
            </div>
            <div
              className="col-md-4 mt-3"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="p-5 bg-info-subtle rounded-4">
                <div className="text-center mb-3">
                  <img src={credibility} alt="" />
                  <h4>Innovation</h4>
                </div>
                <p>
                  We embrace innovation to stay ahead in the dynamic insurance industry. By leveraging
                  cutting-edge technology and creative thinking, we offer innovative products and services that meet
                  evolving needs.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 𝕋𝕪𝕡𝕖𝕤 𝕆𝕗 𝕀𝕟𝕤𝕦𝕣𝕒𝕟𝕔𝕖 */}
      <section className="container  mt-5" id="types">
        <h1 className="text-center text-danger p-5">𝕋𝕪𝕡𝕖𝕤 𝕆𝕗 𝕀𝕟𝕤𝕦𝕣𝕒𝕟𝕔𝕖</h1>
        <div className="mt-3">
          <div className="row justify-content-center text-center">
            <div
              className="col-md-3 col-sm-6  mt-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="bg-body-tertiary types  p-3">
                <div>
                  <img src={home} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Home Insurance</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="bg-danger-subtle types p-3">
                <div>
                  <img src={health} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Health Insurance</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="bg-dark-subtle types p-3">
                <div>
                  <img src={bike1} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Bike Insurance</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="bg-warning-subtle types p-3">
                <div>
                  <img src={life1} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Life Insurance</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="bg-primary-subtle types p-3">
                <div>
                  <img src={child} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Child Plan</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="bg-secondary-subtle types p-3">
                <div>
                  <img src={accident} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Accident Insurance</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="bg-success-subtle types p-3">
                <div>
                  <img src={fire} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">Fire Insurance</h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mt-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="bg-info-subtle types p-3">
                <div>
                  <img src={senior} alt="" className="img-fluid w-50" />
                </div>
                <h5 className="p-2">SeniorCitizen insurance</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-5 commonbg  py-5">
        <div className="mt-5 container">
          <h2 className="fw-semibold   pb-5 px-3 rounded-3">
            𝚃𝚢𝚙𝚎𝚜 𝚘𝚏 𝙸𝚗𝚜𝚞𝚛𝚊𝚗𝚌𝚎
          </h2>

          <p data-aos="fade-up">
            There are several types of insurance plans available. Some of the
            commonly preferred ones include the following:
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Life insurance :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            Provides financial protection to beneficiaries in case of the policyholder's death. It can
            also provide savings and investment opportunities.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Health insurance :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            Insurance: Covers medical expenses incurred by the insured, providing financial protection
            against healthcare costs, including hospitalization, surgeries, and treatments.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Motor Insurance:
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            Mandatory in India, it covers losses related to a vehicle and its passengers, including
            accidents, theft, and third-party liability.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Home insurance :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            Covers the structure and contents of a home against risks such as fire, natural
            disasters, burglary, and more.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Travel Insurance:
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            Provides coverage for unexpected events during domestic and international travel,
            including trip cancellation, medical emergencies, and lost luggage.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Crop Insurance:
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            Provides financial support to farmers in case of crop failure due to natural calamities,
            pests, or diseases.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Personal Accident Insurance:
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            Provides financial compensation in case of accidental death, disability, or
            injury.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Business Insurance:
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            Protects businesses from financial losses due to risks such as property damage,
            liability, and business interruption.
          </p>

        </div>
      </section>
      {/* Sample Illustration */}
      <section className=" mt-5 carpolicybg py-5">
        <h1 className="text-center text-danger p-5">𝕊𝕒𝕞𝕡𝕝𝕖 𝕀𝕝𝕝𝕦𝕤𝕥𝕣𝕒𝕥𝕚𝕠𝕟$$</h1>
        <div className="container mt-5">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="bg-body-tertiary rounded-2">
                <p className="p-4">
                  Premiums given are excluding taxes for Life Cover of 1 Cr.,
                  Standard Life, Non-Smoker for a policy duration of 20 years,
                  Regular Pay under Life Option.
                </p>
                <div className="p-4">
                  <table class="table table-success table-striped">
                    <tr className="">
                      <th></th>
                      <th>Annual Premium</th>
                      <th>Monthly Premium</th>
                    </tr>
                    <tr>
                      <th className="text-danger">Years</th>
                      <th className="text-danger">Male</th>
                      <th className="text-danger">Male</th>
                    </tr>
                    <tr>
                      <th>20Years</th>
                      <td>₹ 12,200</td>
                      <td>₹ 1,077</td>
                    </tr>
                    <tr>
                      <th>25Years</th>
                      <td>₹ 13,600</td>
                      <td>₹ 1,201</td>
                    </tr>
                    <tr>
                      <th>30 years</th>
                      <td>₹ 16,600</td>
                      <td>₹ 1,466</td>
                    </tr>
                    <tr>
                      <th>35 years</th>
                      <td>₹ 22,000</td>
                      <td>₹ 1,943</td>
                    </tr>
                    <tr>
                      <th>40 years</th>
                      <td>₹ 31,000</td>
                      <td>₹ 2,737</td>
                    </tr>
                    <tr>
                      <th>45 years</th>
                      <td>₹ 49,600</td>
                      <td>₹ 4,380</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="bg-body-tertiary rounded-2">
                <p className="p-4">
                  Premiums given are excluding taxes for Life Cover of 1 Cr.,
                  Standard Life, Non-Smoker for a policy duration of 20 years,
                  Regular Pay under Life Option.
                </p>
                <div className="p-4">
                  <table class="table table-success table-striped ">
                    <tr className="">
                      <th></th>
                      <th>Annual Premium</th>
                      <th>Monthly Premium</th>
                    </tr>
                    <tr>
                      <th className="text-danger">Years</th>
                      <th className="text-danger">Female</th>
                      <th className="text-danger">Female</th>
                    </tr>
                    <tr>
                      <th>20Years</th>
                      <td>₹ 10,400</td>
                      <td>₹ 918</td>
                    </tr>
                    <tr>
                      <th>25Years</th>
                      <td>₹ 11,600</td>
                      <td>₹ 1,024</td>
                    </tr>
                    <tr>
                      <th>30 years</th>
                      <td>₹ 14,200</td>
                      <td>₹ 1,254</td>
                    </tr>
                    <tr>
                      <th>35 years</th>
                      <td>₹ 18,800</td>
                      <td>₹ 1,660</td>
                    </tr>
                    <tr>
                      <th>40 years</th>
                      <td>₹ 26,400</td>
                      <td>₹ 2,331</td>
                    </tr>
                    <tr>
                      <th>45 years</th>
                      <td>₹ 42,200</td>
                      <td>₹ 3,726</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-5 commonbg  py-5">
        <div className=" container">
          <h5
            className="fw-semibold fs-3  py-2 px-3 rounded-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >

            Why Insurance Is a Must for Everyone:
          </h5>


          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Financial Protection:
          </li>
          <p>Insurance provides financial protection against unexpected events that can lead to
            significant expenses, such as medical emergencies, accidents, or damage to property.</p>




          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Risk Management:
          </li>
          <p>It helps individuals and families manage various risks effectively, including health
            risks, liability risks, and risks associated with property and assets.</p>
          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Peace of Mind:
          </li>
          <p>Having insurance gives peace of mind, knowing that you are financially protected against
            unforeseen circumstances and that your loved ones are taken care of in your absence.</p>
          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Legal Requirements:
          </li>
          <p>Some types of insurance, like motor insurance and health insurance, are
            mandatory by law in India, ensuring compliance and protecting others in case of accidents or health
            emergencies.</p>
          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Savings and Investment:
          </li>
          <p>Certain insurance policies, such as life insurance and retirement plans, also act
            as savings and investment vehicles, providing long-term financial security and growth.</p>
          <li className="fw-bold text-success fs-4 pb-3" data-aos="fade-up" data-aos-duration="600">
            Support During Emergencies:
          </li>
          <p>Insurance provides immediate financial support during emergencies,
            ensuring that you can access necessary medical care, repair or replace damaged property, and recover
            from losses quickly.</p>
        </div>
      </section>
      {/* car insurance policy  */}
      <section className="carpolicybg mt-5 ">
        <div className="container">
          <h2
            className="p-5 text-center text-white"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            𝙷𝚘𝚠 𝚝𝚘 𝚌𝚑𝚘𝚘𝚜𝚎 𝚝𝚑𝚎 𝚛𝚒𝚐𝚑𝚝 𝚌𝚊𝚛 𝚒𝚗𝚜𝚞𝚛𝚊𝚗𝚌𝚎 𝚙𝚘𝚕𝚒𝚌𝚢 𝚘𝚗𝚕𝚒𝚗𝚎?
          </h2>

          <div className="row justify-content-around p-5">
            <div className="col-md-4 mt-3 ">
              <div
                className=" carpolicycard"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="p-4 ">
                  <p className="fw-bold text-warning  ">
                    1. Assess Your Needs and Goals:
                  </p>
                  <p>
                    * Determine why you need life insurance (e.g., income replacement, debt repayment, education
                    funding).
                    * Calculate how much coverage you need based on your financial obligations and future goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div
                className=" carpolicycard1"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="p-4">
                  <p className="fw-bold text-warning  ">
                    2. Understand Types of Life Insurance:
                  </p>
                  <p>
                    * Learn about different types of life insurance (e.g., term life, whole life, universal life).
                    * Consider the benefits and drawbacks of each type based on your needs and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div
                className=" carpolicycard"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="p-4">
                  <p className="fw-bold text-warning  ">3.Compare Insurance Providers:</p>
                  <p>
                    * Research insurance companies and their financial strength ratings.
                    * Compare premiums, coverage options, and customer reviews to find a reputable provider.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div
                className="  carpolicycard1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-4">
                  <p className="fw-bold text-warning  ">
                    4. Get Quotes and Customize Your Policy:
                  </p>
                  <p>
                    * Request quotes based on your coverage needs and personal information.
                    * Customize your policy by selecting the coverage amount, policy term, and any additional riders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div
                className=" carpolicycard"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="p-4">
                  <p className="fw-bold text-warning  ">5.Review and Purchase:</p>
                  <p>
                    * Review the policy details, terms, and conditions carefully.
                    * Purchase the life insurance policy that best meets your needs and provides adequate coverage.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="commonbg mt-5 py-5">
        <div className="container">
          <div className="p-4">
            <p data-aos="fade-up" data-aos-duration="600">
              There is no denying that you will have greater peace of mind if
              you know that you and your loved ones are financially secure from
              various unforeseen situations. Uncertainties in life could crop up
              at any moment, such as an unfortunate death or a medical
              emergency. These situations also include an accident or damage to
              your vehicle, property, etc.
            </p>
            {/* <p data-aos="fade-up" data-aos-duration="600">
              Bearing the financial impact of these situations can burn a hole
              into your pocket. You may need to dip into your savings or your
              family’s hard-earned money. Thus, there is a pressing need of
              insurance for you and your family for proper coverage and
              financial support against all risks linked to your life, health
              and property.
            </p> */}
          </div>
          <div>
            <h5
              className="fw-semibold fs-3 py-2 px-3 rounded-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Here are 5 points to guide you in choosing the right insurance plan:
            </h5>

            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Assess Your Coverage Needs:
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Evaluate your current financial situation, including your income,
              expenses, debts, and dependents. Consider what financial obligations you want the insurance to cover,
              such as mortgage payments, education expenses, or living expenses for your family.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3 d-none d-lg-block"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Understand Different Types of Insurance:
            </li>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              className="d-none d-lg-block"
            >
              Learn about the various types of insurance plans available
              (e.g., term life, whole life, health insurance, etc.) and their respective features. Each type of insurance plan
              offers different benefits and serves different purposes, so choose the one that best meets your needs.
            </p>
            {/* <li
                className="fw-bold text-success fs-4 pb-3"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Supports Families in Medical Emergencies
              </li>
              <p data-aos="fade-up" data-aos-duration="600">
                The importance of insurance is particularly pronounced in today's
                times. Medical expenses are skyrocketing due to medical inflation
                and the increasing frequency of various illnesses1. Therefore,
                having a robust health insurance policy is essential at this time.
                Health insurance offers financial protection against medical
                costs. It provides an affordable solution by allowing you to buy
                policies with a high sum assured without straining your wallet. It
                also guarantees access to quality healthcare services in your hour
                of need.
              </p> */}
          </div>

          <div>


            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Compare Plans and Providers:
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              MakResearch and compare insurance plans from different providers. Look at
              factors such as premium costs, coverage limits, deductibles, co-pays, and exclusions. Consider the
              financial strength and reputation of the insurance company as well as customer reviews and feedback.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Consider Your Budget:
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Determine how much you can afford to pay in premiums without straining your
              budget. Ensure that the premium payments fit comfortably into your monthly expenses for the entire
              duration of the policy.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Review the Policy Details:
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Carefully read and understand the terms and conditions of the insurance
              policy before making a decision. Pay attention to coverage limits, exclusions, waiting periods, and any
              additional benefits or riders that may be included. Make sure the policy meets your coverage needs and
              provides adequate protection for you and your family.
            </p>
            {/* <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Policy Duration
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Life insurance policies are long-term plans and often last for
              many years. When choosing a life insurance policy, it is vital to
              consider various factors such as your age, the ages of your
              dependents, outstanding debts and future financial obligations.
              For example, if you have young children, it is prudent to select a
              policy that lasts at least until they become financially
              independent.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Personal Aspects
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Every individual's needs are unique. The kind of coverage you need
              can depend on your age, gender, occupation and lifestyle. For
              example, if your job requires you to work in accident-prone areas,
              it may be advised to buy a high sum assured and a longer policy
              term to ensure your family's financial security in your absence.
            </p> */}
          </div>
        </div>
      </section>
      {/* footer */}
      <div className="footer">
        <div className="inner-footer">

          {/* for company name and description */}
          <div className="footer-items">
            <a className="navbar-brand" href="#">
              <img src={logo1} className="logo1" alt="" />
            </a>
            <p>Description of any product or motto of the company.</p>
          </div>

          {/* for quick links */}
          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div> {/* for the underline */}
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About </a></li>
              <li><a href="#">Core Value</a></li>
              <li><a href="#">Type</a></li>
            </ul>
          </div>

          {/* for some other links */}
          <div className="footer-items">
            <h3>Insurances</h3>
            <div className="border1"></div> {/* for the underline */}
            <ul>
              <li><a href="#">Life</a></li>
              <li><a href="#">Bike</a></li>
              <li><a href="#">Car</a></li>
              <li><a href="#">Child</a></li>
            </ul>
          </div>

          {/* for contact us info */}
          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i>Alwarpet</li>
              <li><i className="fa fa-phone" aria-hidden="true"></i>987654321</li>
              <li><i className="fa fa-envelope" aria-hidden="true"></i>trustguard@gmail.com</li>
            </ul>

            {/* for social links */}
            <div className="social-media">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-google-plus-square"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom start */}
        <div className="footer-bottom">
          Copyright &copy;2024 Trustguard Insurance 
        </div>
      </div>
    </div>
  );
}

export default Nav;

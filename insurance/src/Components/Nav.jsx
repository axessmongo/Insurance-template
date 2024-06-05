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
import banner from "../assets/images/banner 1.jpg";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import insulogo from "../assets/images/newlogo.png";

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
              <img src={insulogo} className=" logo-img" alt="" />LOGO
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
                src={banner}
                className="d-block  imgsz img-fluid"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner1}
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
                <h3 className="text-center">𝙱𝚁𝙸𝙴𝙵 𝙷𝙸𝚂𝚃𝙾𝚁𝚈 𝙾𝙵 𝚃𝙷𝙴 𝙲𝙾𝙼𝙿𝙰𝙽𝚈</h3>
                <p className=" p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellendus officiis, optio tenetur veritatis aliquam
                  qui est quidem! Repellat ex fuga provident itaque inventore,
                  dicta nam repellendus aspernatur iure labore? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Mollitia
                  repellendus officiis, optio tenetur veritatis aliquam qui est
                  quidem! Repellat ex fuga provident itaque inventore, dicta nam
                  repellendus aspernatur iure labore?
                </p>
                <p className=" p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellendus officiis, optio tenetur veritatis aliquam
                  qui est quidem! Repellat ex fuga provident itaque inventore,
                  dicta nam repellendus aspernatur iure labore? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Mollitia
                  repellendus officiis, optio tenetur veritatis aliquam qui est
                  quidem! Repellat ex fuga provident itaque inventore, dicta nam
                  repellendus aspernatur iure labore?
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
            𝕆𝕌ℝ ℂ𝕆ℝ𝔼 𝕍𝔸𝕃𝕌𝔼𝕊
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
                    <h4>Sevabhav</h4>
                  </div>
                  <p>
                    We encourage a culture of service and helpfulness so that
                    our actions positively impact society. Our commitment to
                    Seva defines and differentiates us.
                  </p>
                  <p>
                    Positive social Impact, Helpfulness, Culture of Service,
                    Mindfulness
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
                  <h4>Excellence</h4>
                </div>
                <p>
                  We encourage a culture of service and helpfulness so that our
                  actions positively impact society. Our commitment to Seva
                  defines and differentiates us.
                </p>
                <p>
                  Positive social Impact, Helpfulness, Culture of Service,
                  Mindfulness
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
                  <h4>Credibility</h4>
                </div>
                <p>
                  We encourage a culture of service and helpfulness so that our
                  actions positively impact society. Our commitment to Seva
                  defines and differentiates us.
                </p>
                <p>
                  Positive social Impact, Helpfulness, Culture of Service,
                  Mindfulness
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
            Life insurance is what you can avail in order to safeguard your
            family in case of your death during the tenor of the policy.The most
            basic form of life insurance available to buyers is term insurance.
            Life insurance helps secure your family financially with a lump sum
            amount that is paid out in the event of the policy holder’s death
            within the policy period
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Health insurance :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            This is purchased for covering medical expenses revolving around
            various health issues, including hospitalisation, treatments and so
            on. These insurance plans come in handy in case of medical
            emergencies; you can also avail of cashless facility across network
            hospitals of the insurer
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Child Plans :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            These insurance policies are savings instruments that help in
            generating lump sum funds whenever children reach a certain age for
            pursuing higher studies. In these plans, the life assured is that of
            the child or the recipient of the funds while the parents are the
            policy owners
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Home insurance :
          </li>
          <p data-aos="fade-up" data-aos-duration="600">
            These insurance plans cover any damages to the home on account of
            accidents, mishaps and natural calamities, among other such events
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Fire Insurance
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            Fire insurance has been designed to reimburse the cost of repair,
            reconstruction or replacement of the property damaged or destroyed
            in a fire. Besides, fire insurance also covers property loss or
            damages due to smoke, water and damages caused by the firefighters.
          </p>
          <li
            className="fw-bold text-success fs-4 pb-3 "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Bike Insurance
          </li>

          <p data-aos="fade-up" data-aos-duration="600">
            A comprehensive bike insurance policy covers both the own damages
            and third-party liabilities. Under its own damage, it gives
            protection against burglary or theft and damage caused by accidents,
            natural calamities, and manmade disasters.
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
            𝙽𝚎𝚎𝚍 𝚏𝚘𝚛 𝙸𝚗𝚜𝚞𝚛𝚊𝚗𝚌𝚎
          </h5>

          <p data-aos="fade-up" data-aos-duration="600">
            Insurance plans are beneficial to anyone looking to protect their
            family, assets/property and themselves from financial risk/losses:
          </p>
          <li className="pb-3" data-aos="fade-up" data-aos-duration="600">
            Insurance plans will help you pay for medical emergencies,
            hospitalisation, contraction of any illnesses and treatment, and
            medical care required in the future.
          </li>
          <li className="pb-3" data-aos="fade-up" data-aos-duration="600">
            The financial loss to the family due to the unfortunate death of the
            sole earner can be covered by insurance plans. The family can also
            repay any debts like home loans or other debts which the person
            insured may have incurred in his/her lifetime
          </li>
          {/* <li className="pb-3 d-none d-lg-block" data-aos="fade-up" data-aos-duration="600">
            Insurance plans will help your family maintain their standard of
            living in case you are not around in the future. This will help them
            cover the costs of running the household through the insurance lump
            sum payout. The insurance money will give your family some
            much-needed breathing space along with coverage for all expenditure
            in case of death/accident/medical emergency of the policyholder
          </li> */}
          <li
            className="pb-3 d-none d-lg-block"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Insurance plans will help in protecting the future of your child in
            terms of his/her education. They will make sure that your children
            are financially secured while pursuing their dreams and ambitions
            without any compromises, even when you are not around
          </li>
          {/* <li className="pb-3" data-aos="fade-up" data-aos-duration="600">
            IMany insurance plans come with savings and investment schemes along
            with regular coverage. These help in building wealth/savings for the
            future through regular investments. You pay premiums regularly and a
            portion of the same goes towards life coverage while the other
            portion goes towards either a savings plan or investment plan,
            whichever you choose based on your future goals and needs
          </li> */}
          {/* <li className="pb-3" data-aos="fade-up" data-aos-duration="600">
            Insurance helps protect your home in the event of any unforeseen
            calamity or damage. Your home insurance plan will help you get
            coverage for damages to your home and pay for the cost of repairs or
            rebuilding, whichever is needed. If you have coverage for valuables
            and items inside the house, then you can purchase replacement items
            with the insurance money
          </li> */}

          <div>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Promotes Personal Economic Growth
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              One of the most important benefits of life insurance is that it
              enables you to save and grow your money. You can use this amount
              to meet your long-term goals, like buying a house, starting a
              venture, saving for your child’s education or wedding, and more
            </p>
          </div>
          <div>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Useful for retirement planning
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Life insurance can enable you to stay financially independent even
              during your retirement. Life insurance plans like annuity plans
              provide you with a fixed income for life. They are low-risk plans
              that help you maintain your current lifestyle, meet medical
              expenses and meet your post-retirement goals
            </p>
          </div>
          <div>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Provides tax benefits
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Life insurance helps you plan for the future, while helping you
              save tax* in the present. The premiums paid under the policy are
              allowed as tax* deductions of up to ₹ 1.5 lakh per annum subject
              to conditions under Section 80C of The Income Tax Act, 1961. You
              can save up to ₹ 46,800/- in taxes* every year. Further, the
              amounts received under the policy are also exempt* subject to
              conditions under Section 10(10D) of the Income Tax Act, 1961.
            </p>
          </div>
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
          <p className="text-white text-center ">
            Before buying car insurance online, read the policy details and
            fine print, and ask questions to clarify anything you need help
            understanding.
          </p>
          <div className="row justify-content-around p-5">
            <div className="col-md-4 mt-3 ">
              <div
                className=" carpolicycard"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="p-4 ">
                  <p className="fw-bold text-warning  ">
                    1. What kind of coverage you need:
                  </p>
                  <p>
                    Choose from options like liability, collision,
                    comprehensive, or personal injury protection.
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
                    2. How much your car is worth:
                  </p>
                  <p>
                    Make sure the cost of your insurance policy matches your
                    vehicle's value.
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
                  <p className="fw-bold text-warning  ">3. How you drive:</p>
                  <p>
                    Your driving habits, such as how often you drive and what
                    type of driving you do, can affect the cost of the insurance
                    if you opt for pay-as-you-drive or pay-how-you-drive
                    policies.
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
                    4. How much you're willing to pay out of pocket:
                  </p>
                  <p>
                    Think about your budget and how much risk you're comfortable
                    with. In case of an accident, if you’re not comfortable
                    spending money from your own pocket for your car repairs,
                    opt for the Own Damage cover instead of a Third-party
                    policy.
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
                  <p className="fw-bold text-warning  ">5. Discounts:</p>
                  <p>
                    Look for discounts you might be eligible for, such as
                    discounts for having multiple policies, being a safe driver,
                    or driving less.
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
              𝚆𝚑𝚢 𝚒𝚜 𝙸𝚗𝚜𝚞𝚛𝚊𝚗𝚌𝚎 𝙸𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚝?
            </h5>
            <p data-aos="fade-up" data-aos-duration="600">
              The importance of insurance should never be undermined. Insurance
              acts as a vital shield against unforeseen circumstances. It
              protects you from unplanned expenses and offers a financial
              cushion from accidents, illnesses and more. Insurance safeguards
              the financial interests of your family in your absence. It helps
              them cover immediate expenses and secures their long-term
              financial stability.
            </p>
            <p data-aos="fade-up" data-aos-duration="600">
              Below are some reasons why insurance is important:
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Promotes Personal Economic Growth
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Insurance acts as a catalyst for personal economic growth by
              empowering surviving family members to pursue their aspirations in
              the absence of the policyholder. It provides a safety net to
              ensure your loved ones have access to essential resources, such as
              education. Your loved ones can also use the insurance payout to
              improve their financial situation by investing in businesses,
              purchasing real estate and more.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3 d-none d-lg-block"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Generates Long-Term Wealth
            </li>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              className="d-none d-lg-block"
            >
              Life insurance plans like endowment, money-back or Unit-Linked
              Insurance Plans (ULIPs) provide a means to accumulate wealth over
              time. These policies offer long-term savings and investment
              opportunities and allow you to secure your financial future. Life
              insurance can be used for various financial goals like retirement,
              a child's higher education and others.
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
            <h5
              className="fw-semibold fs-3 py-2 px-3 rounded-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              𝚂𝚎𝚕𝚎𝚌𝚝𝚒𝚗𝚐 𝚝𝚑𝚎 𝚁𝚒𝚐𝚑𝚝 𝙸𝚗𝚜𝚞𝚛𝚊𝚗𝚌𝚎 𝙿𝚕𝚊𝚗
            </h5>

            <p data-aos="fade-up" data-aos-duration="600">
              Selecting the right insurance plan is important to maximise its
              potential. There are a number of factors that can impact the
              effectiveness of insurance. Below are some of them:
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Adequate Coverage
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              Make sure to analyse your financial needs and select a plan that
              offers adequate financial coverage. Insufficient coverage may help
              you save some money at the time of purchase but can lead to
              compromised financial security in an emergency.
            </p>
            <li
              className="fw-bold text-success fs-4 pb-3"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Ability to Pay Premium
            </li>
            <p data-aos="fade-up" data-aos-duration="600">
              The plan's premium is another essential aspect to consider when
              selecting the right insurance plan. You may have to pay the
              premium for years, depending on the policy term. Therefore, aim to
              strike a balance between adequate coverage, premiums and your
              monthly expenses. If the premium is too high, you may find it hard
              to continue paying for the policy in the long run.
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
            <h1>Company Name</h1>
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
              <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
              <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
              <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
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
          Copyright &copy; Insurances Policy 2020.
        </div>
      </div>
    </div>
  );
}

export default Nav;

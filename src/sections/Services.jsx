import { useState } from "react";
import {
  TrendingUp,
  ShieldCheck,
  Landmark,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import "./Services.css";

function Services() {
  const services = {
    investment: {
      title: "Investment Solutions",
      icon: <TrendingUp size={40} />,
      description:
        "Build long-term wealth with smart investment strategies tailored to your financial goals.",
      items: [
        {
          title: "Mutual Funds",
          desc: "Professionally managed investment portfolios."
        },
        {
          title: "SIP (Systematic Investment Plan)",
          desc: "Invest monthly to create long-term wealth."
        },
        {
          title: "Lumpsum Investment",
          desc: "Invest a one-time amount based on your goals."
        },
        {
          title: "Goal Based Planning",
          desc: "Education, retirement and wealth planning."
        },
        {
          title: "Loan Against Mutual Funds",
          desc: "Get liquidity without selling your investments."
        }
      ]
    },

    insurance: {
      title: "Insurance Solutions",
      icon: <ShieldCheck size={40} />,
      description:
        "Protect yourself, your family and your assets with reliable insurance coverage.",
      items: [
        {
          title: "Life Insurance",
          desc: "Secure your family's financial future."
        },
        {
          title: "Health Insurance",
          desc: "Comprehensive medical protection."
        },
        {
          title: "Vehicle Insurance",
          desc: "Protection for cars and two-wheelers."
        },
        {
          title: "Travel Insurance",
          desc: "Stay protected while travelling."
        }
      ]
    },

    loans: {
      title: "Loan Solutions",
      icon: <Landmark size={40} />,
      description:
        "Fast and reliable loan solutions designed for your personal and business needs.",
      items: [
        {
          title: "Personal Loan",
          desc: "Quick finance for personal requirements."
        },
        {
          title: "Business Loan",
          desc: "Funding to grow your business."
        },
        {
          title: "Home Loan",
          desc: "Finance your dream home."
        },
        {
          title: "Loan Against Property",
          desc: "Unlock funds using your property."
        },
        {
          title: "Loan Against Mutual Funds",
          desc: "Borrow while keeping your investments."
        }
      ]
    }
  };

  const [activeTab, setActiveTab] = useState("investment");

  return (
    <section className="services-section">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive financial solutions designed to help you invest, protect and grow with confidence."
        />

        <div className="service-tabs">

          <button
            className={activeTab === "investment" ? "active" : ""}
            onClick={() => setActiveTab("investment")}
          >
            <TrendingUp size={20} />
            Investment
          </button>

          <button
            className={activeTab === "insurance" ? "active" : ""}
            onClick={() => setActiveTab("insurance")}
          >
            <ShieldCheck size={20} />
            Insurance
          </button>

          <button
            className={activeTab === "loans" ? "active" : ""}
            onClick={() => setActiveTab("loans")}
          >
            <Landmark size={20} />
            Loans
          </button>

        </div>

        <div className="service-details">

          <div className="service-header">

            <div className="service-main-icon">
              {services[activeTab].icon}
            </div>

            <div>

              <h2>{services[activeTab].title}</h2>

              <p>{services[activeTab].description}</p>

            </div>

          </div>

          <div className="service-list">

            {services[activeTab].items.map((item, index) => (

              <div className="service-item" key={index}>

                <CheckCircle size={22} />

                <div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>

              </div>

            ))}

          </div>

          <button className="service-button">
            Request Consultation
            <ArrowRight size={18} />
          </button>

        </div>

      </Container>
    </section>
  );
}

export default Services;
import "./navbox.css";
import { FaBars, FaSearchengin } from "react-icons/fa";
import { useState } from "react";

export default function Navbox() {
  const data1 = {
    title: null,
    prev: null,
    type: "1",
    list: [
      { name: "Industries", list: "Industries" },
      { name: "Consulting Servies", list: "consult" },
      { name: "Digital", link: "/digital" },
      { name: "Insights", list: "insights" },
      { name: "About", list: "about" }
    ]
  };

  function showNav(){
    document.getElementById("nav-box").classList.toggle("show");
  }

  const [data, setData] = useState(data1);

  var Industries = {
    title: null,
    prev: null,
    type: "2",
    list: [
      { name: "Aerospace & Defense" },
      { name: "Automotive & Mobility" },
      { name: "Aviation" },
      { name: "Consumer Products" },
      { name: "Energy & Natural Resources" },
      { name: "Financial Services" },
      { name: "Forest Products, Paper & Packaging" },
      { name: "Healthcare & Life Sciences" },
      { name: "Infrastructure & Construction" },
      { name: "Machinery & Equipment" },
      { name: "Media & Entertainment" },
      { name: "Metals" },
      { name: "Private Equity" },
      { name: "Real Estate" },
      { name: "Retail" },
      { "name ": "Social & Public Sector" },
      { "name ": "Technology" },
      { "name ": "Telecommunications" },
      { "name ": "Transportation" }
    ]
  };

  var consult = {
    title: null,
    prev: null,
    type: "2",
    list: [
      { name: "Customer Experience" },
      { name: "ESG" },
      { name: "Innovation" },
      { name: "Operations" }
    ]
  };

  var Insights = {
    title: null,
    prev: null,
    type: "2",
    list: [
      { name: "Services Insights" },
      { name: "Industry Insights" },
      { name: "Bain Books" },
      { name: "Webinars" }
    ]
  };

  var about = {
    title: null,
    prev: null,
    type: "2",
    list: [
      { name: "What we do" },
      { name: "what we belive" },
      { name: "results" },
      { name: "Awards" }
    ]
  };

  return (
    <div className="navbox " id = "nav-box">
      <div className="head-cont">
        
        <FaBars onClick={showNav} className="box-icon" size={25} />
        <img
          className="box-img"
          src="https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_white.svg"
        />
      </div>

      <div className="box-list">
        <div className="prev">
          {" "}
          <button
            onClick={() => {
              setData(data1);
            }}
          >
            Main Menu
          </button>{" "}
        </div>
        {data.list.map((ele) => {
          if (ele.list != null) {
            var list = ele.list;

            if (list === "Industries") {
              var temp = Industries;
            }

            if (list === "consult") {
              var temp = consult;
            }

            if (list === "insights") {
              var temp = Insights;
            }

            if (list === "about") {
              var temp = about;
            }

            return (
              <li className="box-item">
                {" "}
                <button
                  onClick={() => {
                    setData(temp);
                    console.log([list]);
                  }}
                >
                  {ele.name}
                </button>
              </li>
            );
          }

          if (ele.list == null && ele.link == null) {
            return (
              <li className="box-item">
                {" "}
                <button>{ele.name}</button>
              </li>
            );
          }

          if (ele.link != null) {
            return (
              <li className="box-item">
                <a href={ele.link}> {ele.name} </a>
              </li>
            );
          }
        })}
      </div>
    </div>
  );
}

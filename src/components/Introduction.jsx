import React, { useEffect, useRef } from "react";
import profile_pic from "../assets/image/profile_pic.jpg";
import { designation, hello, iam, name } from "../data/data";
import gsap from "gsap";

const Introduction = () => {
  //
  const letters1 = useRef([]);
  letters1.current = [];
  const addLetters1 = (item) => {
    if (item && !letters1.current.includes(item)) {
      letters1.current.push(item);
    }
  };
  //
  const letters2 = useRef([]);
  letters2.current = [];
  const addLetters2 = (item) => {
    if (item && !letters2.current.includes(item)) {
      letters2.current.push(item);
    }
  };
  //
  const letters3 = useRef([]);
  letters3.current = [];
  const addLetters3 = (item) => {
    if (item && !letters3.current.includes(item)) {
      letters3.current.push(item);
    }
  };
  //
  const letters4 = useRef([]);
  letters4.current = [];
  const addLetters4 = (item) => {
    if (item && !letters4.current.includes(item)) {
      letters4.current.push(item);
    }
  };
  //
  const desc = useRef([]);
  desc.current = [];
  const addDesc = (item) => {
    if (item && !desc.current.includes(item)) {
      desc.current.push(item);
    }
  };
  //
  const profilePic = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    //
    letters1.current.forEach((item) => {
      timeline.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );
    });
    //
    letters2.current.forEach((item) => {
      timeline.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );
    });
    //
    letters3.current.forEach((item) => {
      timeline.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );
    });
    //
    letters4.current.forEach((item) => {
      timeline.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );
    });
    //
    desc.current.forEach((item) => {
      timeline.fromTo(
        item,
        {
          transform: "translateY(50%)",
          opacity: 0,
        },
        {
          transform: "translateY(0)",
          opacity: 1,
          duration: 1,
        }
      );
    });
    gsap.fromTo(
      profilePic.current,
      {
        transform: "scale(1.25)",
        opacity: 0,
      },
      {
        transform: "scale(1)",
        opacity: 1,
      }
    );
  }, []);
  return (
    <>
      <div className="introduction pad10" id="introduction">
        <div>
          <h2 className="mb-md-4">
            {hello.map((item, index) => {
              return (
                <span key={index} ref={addLetters1}>
                  {item}
                </span>
              );
            })}
            <br />{" "}
            {iam.map((item, index) => {
              return (
                <span key={index} ref={addLetters2}>
                  {item}
                </span>
              );
            })}{" "}
            {name.map((item, index) => {
              return (
                <span className="fw-bold" ref={addLetters3} key={index}>
                  {item}
                </span>
              );
            })}
            <br />
            {designation.map((item, index) => {
              return (
                <span key={index} ref={addLetters4}>
                  {item}
                </span>
              );
            })}
          </h2>
          <p className="d-md-block d-none" ref={addDesc}>
            Nearly two years of experience in developing user interface,
            frontend of web applications and websites. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ratione saepe totam, sequi officia quibusdam delectus nemo voluptas
            aliquid, at asperiores debitis atque ea. Recusandae dignissimos
            laudantium nam sequi quaerat!
          </p>
        </div>
        <div className="profile_pic ms-auto">
          <img src={profile_pic} ref={profilePic} alt="profile pic" />
        </div>
      </div>
      <p className="d-md-none mt-4" ref={addDesc}>
        One year and seven month of experience in developing user interface,
        frontend of web applications and websites. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        ratione saepe totam, sequi officia quibusdam delectus nemo voluptas
        aliquid, at asperiores debitis atque ea. Recusandae dignissimos
        laudantium nam sequi quaerat!
      </p>
    </>
  );
};

export default Introduction;

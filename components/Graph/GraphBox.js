"use client";
import * as THREE from "three";

import BaseBox from "../ImmersiveView/Box";
import {
  getSaturatedColorCodesBasedOnCount,
  roundOff,
} from "@/lib/helpers/immersiveViewHelper";

const GraphBox = ({ data }) => {
  var contribTowers = [];

  let pos = new THREE.Vector3(-27.4, 0, -3.3);
  console.log("Contribution Data: ", data);
  for (let j = 0; j < data.contributions.length; j++) {
    for (let i = 0; i < data.contributions[j].length; i++) {
      let contributionCount = data.contributions[j][i].contributionCount;
      let contributionColor = data.contributions[j][i].color;

      let towerHeight = (contributionCount % 8) + 0.1;
      var key = `${pos.x}, ${pos.z}, ${i}, ${j}`;

      let contributionColorBasedOnCount = getSaturatedColorCodesBasedOnCount(
        contributionColor,
        contributionCount
      );
      pos.set(roundOff(-27.4 + j * 1.1), 0, roundOff(-3.3 + i * 1.1));

      contribTowers.push(
        <BaseBox
          key={key}
          args={[1, towerHeight, 1]}
          position={[pos.x, towerHeight / 2, pos.z]}
          color={contributionColorBasedOnCount}
          roughness={0.9}
        ></BaseBox>
      );
    }
  }
  return <>{contribTowers}</>;
};

const data = {
  username: "hemanthhari2000",
  year: 2021,
  minCount: 0,
  maxCount: 11,
  contributions: [
    [
      {
        date: "2021-01-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-06",
        count: 5,
        color: "#006d32",
      },
      {
        date: "2021-01-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-09",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-01-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-11",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-01-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-13",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-15",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-16",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-01-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-21",
        count: 10,
        color: "#39d353",
      },
      {
        date: "2021-01-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-23",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-01-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-27",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-01-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-01-30",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-01-31",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-01",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-03",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-02-04",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-02-05",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-02-06",
        count: 11,
        color: "#39d353",
      },
    ],
    [
      {
        date: "2021-02-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-11",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-13",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-02-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-15",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-20",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-02-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-02-26",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-02-27",
        count: 5,
        color: "#006d32",
      },
    ],
    [
      {
        date: "2021-02-28",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-03-01",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-06",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-03-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-11",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-13",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-03-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-15",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-20",
        count: 2,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-03-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-22",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-03-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-25",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-03-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-03-27",
        count: 1,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-03-28",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-03-29",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-03-30",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-03-31",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-04-01",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-04-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-03",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-04-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-05",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-04-06",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-04-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-09",
        count: 8,
        color: "#26a641",
      },
      {
        date: "2021-04-10",
        count: 2,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-04-11",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-04-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-13",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-04-14",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-04-15",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-04-16",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-04-17",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-04-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-24",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-04-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-04-30",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-05-01",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-05-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-04",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-06",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-05-07",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-08",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-05-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-10",
        count: 5,
        color: "#006d32",
      },
      {
        date: "2021-05-11",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-13",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-15",
        count: 1,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-05-16",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-17",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-05-18",
        count: 5,
        color: "#006d32",
      },
      {
        date: "2021-05-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-22",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-05-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-05-24",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-25",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-05-26",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-05-27",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-05-28",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-29",
        count: 1,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-05-30",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-05-31",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-01",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-02",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-03",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-04",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-05",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-06-06",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-07",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-06-08",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-10",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-11",
        count: 8,
        color: "#26a641",
      },
      {
        date: "2021-06-12",
        count: 1,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-06-13",
        count: 5,
        color: "#006d32",
      },
      {
        date: "2021-06-14",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-15",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-06-16",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-17",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-18",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-19",
        count: 2,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-06-20",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-06-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-26",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-06-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-06-28",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-06-29",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-06-30",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-01",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-07-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-03",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-07-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-05",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-07-06",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-07-07",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-07-08",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-07-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-10",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-07-11",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-13",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-14",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-07-15",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-07-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-17",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-07-18",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-07-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-24",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-07-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-30",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-07-31",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-08-01",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-02",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-08-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-05",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-08-06",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-07",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-08-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-09",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-08-10",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-08-11",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-08-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-13",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-08-14",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-08-15",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-08-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-19",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-08-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-21",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-08-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-28",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-08-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-30",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-08-31",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-01",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-04",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-09-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-06",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-11",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-09-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-13",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-14",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-09-15",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-09-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-17",
        count: 8,
        color: "#26a641",
      },
      {
        date: "2021-09-18",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-09-19",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-09-20",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-09-21",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-09-22",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-09-23",
        count: 10,
        color: "#39d353",
      },
      {
        date: "2021-09-24",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-09-25",
        count: 4,
        color: "#006d32",
      },
    ],
    [
      {
        date: "2021-09-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-09-28",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-09-29",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-09-30",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-10-01",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-10-02",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-10-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-06",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-09",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-10-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-11",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-10-12",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-10-13",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-10-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-15",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-16",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-10-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-18",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-19",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-10-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-22",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-10-23",
        count: 6,
        color: "#26a641",
      },
    ],
    [
      {
        date: "2021-10-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-25",
        count: 6,
        color: "#26a641",
      },
      {
        date: "2021-10-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-27",
        count: 5,
        color: "#006d32",
      },
      {
        date: "2021-10-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-10-30",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-10-31",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-11-01",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-03",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-04",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-06",
        count: 5,
        color: "#006d32",
      },
    ],
    [
      {
        date: "2021-11-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-09",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-11",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-12",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-13",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-11-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-15",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-11-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-18",
        count: 3,
        color: "#006d32",
      },
      {
        date: "2021-11-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-20",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-11-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-24",
        count: 4,
        color: "#006d32",
      },
      {
        date: "2021-11-25",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-26",
        count: 2,
        color: "#0e4429",
      },
      {
        date: "2021-11-27",
        count: 1,
        color: "#0e4429",
      },
    ],
    [
      {
        date: "2021-11-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-11-30",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-12-01",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-12-02",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-03",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-12-04",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-12-05",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-06",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-07",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-08",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-09",
        count: 1,
        color: "#0e4429",
      },
      {
        date: "2021-12-10",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-11",
        count: 4,
        color: "#006d32",
      },
    ],
    [
      {
        date: "2021-12-12",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-12-13",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-14",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-15",
        count: 7,
        color: "#26a641",
      },
      {
        date: "2021-12-16",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-17",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-18",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-12-19",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-20",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-21",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-22",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-23",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-24",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-25",
        count: 0,
        color: "#161b22",
      },
    ],
    [
      {
        date: "2021-12-26",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-27",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-28",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-29",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-30",
        count: 0,
        color: "#161b22",
      },
      {
        date: "2021-12-31",
        count: 0,
        color: "#161b22",
      },
    ],
  ],
};

export default GraphBox;

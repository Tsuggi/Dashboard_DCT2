const grosFlux = {
  labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  datasets: [
    {
      label: "Déchets Verts",
      data: [
        881.57, 1107.88, 1196.18, 1700.9, 2065.32, 1522.56, 1567.46, 1823.02,
        1829.05, 1779.92, 1870.93, 1104.66,
      ],
      fill: false,
      borderColor: "rgb(82, 222, 143)",
      tension: 0.1,
    },

    {
      label: "Gravats",
      data: [
        939.64, 1397.2, 1470.86, 1159.62, 1295.54, 1299.3, 884.62, 840.74,
        1362.8, 1118.18, 978.86, 859.34,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },

    {
      label: "Non valorisable",
      data: [
        1039.52, 992.42, 1128.88, 1021.7, 1020.46, 907.28, 910.4, 895.9,873.28, 974.28, 918, 780.78,
      ],
      fill: false,
      borderColor: "rgb(26, 28, 27)",
      tension: 0.1,
    },
  ],
};
const moyenFlux = {
  labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  datasets: [

    {
      label: "Bois",
      data: [
        213.46, 219.34, 249.04, 296.63, 265.62, 286.64, 321.72, 297.78, 279.02,
        250.6, 267.84, 213.04,
      ],
      fill: false,
      borderColor: "rgb(7181, 105, 58)",
      tension: 0.1,
    },
    {
      label: "Briques Platrières",
      data: [
        47.28, 32.04, 13.98, 49.02, 35.4, 0, 29.84, 13.86, 47.92, 26.6, 43.56,
        36.8,
      ],
      fill: false,
      borderColor: "rgb(250, 83, 77)",
      tension: 0.1,
    },
    {
      label: "Carton",
      data: [
        171.26, 135.68, 154.56, 166.46, 179.6, 180.46, 203, 215.54, 147.56,
        140.02, 137.4, 150.06,
      ],
      fill: false,
      borderColor: "rgb(196, 162, 135)",
      tension: 0.1,
    },

    {
      label: "DEEE",
      data: [
        82.51, 80.42, 79.64, 80.91, 90.15, 80.01, 97.19, 112.06, 91.01, 99.87,
        68.64, 72.67,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Métaux",
      data: [
        113.38, 130.7, 146.26, 147.74, 164.14, 134.06, 180.42, 182.96, 131.7,
        151.64, 113.14, 110.12,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Mobilier",
      data: [
        137.94, 143.54, 157.06, 144.84, 158.14, 159.16, 186.4, 201.97, 191.26,
        194.68, 155.02, 163.96,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const petitFlux = {
  labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  datasets: [
    {
      label: "Batteries",
      data: [
        0.82, 1.76, 0.68, 2.34, 1.46, 0, 1.57, 2.81, 1.62, 1.46, 0.88, 1.42,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },

    {
      label: "Cartouches",
      data: [0.2, 0.24, 0.05, 0.92, 0.26, 0, 0.26, 0.35, 0, 0.34, 0.09, 0.11],
      fill: false,
      borderColor: "rgb(247, 245, 131)",
      tension: 0.1,
    },
    {
      label: "DDS",
      data: [
        18.23, 16.83, 16.94, 20.34, 21.24, 23.16, 20.48, 17.84, 34.94, 19.87,
        17.36, 16.33,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "EcoDDS",
      data: [
        7.34, 4.87, 9.11, 6.9, 7.49, 5.57, 12.77, 12.43, 9.69, 7.48, 7.74, 4.6,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },

    {
      label: "Lampes",
      data: [
        0.16, 0.13, 0.36, 0.27, 0, 0.38, 0.23, 0.11, 0.36, 0.09, 0.27, 0.53,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },

    {
      label: "Néons",
      data: [
        0.21, 0.25, 0.41, 0.06, 0.3, 0.28, 0.11, 0.09, 0.27, 0.18, 0, 0.31,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Piles",
      data: [
        0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Pneus",
      data: [0, 6, 4.64, 0, 0, 5.96, 0, 5.92, 5.2, 0, 0, 0],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Pneus Aliapur",
      data: [1.2, 1.26, 1.6, 1, 1.1, 2, 4.36, 2.31, 1.6, 2.48, 1.4, 1.72],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export { grosFlux , moyenFlux, petitFlux };

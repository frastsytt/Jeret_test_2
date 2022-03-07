import React from "react";

type DecorationProps = {
  className?: string;
};

const Decoration: React.FC<DecorationProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 940 640"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M602.74 208.176C596.217 185.274 585.13 163.928 570.144 145.421C555.158 126.915 536.583 111.63 515.537 100.485C494.49 89.3413 471.407 82.5682 447.675 80.5737C423.943 78.5791 400.053 81.4044 377.442 88.8793C354.83 96.3542 333.964 108.324 316.099 124.07C298.233 139.816 283.737 159.012 273.482 180.503C263.228 201.995 257.426 225.338 256.427 249.129C255.427 272.921 259.251 296.668 267.667 318.944H370.399L325.531 396.733C346.431 412.758 370.651 423.905 396.419 429.357C422.186 434.81 448.846 434.429 474.447 428.243C500.048 422.057 523.94 410.222 544.374 393.606C564.807 376.991 581.264 356.015 592.538 332.215L520.984 208.176H602.74Z"
      fill="#2AC1EF"
    />
    <path
      d="M267.667 318.938H0L185.182 639.999L325.513 396.726C299.359 376.688 279.319 349.747 267.649 318.938"
      fill="#F99D28"
    />
    <path
      d="M729.33 276.894L754.818 321.062L940 0H569.618L689.701 208.178H768.976L729.33 276.894Z"
      fill="#B41E8E"
    />
    <path
      d="M695.27 335.961L729.329 276.978L689.701 208.262H602.74C614.51 249.477 610.877 293.567 592.52 332.301L610.114 362.782C626.026 349.502 645.191 340.705 665.636 337.297C675.381 335.695 685.285 335.276 695.131 336.048"
      fill="#EC4344"
    />
    <path
      d="M695.27 335.962L644.954 423.154L610.097 362.696C597.737 372.948 587.583 385.597 580.245 399.879C572.907 414.161 568.538 429.781 567.4 445.798C566.263 461.814 568.382 477.895 573.628 493.071C578.874 508.246 587.14 522.202 597.927 534.098C608.713 545.993 621.797 555.581 636.39 562.284C650.983 568.986 666.782 572.665 682.835 573.097C698.888 573.53 714.863 570.708 729.795 564.801C744.728 558.894 758.31 550.024 769.721 538.727L685.814 454.866L770.069 370.606C750.111 350.466 723.589 338.155 695.322 335.91"
      fill="#15B59A"
    />
  </svg>
);

export default Decoration;

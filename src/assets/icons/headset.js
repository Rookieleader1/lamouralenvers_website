const Headset = ({ size = 30, color = "#FFF" }) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={size}
    width={size}
  >
    <title>{"headphone-glyph"}</title>
    <path
      d="M419.15 270.9a40.57 40.57 0 00-40.58 40.58v142a40.58 40.58 0 1081.16 0v-142a40.58 40.58 0 00-40.58-40.58zM92.85 270.9a40.57 40.57 0 00-40.57 40.58v142a40.58 40.58 0 1081.16 0v-142a40.58 40.58 0 00-40.59-40.58z"
      fill={color}
    />
    <path
      d="M505 349.37c3-18.91 14.59-110-21.41-189.79a22.37 22.37 0 004-17.48c-1-5.06-26-124.19-222.68-124.19-194.3 0-238.21 125-240 130.33a22.33 22.33 0 007.8 24.94C-.9 250 5.21 332.75 6.92 349.49a79.91 79.91 0 00-6.92 33C0 417 20.43 445 45.65 445V319.92c-9.19 0-17.74 3.77-24.91 10.17-1.06-31.5.86-94.39 26.55-152.46a22.56 22.56 0 0020.17-15c1.44-4.07 36.95-99.79 197.43-99.79 157.6 0 177.85 84.42 178.58 87.73a22.47 22.47 0 0026.27 17.83c.4-.08.77-.19 1.17-.28 26.5 61.13 24.33 130.07 21.23 162.79-7.34-6.91-16.22-11-25.8-11V445c25.22 0 45.64-28 45.64-62.56a79.94 79.94 0 00-6.98-33.07z"
      fill={color}
    />
  </svg>
);

export default Headset;

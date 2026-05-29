/* Labs tool list — edit here to add, remove, or recolour a tool.
   Each item: { title, description, url, color, text }
   `color` is the accent (left edge + hover flood); `text` is the
   readable text colour once a card floods (defaults to #f0f0f0). */
const LABS = [
  {
    name: "Apps",
    items: [
      { title: "Indigo", description: "Turns any URL into a Syphon or NDI video stream at up to 4K on macOS", url: "https://github.com/jonasjohansson/Indigo", color: "#3b2fd6" },
      { title: "Wendigo", description: "NDI/Syphon to browser bridge, streaming video over WebSocket H.264", url: "https://github.com/jonasjohansson/wendigo", color: "#0e8a7a" },
      { title: "Ratbat", description: "Personal radio for the Apple ecosystem, with faceted stations from Last.fm, NTS, and Bandcamp", url: "https://ratbat.jonasjohansson.se", color: "#e16518", text: "#252525" },
      { title: "Mio", description: "Serial communication app", url: "https://github.com/jonasjohansson/mio", color: "#c75200" },
      { title: "Conrad", description: "Minimal controller interface for web-enabled devices", url: "https://github.com/jonasjohansson/conrad", color: "#2f6db0" },
      { title: "Homie", description: "Minimal bookmark browser", url: "https://github.com/jonasjohansson/homie", color: "#5a8f2f" },
    ],
  },
  {
    name: "Browser tools",
    items: [
      { title: "Grappa", description: "Reads an image's tones into a gradient map and exports a .cube LUT for After Effects, Premiere, or Resolve", url: "https://grappa.jonasjohansson.se", color: "#12b39a", text: "#252525" },
      { title: "Slicer", description: "Loads 3D models and slices them into layered cross-section contours", url: "https://slicer.jonasjohansson.se", color: "#7a2bd6" },
      { title: "Kagora", description: "LED installation diagram and bill-of-materials generator", url: "https://kagora.jonasjohansson.se", color: "#b07600" },
      { title: "Testbild", description: "Test card generator for multi-surface projection setups", url: "https://jonasjohansson.github.io/testbild/", color: "#cc1c65" },
      { title: "Testbild 360", description: "Test patterns and projection conversion for fulldome, equirectangular, and panoramic imaging", url: "https://testbild-360.jonasjohansson.se", color: "#d6258f" },
      { title: "Unwrapped", description: "3D UV inspector and texture preview tool", url: "https://jonasjohansson.github.io/unwrapped/", color: "#1a43fe" },
      { title: "Instagram Prototype", description: "Mock Instagram profile and post demo tool", url: "https://jonasjohansson.github.io/instagram-prototype/", color: "#b02a6e" },
      { title: "Fulldome Preview", description: "Fulldome cinema preview tool", url: "https://preview.domedreaming.com", color: "#c75200" },
      { title: "Every Night Studios", description: "Cap prototyper, a grid of mockups with shared text and logo, export to zip", url: "https://everynightstudios.jonasjohansson.se", color: "#1f9e5a" },
      { title: "Flight Finder", description: "Opens the same flight search across Google Flights, Kiwi, Skyscanner, and Momondo at once", url: "https://jonasjohansson.github.io/flight-finder/", color: "#4698d2", text: "#252525" },
      { title: "Godnapp", description: "Sleep timer for Sveriges Radio, pick a channel, set a timer, drift off", url: "https://jonasjohansson.github.io/godnapp/", color: "#070a79" },
      { title: "Helpers", description: "Collection of small browser-based utilities", url: "https://github.com/jonasjohansson/helpers", color: "#6a6a6a" },
    ],
  },
  {
    name: "Plugins and extensions",
    items: [
      { title: "Resolume FFGL Shaders", description: "Custom ISF shaders compiled as FFGL plugins for Resolume Arena", url: "https://github.com/jonasjohansson/resolume-ffgl", color: "#8401ff" },
      { title: "Organize Downloads", description: "Chrome extension that sorts downloads by date and category", url: "https://github.com/jonasjohansson/organize-downloads-by-date-and-category-chrome-extension", color: "#00708a" },
    ],
  },
  {
    name: "Resources",
    items: [
      { title: "Exploring Technology", description: "Tutorials and guides for creative technology", url: "https://www.exploring.technology", color: "#ff5c1a", text: "#252525" },
      { title: "Google Templates", description: "Shared templates for project structure and finance planning", url: "https://drive.google.com/drive/folders/1f9R8S7efyesHzigLx6plSazXh47Pa-OV?usp=sharing", color: "#1a73e8" },
    ],
  },
];

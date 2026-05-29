/* Labs tool list — edit here to add, remove, or reorder a tool.
   Each item: { title, role, description, url, portrait? }
   - role: a short persona line, e.g. "the broadcaster"
   - portrait (optional): path to a portrait image, e.g. "/portraits/indigo.svg".
     When present it shows beside the entry; when omitted the entry is text-only. */
const LABS = [
  {
    name: "Apps",
    items: [
      { title: "Indigo", role: "the broadcaster", description: "Turns any URL into a Syphon or NDI video stream at up to 4K on macOS", url: "https://github.com/jonasjohansson/Indigo" },
      { title: "Wendigo", role: "the smuggler", description: "NDI/Syphon to browser bridge, streaming video over WebSocket H.264", url: "https://github.com/jonasjohansson/wendigo" },
      { title: "Ratbat", role: "the DJ", description: "Personal radio for the Apple ecosystem, with faceted stations from Last.fm, NTS, and Bandcamp", url: "https://ratbat.jonasjohansson.se" },
      { title: "Mio", role: "the messenger", description: "Serial communication app", url: "https://github.com/jonasjohansson/mio" },
      { title: "Conrad", role: "the conductor", description: "Minimal controller interface for web-enabled devices", url: "https://github.com/jonasjohansson/conrad" },
      { title: "Homie", role: "the keeper", description: "Minimal bookmark browser", url: "https://github.com/jonasjohansson/homie" },
    ],
  },
  {
    name: "Browser tools",
    items: [
      { title: "Grappa", role: "the colourist", description: "Reads an image's tones into a gradient map and exports a .cube LUT for After Effects, Premiere, or Resolve", url: "https://grappa.jonasjohansson.se" },
      { title: "Slicer", role: "the surgeon", description: "Loads 3D models and slices them into layered cross-section contours", url: "https://slicer.jonasjohansson.se" },
      { title: "Kagora", role: "the foreman", description: "LED installation diagram and bill-of-materials generator", url: "https://kagora.jonasjohansson.se" },
      { title: "Testbild", role: "the calibrator", description: "Test card generator for multi-surface projection setups", url: "https://jonasjohansson.github.io/testbild/" },
      { title: "Testbild 360", role: "the projectionist", description: "Test patterns and projection conversion for fulldome, equirectangular, and panoramic imaging", url: "https://testbild-360.jonasjohansson.se" },
      { title: "Unwrapped", role: "the cartographer", description: "3D UV inspector and texture preview tool", url: "https://jonasjohansson.github.io/unwrapped/" },
      { title: "Instagram Prototype", role: "the understudy", description: "Mock Instagram profile and post demo tool", url: "https://jonasjohansson.github.io/instagram-prototype/" },
      { title: "Fulldome Preview", role: "the scout", description: "Fulldome cinema preview tool", url: "https://preview.domedreaming.com" },
      { title: "Every Night Studios", role: "the printer", description: "Cap prototyper, a grid of mockups with shared text and logo, export to zip", url: "https://everynightstudios.jonasjohansson.se" },
      { title: "Flight Finder", role: "the navigator", description: "Opens the same flight search across Google Flights, Kiwi, Skyscanner, and Momondo at once", url: "https://jonasjohansson.github.io/flight-finder/" },
      { title: "Godnapp", role: "the sandman", description: "Sleep timer for Sveriges Radio, pick a channel, set a timer, drift off", url: "https://jonasjohansson.github.io/godnapp/" },
      { title: "Helpers", role: "the odd-jobbers", description: "Collection of small browser-based utilities", url: "https://github.com/jonasjohansson/helpers" },
    ],
  },
  {
    name: "Plugins and extensions",
    items: [
      { title: "Resolume FFGL Shaders", role: "the light-painter", description: "Custom ISF shaders compiled as FFGL plugins for Resolume Arena", url: "https://github.com/jonasjohansson/resolume-ffgl" },
      { title: "Organize Downloads", role: "the tidier", description: "Chrome extension that sorts downloads by date and category", url: "https://github.com/jonasjohansson/organize-downloads-by-date-and-category-chrome-extension" },
    ],
  },
  {
    name: "Resources",
    items: [
      { title: "Exploring Technology", role: "the mentor", description: "Tutorials and guides for creative technology", url: "https://www.exploring.technology" },
      { title: "Google Templates", role: "the quartermaster", description: "Shared templates for project structure and finance planning", url: "https://drive.google.com/drive/folders/1f9R8S7efyesHzigLx6plSazXh47Pa-OV?usp=sharing" },
    ],
  },
];

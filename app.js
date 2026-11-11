const studies = {
  scout: {
    name: "Scout",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/scout-source-derived.png",
    alt: "Scout, a blue-horned terminal-faced Raskal source-derived cutout",
    copy: "Finds what’s next: an explorer carrying a lantern, a rolled pack, and the Raskal terminal-smirk face."
  },
  wisp: {
    name: "Wisp",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/wisp-source-derived.png",
    alt: "Wisp, a purple-horned terminal-faced Raskal source-derived cutout",
    copy: "Sees the unseen: a floating analyst with the supplied purple horn silhouette and a luminous terminal-smirk."
  },
  golem: {
    name: "Golem",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/golem-source-derived.png",
    alt: "Golem, a green-horned terminal-faced Raskal source-derived cutout",
    copy: "Keeps things safe: a stone guardian with moss, flowers, a tiny bird, and the exact terminal-smirk identity."
  },
  prism: {
    name: "Prism",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/prism-source-derived.png",
    alt: "Prism, a cyan-horned terminal-faced Raskal source-derived cutout",
    copy: "Turns data into insight: a prism-field Raskal whose horned terminal face remains the constant."
  },
  crawler: {
    name: "Crawler",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/crawler-source-derived.png",
    alt: "Crawler, an orange-horned terminal-faced Raskal source-derived cutout",
    copy: "Makes ideas real: a compact mechanical builder with articulated legs and orange terminal glow."
  },
  shelly: {
    name: "Shelly",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/shelly-source-derived.png",
    alt: "Shelly, a pink-horned terminal-faced Raskal source-derived cutout",
    copy: "Remembers so others can: an archivist with a loaded shell, lantern, and bright pink terminal-smirk."
  },
  bloop: {
    name: "Bloop",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/bloop-source-derived.png",
    alt: "Bloop, a yellow-horned terminal-faced Raskal source-derived cutout",
    copy: "A little help goes far: a friendly glossy blob with yellow horns, warm signals, and a Raskal mug."
  },
  tink: {
    name: "Tink",
    kicker: "Source-derived cutout / 2026",
    image: "assets/creatures/tink-source-derived.png",
    alt: "Tink, a red-horned terminal-faced Raskal source-derived cutout",
    copy: "Breaks things, makes better things: an inventor with goggles, wrench, red scarf, and the familiar face."
  }
};

const image = document.querySelector("#focus-image");
const name = document.querySelector("#focus-name");
const kicker = document.querySelector("#focus-kicker");
const copy = document.querySelector("#focus-copy");
const cards = [...document.querySelectorAll("[data-creature]")];

function selectStudy(id) {
  const study = studies[id];
  if (!study) return;
  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.src = study.image;
    image.alt = study.alt;
    name.textContent = study.name;
    kicker.textContent = study.kicker;
    copy.textContent = study.copy;
    image.classList.remove("is-switching");
  }, 140);
  cards.forEach((card) => {
    const active = card.dataset.creature === id;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });
}

cards.forEach((card) => card.addEventListener("click", () => selectStudy(card.dataset.creature)));

const dialog = document.querySelector("#provenance");
document.querySelectorAll("[data-dialog-open='provenance']").forEach((button) => {
  button.addEventListener("click", () => dialog.showModal());
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});


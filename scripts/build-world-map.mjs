// Generates the world map used in the "From the birthplace of coffee" section.
//   node scripts/build-world-map.mjs
// Output: public/world-map.svg (land + Ethiopia highlighted) and
//         src/content/world-map.json (projected points + great-circle route),
// both in the same 1000×520 coordinate space so they line up exactly.
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { geoNaturalEarth1, geoPath, geoInterpolate } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
const world = require("world-atlas/countries-110m.json");

const W = 1000;
const H = 520;
const SAN_DIEGO = [-117.10519, 32.74981]; // decoded Plus Code PVXV+WW
const ETHIOPIA = [39.5, 8.6]; // approximate centre of Ethiopia

const countries = feature(world, world.objects.countries);
const ethiopia = countries.features.find((f) => f.properties.name === "Ethiopia");

// Frame the Americas-to-Horn-of-Africa band, rotated so the route sits centred.
const frame = {
  type: "Feature",
  geometry: { type: "MultiPoint", coordinates: [[-135, 66], [62, -14], [-135, -14], [62, 66]] },
};
const projection = geoNaturalEarth1().rotate([38, 0]).fitExtent([[10, 10], [W - 10, H - 10]], frame).clipExtent([[0, 0], [W, H]]);
const path = geoPath(projection).digits(1);

const others = countries.features.filter((f) => f !== ethiopia && f.properties.name !== "Antarctica");
const land = others.map((f) => path(f)).filter(Boolean).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><path d="${land}" fill="#FAF6EE" fill-opacity="0.13" stroke="#FAF6EE" stroke-opacity="0.22" stroke-width="0.6"/><path d="${path(ethiopia)}" fill="#B5552B"/></svg>`;
writeFileSync("public/world-map.svg", svg);

const interp = geoInterpolate(ETHIOPIA, SAN_DIEGO);
const pts = Array.from({ length: 81 }, (_, i) => projection(interp(i / 80)));
const route = "M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L");
const round = ([x, y]) => [Number(x.toFixed(1)), Number(y.toFixed(1))];

writeFileSync(
  "src/content/world-map.json",
  JSON.stringify({ width: W, height: H, sanDiego: round(projection(SAN_DIEGO)), ethiopia: round(projection(ETHIOPIA)), route }, null, 2) + "\n"
);
console.log("world-map.svg", (svg.length / 1024).toFixed(1) + " KB");

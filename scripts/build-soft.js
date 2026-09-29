// Génère themes/neon-void-soft-color-theme.json à partir du thème principal.
// Principe : chaque couleur de la palette est remplacée par sa version "soft"
// (fond gris très sombre, néons moins saturés). L'opacité (#RRGGBBAA) est
// conservée, ainsi que tous les commentaires du fichier source.
// Usage : node scripts/build-soft.js
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "themes", "neon-void-color-theme.json");
const OUT = path.join(__dirname, "..", "themes", "neon-void-soft-color-theme.json");

// Couleur d'origine (6 chiffres, majuscules) -> couleur Soft
const SOFT = {
  "000000": "0C0C12", // fond : gris-bleu très sombre au lieu du noir pur
  "1A1A1A": "22222C", // bordures : un cran plus clair que le nouveau fond
  "1F1F1F": "22222C",
  "2A2A2A": "30303C",
  "00E5FF": "5CDCEB", // cyan
  "7FF2FF": "9BEAF3",
  "FF3D81": "F2709C", // rose
  "F9E54A": "EBD973", // jaune
  "39FF88": "72E3A0", // vert
  "B266FF": "B48CF2", // violet
  "FF9E3D": "F2A765", // orange
  "FF4D6D": "F07085", // rouge d'erreur
  "E6E6F0": "D9D9E3", // texte
  "6B7A9C": "7684A5", // commentaires, éclaircis pour garder >= 4,5:1 sur le nouveau fond
};

let text = fs.readFileSync(SRC, "utf8");
text = text.replace(/#([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})?\b/g, (match, rgb, alpha) => {
  const soft = SOFT[rgb.toUpperCase()];
  return soft ? `#${soft}${alpha || ""}` : match;
});
text = text.replace('"name": "Neon Void"', '"name": "Neon Void Soft"');
text =
  "// FICHIER GÉNÉRÉ par scripts/build-soft.js — ne pas modifier à la main.\n" +
  "// Modifiez neon-void-color-theme.json puis relancez : npm run build\n" +
  text;

fs.writeFileSync(OUT, text);
console.log("Thème Soft généré :", path.relative(process.cwd(), OUT));

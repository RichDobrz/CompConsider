const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

const spellListByClass = {
  deathknight: {
    stun: ["Asphyxiate", "Gnaw", "Remorseless Winter"],
    knockback: ["Gorefiend Grasp"]
  },
  druid: {
    root: ["Entangling Root", "Mass Entanglement"],
    stun: ["Main", "Mighty Bash", "Rake"],
    incapacitate: ["Intimidating Roar"],
    disorient: ["Cyclone"],
    knockback: ["Typhoon", "Ursol's Vortex"]
  },
  hunter: {
    root: ["Charge", "Entrapment", "Narrow Escape"],
    stun: ["Binding Shot", "Intimidation"],
    incapacitate: ["Freezing Trap", "Wyvern Sting"],

  }
}

module.exports = router
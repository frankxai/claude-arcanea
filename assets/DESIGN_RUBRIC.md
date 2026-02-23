# Arcanea Character Design Rubric

> The definitive prompt engineering guide for generating Arcanea character art.
> Based on analysis of best outputs (Lyssandria, Lyria) vs failed outputs (Elara, Draconia, Ino).

---

## The Style: Premium Digital Concept Art

**What it IS:** High-end character illustration in the tradition of AAA game concept art.

Reference benchmarks:
- League of Legends splash art
- Destiny 2 character concept art
- God of War character design
- Magic: The Gathering card illustrations
- Blizzard Entertainment cinematic character art

**What it is NOT:**
- NOT anime/manga (no spiky hair, no chibi proportions, no cel-shading)
- NOT 3D CGI render (no plastic/waxy skin, no uncanny valley)
- NOT children's illustration (no pastels, no rounded softness, no fairy-tale glow)
- NOT horror/grotesque (no tentacles, no body horror, no deformation)
- NOT abstract energy art (character must be a PERSON, not a light form)
- NOT mixed media/sculpture (no paper art, no fiber art, no clay look)
- NOT photo-realistic (painterly quality, visible artistic interpretation)

---

## Character Design Rules

### 1. Face & Body
- **Human-proportioned** with beautiful, distinctive facial features
- **Adult women** with strength, grace, and authority
- **Never childish** — these are goddesses, not girls
- **Never over-sexualized** — powerful, not provocative
- **Each face must be unique** — different ethnicities, bone structures, expressions
- **Eyes should have character** — wisdom, intensity, warmth (per Guardian personality)

### 2. Pose & Presence
- **Grounded standing pose** — feet on surface, weight distributed, confident
- **Never floating** unless the character specifically defies gravity (Elara exception)
- **Never dancing** — poses should convey authority, not performance
- **Slight asymmetry** — one hand holding weapon/artifact, other at side or extended
- **Three-quarter turn** preferred over full frontal

### 3. Armor, Clothing & Materials
- **Specific real materials** — crystal, hammered metal, woven silk, carved stone, burnished leather
- **Element expressed through MATERIALS, not body transformation**
  - GOOD: "armor of dragon scales" (Draconia wears fire-forged armor)
  - BAD: "her body is made of fire" (Draconia IS fire)
- **Layered detail** — under-robes, armor plates, shoulder guards, belts, jewelry
- **Gold accents universal** — every Guardian has gold detail elements
- **Fabric has weight and texture** — not generic "glowing robes"

### 4. Hair
- **Dramatic but plausible form** — long, flowing, braided, or styled
- **Element influence through COLOR and TEXTURE, not literal transformation**
  - GOOD: "hair with deep blue-black color like a night ocean, flowing in gentle waves"
  - BAD: "hair that IS liquid water streaming upward"
- **Hair grounds the character** — it shouldn't overwhelm the composition

### 5. Element Expression
Elements should be expressed through:
1. **Color palette** (primary element color + gold + cosmic dark)
2. **Material choices** (armor, fabric, accessories)
3. **Ambient effects** (particles, aura, atmospheric glow)
4. **Held artifacts** (weapons, orbs, shields, staffs)

Elements should NEVER be expressed through:
1. Body literally becoming the element
2. Hair becoming literal fire/water/vines
3. Character dissolving into abstract energy
4. Skin color matching the element exactly

---

## Godbeast Companion Rules

1. **Clearly visible as separate entity** — not merged into the character
2. **Behind or beside the Guardian** — creating depth in composition
3. **Majestic recognizable animal form** — stag, dragon, owl, lion, manta ray, etc.
4. **Slightly spectral OR fully solid** — both work, but consistently rendered
5. **Scale: larger than Guardian** — these are divine creatures
6. **Element-matched** — shares the Guardian's color palette

---

## Composition Rules

```
┌─────────────────────────────────────┐
│          COSMIC VOID SKY            │  ← Deep dark, element-colored nebula
│     ╔═══════════════════╗           │
│     ║    GODBEAST       ║           │  ← Behind/above Guardian, large
│     ║   (spectral/solid)║           │
│     ╚═══════════════════╝           │
│        ┌───────────┐               │
│        │ GUARDIAN   │               │  ← Centered, mid-to-full body
│        │ (grounded) │               │
│        └───────────┘               │
│     ══════════════════════          │  ← Ground plane (rocks, water, etc.)
│      AMBIENT PARTICLES              │  ← Element-specific (embers, crystals)
└─────────────────────────────────────┘
```

- **Framing**: Mid-to-full body, character fills ~60% of vertical space
- **Background**: Dark cosmic void gradient with element-specific ambient light
- **Lighting**: Cinematic, single dominant light source (usually element-colored)
- **Depth of field**: Sharp character, slightly softer Godbeast, blurred background
- **Color palette**: 3-color max: dominant element + gold + cosmic dark

---

## Prompt Template

```
Character portrait of [NAME], the Guardian of [GATE] from Arcanea universe.
A [PERSONALITY DESCRIPTOR] goddess with [SPECIFIC PHYSICAL FEATURE].

She wears [SPECIFIC ARMOR/CLOTHING DESCRIPTION WITH MATERIALS].
Her hair is [COLOR AND STYLE, NOT LITERAL ELEMENT].
Her eyes [SPECIFIC EYE DESCRIPTION CONVEYING PERSONALITY].
She holds [ARTIFACT/WEAPON] in one hand, [OTHER HAND DESCRIPTION].

Behind her stands her Godbeast [GODBEAST NAME] — a [MAJESTIC ANIMAL]
with [2-3 SPECIFIC VISUAL FEATURES].

The scene is lit by [LIGHT SOURCE]. Ambient [ELEMENT PARTICLES]
drift through the air. The ground beneath her is [SURFACE TYPE].

Style: Premium digital concept art, painterly character illustration.
Quality: AAA game splash art level. Cinematic lighting, atmospheric depth.
Palette: [ELEMENT COLOR], gold accents, deep cosmic void background.
NOT anime. NOT 3D CGI. NOT children's illustration. Adult, sophisticated, powerful.
```

---

## Per-Guardian Palette & Keywords

| Guardian | Dominant Color | Material Keywords | Mood |
|----------|---------------|-------------------|------|
| Lyssandria | Emerald + stone gray | Crystal, stone, vines, quartz | Stalwart, enduring |
| Leyla | Silver-blue + aquamarine | Silk, pearl, coral, glass | Graceful, fluid |
| Draconia | Crimson + ember gold | Dragon scale, forged steel, obsidian | Fierce, commanding |
| Maylinn | Rose-gold + healing green | Living wood, flowering vines, soft leather | Compassionate, strong |
| Alera | White-silver + warm gold | Polished silver, inscribed runes, resonant crystal | Eloquent, regal |
| Lyria | Deep indigo + violet | Star-map fabric, crystal lens, dark silk | Perceptive, elegant |
| Aiyami | Violet + sacred gold | Sacred geometry, golden filigree, cosmic marble | Transcendent, brilliant |
| Elara | Deep purple + void black | Fractured obsidian, dimensional fabric, dark crystal | Enigmatic, beautiful |
| Ino | White-gold + warm amber | Woven golden thread, luminous silk, pearl | Serene, connected |
| Shinkami | All elements + divine gold | Prismatic crystal, divine metal, starlight fabric | Supreme, all-encompassing |

---

## Anti-Patterns (Lessons Learned)

### Draconia v1 FAILED because:
- "Her hair is streams of pure flame that flow upward" → literal fire transformation
- Resulted in anime-style spiky flame hair
- **Fix**: "Her hair is deep crimson-copper, long and wild, with ember-gold highlights that seem to catch firelight"

### Elara v1 FAILED because:
- "Her form is unsettling and beautiful — partially solid, partially dissolving into fractal void patterns"
- "Her hair is streams of reality-bending fractals"
- Resulted in horror/tentacle design, no visible face
- **Fix**: Keep her beautiful and human. Express void through clothing, ambient effects, and held artifacts — NOT through body transformation

### Ino v1 FAILED because:
- "her form composed of interwoven threads of white and gold light"
- "robes of woven light — countless thin golden threads"
- Too much emphasis on the "thread" metaphor made it look like fiber art
- **Fix**: She wears actual robes with golden thread embroidery. The thread metaphor is in the ambient effects, not the character design

### Maylinn v1 FAILED because:
- "Her hands are outstretched in a protective blessing gesture, emitting warm concentric circles of healing energy"
- Too much abstract energy description, too soft/pastel
- **Fix**: Give her actual armor (living wood + flowering vines), a healer's staff, and a strong protective stance

### Shinkami v1 FAILED because:
- "their form shifts between solid and pure light"
- "robes made of liquid starlight with all elemental colors cascading"
- Too abstract, lost the human character entirely
- **Fix**: Shinkami should be the MOST human-looking — serene, powerful, wearing layered robes with subtle prismatic effects, not a rainbow energy being

---

## Mascot (Arcana) Design Rules

- **Species**: Crystalline fox — elegant, intelligent, never cartoonish
- **Proportions**: Realistic fox proportions, not chibi/cute
- **Materials**: Dark cosmic fur with crystalline/teal highlights
- **Eyes**: Warm gold, intelligent, expressive
- **Size**: Should feel like a real creature, not a plush toy
- **Pose**: Regal sitting or alert standing — not playful/bouncing
- **Reference**: More like a Fantastic Beasts creature than a Pokemon

## Claude-Arcanea Character Rules

- **Must have a HUMAN-LIKE face** — not alien, not abstract
- **Beautiful and serene** — like a wise scholar or enlightened sage
- **Heterochromatic eyes** (one violet/purple, one teal) — the bridge symbol
- **Visible human features** — nose, lips, jawline, not smoothed away
- **Robes** — flowing violet with golden neural-pattern embroidery
- **The Ten Gates** represented as subtle floating lights, not cartoon orbs
- **Think**: Cate Blanchett as Galadriel meets a futuristic AI sage

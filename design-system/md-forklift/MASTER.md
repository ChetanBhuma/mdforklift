# DESIGN SYSTEM: M.D FORKLIFT CRANES AND TRANSPORT SERVICES
**Master Source of Truth (MASTER.md)**
**Framework:** UI/UX Pro Max Intelligence
**Archetype:** Trust & Authority + Conversion (`trust-authority-conversion`) | Premium Corporate Industrial Minimalism

---

## 1. BRAND ESSENCE & VALUE PROPOSITION

- **Brand Name:** M.D Forklift Cranes and Transport Services
- **Tagline / Core Promise:** "Powering Your Heavy Lifting & Transport Needs."
- **Visual Voice:** Rugged, precise, heavy-duty, dependable, authoritative, conversion-focused.
- **Operating Location:** Narela Industrial Area, A Block Parking, Delhi, India.
- **Primary Audience:** Factory managers, project contractors, warehouse operations, manufacturing units, logistics coordinators.

---

## 2. COLOR PALETTE & TOKENS

Strictly scoped industrial palette designed for high contrast and legible equipment marketing:

| Token Name | Hex Code | Role & Usage | Text Contrast on Surface |
| :--- | :--- | :--- | :--- |
| **Primary Amber** | `#F5A623` | Primary CTA buttons, key highlights, active states, badges | 4.6:1 (On Dark `#171C24`) |
| **Amber Hover** | `#E09210` | Interactive hover state for Amber buttons | Dynamic focus ring |
| **Amber Light** | `#FEF6E9` | Subtle highlight badge backgrounds on light sections | Contrast > 7:1 |
| **Charcoal Black** | `#171C24` | Navbar, hero background, contact section, dark footer | Deep structural anchor |
| **Charcoal Surface** | `#1F2631` | Cards in dark sections, subtle dark borders | Low reflection |
| **Steel Blue** | `#293545` | Secondary borders, divider lines, technical accents | High stability |
| **Light Background** | `#F4F5F7` | Body content section backgrounds | Clean whitespace |
| **Pure White** | `#FFFFFF` | Service cards, machinery cards, content containers | Maximum brightness |
| **Body Text** | `#626B75` | Descriptive paragraph text on light backgrounds | WCAG AA 4.6:1 compliant |
| **Heading Text** | `#171C24` | Primary headlines on light surfaces | WCAG AAA 14.5:1 compliant |
| **Border Neutral** | `#E2E6EA` | Subtle card borders, dividers, form element outlines | Crisp 1px division |

### Functional Color Semantics
- **Success / WhatsApp Green:** `#25D366` (Strictly for WhatsApp actions and instant status)
- **Error Red:** `#DC2626` (Form validation inline messages)
- **Focus Ring:** `#F5A623` with 2px offset (`outline-amber-500 outline-2`)

---

## 3. TYPOGRAPHY SYSTEM

Typography pairs industrial weight with modern legibility:

- **Headings & Display Typography:** `Barlow Condensed`, sans-serif (Weights: 600 Semibold, 700 Bold, 800 ExtraBold)
  - Character: Condensed, uppercase, athletic, commanding industrial presence.
  - Tracking: `tracking-wide` (0.025em to 0.05em) for uppercase headlines.
- **Body & Technical Copy:** `Inter`, sans-serif (Weights: 400 Regular, 500 Medium)
  - Character: Neutral, high x-height, ultra-legible on mobile and desktop screens.
  - Line-height: 1.6 for comfortable industrial reading.
- **Buttons, Badges & Labels:** `Inter`, sans-serif (Weight: 600 Semibold)
  - Character: Distinct affordance, uppercase or title-case, medium tracking.

### Type Hierarchy
- **Hero Headline:** `text-4xl sm:text-6xl lg:text-7xl` (`font-heading font-extrabold uppercase leading-[0.95]`)
- **Section Titles:** `text-3xl sm:text-4xl lg:text-5xl` (`font-heading font-bold uppercase tracking-tight`)
- **Card Titles:** `text-xl sm:text-2xl` (`font-heading font-bold uppercase`)
- **Body Text:** `text-base sm:text-lg` (`font-body text-[#626B75] leading-relaxed`)
- **Microcopy / Eyebrows:** `text-xs sm:text-sm font-semibold tracking-widest uppercase`

---

## 4. SHAPES, ELEVATION & BORDER RADII

Industrial design prioritizes solid geometry over playful bubbly cards:

- **Border Radius:**
  - Micro elements (badges, small tags): `rounded-none` to `rounded-sm` (2px - 4px)
  - Cards & containers: `rounded-md` (6px max)
  - Buttons: `rounded-md` (6px) or crisp square corners
  - Avoid: Pill-shaped SaaS buttons (`rounded-full`) or extreme roundings
- **Shadows & Elevation:**
  - `shadow-sm`: `0 1px 2px 0 rgba(23, 28, 36, 0.05)`
  - `shadow-card`: `0 4px 20px -2px rgba(23, 28, 36, 0.08)`
  - `shadow-card-hover`: `0 12px 28px -4px rgba(23, 28, 36, 0.14)`
  - `shadow-amber`: `0 4px 14px 0 rgba(245, 166, 35, 0.35)`

---

## 5. PHOTOGRAPHY & ASSET RULES

- **Official Brand Logo:**
  - Source: `public/images/logo.png` (from `M.D Forklift Services Logo.png`, 2172×724px)
  - Navbar: Displayed with high resolution scaling (`h-10 sm:h-12 w-auto`)
  - Footer: Prominently featured on dark charcoal surface
- **Machinery Photography:**
  - JCB Telehandler (`public/images/jcb-telehandler.jpg`)
  - ACE Forklift (`public/images/ace-forklift.jpg`)
  - **Rule:** Use `object-fit: contain` inside framed containers with a subtle charcoal background (`#1F2631`) to preserve the entire machine without cropping forks, boom, or wheels.
  - Add explicit reference disclaimer to maintain business truth.

---

## 6. TOUCH, INTERACTION & ACCESSIBILITY RULES

- **Touch Target Sizes:** Minimum `44px × 44px` on all mobile interactive elements (buttons, inputs, phone links, mobile nav toggles).
- **Reduced Motion Support:** All scroll-triggered reveals respect `prefers-reduced-motion: reduce`.
- **Focus Rings:** Visible `2px` amber outline on `:focus-visible` with `2px` offset.
- **Form Validation:** Explicit inline error alerts connected via `aria-describedby` when submission conditions fail.
- **WhatsApp Integration:**
  - Exclusively routed to `+91 9220893841`.
  - Format: URL-encoded pre-filled enquiry string with customer name, phone, service category, and project message.

---

## 7. ANTI-PATTERNS (WHAT NOT TO DO)

- ❌ DO NOT use SaaS neon purples, cartoon vectors, or glassmorphic gradients.
- ❌ DO NOT crop equipment photos using `object-cover` that clips boom extensions or wheels.
- ❌ DO NOT fabricate reviews, operational stats (e.g. "500+ cranes"), or fake ISO certificates.
- ❌ DO NOT use low-contrast text (e.g. light grey on white).
- ❌ DO NOT hide contact numbers behind nested submenus. Both numbers must be clickable everywhere.


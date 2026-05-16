# DevForge - Premium Developer Team Portfolio

## Project Overview

**Project Name**: DevForge Portfolio
**Type**: Premium SaaS-style agency website
**Core Functionality**: Showcase 3 full-stack developers' skills, projects, and services with an intelligent project selection system
**Target Users**: Clients seeking premium web development services, potential employers, collaborators

---

## UI/UX Specification

### Layout Structure

**Page Sections**:
1. Navigation (fixed, glassmorphism)
2. Hero Section (full-screen, animated)
3. Stats/Trust Section
4. Services Section
5. Projects Portfolio Section (with smart selection)
6. Team Section
7. Testimonials
8. Contact Section
9. Footer

**Responsive Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**:
- Primary: `#0a0a0f` (deep black)
- Secondary: `#12121a` (dark navy)
- Accent Primary: `#6366f1` (indigo)
- Accent Secondary: `#8b5cf6` (violet)
- Accent Tertiary: `#06b6d4` (cyan)
- Glow: `#a855f7` (purple)
- Text Primary: `#ffffff`
- Text Secondary: `#94a3b8`
- Glass: `rgba(255, 255, 255, 0.05)`

**Typography**:
- Headings: "Clash Display", sans-serif (from CDN)
- Body: "Satoshi", sans-serif (from CDN)
- Code/Mono: "JetBrains Mono", monospace

**Spacing System**:
- Section padding: 120px vertical
- Card padding: 24px
- Gap: 16px / 24px / 32px

**Visual Effects**:
- Glassmorphism cards with backdrop blur
- Glowing gradient borders
- Spotlight mouse effects
- Animated gradient backgrounds
- Floating particles
- Neon accents on hover
- Smooth 0.3s transitions

### Components

**Navigation**:
- Logo with glow effect
- Nav links with hover underline animation
- Glassmorphism background
- Mobile hamburger menu

**Hero Section**:
- Large animated headline with gradient text
- Subtitle with typewriter effect
- Two CTA buttons (primary glow, secondary outline)
- Floating UI cards preview
- Animated background grid
- Mouse-following glow effect

**Stats Cards**:
- Glassmorphism cards
- Animated counter numbers
- Icon with glow
- Hover scale effect

**Service Cards**:
- Icon with gradient background
- Title and description
- Hover lift and glow effect
- Stagger animation on scroll

**Project Cards**:
- Thumbnail/screenshot area
- Title and description
- Tech stack tags
- GitHub and Live Demo buttons
- Modal popup for details
- Hover: scale up, glow border

**Team Cards**:
- Profile placeholder (gradient avatar)
- Name and role
- Skills tags
- GitHub and email buttons
- Social links (future-ready)
- Hover: glow effect

**Contact Form**:
- Glassmorphism inputs
- Submit button with loading state
- Email/GitHub/WhatsApp direct buttons

---

## Functionality Specification

### Core Features

1. **Smart Project Selection System**
   - Auto-detect best repositories from GitHub
   - Display project selection modal before generation
   - Filter: deployed projects first, business apps, ignore test/dummy repos
   - Allow manual selection/deselection

2. **Project Categories**
   - Featured (deployed, impressive)
   - AI/ML Projects
   - Web Applications
   - Experimental/Tools

3. **Interactive Animations**
   - Framer Motion scroll reveals
   - Stagger children animations
   - Floating card animations
   - Parallax on scroll
   - Mouse-reactive glow

4. **Team Profiles**
   - Display all 3 members
   - GitHub and email links
   - Skills showcase

5. **Contact Options**
   - Direct email buttons
   - GitHub profile links
   - WhatsApp CTA placeholder

6. **Future-Ready Architecture**
   - JSON data structure for projects
   - Separate team data file
   - Social links section ready for: LinkedIn, Twitter, Instagram

### User Interactions

- Smooth scroll navigation
- Project modal open/close
- Form validation feedback
- Button hover states
- Card hover effects

### Data Structure

```json
// projects.json
{
  "featured": [...],
  "ai": [...],
  "web": [...],
  "experimental": [...]
}

// team.json
{
  "members": [
    {
      "name": "...",
      "role": "...",
      "github": "...",
      "email": "...",
      "skills": [...],
      "social": {
        "linkedin": "",
        "twitter": "",
        "instagram": ""
      }
    }
  ]
}
```

---

## Acceptance Criteria

1. ✅ Website loads without errors
2. ✅ Hero section displays with animations
3. ✅ Navigation works and scrolls to sections
4. ✅ Project cards display with hover effects
5. ✅ Team section shows all 3 members
6. ✅ Contact section has working buttons
7. ✅ All animations run smoothly (60fps)
8. ✅ Fully responsive on mobile/tablet/desktop
9. ✅ Glassmorphism effects visible
10. ✅ Ready for Vercel/GitHub deployment

---

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Custom CSS for advanced effects
# UltraSecure Portal: An Exploration in Hostile UX and Anti-Bot Deterrence

This project is a functional, concept-driven web authentication interface developed for the **WEB DESIGN (YBSB2008)** final assignment under the supervision of **Assoc. Prof. Elif KARTAL**. The core objective of this study is to deliberately violate established User Experience (UX) paradigms to create a counter-intuitive, highly restrictive, and intentionally frustrating login sequence—often referred to as **Hostile UX** or **Anti-User Design**.

---

## 📌 Project Overview & Philosophy

Traditional web development focuses heavily on seamless integration and accessibility. This project flips that paradigm by treating the user as a potential threat vector. The "UltraSecure Portal" operates on the principle of **Psychological and Physical Deterrence**. By making the authentication process mathematically rigorous, visually elusive, and high-stakes, the platform minimizes unauthorized access by filtering out users who lack absolute persistence. 

---

## 🛠️ Mechanisms of User Frustration (Hostile Design Implementations)

The interface systematically targets the user's cognitive load, spatial memory, and physical reaction time through the following integrated features:

* **Procedural Input Validation & Dynamic Page Refresh:** Users cannot submit credentials in a single sequence. Authentication requires a strict character-by-character validation loop. Every successful character input forces a complete document reload (`location.reload()`), intentionally disrupting user flow and pacing.
* **Variable Interface Positioning (Dynamic Spawning):** To eliminate muscle memory and combat automated coordinate-based bots, the main login container calculates browser viewport dimensions on every lifecycle event and repositions itself to random pixel coordinates.
* **Non-Copyable, Dynamic Mathematical Deterrence:** Instead of providing explicit character length guidelines, the system displays mathematical equations (utilizing limits, matrices, or calculus) rendered dynamically via an HTML5 `Canvas` element. This prevents DOM-inspection, text selection, and the utilization of external Artificial Intelligence tools for automated decoding.
* **The "Zombie Cursor" Pursuit Protocol:** Upon detecting mouse movement, a localized automated entity (the Zombie) is spawned to pursue the user's cursor vector. If the distance threshold falls below 20 pixels, a sensory-overload deterrent (audio-visual jump-scare) triggers, the browser session storage is entirely wiped, and progress resets to absolute zero.
* **Sensory Overload & Low-Contrast Aesthetics:** The visual layout employs extreme low-contrast dark mode styling to induce optical fatigue. Furthermore, unpredictable, short-duration audio-visual anomalies disrupt focus at randomized intervals, testing user resilience.
* **Obfuscated Success State Navigation:** Upon clearing both authentication tiers, the user is navigated to a specialized single-page state detailing their compiled input metrics. However, the session reset action is bound to a deliberately downscaled, low-opacity button that dynamically shrinks when hovered, maximizing the friction required to terminate the state.

---

## 📂 Repository Structure

The submission comprises the following optimized assets:
* `index.html` — The core architecture utilizing a dual-state DOM layout for the form interface and success screen.
* `style.css` — High-friction styling directives, custom viewport boundaries, and restricted cursor properties.
* `script.js` — The logical engine managing client-side state preservation via `localStorage`, procedural canvas rendering, and the vector mathematics for the tracking loop.
* `zombi.png` / `korku.gif` / `ciglik.mp3` — Multi-media assets deployed for sensory deterrence.

---

## 📝 Academic Integrity & Disclaimer

This software was developed utilizing modern code-assistance tools under strict human oversight and customization, ensuring complete technical understanding and structural ownership of the final codebase. All deployment constraints align strictly with the academic framework provided for the June 5, 2026 submission deadline.

// UNHL Weapon of Choice equipment assignments (not per-stick scoring records).
window.UNHL_WEAPONS = {
  "Alex W": {
    "brand": "Bauer",
    "model": "i3000 ABS"
  },
  "Chris": {
    "brand": "Bauer",
    "model": "i3000 ABS"
  },
  "Jim": {
    "brand": "Bauer",
    "model": "i3000 ABS"
  },
  "Cole": {
    "brand": "Unknown",
    "model": "Pro Blackout"
  },
  "Brandon": {
    "brand": "Bauer",
    "model": "Vapor Volt"
  },
  "Steve": {
    "brand": "Mylec",
    "model": "MK3"
  },
  "Peter": {
    "brand": "Mylec",
    "model": "MK3"
  },
  "Nick L": {
    "brand": "Mylec",
    "model": "MK3"
  },
  "Jon": {
    "brand": "Mylec",
    "model": "MK3"
  },
  "Collin": {
    "brand": "Mylec",
    "model": "MK5"
  },
  "TJ": {
    "brand": "Mylec",
    "model": "MK5"
  },
  "Alex S": {
    "brand": "Sherwood",
    "model": "T60"
  },
  "Jeff": {
    "brand": "Sherwood",
    "model": "T60"
  },
  "Mike G": {
    "brand": "Warrior",
    "model": "Alpha LX3"
  },
  "Lisman": {
    "brand": "Warrior",
    "model": "QR6 S2"
  },
  "Dylan": {
    "brand": "Bauer",
    "model": "Vapor S23"
  },
  "Dylan Z": {
    "brand": "Warrior",
    "model": "QR6 S2 (Blue)"
  },
  "Jordan": {
    "brand": "Warrior",
    "model": "Covert QR5 30"
  }
};
window.UNHL_RENDER_WEAPON = function(name, career) {
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const weapon = window.UNHL_WEAPONS[name];
  const known = Boolean(weapon);
  const blue = known && /blue/i.test(weapon.model);
  const blackout = known && /blackout/i.test(weapon.model);
  const safeName = escapeHTML(name);
  const brand = known ? escapeHTML(weapon.brand) : 'UNKNOWN';
  const model = known ? escapeHTML(weapon.model) : 'WEAPON NOT YET IDENTIFIED';
  const careerValue = key => career && Number.isFinite(Number(career[key])) ? Number(career[key]) : '—';
  return `<section class="section armory-section" aria-label="Weapon of Choice">
    <div class="armory-heading"><span class="armory-kicker">UNHL ARMORY // PLAYER LOADOUT</span><h2>WEAPON OF CHOICE</h2></div>
    <div class="armory-card ${blue?'armory-blue':''} ${blackout?'armory-blackout':''} ${!known?'armory-unidentified':''}">
      <div class="armory-mesh" aria-hidden="true"></div>
      <div class="armory-topline"><span>PRIMARY // STREET HOCKEY</span><span>${known?'EQUIPMENT CONFIRMED':'EQUIPMENT UNIDENTIFIED'}</span></div>
      <div class="armory-weapon-stage" aria-hidden="true">
        <div class="armory-scan"></div>
        <div class="armory-stick"><span class="armory-shaft"></span><span class="armory-blade"></span></div>
        <span class="armory-crosshair armory-crosshair-a">+</span><span class="armory-crosshair armory-crosshair-b">+</span>
      </div>
      <div class="armory-information">
        <div class="armory-equipment"><span class="armory-field-label">PLAYER // ${safeName}</span><h3>${model}</h3><div class="armory-brand">${known && brand==='Unknown'?'ORIGIN: UNKNOWN':`MANUFACTURER: ${brand}`}</div>${blue?'<span class="armory-colorway">BLUE COLORWAY</span>':''}</div>
        <div class="armory-stats"><span class="armory-field-label">CAREER SKATER STATS // ALL STICKS</span><div class="armory-stat-grid"><div><strong>${careerValue('g')}</strong><span>GOALS</span></div><div><strong>${careerValue('a')}</strong><span>ASSISTS</span></div><div><strong>${careerValue('pts')}</strong><span>POINTS</span></div></div></div>
      </div>
      <p class="armory-disclaimer">Career totals reflect all recorded skater games, not statistics tracked for this specific stick. Weapon artwork is a stylized silhouette, not a product photograph.</p>
    </div>
  </section>`;
};

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
    "brand": "Origins Unknown",
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
window.UNHL_WEAPON_PHOTOS = {
  "Lisman": "weapons/warrior-qr6-dark.jpg",
  "Dylan Z": "weapons/warrior-qr6-blue.jpg"
};
window.UNHL_RENDER_WEAPON = function(name, career, currentSeason, currentRank) {
  const safe = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const equipment = window.UNHL_WEAPONS[name];
  const photo = window.UNHL_WEAPON_PHOTOS[name];
  const model = equipment ? equipment.model : 'WEAPON NOT YET IDENTIFIED';
  const brand = equipment ? equipment.brand : 'NOT IDENTIFIED';
  const stats = k => career && Number.isFinite(Number(career[k])) ? Number(career[k]) : '—';
  const rank = Number.isFinite(Number(currentRank)) && currentRank !== null ? '#'+currentRank : 'NR';
  const season = currentSeason || 'LATEST SEASON';
  const blue = /blue/i.test(model);
  return `<section class="loadout" aria-label="${safe(name)} weapon of choice">
    <div class="loadout-banner"><div class="loadout-banner-copy"><div class="loadout-label">UNHL<br>PLAYER LOADOUT</div><div class="loadout-name">${safe(name)} <span>${rank}</span></div><div class="loadout-position">${safe(season)} SEASON SCORING RANK <span class="loadout-stripe"></span></div></div></div>
    <div class="loadout-main ${blue?'loadout-blue':''}">
      <div class="loadout-title"><span class="loadout-reticle" aria-hidden="true">⊕</span><div><h2>WEAPON OF CHOICE</h2><p>PRIMARY SCORING STICK</p></div></div>
      <div class="loadout-content">
        <div class="loadout-art ${photo?'has-photo':'no-photo'}">
          ${photo?`<img src="${photo}" alt="Photo of ${safe(brand)} ${safe(model)} hockey stick" loading="lazy">`:`<div class="loadout-placeholder"><div class="loadout-stick"><i></i><b></b></div><span>MODEL PHOTO PENDING</span></div>`}
        </div>
        <div class="loadout-spec"><div class="loadout-brand">${safe(brand)}</div><h3>${safe(model)}</h3><div class="loadout-chip">PRIMARY LOADOUT</div><p>${photo?'PLAYER-SUPPLIED STICK PHOTOGRAPH':'STYLIZED PLACEHOLDER — MODEL PHOTO NOT YET VERIFIED'}</p></div>
      </div>
    </div>
    <div class="loadout-scorebar"><div><span class="loadout-stat-icon">⊕</span><strong>${stats('g')}</strong><span>CAREER GOALS</span></div><div><span class="loadout-stat-icon">◇</span><strong>${stats('a')}</strong><span>CAREER ASSISTS</span></div><div><span class="loadout-stat-icon">☆</span><strong>${stats('pts')}</strong><span>CAREER POINTS</span></div><div class="loadout-primary"><span class="loadout-stat-icon">▥</span><span>PRIMARY<br>LOADOUT SLOT</span></div></div>
    <p class="loadout-footnote">Current-season rank is based on points in ${safe(season)}. Career totals cover all recorded sticks; per-stick scoring is not tracked.</p>
  </section>`;
};

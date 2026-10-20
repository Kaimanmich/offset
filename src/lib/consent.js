import { useSyncExternalStore } from 'react';

// Cookie/storage consent, kept in localStorage as { analytics, timestamp, version }.
// Bump POLICY_VERSION whenever the cookie policy changes: everyone is asked again.
export const POLICY_VERSION = '2026-10-20';
const KEY = 'kaimanmich-consent';

export const CATEGORIES = [
  {
    id: 'necessary',
    label: 'Noodzakelijk',
    text: 'Onthoudt je cookiekeuze en of je de aanbieding al gesloten hebt. Zonder deze opslag werkt de site niet zoals bedoeld.',
    locked: true,
  },
  {
    id: 'analytics',
    label: 'Statistieken',
    text: 'Anonieme bezoekersstatistieken om de site te verbeteren. Momenteel gebruiken we geen statistiekentool; je keuze geldt zodra we er een inschakelen.',
  },
];

function read() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY));
    return value && value.version === POLICY_VERSION ? value : null;
  } catch {
    return null;
  }
}

let snapshot = { consent: typeof window === 'undefined' ? null : read(), panelOpen: false };
const listeners = new Set();

function update(next) {
  snapshot = { ...snapshot, ...next };
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => snapshot;

/** Current consent ({ analytics } or null if undecided) and whether the settings panel is open. */
export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function saveConsent({ analytics }) {
  const consent = { analytics: Boolean(analytics), timestamp: new Date().toISOString(), version: POLICY_VERSION };
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
  update({ consent, panelOpen: false });
}

export function openConsentSettings() {
  update({ panelOpen: true });
}

export function closeConsentSettings() {
  update({ panelOpen: false });
}

/**
 * Inject a third-party script only once its category is consented to.
 * Nothing calls this yet — it is the one door every future tracker must go through.
 */
export function loadIfConsented(category, src) {
  if (!snapshot.consent?.[category] || document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
}

/* ============================================================
   SmithFit Lead-Magnet Library: SHARED CONFIG
   Edit values HERE once. Every magnet page + the hub reads this.
   Do not hardcode these values inside individual pages.
   ============================================================ */
window.SMITHFIT_CONFIG = {

  /* Where every email form POSTs.
     CURRENT: the published, tested "Quiz Lead Capture" GHL inbound webhook
     (creates the contact so no lead is ever lost).
     SWAP: when the dedicated "Lead Magnet Capture" GHL workflow is built
     (see lead-magnets/FOLLOW-UP-SOP.md, 5-minute build), paste its
     webhook URL here. One line, done. */
  webhookUrl: 'https://services.leadconnectorhq.com/hooks/TSWnCFvIE58IDjlDc4Ym/webhook-trigger/99ad9935-c94b-4d6c-9d8b-13584a0ae46e',

  /* The game-plan call CTA on every page. */
  callUrl: 'https://calendly.com/ijfit/30-minute-game-plan',

  /* Meta pixel. Set pixelEnabled to false to remove it from every page. */
  pixelId: '2048544922674067',
  pixelEnabled: true,

  /* Tag pattern: each page sends tag = 'lead-' + its short slug
     (e.g. lead-meal-builder, lead-caffeine-cutoff). */
  tagPrefix: 'lead-'
};

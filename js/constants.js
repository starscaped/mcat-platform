/* Shared constants for the platform */
window.MCAT = window.MCAT || {};

// The standard MCAT subjects (used to bucket analytics)
MCAT.SUBJECTS = [
  "CARS",
  "Biology",
  "Biochemistry",
  "General Chemistry",
  "Organic Chemistry",
  "Physics",
  "Psychology",
  "Sociology"
];

MCAT.DIFFICULTIES = ["Easy", "Moderate", "Hard"];

// localStorage key for the saved progress
MCAT.STORAGE_KEY = "mcat_platform_save_v1";

// Save file schema version (bump if the format changes)
MCAT.SAVE_VERSION = 1;

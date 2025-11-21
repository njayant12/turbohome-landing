// Theme configuration - TurboHome brand colors
export const theme = {
  colors: {
    primary: "#2563eb",      // TurboHome Blue
    primaryDark: "#1d4ed8",
    primaryLight: "#3b82f6",
    accent: "#f59e0b",       // Gold
    success: "#10b981",      // Green
    error: "#ef4444",        // Red
    gray: {
      900: "#111827",
      700: "#374151",
      500: "#6b7280",
      300: "#d1d5db",
      100: "#f3f4f6",
      50: "#f9fafb",
    },
    white: "#ffffff",
  },
};

export type Theme = typeof theme;

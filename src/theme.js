import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4F46E5",
        },
        secondary: {
            main: "#06B6D4",
        },
        success: {
            main: "#10B981",
        },
        warning: {
            main: "#F59E0B",
        },
        error: {
            main: "#EF4444",
        },
        background: {
            default: "#F9FAFB",
        },
    },
    shape: {
        borderRadius: 12,
    },
    typography: {
        fontFamily: "Inter, Roboto, sans-serif",
        h4: {
            fontWeight: 700,
        },
        h5: {
            fontWeight: 600,
        },
    },
});

export default theme;
import React from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "./PaperBase.css";

const drawerWidth = 256;

function PaperBase() {
  const [colorMain, setColorMain] = React.useState("#1976d2");
  const [colorSecondary, setColorSecondary] = React.useState("#84baf0");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const location = useLocation();

  let theme = createTheme({
    palette: {
      primary: {
        light: colorSecondary,
        main: colorMain,
        dark: colorSecondary,
        contrastText: "#fff",
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  theme = {
    ...theme,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#111827",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          contained: {
            boxShadow: "none",
            "&:active": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            marginLeft: theme.spacing(1),
          },
          indicator: {
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            margin: "0 16px",
            minWidth: 0,
            padding: 0,
            [theme.breakpoints.up("md")]: {
              padding: 0,
              minWidth: 0,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1),
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 4,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "rgb(255,255,255,0.15)",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: colorMain,
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: 14,
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "inherit",
            minWidth: "auto",
            marginRight: theme.spacing(2),
            "& svg": {
              fontSize: 20,
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 32,
            height: 32,
          },
        },
      },
    },
  };

  React.useEffect(() => {
    const data_main_color = window.localStorage.getItem("MAIN_COLOR");
    if (data_main_color !== null) {
      setColorMain(JSON.parse(data_main_color));
    }

    const data_secondary_color = window.localStorage.getItem("SECONDARY_COLOR");
    if (data_main_color !== null) {
      setColorSecondary(JSON.parse(data_secondary_color));
    }

    switch (location.pathname) {
      case "/":
        setSelectedIndex(0);
        break;
      case "/projects":
        setSelectedIndex(1);
        break;
      case "/resume":
        setSelectedIndex(2);
        break;
      case "/contact":
        setSelectedIndex(3);
        break;
      case "/login":
        setSelectedIndex(4);
        break;
      default:
        setSelectedIndex(false);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("MAIN_COLOR", JSON.stringify(colorMain));
    window.localStorage.setItem(
      "SECONDARY_COLOR",
      JSON.stringify(colorSecondary)
    );
  }, [colorMain, colorSecondary]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        ></Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          Head
          {/* <Header onDrawerToggle={handleDrawerToggle} btnSound={btnSound} /> */}
          <Box
            component="main"
            sx={{
              flex: 1,
              py: 6,
              px: 4,
              bgcolor: "#eaeff1",
            }}
          >
            Content
            {/* <Content setSelectedIndex={setSelectedIndex} btnSound={btnSound} /> */}
          </Box>
          <Box
            component="footer"
            sx={{
              p: 1,
              bgcolor: "primary.main",
            }}
            elevation={6}
          ></Box>
        </Box>
      </Box>
      {/* <ToastContainer /> */}
    </ThemeProvider>
  );
}

export default PaperBase;

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: '#0971f1',
          darker: '#053e85',
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
        abc: {
            main: '#fff',
            white: '#fff',
        },
      },
})

const useStyles = makeStyles((theme) =>
createStyles({
    selectRoot: {
        color: "white",
    },
    menuItem:{
        color: "red",
    }
}),
);
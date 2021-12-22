import {Grid} from "@mui/material";
import {BodyText} from "./BodyText";
import Typography from "@mui/material/Typography";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-8004148-7');
ReactGA.pageview(window.location.pathname + window.location.search);

export function App() {
    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h1">David Merrick is the Coolest Guy in America</Typography>
        </Grid>
        <Grid item xs={4}
              justify="space-between"
              style={{
                  backgroundImage: `url(coolestguy.jpg)`,
                  height: '800px',
                  backgroundSize: 'cover'
              }}
        />
        <Grid item xs={4}>
            <BodyText></BodyText>
        </Grid>
    </Grid>
}

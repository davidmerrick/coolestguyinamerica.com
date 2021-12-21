import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export function App() {
  return <Card>
    <Typography variant="h1">David Merrick is the Coolest Guy in America</Typography>

    <Box
      component="img"
      sx={{
        height: 1200,
        maxHeight: { xs: 300, md: 500 },
      }}
      alt="The coolest guy, himself"
      src="coolestguy.jpg"
    />

    <Typography variant="body1">
      Oh hey there &#128075;. I'm David. This was a site I ranked on Google as a prank
      way back in 2009. I was browsing for domains, and realized that
      coolestguyinamerica.com wasn't taken, so I bought it for $10.
      <br/>
      <br/>
      For more on me, check out my main website,
      <a href="https://www.david-merrick.com">www.david-merrick.com</a> or my <a
      href="https://github.com/davidmerrick">GitHub</a>.
    </Typography>
  </Card>
}

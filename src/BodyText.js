import {Typography, Link}  from "@mui/material";

export function BodyText() {
    return <Typography variant="body1">
        Oh hey there &#128075;. I'm David. This was a site I ranked on Google as a prank
        way back in 2009. I was browsing for domains, and realized that
        coolestguyinamerica.com wasn't taken, so I bought it for $10.
        <br/>
        <br/>
        For more on me, check out my main website, &nbsp;
        <Link href="https://www.david-merrick.com" target="_blank">www.david-merrick.com</Link> or my <Link
        href="https://github.com/davidmerrick" target="_blank">GitHub</Link>.
    </Typography>

}
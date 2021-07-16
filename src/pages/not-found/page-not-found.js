import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { HiOutlineEmojiSad } from "react-icons/hi";
import "./page-not-found.css";

function PageNotFound() {
  return (
    <div className="not-found-content">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2" color="primary">
            404 - Page not found
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <HiOutlineEmojiSad className="icon-not-found" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PageNotFound;

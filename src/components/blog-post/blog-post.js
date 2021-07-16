import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./blog-post.css";
import "../../App.css";

export default function RecentPost(props) {
  const cardStyle = {};
  if (props.height) {
    cardStyle["height"] = props.height;
  }
  if (props.width) {
    cardStyle["width"] = props.width;
  }
  return (
    <a href={props.post.link} target="_blank">
      <Card className="blog-post-card" style={cardStyle}>
        <Grid container alignItems="stretch" className="h100">
          <Grid item xs={4} sm={4} className="h100">
            <CardMedia
              className="h100"
              src={props.post.image}
              component="img"
            />
          </Grid>
          <Grid item xs={8} sm={8}>
            <CardContent>
              <Typography component="h6" variant="h6">
                {props.post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.post.date}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </a>
  );
}

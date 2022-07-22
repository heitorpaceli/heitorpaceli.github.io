import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import { format } from "date-fns";

export default function RecentArticle(props) {
  const { article } = props;

  return (
    <Tooltip title={article.title} placement="top-start" arrow>
      <Button
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textTransform: "none" }}
      >
        <Card
          sx={{
            height: 290,
            maxWidth: 345,
            "&:hover": {
              filter: "brightness(0.8)",
            },
          }}
          elevation={5}
        >
          <CardMedia
            component="img"
            height="140"
            image={article.image}
            alt="article featuring image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {article.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.primary">
              {format(article.date, "MMM dd, yyyy")}
            </Typography>
          </CardActions>
        </Card>
      </Button>
    </Tooltip>
  );
}

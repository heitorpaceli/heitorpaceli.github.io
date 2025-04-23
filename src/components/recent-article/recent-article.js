import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import { format } from "date-fns";
import ArticleCardMedia from "./article-card-media";

export default function RecentArticle(props) {
  const { article } = props;

  return (
    <Tooltip title={
      article.disabled ?
        `${article.title} - NOTE: Website has been disabled/discontinued and article may no longer be accessible.` :
        article.title
    }
      placement="top-start" arrow>
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
            filter: article.disabled ? "brightness(0.3)" : "brightness(1)"
          }}
          elevation={5}
        >
          <ArticleCardMedia article={article} />
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

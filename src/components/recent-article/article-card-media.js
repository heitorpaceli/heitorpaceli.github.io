import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

export default function ArticleCardMedia(props) {
    const { article } = props;
    return !article.disabled && (
        <CardMedia
            component={"img"}
            height="140"
            image={article.image}
            alt="article featuring image"
        />
    );
}

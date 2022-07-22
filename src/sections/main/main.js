import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import ProfilePicture from "../../components/profile-picture/profile-picture";
import { useTheme } from "@mui/material/styles";

export default function Main() {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.background.dark,
        minHeight: "75vh",
      }}
    >
      <ProfilePicture />
      <Stack alignItems="center" sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h3" color="text.secondary">
          Heitor Paceli Maranhão
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Senior Software Engineer
        </Typography>
        <Typography variant="h5" color="text.secondary">
          MSc. in Computer Science
        </Typography>
      </Stack>
    </Grid>
  );
}

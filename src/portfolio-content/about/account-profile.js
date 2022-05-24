import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
  } from "@mui/material";
  
  const user = {
    avatar: "../../images/avatar.png",
    skills:
      "Software Engineer | JavaScript | ReactJS | NodeJS | Git | Github | Version Control",
    jobTitle: "Senior Pomidor",
    name: "Sasha S.",
    skills2: "Netlify | SCSS | BootStrap | Material-UI",
  };
  
  export const AccountProfile = (props) => (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pb: 5,
            flexDirection: "column",
          }}
        >
          <Avatar
            src="https://github.com/ssasmi/personal-website/blob/main/dist/assets/img/avatar.png?raw=true"
            sx={{
              height: 240,
              mb: 4.4,
              width: 240,
              backgroundColor: "#ccc",
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h4">
            {user.name}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            {user.jobTitle}
          </Typography>
          <Typography color="textSecondary" align="center" variant="body1">
            {`${user.skills} `}
          </Typography>
          <Typography
            align="center"
            justifyContent="center"
            color="textSecondary"
            variant="body2"
          >
            {user.skills2}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
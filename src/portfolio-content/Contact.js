import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sentSound = () => {
  let sentAudio = new Audio("/sounds/public_sounds_buttonclick.mp3");
  sentAudio.play();
};

export default function Contact({ btnSound }) {
  const form = React.useRef();
  const [emailAddress, setEmailAddress] = React.useState();
  const [formMessage, setFormMessage] = React.useState();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    sentSound();
    toast.success(`Message successfully sent!`, {
      theme: "colored",
      position: "top-center",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <Grid container align="center" className="aboutContainer">
      <Grid item xs={12} sm={12} md={12}>
        <Paper sx={{ mx: { xs: 0, sm: 10 } }}>
          <Box
            sx={{
              py: 10,
              my: 5,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>
              <EmailIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Напиши мне!
            </Typography>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email address"
                name="email"
                autoFocus
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="message me"
                type="message"
                id="message"
                onChange={(e) => {
                  setFormMessage(e.target.value);
                }}
                multiline
                rows={5}
              />

              <Button
                onClick={() => {
                  sendEmail();
                }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!emailAddress || !formMessage}
              >
                Send your message!
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        href="https://github.com/samsymes"
        color="default"
        aria-label="GitHub"
      >
        <Github />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/samanthasymes/"
        color="default"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="mailto:samasymes@gmail.com"
        color="default"
        aria-label="Email"
      >
        <Email />
      </IconButton>
    </Stack>
  );
}

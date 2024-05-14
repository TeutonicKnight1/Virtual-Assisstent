import { Container, Link, Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer className="footer">
      <Container sx={{display: "flex", justifyContent: "space-around"}}>
        <Container sx={{ display: "flex", width: "300px" }}>
          <Typography variant="inherit" color="white" sx={{ marginRight: "10px" }}>
            E-mail:{" "}
          </Typography>
          <Link underline="hover" href="#" color={"white"}>
            worldkiri@gmail.com
          </Link>
        </Container>
        <Container sx={{ display: "flex", width: "400px" }}>
          <Typography variant="inherit" color="white" sx={{ marginRight: "10px" }}>
            Github:{" "}
          </Typography>
          <Link underline="hover" href="https://github.com/TeutonicKnight1" color={"white"}>
            https://github.com/TeutonicKnight1
          </Link>
        </Container>
      </Container>
      <Typography variant="inherit" color="white" sx={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
        © 2024. Все права защищены.
      </Typography>
    </footer>
  );
};

export default Footer;

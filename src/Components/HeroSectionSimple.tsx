import { Divider, Typography } from "@mui/material";

export default function HeroSectionSimple(props: {
  cover: string;
  title: string;
}) {
  return (
    <section className="hero">
      <img src={props.cover} alt="Background Image" />
      <div className="overlay" />
      <Typography variant="h2" component={"h2"}>
        {props.title}
      </Typography>
    </section>
  );
}

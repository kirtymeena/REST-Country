import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

const CardLayout = ({ name, flag, population, region, capital }) => {
  const theme = useSelector((state) => state.themeReducer.isDark);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          style={{
            fontWeight: "700",
            width: "18rem",
            height: "17rem",
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <CardMedia component="img" height="140" image={flag} alt="flag" />
          <CardContent className={`${theme ? "dark__card" : "light__card"}`}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color={`${theme ? "light-stone" : "stone"}`}
            >
              <div>
                <p className=" font-bold">
                  Population: <span className="body__text">{population}</span>
                </p>
              </div>
              <div>
                <p className=" font-bold">
                  Region: <span className="body__text">{region}</span>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Capital: <span className="body__text ">{capital}</span>{" "}
                </p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardLayout;

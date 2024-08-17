import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/Nav"; // Import NavBar
import Cookies from "js-cookie";
import Carousel from "react-material-ui-carousel";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const refreshTokens = async () => {
    try {
      const response = await axios.post(
        "https://e-commerce-backend-eight-green.vercel.app/refresh",
        {
          refreshToken: Cookies.get("refreshToken"),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        const { accessToken, refreshToken } = response.data;
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);
      } else {
        console.log("Failed to refresh tokens.");
      }
    } catch (error) {
      console.log("Failed to refresh tokens.");
    }
  };

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        // If the server responds with a 401 status code, refresh the tokens
        await refreshTokens();
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    // Fetch main product categories from the API when the component mounts
    axios
      .get("https://e-commerce-backend-eight-green.vercel.app/main-categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data); // Assuming the API returns an array of categories
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    axios
      .get(
        "https://e-commerce-backend-eight-green.vercel.app/main-categories/sub"
      )
      .then((response) => {
        console.log(response);
        setSubCategories(response.data); // Assuming the API returns an array of categories
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []); // The empty dependency array ensures this runs only once on mount

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    rtl: false, // Slide from right to left
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <NavBar />
      <Container maxWidth="100%">
        <Paper
          elevation={3}
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            margin: "0 0 15px 0",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-3356b.appspot.com/o/Banner%20copy.jpg?alt=media&token=cacc271e-85bd-4a96-9793-7516ad5f24a1&_gl=1*1dksexe*_ga*NjM3NzczMzI4LjE2OTc3MzU5ODI.*_ga_CW55HF8NVT*MTY5ODczNTk5NS4yOC4xLjE2OTg3MzYwMzkuMTYuMC4w"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
          <Carousel {...sliderSettings}>
            {categories.map((category) => (
              <div key={category.Category_id}>
                <a
                  href={`/main-categories/${category.Category_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={category.Category_image}
                    alt={category.Name}
                    style={{
                      height: "90vh",
                      width: "100%",
                      objectFit: "contain", // Ensures the image covers the slider area
                    }}
                  />
                  <Typography
                    variant="h4"
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      position: "absolute",
                      bottom: "20px",
                      width: "100%",
                      textShadow: "2px 2px 4px #000",
                    }}
                  >
                    {category.Name}
                  </Typography>
                </a>
              </div>
            ))}
          </Carousel>
        </Paper>
      </Container>

      <Grid container spacing={2} style={{ width: "80%", margin: "5% auto" }}>
        {subCategories.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.Category_id}>
            <a
              href={`/main-categories/${item.Category_id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.Name}
                  height="160"
                  image={item.Category_image}
                  style={{ borderRadius: "15px 15px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="center"
                    style={{ color: "#3f51b5" }}
                  >
                    {item.Name}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

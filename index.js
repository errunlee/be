import express from "express";
import { hotelArr } from "./mocks/hotel.js";
import { mainCarouselImages } from "./mocks/carouselImages.js";
import { endpoints } from "./mocks/endpoints.js";
import { eventArr } from "./mocks/events.js";
import { newsArr } from "./mocks/news.js";
import { blogArr } from "./mocks/blog.js";
import { destinationArr } from "./mocks/destination.js";
import { aboutUsText } from "./mocks/aboutUs.js";
import cors from "cors";

const app = express();

app.use(cors());


app.get("/api", (req, res) => {
    res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: endpoints
    })
})

app.get("/api/hotel", (req, res) => {
    res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: hotelArr
    })
})
app.get("/api/hotel/:id", (req, res) => {
    res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: hotelArr[req.params.id - 1]
    })
})

app.get("/api/mainCarousel", (req, res) => {
    res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: mainCarouselImages
    })
})

app.get("/api/event", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: eventArr
    })
})
app.get("/api/event/:id", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: eventArr[req.params.id - 1]
    })
})
app.get("/api/news", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: newsArr
    })
})
app.get("/api/news/:id", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: newsArr[req.params.id - 1]
    })
})
app.get("/api/blog/", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: blogArr
    })
})
app.get("/api/blog/:id", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: blogArr[req.params.id - 1]
    })
})
app.get("/api/destination", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: destinationArr
    })
})

app.get("/api/destination/:id", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: destinationArr[req.params.id - 1]
    })
})

app.get("/api/aboutUs", (req, res) => {
    return res.json({
        success: true,
        errorMessage: null,
        detailErrorMessage: null,
        data: aboutUsText
    })
})



app.listen("8082", () => {
    console.log("server started");
})
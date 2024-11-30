


const express = require("express");
const axios = require("axios");
const router = express.Router();

const QUIZ_API_TOKEN = "aAVlDvzF5geSxZHN2nV3bo04idbEO3iXwVfDe9WJ";

router.get("/fetch", async (req, res) => {
    try {
        const { category, difficulty, limit } = req.query;
        const response = await axios.get("https://quizapi.io/api/v1/questions", {
            headers: { "X-Api-Key": QUIZ_API_TOKEN },
            params: {
                category: category || "code",
                difficulty: difficulty || "Medium",
                limit: limit || 20,
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching quizzes:", error.message);
        res.status(500).json({ error: "Failed to fetch quizzes" });
    }
});

module.exports = router;

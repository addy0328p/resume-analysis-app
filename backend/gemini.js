const { GoogleGenerativeAI } = require("@google/generative-ai");
const Applicant = require("./model");
const mongoose = require("mongoose");

require("dotenv").config();

// Use environment variables for security
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

async function generateResumeJSON(pdfData) {
  console.log("📄 Received Resume Data:", pdfData);

  const prompt = `
  Convert the following resume text into a structured JSON format.

  Resume Text:
  """
  ${pdfData}
  """

  Output JSON format should be:
  {
    "name": <name>,
    "email": <email>,
    "education": {
      "degree": <degree>,
      "branch": <branch>,
      "institution": <institution>,
      "year": <year>
    },
    "experience": {
      "job_title": <job_title>,
      "company": <company>,
      "start_date": <start_date>,
      "end_date": <end_date>
    },
    "skills": [
      <skill_1>,
      <skill_2>
    ],
    "summary": <write a short summary about the candidate profile based on resume data>
  }
  `;

  try {
    const result = await model.generateContent(prompt);

    // ✅ Wait for the response properly
    let responseString = await result.response.text();
    console.log("🤖 Raw Gemini Response:", responseString);

    // ✅ Remove Markdown-style triple backticks (```json ... ```)
    responseString = responseString.replace(/```json|```/g, "").trim();

    // ✅ Parse JSON safely
    const finalResponse = JSON.parse(responseString);
    console.log("✅ Parsed JSON:", finalResponse);

    // ✅ Store in MongoDB
    const applicant = new Applicant(finalResponse);
    await applicant.save();
    console.log("📝 Data saved to MongoDB");

    return finalResponse;
  } catch (error) {
    console.error("❌ Error generating JSON:", error.message);
  }
}

module.exports = generateResumeJSON;

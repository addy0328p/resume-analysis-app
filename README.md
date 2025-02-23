# Resume Analysis Backend App

This repository contains the backend implementation for a Resume Analysis application. It provides functionalities for user authentication, PDF extraction, LLM-based data processing, and data retrieval.

## Deployed Link

https://resume-analysis-app-ba3q.onrender.com

## GitHub Link

https://github.com/addy0328p/resume-analysis-app/tree/main 
## Features

* **User Authentication:** Secure user authentication through the `/auth/login` route.
* **PDF Extraction and Processing:** Extracts text from PDF URLs, processes it using Google Gemini, and stores structured information in MongoDB via the `/auth/login/extract-pdf` route.
* **Data Retrieval:** Retrieves matching records from the database in JSON format through the `/resumes/search` route.
* **MongoDB Integration:** Utilizes MongoDB for efficient data storage.
* **Google Gemini Integration:** Leverages Google Gemini for advanced data processing and analysis.
* **JWT Validation:** Implements JWT validation for secure access to protected routes.
* **Deployed on Render:** The backend is deployed and accessible via Render.

## Routes Implemented

* **`POST /auth/login`**: Handles user authentication.
* **`POST /auth/login/extract-pdf`**: Validates JWT, extracts text from a PDF URL, processes data using LLM, and stores structured information in MongoDB.
* **`GET /resumes/search`**: Returns a list of matching records in JSON format with status code 200.

## Technologies Used

* **Node.js**
* **Express.js** (Specify which one you used)
* **MongoDB**
* **Google Gemini**
* **JSON Web Tokens (JWT)**
* **Render**

## Work Done

* Developed a mini backend using Node.js with Express.js/Nest.js.
* Integrated MongoDB as the database for storing user and file-related data.
* Implemented authentication in the `/auth/login` route.
* Built a PDF extraction feature in `/auth/login/extract-pdf` that validates JWT, extracts text, and processes it with LLM.
* Integrated Google Gemini for advanced data processing.
* Deployed the backend using Render for accessibility.
* Ensured proper API structuring and optimized response handling.
* Followed best practices for security and efficiency in backend development.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [Add your GitHub repository link here]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure environment variables:**
    * Create a `.env` file in the root directory.
    * Add necessary environment variables, such as MongoDB connection string, JWT secret, and Google Gemini API key.
    * Example:
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        GEMINI_API_KEY=your_gemini_api_key
        ```
4.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

## API Usage Examples

* **Login:**
    ```bash
    POST /auth/login
    Content-Type: application/json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
* **Extract PDF:**
    ```bash
    POST /auth/login/extract-pdf
    Authorization: Bearer your_jwt_token
    Content-Type: application/json
    {
      "pdfUrl": "your_pdf_url"
    }
    ```
* **Search Resumes:**
    ```bash
    GET /resumes/search
    Authorization: Bearer your_jwt_token
    ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.


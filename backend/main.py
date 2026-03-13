from fastapi import FastAPI
from reviewer import review_code
from analyzer import analyze_python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define allowed origins, methods, headers, etc.
origins = [
    "http://localhost",
    "http://localhost:3000",
    # Add the origin of your frontend application
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods, including OPTIONS, GET, POST, etc.
    allow_headers=["*"],  # Allows all headers
)
@app.post("/review")
async def review(payload: dict):

    print("TESTING")
    code = payload["code"]

    ai_review = review_code(code)
    print(ai_review)
    static_analysis = analyze_python(code)
    print("SA = "+static_analysis);

    return {
        "ai_review": ai_review,
        "static_analysis": static_analysis
    }
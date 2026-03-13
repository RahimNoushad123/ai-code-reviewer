from openai import OpenAI

client = OpenAI()

def review_code(code):

    prompt = f"""
You are a senior software engineer performing a professional code review.

Analyze the following code for:

1. Bugs
2. Security issues
3. Performance problems
4. Code style problems
5. Suggestions for improvement

Code:
{code}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].content;
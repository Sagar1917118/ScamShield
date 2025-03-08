import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompts = [
  "You will be given text from a audio file or conversation of between two users. you have to analyze the text thorowly and predict if the conversation is suspicious or not  with probability between 0 to 100 and reason. you can only give one object as output, and accuracy is very important here. Few samples are given below.  is very important here. Few samples are given below.",
  "your output should be json object containing  {'fraud_probability': 0 to 100 , 'reason': 'reason'}",
]

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "application/json",
}

model1 = genai.GenerativeModel(
  model_name="gemini-2.0-flash",
  generation_config=generation_config,
)

def gen_ai_json(question, prompts=prompts):
  prompts.append(f"input: {question}")
  prompts.append("output: ")
  response = model1.generate_content(prompts)
  return  response.text
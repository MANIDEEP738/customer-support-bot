from chatbot.gemini_services import ask_gemini

answer = ask_gemini(
    "What is django?"
)

print(answer)
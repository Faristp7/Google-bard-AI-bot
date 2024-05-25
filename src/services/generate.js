import { GoogleGenerativeAI } from "@google/generative-ai";

export const generate = async (value) => {
    try {
        if (value === '') return "Promopt required"
        const apiKey = import.meta.env.API_KEY || "AIzaSyAAMBzkHZJtMBjsEEFB11mQNTsPtaKyTz0"

        if (!apiKey) return "API key not found"

        const config = new GoogleGenerativeAI(apiKey)
        const modelId = "gemini-pro"
        const model = config.getGenerativeModel({ model: modelId })

        const result = await model.generateContent(value)
        return result.response.text()
    } catch (error) {
        console.log(error);
    }
}
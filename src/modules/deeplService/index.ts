import { http } from "@libs/http";

const baseUrl = process.env.DEEPL_API_URL;
const apiKey = process.env.DEEPL_API_KEY;

type TranslateResponse = {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
};

export class DeePlService {
  static async translate(
    text: string[],
    targetLang: string,
    sourceLang: string = "EN"
  ) {
    try {
      const response = await http<TranslateResponse>(
        `${baseUrl}/translate?auth_key=${apiKey}`,
        {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            target_lang: targetLang,
            source_lang: sourceLang,
          }),
        }
      );
      return response.translations.map((translation) => translation.text);
    } catch {
      return text;
    }
  }
}

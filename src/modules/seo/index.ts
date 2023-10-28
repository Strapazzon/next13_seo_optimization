import { DeePlService } from "@modules/deeplService";
import { Metadata } from "next";

export type PageSeoProps = {
  uid?: string;
  title: string;
  description: string;
  keywords: string;
};

export class SEO {
  static buildI18nSeoMetadata = async (
    pageSeo: PageSeoProps,
    lang: string
  ): Promise<Metadata> => {
    const [title, description, keywords] = await DeePlService.translate(
      [pageSeo.title, pageSeo.description, pageSeo.keywords],
      lang,
      "en"
    );

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: "website",
      },
    };
  };
}

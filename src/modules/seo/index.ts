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

    let canonicalUrl = `${process.env.BASE_URL}/${lang}`;

    if (pageSeo.uid) {
      canonicalUrl += `/${pageSeo.uid}`;
    }

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: "website",
        url: canonicalUrl,
      },
    };
  };
}

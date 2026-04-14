export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

export async function searchUnsplashImages(query: string, perPage: number = 10): Promise<UnsplashImage[]> {
  try {
    const response = await fetch(`/api/unsplash/search?query=${encodeURIComponent(query)}&per_page=${perPage}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to search images");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Unsplash search error:", error);
    return [];
  }
}

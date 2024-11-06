import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const year = params.year;
  const currentNews = getNewsForYear(year);
  return <NewsList news={currentNews} />;
}

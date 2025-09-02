import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer2 from "@/components/footers/Footer2";
import ResourceDetails from "@/components/Resources/ResourcesDetails";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title: "Resources Details || Brainwave ",
  description:
    "Brainwave - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function BlogDetailsPage1({ params }) {
  const id = params.id;

  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  if (!blogItem) {
    return <div className="panel py-10"> Article Not Found.</div>;
  }
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <ResourceDetails blogItem={blogItem} />
        </div>
        <Footer2 />
      </div>
    </>
  );
}

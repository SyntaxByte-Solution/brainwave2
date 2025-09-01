import Brands from "@/components/common/Brands";

export default function LogoGird() {
  return (
    <>
      <div
        id="companies_sponsores"
        className="companies-sponsores section panel overflow-hidden rounded-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50 px-5 py-8"
      >
        <div
          className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
          data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
        >
          <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
            Trusted by Leading Businesses
          </p>
          <div className="block-panel panel">
            <div className="element-brands text-black dark:text-white mask-x">
              <Brands />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

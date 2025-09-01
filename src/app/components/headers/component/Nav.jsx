"use client";

import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { ServiceItems } from "@/data/services";
import { industries } from "@/data/industries";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li className="has-dd-menu">
        <a
          role="button"
          aria-haspopup="true"
        >
          Service{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div
          className={`uc-navbar-dropdown uc-drop w-90  shadow-xl rounded-2xl p-4 grid grid-cols-3 gap-6 z-50`}
        >
          <div>
            <ul>
              <div className=" row child-cols-3  uc-grid uc-grid-stack grid-stack">
                {ServiceItems.map((item, i) => (
                  // <li key={i}>
                  //   {item.href.startsWith("/") ? (
                  //     <Link
                  //       href={item.href}
                  //       className={
                  //         pathname.split("/")[1] == item.href.split("/")[1]
                  //           ? "menuActive"
                  //           : "inActiveMenu"
                  //       }
                  //     >
                  //       <div
                  //         key={i}
                  //         className="flex items-start  "
                  //       >
                  //         {/* <div className="text-xl">{item.icon}</div> */}
                  //         <div className="menu-stack-pr  hover:text-white rounded-xl cursor-pointer hover:bg-gray-600 hover:bg-opacity-5 dark:bg-gray-600 dark:hover:bg-white  dark:text-white  hover:scale-100 duration-150 transition-all ">
                  //           <h5 className="font-semibold  text-sm">
                  //             {item.title}
                  //           </h5>
                  //           <p className="text-gray-600 text-xs">{item.desc}</p>
                  //         </div>
                  //       </div>
                  //     </Link>
                  //   ) : (
                  //     <a href={item.href}>
                  //       {item.label}
                  //       {item.badge && (
                  //         <span
                  //           className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                  //         >
                  //           {item.badge.text}
                  //         </span>
                  //       )}
                  //     </a>
                  //   )}
                  // </li>
                  <div key={i}>
                    <Link
                      href={item.href}
                      className="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 shadow-m"
                    >
                      <span className="icon">
                        <i
                          className={`icon-2 ${item.icon} text-gray-900 dark:text-white`}
                        />
                      </span>
                      <div className="panel">
                        <h6 className="h6 fs-7 fw-medium mb-narrow">
                          {item.title}
                        </h6>
                        <p className="fs-8 text-muted">{item.desc}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li className="has-dd-menu">
        <a
          role="button"
          aria-haspopup="true"
        >
          Industries{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div
          className={`uc-navbar-dropdown uc-drop w-90  shadow-xl rounded-2xl p-4 grid grid-cols-3 gap-6 z-50`}
        >
          <div>
            <ul>
              <div className=" row child-cols-3  uc-grid uc-grid-stack grid-stack">
                {industries.map((item, i) => (
                  <li key={i}>
                    <div key={i}>
                      <Link
                        href={item.href}
                        className="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 shadow-m"
                      >
                        <span className="icon">
                          <i
                            className={`icon-2 ${item.iconClass} text-gray-900 dark:text-white`}
                          />
                        </span>
                        <div className="panel">
                          <h6 className="h6 fs-7 fw-medium mb-narrow">
                            {item.title}
                          </h6>
                          <p className="fs-8 text-muted">{item.description}</p>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <Link href={`/case-study`}>Portfolio</Link>
      </li>
      <li>
        <Link href={`/resource`}>Resources</Link>
      </li>
      <li>
        <Link href={`/page-about`}>About</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact</Link>
      </li>

      {/* <li>
        <Link href={`/blog`}>Blog</Link>
      </li> */}
    </>
  );
}

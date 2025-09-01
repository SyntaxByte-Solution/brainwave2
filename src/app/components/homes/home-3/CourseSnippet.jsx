import React from "react";
import Link from "next/link";
import { dummyCourses } from "@/data/dummyCourses";

export default function CourseSnippet() {
  return (
    <div id="courses" className="section panel py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Explore Our <span className="text-primary">Courses</span>
        </h2>

        {/* Courses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyCourses.map((course) => (
            <div
              key={course.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {Math.floor(
                    ((parseInt(course.oldPrice.replace("$", "")) -
                      parseInt(course.price.replace("$", ""))) /
                      parseInt(course.oldPrice.replace("$", ""))) *
                      100
                  )}
                  % OFF
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                {/* Price + Apply */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">
                      {course.oldPrice}
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {course.price}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-medium shadow hover:opacity-90 transition"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-block px-10 py-3.5 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-xl hover:opacity-90 transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

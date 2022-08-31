import React from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../../Assets/images/Blog/blog_img1.jpg";
import blogImg2 from "../../Assets/images/Blog/blog_img2.jpg";
import blogImg3 from "../../Assets/images/Blog/blog_img3.jpg";
const blogs = [
  {
    id: 1,
    img: blogImg1,
    category: "History",
    title: "Beyond Reading Everlasting Blog",
    description:
      "The basket is designed with two handles the basket can also work well for dog toy basket",
  },
  {
    id: 2,
    img: blogImg2,
    category: "History",
    title: "Thinking Bookworm In You",
    description:
      "The basket is designed with two handles the basket can also work well for dog toy basket",
  },
  {
    id: 3,
    img: blogImg3,
    category: "History",
    title: "The Magic Of Words",
    description:
      "The basket is designed with two handles the basket can also work well for dog toy basket",
  },
];

const Blog = () => {
  return (
    <div className="section_spacing">
      <div className="container mx-auto">
        <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E] section_title mb-8">
          Our Recent Blogs
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3  lg:grid-cols-3">
          {blogs.map((singleBlog) => {
            const { id, img, title, category, description } = singleBlog;
            return (
              <div class="home10_blog_Widget mb_30" key={id}>
                {console.log(singleBlog)}
                <Link to={`blog/${id}`} class="thumb">
                  <img src={img} alt="" />
                </Link>
                <div class="blog_content">
                  <Link to={`blog/${id}`}>
                    <h4>{title}</h4>
                  </Link>
                  <span>Category:{category}</span>

                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import detailsBanner from "../../Assets/images/Blog/details_banner.jpg";
const BlogDetails = () => {
  return (
    <>
      <div class="blog_details_area">
        <div class="container mx-auto flex justify-center">
          <div class="blog_details_inner mb_30 max-w-screen-lg">
            <div class="blog_details_banner">
              <img class="img-fluid" src={detailsBanner} alt="" />
            </div>
            <span class="blog_post_date">Blog . September 1, 2022</span>
            <h3>Beyond Reading Everlasting Blog</h3>
            <p class="mb_25">
              Duis aute irure dolor reprehenderit voluptate velit esse cillum
              dolore eu fugiatnulla xcepteur sint aecatpidatat nones proident,
              sunt in culpa qui officiat mollit anim idestborum. Sedutes
              perspiciatis unde omnis iste natus error sitluptatem enim ad minim
              veniamquis nostrud exercitation perspiciatis unde omnis iste natus
              error sit voluptatem exercitation perspiciatis unde .
            </p>
            <p class="mb-0">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              reprehenderit inluptatee cillum ugiatnulla xcepteur sint aecat
              cupidatat nones proident, sunt in culpa qui officiat.
            </p>
            <div class="quote_text">
              <div class="horizontal_line"></div>
              <h4>
                Risus commodo viverra maecenas accumsan lacus velesinm facilisis
                ipsum dolor sit amet, consectetur adipiscing elitsed eiusmod
                tempor incididunte viverra maecenas accumsan lacus velesinm.
              </h4>
            </div>
            <p>
              Duis aute irure dolor reprehenderit voluptate velit esse cillum
              dolore eu fugiatnulla xcepteur sint aecat cupidatat nones
              proident, sunt in culpa qui officiat mollit anim idestborum.
              Sedutes perspiciatis unde omnis iste natus error sitluptatem enim
              ad minim veniamquis nostrud.
            </p>
            <div class="details_info">
              <h4>The Cycleing Extraterrestrial </h4>
              <p class="mb_25">
                Duis aute irure dolor reprehenderit voluptate velit esse cillum
                dolore eu fugiatnulla xcepteur sint aecat cupidatat nones
                proident, sunt in culpa qui officiat mollit anim idestborum.
                Sedutes perspiciatis unde omnis iste natus error sitluptatem
                enim ad minim veniamquis nostrud exercitation perspiciatis unde
                omnis iste natus error sit voluptatem.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute reprehenderit inluptatee cillum dolore eugiatnulla xcepteur
                sint aecat cupidatat nones proident, sunt in culpa qui officiat
                mollit anim idestborumvelit esse cillume cillum dolore eu
                fugiatnulla xcepteur sint aecat cupidatat nones proident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

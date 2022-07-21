import React from "react";
import catBg from "../../Assets/images/category/category_bg.png";
import Card from "../Card/Card";
const Categorys = () => {
  return (
    <>
      <section className="category_area mt-[30px]">
        <div className="container mx-auto drop-shadow-lg bg-white py-[35px] px-[15px]">
          <h3 className="text-[30px] md:text-[35px]  lg:text-[40px] capitalize text-secondary mb-[20px]">
            category
          </h3>
          <div className="grid gap-[30px] grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
            <div
              className="single_category bg-cover bg-no-repeat bg-center text-center rounded-lg bg-primary h-[120px]  max-w-full md:max-w-[160px] min-w-[160px] flex items-center justify-center ] "
              style={{
                backgroundImage: `url(${catBg})`,
              }}
            >
              <h4 className="text-[18px] text-white capitalize">
                islamic book
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto drop-shadow-lg bg-white  px-[15px] mt-[30px] pt-[15px] pb-[35px]">
        <h3 className="text-[30px] md:text-[35px]  lg:text-[40px] capitalize text-secondary mb-[20px]">
          view by single category
        </h3>
        <div className="grid gap-[30px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default Categorys;

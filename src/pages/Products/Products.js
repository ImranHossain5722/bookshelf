import React from "react";

const Products = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6">
        <div className="w-full lg:w-4/12 xl:w-3/12">
          <h4 className="text-black text-[16px] capitalize font-semibold mb-3 mt-[4px]">
            Filter Category
          </h4>
          <div className="p-8 border ">
            <div className="single_category mb-6">
              <h4 class="text-black text-[18px] font-medium pb-2 border-b-[1px]  border-[#e1e2e6] mb-3">
                Product categories
              </h4>
              <div class="categories_box">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
              </div>
            </div>
            <div className="single_category mb-6">
              <h4 class="text-black text-[18px] font-medium pb-2 border-b-[1px]  border-[#e1e2e6] mb-3">
                Filter by Brands
              </h4>
              <div class="categories_box">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
              </div>
            </div>
            <div className="single_category">
              <h4 class="text-black text-[18px] font-medium pb-2 border-b-[1px]  border-[#e1e2e6] mb-3">
                Filter by Size
              </h4>
              <div class="categories_box">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" checked="checked" class="checkbox" />
                  <span class="label-text text-black">Clothing</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 xl:w-9/12">
          <h3 class="text-black text-[16px] capitalize font-semibold pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
            Showing 1–12 of 40 Results
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Products;

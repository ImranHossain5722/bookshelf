import React from "react";
// import CreateRoom from "../../Components/CreateRoom/CreateRoom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NewsFeed from "../NewsFeed/NewsFeed";
import PostModal from "../Post/PostModal";
import PostModalView from "../Post/PostModalView";
import RightSideBar from "../RightSideBar/RightSideBar";

const ReadersHome = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className=" bg-[#F0F2F5] overflow-y-scroll w-[22%]  hidden lg:block">
          <LeftSideBar />
        </div>
        <div className="NewFeed  flex justify-center   bg-[#F0F2F5] w-[55%]">
          <NewsFeed />
        </div>
        <div
          className=" bg-[#F0F2F5]  overflow-y-scroll right-0  w-[22%] hidden lg:block"  >
          <RightSideBar />
        </div>
      </div>
      <div className=""></div>
      <PostModal modal={"post_modal"}>
        <PostModalView/>
      </PostModal>
      
    </div>
  );
};

export default ReadersHome;

import { commissionImg, arrowRightIcon } from "../../../assets";

const Introduction = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 px-5 md:px-10 xl:px-14 py-4 justify-between border-b border-neutral-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-gray-1 text-xl sm:text-2xl xl:text-3xl not-italic font-bold leading-6 sm:max-w-[450px]">
          Unlock Rewards with the Copin Referral Program
        </h2>
        <p className="text-gray-2 text-[13px] xl:text-sm not-italic font-normal leading-6">
          Earn rebates and commissions by inviting friends.
          <br />
          Grow your network and benefit from our 6-tier reward system.
        </p>
        <a
          href="/#"
          className="flex items-center text-secondary text-[13px] xl:text-sm gap-2 hover:underline"
        >
          View referral Ranking{" "}
          <img src={arrowRightIcon} alt="arrowRightIcon" />
        </a>
      </div>
      <img
        srcSet={`${commissionImg} 4x`}
        alt="imgCommission"
        className="w-full sm:w-[380px] xl:w-[500px] h-auto object-cover"
      />
    </div>
  );
};

export default Introduction;

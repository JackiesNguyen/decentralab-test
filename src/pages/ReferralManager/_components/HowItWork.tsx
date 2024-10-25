import { lightbulbFilamentIcon } from "../../../assets";
import ReferralCard from "../../../components/ReferralCard";
import { CARD_CONTENTS } from "../../../constants/referralCardData";
import { v4 as uuidv4 } from "uuid";

const HowItWork = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          src={lightbulbFilamentIcon}
          alt="lightbulbFilamentIcon"
          className="object-cover"
        />
        <h3 className="text-gray-1 text-base xl:text-lg not-italic font-medium leading-6">
          How It Works?
        </h3>
      </div>
      <div className="grid grid-cols-1 2sm:grid-cols-2 md:grid-cols-4 gap-2">
        {CARD_CONTENTS.map((card) => (
          <ReferralCard
            key={uuidv4()}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;

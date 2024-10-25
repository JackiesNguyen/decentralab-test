import { cn } from "../lib/utils";

interface IReferralCardProps {
  className?: string;
  icon: string;
  title: string;
  description: string;
}

const ReferralCard = ({
  className,
  icon,
  title,
  description,
}: IReferralCardProps) => {
  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-6 rounded-sm bg-neutral-7 border border-neutral-4",
        className
      )}
    >
      <div className="w-[46px] h-[46px] bg-gradient-secondary p-2 rounded-sm overflow-hidden">
        <img src={icon} alt="icon-card" className="w-full h-full relative" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-1 text-base not-italic font-medium leading-6">
          {title}
        </h2>
        <p className="text-gray-2 text-[13px] not-italic font-normal leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReferralCard;

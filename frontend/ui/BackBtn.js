import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const BackButton = ({ text }) => {
  const router = useRouter();
  return (
    <button
      className="text-gray-500 text-xs font-medium"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon
        width={"12px"}
        height={"12px"}
        className="inline-block mr-2"
      />
      <span className="align-middle hidden lg:inline-block">{text}</span>
    </button>
  );
};

export default BackButton;

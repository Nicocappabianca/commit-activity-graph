import { FC } from "react";
import { RepositoryData } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

type RepositoryItemProps = {
  data: RepositoryData;
};

const RepositoryItem: FC<RepositoryItemProps> = ({ data }) => {
  return (
    <Link
      href={`/${data.owner.login}/${data.name}`}
      className="flex flex-col border border-gray-600 rounded-lg p-4 transition-colors hover:bg-gray-800 overflow-hidden"
    >
      <div className="flex items-center space-x-2">
        <Image
          src={data.owner.avatar_url}
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full shadow shadow-gray-400/50"
        />
        <div>
          <h4 className="text-md font-semibold text-gray-200 text-nowrap max-w-64 text-ellipsis overflow-hidden">
            {data.name}
          </h4>
          <p className="text-sm text-gray-400 text-nowrap max-w-64 text-ellipsis overflow-hidden">
            {data.owner.login}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RepositoryItem;

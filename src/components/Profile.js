import Image from "next/image";
import React from "react";

function Profile({ user }) {
  return (
    <div className="flex flex-col pt-14 pb-5 items-center justify-center">
      <Image
        src={user?.profile}
        alt={user?.name + "'s Profile Picture"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <p className="font-[500] text-[1.2rem] mt-2">{user?.name}</p>
      <p className="font-[100] text-[#7A7E86] text-[1rem]">{user?.position}</p>
    </div>
  );
}

export default Profile;

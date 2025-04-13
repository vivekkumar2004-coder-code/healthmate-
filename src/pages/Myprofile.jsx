import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "vivekkrsahu2004@gmail.com",
    phone: "6289156520",
    address: {
      line1: "kolkata hastings road",
      line2: "westBengal 700139",
    },
    gender: "Male",
    dob: "12/12/1999",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
        className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          name=""
          id=""
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4 ">{userData.name}</p>
      )}

      <hr  className="border-none  h-[1px] bg-zinc-400 " />

      <div>
        <p className="text-neutral-500 underline mt-3">Contact Information</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700" >
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>

          {isEdit ? (
            <input
            className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              name=""
              id=""
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input 
              className="bg-gray-50 "
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
                value={userData.address.line1}
              />
              <br />
              <input
              className="bg-gray-50 "
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>

        <p  className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? 
            <select
              className="bg-gray-100 max-w-20"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
           : 
            <p className="text-gray-400">{userData.gender}</p>
          }
          <p className="font-medium">Birth Date :</p>
          {
            isEdit?
            <input className="bg-gray-100 max-w-28 " value={userData.dob} type="date" onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}  name="" id="" />: <p className="text-gray-400">{userData.dob}</p>
          }
        </div>
      </div>

          <div className="mt-10">
            {isEdit ? <button className="border-primary border px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(false)}>Save Information</button >:<button className="border-primary border px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(true)}>Edit</button>}
          </div>

    </div>
  );
};

export default Myprofile;

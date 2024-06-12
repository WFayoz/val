import React from "react";

const App = () => {
  return (
    <div className=" bg-cyan-300 w-full h-full  py-5">
      <form
        action="#"
        className="flex flex-col max-w-[1280px] w-[60%] mx-auto bg-white "
      >
        <div className="flex w-full flex-col p-10 ">
          <h1 className="flex items-center justify-start text-[32px] text-[#015875]">
            Registration Form
          </h1>
          <p className="flex items-center justify-start text-4 text-[#015875]">
            Fill out the form carefully for registration
          </p>
        </div>
        <div className="w-full h-0 border"></div>
        <div className="flex p-10  flex-col">
          <label
            htmlFor="StudentName"
            for="first"
            className="text-4  text-[#005875]"
          >
            Student Name
          </label>
          <div
            id="StudentName"
            className="flex w-full pt-4 items-center justify-between"
          >
            <div className="flex flex-col">
              <input
                id="first"
                type="text"
                className="w-[210px] h-[40px] border border-[#015875] rounded-md "
              />
              <label
                htmlFor="first"
                className="text-[12px] text-[#005875] pt-1"
              >
                First Name
              </label>
            </div>
            <div className="flex flex-col">
              <input
                id="second"
                type="text"
                className="w-[210px] h-[40px] border border-[#015875] rounded-md "
              />
              <label
                htmlFor="second"
                className="text-[12px] pt-1 text-[#005875]"
              >
                Middle Name
              </label>
            </div>
            <div className="flex flex-col">
              <input
                id="last"
                type="text"
                className="w-[210px] h-[40px] border border-[#015875] rounded-md "
              />
              <label htmlFor="last" className="text-[12px] text-[#005875] pt-1">
                Last Name
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-full p-10 pt-0 flex-col">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col w-1/2">
              <label htmlFor="" className="text-4  text-[#005875]">
                Birth Date
              </label>
              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-col">
                  <select
                    name=""
                    id="month"
                    className="w-[98px] h-10 border border-[#015875] text-[16px] text-[#015875] rounded-md"
                  >
                    <option value="" className="text-[12px] text-[#015875]">
                      Please select a month
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      January
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      February
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      March
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      April
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      May
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      June
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      July
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      August
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      September
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      October
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      November
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      December
                    </option>
                  </select>
                  <label
                    htmlFor="month"
                    className="text-[12px] text-[#005875] pt-1"
                  >
                    Month
                  </label>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id="day"
                    className="w-[98px] h-10 border border-[#015875] text-[16px] text-[#015875] rounded-md"
                  >
                    <option value="" className="text-[12px] text-[#015875]">
                      Please select a day
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      1
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      2
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      3
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      4
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      5
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      6
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      7
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      8
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      9
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      10
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      11
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      12
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      13
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      14
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      15
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      16
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      17
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      18
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      19
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      20
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      21
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      22
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      23
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      24
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      25
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      26
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      27
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      28
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      29
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      30
                    </option>
                    <option value="" className="text-[12px] text-[#015875]">
                      31
                    </option>
                  </select>
                  <label
                    htmlFor="day"
                    className="text-[12px] text-[#005875] pt-1"
                  >
                    Day
                  </label>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id="year"
                    className="w-[98px] h-10 border border-[#015875] text-[16px] text-[#015875] rounded-md"
                  >
                    <option value="" className="text-[12px] text-[#015875]">
                      Please select a year
                    </option>
                    <option value="2024" className="text-[12px] text-[#015875]">
                      2024
                    </option>
                    <option value="2023" className="text-[12px] text-[#015875]">
                      2023
                    </option>
                    <option value="2022" className="text-[12px] text-[#015875]">
                      2022
                    </option>
                    <option value="2021" className="text-[12px] text-[#015875]">
                      2021
                    </option>
                  </select>
                  <label
                    htmlFor="year"
                    className="text-[12px] text-[#005875] pt-1"
                  >
                    Year
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[45%] ">
              <label htmlFor="gender" className="text-4  text-[#005875]">
                Gender
              </label>
              <select
                name=""
                id="gender"
                className="w-[310px] h-10 border border-[#015875] text-[16px] text-[#015875] mt-4 rounded-md"
              >
                <option value="">Please select your gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">N/A</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full p-10 pt-0 flex-col">
          <label
            htmlFor="address"
            for="street"
            className="text-[16px] text-[#015875]"
          >
            Address
          </label>
          <div className="flex w-full flex-col mt-4">
            <input
              type="text"
              id="street"
              className="w-full h-10 border border-[#015875] rounded-md"
            />
            <label htmlFor="street" className="text-[12px] text-[#015875] mt-2">
              Street Address{" "}
            </label>
          </div>
          <div className="flex w-full flex-col mt-8">
            <input
              type="text"
              id="street2"
              className="w-full h-10 border border-[#015875] rounded-md"
            />
            <label
              htmlFor="street2"
              className="text-[12px] text-[#015875] mt-2"
            >
              Street Address Line 2{" "}
            </label>
          </div>
          <div className="flex w-full mt-8 justify-between">
            <div className="flex flex-col w-[48%]">
              <input
                type="text"
                id="city"
                className="w-full h-10 border border-[#015875] rounded-md"
              />
              <label htmlFor="city" className="text-[12px] text-[#015875] mt-2">
                City
              </label>
            </div>
            <div className="flex flex-col w-[48%]">
              <input
                type="text"
                id="zip"
                className="w-full h-10 border border-[#015875] rounded-md"
              />
              <label htmlFor="zip" className="text-[12px] text-[#015875] mt-2">
                Postal/Zip Code
              </label>
            </div>
          </div>
          <div className="flex w-full flex-col mt-8">
            <input
              type="text"
              id="street2"
              className="w-full h-10 border border-[#015875] rounded-md"
            />
            <label
              htmlFor="street2"
              className="text-[12px] text-[#015875] mt-2"
            >
              Postal/Zip Code{" "}
            </label>
          </div>
        </div>
        <div className="flex w-full p-10 pt-0  justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="mail" className="text-[16px] text-[#015875] ">
              Student E-mail
            </label>
            <input
              type="text"
              id="mail"
              className="w-full h-10  mt-6 border border-[#015875] rounded-md"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="mobile" className="text-[16px] text-[#015875] ">
              Mobile Number
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full h-10 mt-6 pl-2 border border-[#015875] rounded-md"
              placeholder="(__)__-__"
            />
          </div>
        </div>
        <div className="flex w-full p-10 pt-0  justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="Phone" className="text-[16px] text-[#015875] ">
              Phone Number
            </label>
            <input
              type="number"
              id="Phone"
              className="w-full h-10 mt-6 pl-2 border border-[#015875] rounded-md"
              placeholder="(__)__-__"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="work" className="text-[16px] text-[#015875] ">
              Work Number
            </label>
            <input
              type="number"
              id="work"
              className="w-full h-10 mt-6 pl-2 border border-[#015875] rounded-md"
              placeholder="(__)__-__"
            />
          </div>
        </div>
        <div className="flex w-full p-10 pt-0  justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="company" className="text-[16px] text-[#015875] ">
              Company
            </label>
            <input
              type="text"
              id="compain"
              className="w-full h-10  mt-6 border border-[#015875] rounded-md"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="courses" className="text-[16px] text-[#015875] ">
              Courses
            </label>
            <select
              name=""
              id="courses"
              className="w-full h-10 mt-6 pl-2 border border-[#015875] text-[#015875] rounded-md"
            >
              <option value="">Please Select</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex w-full p-10 pt-0   flex-col">
          <label htmlFor="comment" className="text-[16px] text-[#015875]">
            Additional Comments
          </label>
          <textarea
            name=""
            id="comment"
            className="w-full min-h-40 mt-4 border border-[#015875] rounded-md"
          ></textarea>
        </div>
        <div className="w-full h-0 border"></div>
        <div className="flex w-full items-center h-40 justify-center">
          <button className="w-[180px] h-[50px] bg-[#015875] text-white text-[22px] rounded-lg">Sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default App;

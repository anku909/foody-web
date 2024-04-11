import React, { useRef } from "react";

function SignIn({ handleSignIn }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div className="signIn w-full h-screen fixed z-50  overflow-hidden">
        <div className="blackScreen w-full h-screen bg-[#282c3f] opacity-70 fixed"></div>
        <div className="whiteArea xl:w-[38%] xl:h-[1000px] bg-white absolute right-0 pl-10">
          <div className="close-btn-container w-full h-[50px] ">
            <button onClick={handleSignIn} className="text-4xl  pt-2">
              x
            </button>
            <div className="signIn-signUp-container">
              <div className="heading-container w-1/2 h-[180px] flex  justify-between items-center">
                <div className="heading-txt">
                  <h4 className="text-3xl font-semibold">Login</h4>
                  <p className="mt-2 text-sm">
                    or{" "}
                    <span className="text-orange-500 cursor-pointer">
                      create an account
                    </span>
                  </p>
                  <div className="line bg-black w-7 h-[2px] mt-4"></div>
                </div>
                <img
                  className="w-28 "
                  src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1712839306~exp=1712839906~hmac=e828eb0eb995b7d5586bbe9bffa303c968b6e3faeeec7ab8e721b81ce351dfdb"
                  alt=""
                />
              </div>

              <div className="login-function pt-10 ">
                <div
                  onClick={handleClick}
                  className="input-box w-[340px] h-[70px] border-[#c9c7c7]  border relative"
                >
                  <input
                    ref={inputRef}
                    className=" border-none outline-none w-[300px] h-[35px]  ml-7 mt-8"
                    type="text"
                    id="mobile"
                    name="mobile"
                    autoComplete="off"
                  />
                  <label
                    className="text-xs absolute top-3 left-7 "
                    for="mobile"
                  >
                    Phone number
                  </label>
                </div>
                <div className="login-btn">
                  <button className=" px-[146px] py-3 mt-6 bg-orange-500 font-bold text-l text-white text-center">
                    LOGIN
                  </button>
                </div>
                <div className="term-conditions w-1/2 mt-1">
                  <p className="text-xs ">
                    By clicking on Login, I accept the Terms & Conditions &
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

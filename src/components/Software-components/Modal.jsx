import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../../components/Software-components/Button"
import sr from "../../../public/assets/icons/sr.svg";

// import { Button } from 'react-scroll';

export function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        type="primary"
        onClick={openModal}
        // className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Contact US{" "}
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-[#EAF5F6] w-full max-w-3xl  transform overflow-hidden rounded-2xl  p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="">
                    <div className="   flex sm:justify-start justify-center sm:items-center">
                      <img src={sr} alt="" />
                      <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
                        CONTACT US
                      </p>
                    </div>{" "}
                    <h3 className="font-mons sm:text-start pt-[10px] text-[25px] text-center sm:text-[40px] font-bold text-primary">
                      Let's Get Growing.{" "}
                    </h3>
                  </Dialog.Title>
                  <div className="mt-6">
                    <form className="w-full ">
                      <div className="flex-col">
                        <div className="sm:flex sm:flex-row  flex-col  w-full justify-evenly items-center gap-[30px] px-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className=" sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="py-6 sm:w-[40%] w-full px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="sm:flex sm:flex-row  flex-col  w-full justify-evenly items-center gap-[30px] px-6">
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            className=" sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="text"
                            placeholder="Subject"
                            className="sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="flex w-full  justify-center items-center  px-6 mt-6">
                          <textarea
                            placeholder="Your Message"
                            className="sm:w-[90%] w-full sm:h-[200px] h-[50px] rounded-[10px] px-[40px] "
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex justify-center items-center m-auto"
                      onClick={closeModal}
                    >
                      <Button type="primary">Contact Us Now </Button>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function ModalXl() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        type="primaryXl"
        onClick={openModal}
        // className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Contact US Now{" "}
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* <Dialog.Panel className="bg-[#EAF5F6] w-full max-w-3xl  transform overflow-hidden rounded-2xl  p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="">
                    <div className="   flex justify-start items-center">
                      <img src={sr} alt="" />
                      <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
                        CONTACT US
                      </p>
                    </div>{" "}
                    <h3 className="font-mons text-start pt-[10px] text-[40px] font-bold text-primary">
                      Let's Get Growing.{" "}
                    </h3>
                  </Dialog.Title>
                  <div className="mt-6">
                    <form className="w-full ">
                      <div className="flex-col">
                        <div className="flex w-full justify-evenly items-center gap-[30px] px-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className=" w-[40%] py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="py-6 w-[40%]  px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="flex w-full justify-evenly items-center gap-[30px] px-6 mt-6">
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            className=" w-[40%] py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="text"
                            placeholder="Subject"
                            className="py-6 w-[40%]  px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="flex w-full  justify-center items-center  px-6 mt-6">
                          <textarea
                            placeholder="Your Message"
                            className="w-[90%] h-[200px] rounded-[10px] px-[40px] "
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex justify-center items-center m-auto"
                      onClick={closeModal}
                    >
                      <Button type="primary">Contact Us Now </Button>
                    </button>
                  </div>
                </Dialog.Panel> */}

<Dialog.Panel className="bg-[#EAF5F6] w-full max-w-3xl  transform overflow-hidden rounded-2xl  p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="">
                    <div className="   flex sm:justify-start justify-center sm:items-center">
                      <img src={sr} alt="" />
                      <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
                        CONTACT US
                      </p>
                    </div>{" "}
                    <h3 className="font-mons sm:text-start pt-[10px] text-[25px] text-center sm:text-[40px] font-bold text-primary">
                      Let's Get Growing.{" "}
                    </h3>
                  </Dialog.Title>
                  <div className="mt-6">
                    <form className="w-full ">
                      <div className="flex-col">
                        <div className="sm:flex sm:flex-row  flex-col  w-full justify-evenly items-center gap-[30px] px-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className=" sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="py-6 sm:w-[40%] w-full px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="sm:flex sm:flex-row  flex-col  w-full justify-evenly items-center gap-[30px] px-6">
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            className=" sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                          <input
                            type="text"
                            placeholder="Subject"
                            className="sm:w-[40%] w-full my-4 sm:my-2 py-6 px-[40px] rounded-[10px]"
                          />
                        </div>
                        <div className="flex w-full  justify-center items-center  px-6 mt-6">
                          <textarea
                            placeholder="Your Message"
                            className="sm:w-[90%] w-full sm:h-[200px] h-[50px] rounded-[10px] px-[40px] "
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex justify-center items-center m-auto"
                      onClick={closeModal}
                    >
                      <Button type="primary">Contact Us Now </Button>
                    </button>
                  </div>
                </Dialog.Panel>


              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

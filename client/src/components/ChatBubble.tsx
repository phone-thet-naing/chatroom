import { GlobalProps } from "@/App";
import { Message } from "./ChatRoom";

interface Props extends GlobalProps {
  message: Message;
  justify?: String;
}

const ChatBubble = ({ message, justify }: Props) => {
  const time = new Date();

  // return (
  //   <div className="flex flex-col">
  //     <div className="text-sm">
  //       {message.name}
  //     </div>
  //     <div>
  //       {message.text}
  //     </div>
  //   </div>
  // )

  return (
    <div className="flex items-start gap-2.5 mb-3">
      {/* <img
        className="w-8 h-8 rounded-full"
        src="/docs/images/people/profile-picture-3.jpg"
        alt="Jese image"
      /> */}
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div
          className={`flex items-center space-x-2 rtl:space-x-reverse ${justify}`}
        >
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {message.name}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
        <div className="flex flex-col leading-5 px-3 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl rounded-xl dark:bg-gray-700">
          <p className="font-normal text-gray-900 dark:text-white">
            {" "}
            {message.text}
          </p>
        </div>
        {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span> */}
      </div>
      {/* <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button> */}
      <div
        id="dropdownDots"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col max-w-[320px] leading-1.5 py-1 px-3 mb-2 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700">
      <p className="text-sm font-normal text-gray-900 dark:text-white">
        {message.text}
      </p>
      <span className="flex justify-between text-xs font-normal text-gray-500 dark:text-gray-400">
        <span></span>
        <span>
          {time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </span>
    </div>
  );
};

export default ChatBubble;

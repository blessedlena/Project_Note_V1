import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="w-full px-4 pt-6">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md max-w-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              You've made too many requests in a short period. <br />Please try again later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default RateLimitedUI;
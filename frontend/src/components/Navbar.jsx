import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-10xl px-4 py-4 grid grid-cols-10 items-center">
        <div className="col-start-2">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">ThinkBoard</h1>
        </div>
        <div className="col-start-9 justify-self-end">
          <Link to={"/create"} className="btn btn-primary">
            <PlusIcon className="size-5" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



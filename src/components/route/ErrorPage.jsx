import { useRouteError } from "react-router-dom";
import Button from "../Buttons/Button";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-base-content">Oops!</h2>
      <p className="text-base text-base-content-secondary mt-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-500 text-2xl mt-3 mb-8">
        {error.statusText || error.message}
      </p>
      <Button isPrimary={true} text="Go Back"></Button>
    </div>
  );
};

export default ErrorPage;

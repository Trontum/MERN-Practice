import { useRouteError } from "react-router-dom"

export default function Error() {
    const error=useRouteError();
    // console.log(error);
  return (
    <div>
        <h1>Sorry, you have landed on a wrong page.</h1>
        <h2>{error.status} - {error.statusText}</h2>
        <h3>{error.error.message}</h3>
    </div>
  )
}

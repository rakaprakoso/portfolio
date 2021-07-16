import { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    document.title = props.title ? "Erkade - " + props.title : "Erkade - Raka D Prakoso";
  }, [props.title]);
  return props.children;
};

export default Page;

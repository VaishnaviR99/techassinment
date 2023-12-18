import { Image, Tooltip } from "@chakra-ui/react";
import { Link as ReactLink, useLocation } from "react-router-dom";

const Logo = () => {
  const { pathname } = useLocation();
  return (
    <ReactLink
      to={`${
        pathname.startsWith("/admin") &&
        pathname !== "/admin/login" &&
        pathname !== "/admin/signup"
          ? "/admin/dashboard"
          : "/"
      }`}
    >
      <Tooltip
        label="Fashion Redefined"
        aria-label="Fashion redefined tooltip"
        hasArrow
      >
        <Image
          src="https://res.cloudinary.com/zoominfo-com/image/upload/w_140,h_140,c_fit/techeagle.in"
          alt="Logo"
          width={{ base: "80px", md: "50px", lg: "90px" }}
          cursor={"pointer"}
          margin={"auto"}
        />
      </Tooltip>
    </ReactLink>
  );
};

export default Logo;

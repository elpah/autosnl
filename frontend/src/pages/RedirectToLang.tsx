import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RedirectToLang = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;

    // Split the path into segments and filter out any empty segments
    const pathSegments = pathname.split("/").filter(Boolean);

    // If there is no language segment (e.g., we're at the root path '/')
    // or if the first segment is not a valid language, redirect to '/en'
    if (pathSegments.length === 0 || !['en', 'fr', 'de', 'ru', 'nl'].includes(pathSegments[0])) {
      const newPath = `/en${pathname}${search}`; // Prepend '/en' to the path and keep the query params
      navigate(newPath, { replace: true }); // Redirect to the new path with the language prefix
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>; // Show a loading or redirect message
};

export default RedirectToLang;

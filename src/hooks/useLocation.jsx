export const useLocation = () => {
  let { host, hostname, pathname } = window.location;
  return { host, hostname, pathname };
};

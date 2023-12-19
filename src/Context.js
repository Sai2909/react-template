import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const Domain = createContext();

const Context = ({ children }) => {
  //   const { defaultDate } = useSelector(domainSelector);
  const [domain, setDomain] = useState({});
  const [tourStart, setTourStart] = useState(true);
  const [projects, setProjects] = useState([]);
  const [selectedWebsiteOptions, setSelectedWebsiteOptions] = useState(null);
  const [websiteList, setWebsiteList] = useState(null);
  //   const [compareKey, setCompareKey] = useState(
  //     Object.values(defaultDate[1]).length !== 0
  //   );
  const [reportId, setReportID] = useState(0);

  const numFormat = (num) => {
    if (num === 0 || !num) return 0;
    if (num >= 1000000000000) {
      return (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
    }
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 100000) {
      return (num / 100000).toFixed(1).replace(/\.0$/, "") + "L";
    }
    if (num > 999) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
    //return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  };

  return (
    <Domain.Provider
      value={{
        domain,
        setDomain,
        tourStart,
        setTourStart,
        projects,
        setProjects,
        selectedWebsiteOptions,
        setSelectedWebsiteOptions,
        websiteList,
        setWebsiteList,
        // compareKey,
        // setCompareKey,
        reportId,
        setReportID,
        numFormat,
      }}
    >
      {children}
    </Domain.Provider>
  );
};

export default Context;

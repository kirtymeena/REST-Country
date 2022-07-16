import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardLayout from "../components/CardLayout";
import Loading from "../components/Loading";
import { fetchAll } from "../redux/apiCalls/api";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";

const CountryList = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.isDark);

  const getData = useSelector((state) => state.countryReducer.country);
  const loading = useSelector((state) => state.countryReducer.loading);
  const region = useSelector((state) => state.countryReducer.region);
  const [searchTerm, setTerm] = useState("");


  
  useEffect(() => {
    const fetchData=()=>{ 
        dispatch(fetchAll());
    }
    fetchData()
    

  }, [dispatch, theme, region]);

  const isLoading = () => {
    return loading ? <Loading /> : "";
  };

  return (
    <div className="container list__wrapper">
      <div>
        <div className="search__bar">
          <div>
            <svg
              className="search__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1.8rem"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${theme ? "#fafaf9" : "#080808"}`}
                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
              />
            </svg>

            <input
              className={`search ${theme ? "dark__input" : "light__input"}`}
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>

        <div className="country__list">
          {region===""
            ? getData
                .filter((c) => {
                  if (searchTerm === "") {
                    return c;
                  } else if (
                    c.name.common
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return c;
                  }
                })
                .map((c) => (
                  <Link
                    to={`/country/${c.name.common}`}
                    className="link"
                    key={c.altSpellings[0]}
                  >
                    <CardLayout
                      name={c.name.common}
                      flag={c.flags.svg}
                      population={c.population}
                      region={c.region}
                      capital={c.capital}
                    />
                  </Link>
                ))
            : getData
                .filter((d) => {
                  if (d.region === region) {
                    return d;
                  } 
                })
                .map((d) => (
                  <Link
                    to={`/country/${d.name.common}`}
                    className="link"
                    key={d.altSpellings[0]}
                  >
                    <CardLayout
                      name={d.name.common}
                      flag={d.flags.svg}
                      population={d.population}
                      region={d.region}
                      capital={d.capital}
                    />
                  </Link>
                ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;

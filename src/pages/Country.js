import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCountryByName } from "../redux/apiCalls/api";
import {Link} from "react-router-dom"

const Country = () => {
  const params = useParams();
  const getCountries = useSelector((state) => state.countryReducer.country);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.isDark);
  const data = useSelector((state) =>
    state.countryReducer.country.filter((c) => c.name.common === params.name)
  );


  const displayTLD = () => {
    return data[0].tld[0];
  };

  const displayCurrencies = () => {
    let curr = [];
    if (data[0].currencies !== undefined) {
      const key = Object.keys(data[0].currencies);
      for (let i = 0; i < key.length; i++) {
        curr.push(data[0].currencies[key[i]].name);
      }
    }

    return curr.map((cur, idx) => (
      <span key={cur} className="body__text">
        {(idx ? ", " : " ") + cur}
      </span>
    ));
  };

  const displayLanguages = () => {
    return Object.values(data[0].languages).map((l, idx) => (
      <span key={l} className="body__text">
        {" "}
        {(idx ? ", " : " ") + l}
      </span>
    ));
  };

  const getBorder = () => {
    const border = data[0].borders;
    let newBorders = [];

    if (border) {
      getCountries.map((country) => {
        border.map((b) => {
          if (b.includes(country.cca3)) {
            newBorders.push(country.name.common);
          }
        });
      });
    }
    return newBorders;
  };

  useEffect(() => {
   
  }, [theme]);

  return (
    <div className="details__wrapper container">
      <div>
        <button
          onClick={() => navigate(-1)}
          className={`btn ${
            theme ? "dark-bg" : "light-bg"
          } md-text md-font font-medium`}
        >
          <div className="btn__wrapper">
            <div>
              <svg
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${theme ? "white" : "black"}`}
                  d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
                />
              </svg>
            </div>{" "}
            <div>Back</div>
          </div>
        </button>
      </div>
      <div className="country__details">
        <div className="flag">
          <img className="flag-img" src={data[0].flags.svg} alt="flag" />
        </div>
        <div className="country__info">
          <div>
            <h1 className="font-bold"> {data[0].name.common}</h1>
          </div>
          <div className="details">
            <div>
              <p className="font-bold">
                Native Name:{" "}
                <span className="body__text">{data[0].altSpellings[1]}</span>
              </p>
              <p className="font-bold">
                Population:{" "}
                <span className="body__text">
                  {data[0].population.toLocaleString()}
                </span>
              </p>
              <p className="font-bold">
                Region: <span className="body__text">{data[0].region}</span>
              </p>
              <p className="font-bold">
                Sub Region:{" "}
                <span className="body__text">{data[0].subregion}</span>
              </p>
              <p className="font-bold">
                Capital:{" "}
                <span className="body__text">{data[0].capital[0]}</span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Top Level Domain:{" "}
                <span className="body__text">{displayTLD()}</span>
              </p>
              <p className="font-bold">Currencies: {displayCurrencies()}</p>
              <p className="font-bold">Languages:{displayLanguages()}</p>
            </div>
          </div>
          <div className="border__wrapper">
            <div>
              <p className="font-bold">Border Countries:</p>
            </div>

            <div className="border">
              {getBorder() ? (
                getBorder().map((border) => (
                  <div style={{color:`${theme?"white":"black"}`}}>
                    <Link to={`/country/${border}`}

                    onClick={()=>dispatch(getCountryByName(border))}
                      className={`btn-border link ${
                        theme ? "btn-dark" : "btn-light"
                      }`}
                    >
                      <span className="body__text">{border}</span>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No border</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

import React, { useEffect } from "react";
import "../assets/styles/SearchHeader.css";
import { BsCardImage } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { HiCamera } from "react-icons/hi";

import api from "../services/api";

const SearchHeader = ({ formFields }) => {
  useEffect(() => {
    api
      .get("/search?query=car&per_page=1")
      .then(({ data: result }) => {
        if (result) {
          console.log(result);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(formFields);

  return (
    <>
      <div className="container-fluid searchHeaderDiv">
        <div className="row searchHeaderBox">
          <div className="col-md-2 divBox">
            <span>
              <BsCardImage />
            </span>
            <span className="allImageText">All images</span>
            <span className="dropdownArrow">
              <FaChevronDown size={18} />
            </span>
          </div>
          <div className="col-md-8 searchBox">
            <span>
              <IoIosSearch size={18} />
            </span>
            <span>
              <input
                name="search-form"
                className="search-input"
                type="search"
                placeholder="Search"
                onKeyDown={(e) => {
                  // if (e.key === "Enter") setQuery(e.target.value);
                }}
              />
            </span>
          </div>
          <div className="col-md-2 imageSearchBox">
            <span>
              <HiCamera size={18} />
            </span>
            <span className="ImageSearchText">Search by image</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;

export async function getServerSideProps(context) {
  let formFields = {};
  try {
    let { data: formFieldResult } = await api.get(
      "/search?query=car&per_page=1"
    );
    formFields = formFieldResult.photos;
  } catch (err) {
    let { data: error } = err.response;
    console.log(error);
  }

  return {
    serverData: { images: formFields }, // will be passed to the page component as props
  };
}

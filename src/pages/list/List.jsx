import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import "./list.css"
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Importez la fonction format
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';



const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOpenOptions] = useState(location.state.location);

  console.log(location);
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch"> 
            <h1 className="lsTitle"> Search</h1>
            <div className="lsItem">
              <label > Destination</label>
              <input placeholder='destination' type="text" />
            </div>
            <div className="lsItem">
              <label > Check-In Date</label>
              {date && date[0] && date[0].startDate && date[0].endDate && (
                <>
                  <span onClick={ ()=> setOpenDate(!options)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                  
                  {openDate &&(
                    <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
                </>
              )}
              <input type="text" />
            </div>
            <div className="lsItem">
             <label>Options</label>
              <div className="lsOptions">
               <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number"  className="lsOptionInput" placeholder={options?.minPrice || ''} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number"  className="lsOptionInput" placeholder={options?.maxPrice || ''} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min ={1}className="lsOptionInput" placeholder={options?.adult || ''} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min ={0} className="lsOptionInput" placeholder={options?.children || ''} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min ={1} className="lsOptionInput" placeholder={options?.room || ''} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult"> 
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
 
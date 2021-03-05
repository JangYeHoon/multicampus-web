import React, { useState } from 'react';

function MultiInputF(props) {
    const [isGoing, setIsGoing] = useState(true);
    const [numberOfGuests, setNumberOfGuests] = useState(2);
    
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={(event)=>setIsGoing(event.target.checked)} />
        </label>
        <br />
        <label>
          Number of guests:
          <input id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={(event)=>setNumberOfGuests(event.target.value)} />
        </label>
      </form>
    );
}

export default MultiInputF;
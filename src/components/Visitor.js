import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const storedVisitors = localStorage.getItem('visitorCount');
    if (storedVisitors) {
      const count = parseInt(storedVisitors, 10) + 1;
      setVisitors(count);
      localStorage.setItem('visitorCount', count.toString());
    } else {
      localStorage.setItem('visitorCount', '1');
      setVisitors(1);
    }
  }, []);

  return (
    <div>
      <p>Number of visitors: {visitors}</p>
    </div>
  );
};

export default VisitorCounter;
// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';

// const VisitorCounter = () => {
//     const [uniqueVisitors, setUniqueVisitors] = useState(0);

//     useEffect(() => {
//         // Check if the unique visitor cookie exists
//         const uniqueVisitorCookie = Cookies.get('uniqueVisitor');

//         if (uniqueVisitorCookie) {
//             // Cookie exists, no need to increment unique visitors count
//             setUniqueVisitors(0);
//         } else {
//             // Cookie doesn't exist, increment unique visitors count
//             setUniqueVisitors((prevCount) => prevCount + 1);
//             // Set the unique visitor cookie with a unique identifier
//             Cookies.set('uniqueVisitor', 'your_unique_identifier', { expires: 365 });
//         }
//     }, []);

//     return (
//         <div>
//             <p>Unique Visitors: {uniqueVisitors}</p>
//         </div>
//     );
// };

// export default VisitorCounter;

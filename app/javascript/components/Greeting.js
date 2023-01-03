import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.message);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  let content;
  if (status === 'succeeded') {
    content = greetingShow.message;
  }

  return (
    <>
      <h1>Random Greeting:</h1>
      <p>{content}</p>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        generate new
      </button>
    </>
  );
};

export default Greeting;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchGreeting } from '../redux/greetings/greetingsSlice';

// const Greeting = () => {
//   const greetingShow = useSelector((state) => state.greetings.message);
//   const status = useSelector((state) => state.greetings.status);
//   const dispatch = useDispatch();
//   let content;
//   if (status === 'succeeded') {
//     content = greetingShow.message;
//   }


//   return (
//     <>
//       <h1>Random Greeting:</h1>
//       <h1>{content}</h1>
//       <h1>this is a test</h1>
//       <button type="button" onClick={() => dispatch(fetchGreeting())}>
//         generate new
//       </button>
//     </>
//   );
// };

// export default Greeting;





















// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { fetchGreeting } from '../redux/greetings/greetingsSlice';

// const Greeting = () =>{
//     const [loading, setLoading] = useState(false)
//     const dispatch = useDispatch();
//     const greeting = useSelector(state => state.greeting)
//     console.log({ greeting, loading})
//     useEffect(() =>{
//         if (loading) { return }
//         setLoading(true)
//         dispatch(fetchGreeting()).then(response => {
//             setLoading(false)
//             console.log({ response })
//         }).catch(() => {
//             setLoading(false)
//         })
//     }, []);

//     return(
//         <>
//         <h1>{greeting.message}</h1>
//         </>
//     )
// }

// export default Greeting;
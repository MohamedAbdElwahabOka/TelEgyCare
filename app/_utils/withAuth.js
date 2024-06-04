
// withAuth.js
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const withAuth = WrappedComponent => {
    return (props) => {
        const Router = useRouter();
        const [isLoading, setIsLoading] = useState(true);
        const cookies = parseCookies();
        const userCookie = Object.keys(cookies).find(cookie => cookie.startsWith('user_'));

        useEffect(() => {
            if (typeof window !== "undefined" && !userCookie) {
                window.location.href = '/';
                // Router.replace('/');
            } else {
                setIsLoading(false);
            }
        }, []);

        if (isLoading) {
            return null; // Or return a loading component
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth;








// // withAuth.js
// import { parseCookies } from 'nookies';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// const withAuth = WrappedComponent => {
//     return (props) => {
//         const Router = useRouter();
//         const [isLoading, setIsLoading] = useState(true);
//         const { user } = parseCookies();

//         useEffect(() => {
//             if (typeof window !== "undefined" && !user) {
//                 window.location.href = '/';
//                 // Router.replace('/');
//             } else {
//                 setIsLoading(false);
//             }
//         }, []);

//         if (isLoading) {
//             return null; // Or return a loading component
//         }

//         return <WrappedComponent {...props} />
//     }
// }

// export default withAuth;






// // // withAuth.js
// // import { parseCookies } from 'nookies';
// // import { useEffect } from 'react';
// // import { useRouter } from 'next/navigation';

// // const withAuth = WrappedComponent => {
// //     return (props) => {
// //         const Router = useRouter();
// //         const { user } = parseCookies();

// //         useEffect(() => {
// //             if (!user) {
// //                 Router.replace('/');
// //             }
// //         }, []);

// //         return <WrappedComponent {...props} />
// //     }
// // }

// // export default withAuth;
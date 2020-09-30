import React from "react";

// export function List({ children }) {
//     return (
//         <div className="list-overflow-container">
//             <ul className="list img-list">
//                 {children}
//             </ul>
//         </div>
//     );
// }

// export function ListItem({ children }) {
//     console.log("children", children);
//     return (
//         <li>
//             <div className="list-img">
//                 {children.image}
//             </div>
//             <div className="li-text">
//                 <div className="li-head">
//                     {children.shoe}
//                 </div>
//                 <div className="li-sub">
//                     {children.brand}
//                 </div>
//                 <div className="li-sub">
//                     {children.gender}
//                 </div>
//                 <div className="li-sub">
//                     {children.year}
//                 </div>
//             </div>
//         </li>
//     );
    export const List = ({ children }) => (
        <ul className="list-group">
        {children}
        </ul>
    );

    export function ListItem({ children }) {
        return <card className="list-group-item">{children}</card>;
      }
//}
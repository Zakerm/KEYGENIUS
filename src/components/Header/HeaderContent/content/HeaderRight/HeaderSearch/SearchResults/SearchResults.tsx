import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./SearchResults.module.css";
// import { IGameCards } from "../../../../../../../models/GameCardsModels";

// interface SearchResultsProps {
//   searchResults: IGameCards[];
// }

// const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
//   const handleKeyDown = (
//     event: React.KeyboardEvent<HTMLDivElement>,
//     id: number
//   ) => {
//     if (event.key === "Enter") {
//       // Переходим на страницу карточки по ID при нажатии Enter
//       window.location.href = `/game/${id}`;
//     }
//   };

//   return (
//     <div className={styles.searchResults}>
//       {searchResults.map((result) => (
//         <div
//           key={result.id}
//           className={styles.gameCardLink}
//           tabIndex={0}
//           onKeyDown={(e) => handleKeyDown(e, result.id)}
//         >
//           <Link to={`/game/${result.id}`} className={styles.gameCard}>
//             <img src={result.image} alt={result.title} />
//             <div>{result.title}</div>
//             <div>
//               {result.price} {result.currency}
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResults;

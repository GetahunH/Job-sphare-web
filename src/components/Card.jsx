
// const Card = ({children, bg='bg-gray-100', }) =>{
//   return <div className={`${bg} p-6 rounded-lg shadow-md`}>
//     {children}</div>
// }
// export default Card;




const Card = ({ children, className = '', bg = 'bg-white' }) => (
    <div className={`p-4 rounded-lg shadow-md ${bg} ${className}`}>
      {children}
    </div>
  );
  
  export default Card;
  
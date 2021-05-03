

import React from 'react';

import './Product.styles.css';

const Product = ({product,filterData}) => {
 return (
   <div>
     <table >
       <tbody>
         {
             <tr className="even">
               <td align="center">
                 <img src={product.author.avatar} alt="img not found" />
               </td>
               <td valign="middle" className="textwrap">
                 <h5>{product.author.name}</h5>
               </td>
               <td valign="middle" align="center">
                 <h5>{filterData.name}</h5>
               </td>
             </tr>
            
         }
       </tbody>
     </table>
   </div>
 );
}

export default Product;

import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div>
      <div>
        <p>1.VLSI Design for Electronics and Communication Students.</p>
        <p>Deccan International Academic Publishers, Dr. Anant G. Kulkarni, Dr. G. S. Uthayakumar, Dr. Sharmilavallem, MR. J. Jagan Babu</p>
        <Link to='https://www.flipkart.com/vlsi-design/p/itm84b53a6d040ba' target="_blank">Visit book</Link>
      </div>

      <div>
        <p>2.Electromagnetic Fields for ECE and EEE.</p>
        <p>Dr. G. S. Uthayakumar</p>
        <Link to='https://gcspublishers.com/product/electromagnetic-fields-by-dr-g-s-uthayakumar/' target="_blank">Visit book</Link>
      </div>

      <div>
        <p>3.Digital Electronics for ECE,CSE and IT Students.</p>
        <p>Dr. G. S. Uthayakumar</p>
        <Link to='https://slideplayer.com/amp/8657959/' target="_blank">Visit book</Link>
      </div>

      <div>
        <p>4.Introduction to AI and ML for AML and ADS students.</p>
        <p>Paperback, Dr. A. Lakshmi Priya, Dr. G. S. UTHAYAKUMAR, Dr. B. Geetha Vani, Harsha J. Sarode</p>
      <Link to="https://www.flipkart.com/introduction-ai-ml/p/itm3d2470841a19c?pid=9789357573504&lid=LSTBOK9789357573504EKTM04&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc" target="_blank">Visit book</Link>
      </div>
      
      
      
      
      
    </div>
  )
}

export default Books
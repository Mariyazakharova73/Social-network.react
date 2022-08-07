import React from 'react';
import c from '../../blocks/profile.module.css';
const Dialogs = () => {
  return (
    <div className="dialogs">
      <ul className="dialogs-items">
        <li className="item">Pavel</li>
        <li className="item">Maria</li>
        <li className="item">Dmitriy</li>
      </ul>
      <ul className="messages">
        <li className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus cupiditate aperiam libero assumenda quae ipsam deserunt eveniet maiores temporibus veniam, velit esse magnam nemo voluptas rem sunt dicta vel?</li>
        <li className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus id natus fuga animi doloribus aperiam, vel laboriosam ab nihil deleniti ut, ad, similique magnam eos cum nobis maiores repellat numquam.</li>
        <li className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero esse quae incidunt nihil quia at cupiditate blanditiis? Voluptatibus perspiciatis ut natus aperiam est, eveniet possimus magnam quidem blanditiis reiciendis.</li>
      </ul>
    </div>
  );
};

export default Dialogs;



import { assets } from "../assets/assets";

const navLinks = [

    {label:'Menue'},
    {label:'News'},
    {label:'Fine Dining'},
    {label:'About Us'},
    {label:'Contact'}


]

const works = [
    {
        img:assets.spinach,
        title:"Spinach & Mushroom Quiche",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
        stars:5,
        btn:"Oreder Now"
        
    },
     {
        img:assets.potato,
        title:'Sweet Potato',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
        stars:4,
        btn:"Oreder Now"
        
    },
      {
        img:assets.spaghetti,
        title:'Spaghetti ',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
        stars:5,
        btn:"Oreder Now"
        
    },
       {
        img:assets.chickpea,
        title:'Chickpea Curry',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
        stars:5,
        btn:"Oreder Now"
        
    }
]
const filters = ["Specialities", "Homestyle Sushi", "Steak", "With", "Cocktails", "Appetizer"]

const cards = [
    {
        img: "src/assets/Rectangle 14.png",
        title:'Dragon Sushi',
        desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
        price:"$50"
    },
      {
          img: "src/assets/Rectangle 15.png",
          title:"Creamy Sushi",
          desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
          price:"$50"
    },
        {
            img: "src/assets/Rectangle 16.png",
            title:"Roll Salmon Sushi",
            desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
            price:"$50"
    },
]




export {
    navLinks,
    works,
    filters,
    cards
};
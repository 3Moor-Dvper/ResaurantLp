

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
        img: assets.rec14,
        title:'Dragon Sushi',
        desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
        price:"$50"
    },
      {
          img:assets.rec15,
          title:"Creamy Sushi",
          desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
          price:"$50"
    },
        {
            img: assets.rec16,
            title:"Roll Salmon Sushi",
            desc:"Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
            price:"$50"
    },
]

const boxes = [
    {
        title:"Fine Dining",
        desc:"Bottle of Champagne Fine Sushi Tower For 2+ Dessert",
        price:"$500",
        img:assets.D1
    },
    {
        title:"Gold Dining",
        desc:"Bottle of Champagne Secret Menu Sushi For 2+ Dessert",
        price:"$1000",
        img:assets.D2
    },
    {
        title:"Royalty Dining",
        desc:"Bottle of Luxury Champagne Special Menu Sushi For 2+ Royal Dessert",
        price:"$1500",
        img:assets.D3
    },
]




export {
    navLinks,
    works,
    filters,
    cards,
    boxes
};
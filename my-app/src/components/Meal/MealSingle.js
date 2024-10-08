import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";
import {BiChevronsRight} from "react-icons/bi"
import {AiFillHome, AiOutlineCheckSquare} from "react-icons/ai"
import { FaUtensilSpoon } from "react-icons/fa";

const MealSingle = ({meal}) => {
    console.log(meal);
    //  découpe la chaîne de caractères en utilisant la virgule (, ) comme séparateur, et retourne un tableau contenant les éléments séparés.
    let tags = meal?.tags?.split(',');
    console.log(meal?.title);
    console.log(tags);
    // divisée en un tableau en utilisant la séquence de retour chariot et saut de ligne 
    let instructions = meal?.instructions?.split('\r\n');
    
    instructions = instructions?.filter(instruction => instruction.length > 1);
    return (
        <div className="section-wrapper">
            <div className="container">
            <div className='breadcrumb bg-orange text-white'>
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <Link to = "/" className='flex align-center'>
                <AiFillHome size = {22} />
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size = {23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span to = "" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <div className="sc-title">Meal Details</div>
        <section className="sc-details bg-white">
            <div className="details-head grid">
                <div className="details-img">
                    <img src={meal?.thumbnail} alt="" className="img-cover"/>
                </div>

                <div className="details-intro">
                    <h3 className="title text-orange">{meal?.title}</h3>
                    <div className="py-4">
                        <div className="category flex align-center">
                            <span className="text-uppercase fw-8 ls-1 my-1">category: &nbsp;</span>
                            <span className='text-uppercase ls-2'>{ meal?.category }</span>
                        </div>

                        <div className="source flex align-center">
                            <span>Source: &nbsp;</span>
                            <a href= {meal.source}>
                            {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found" }
                            </a>
                        </div>
                    </div>

                    <div className="tags flex align-start flex-wrap">
                        <h6 className="fs-16">Tags:</h6>
                        <ul className="flex align-center flex-wrap">
                            {
                                tags?.map((tag,idx) => (
                                    <li key={idx} className="fs-14">
                                        {tag}    
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="ingredients my-5 py-3">
                        <h6 className="fs-16 text-white px-2">Ingredients</h6>  
                        <ul className="grid">
                            {
                                meal?.ingredients?.map((ingredient, idx)=>(
                                    <li key={idx} className="flex align-center px-2">
                                        <span className="li-dot">{idx + 1}</span>
                                        <span className="text-capitalize text-white fs-15">{ingredient}</span>
                                    </li>
                                ))
                            }
                        </ul>      
                    </div>
                </div>
            </div>

            <div className="details-body">
                <div className="measures my-4">
                    <h6 className="fs-16">Measures:</h6>
                    <ul className="grid">
                        {
                            meal?.measures?.map((measure,idx)=>(
                                <li key={idx} className="fs-14 flex align-end">
                                    <span>
                                        <FaUtensilSpoon/>
                                    </span>
                                    <span className="li-text fs-15 fw-6 op-09 px-1">{measure}</span>
                                </li>
                            ))
                        }
                    </ul>            
                </div>


            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key = {idx} className = "fs-14">
                      <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            </div>

        </section>
            </div>
        </div>
    )
};

export default MealSingle;